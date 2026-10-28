(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!window.gsap) return;

  gsap.registerPlugin(ScrollTrigger);

  // Local test only. Production integration should use the site's ScrollSmoother.
  if (!reduce && window.Lenis) {
    const lenis = new Lenis();
    window.__neerLenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  // CTA text morph — Kanit, 4.57s loop matching the reference timing.
  const morphTalkEl = document.querySelector('.cta__morph-line--talk');
  const morphPingEl = document.querySelector('.cta__morph-line--ping');
  if (morphTalkEl && morphPingEl) {
    const splitMorphLine = (el) => {
      const text = el.textContent.trim();
      el.textContent = '';
      const chars = [];
      for (const ch of text) {
        if (ch === ' ') {
          const gap = document.createElement('span');
          gap.className = 'morph-space';
          gap.textContent = '\u00A0';
          el.appendChild(gap);
          continue;
        }
        const span = document.createElement('span');
        span.className = 'morph-char';
        span.textContent = ch;
        el.appendChild(span);
        chars.push(span);
      }
      return chars;
    };

    const talkChars = splitMorphLine(morphTalkEl);
    const pingChars = splitMorphLine(morphPingEl);

    // The line starts hidden in CSS (no-JS fallback); the characters handle visibility.
    morphPingEl.style.opacity = '1';

    if (reduce) {
      gsap.set(talkChars, { yPercent: 0, opacity: 1, rotate: 0 });
      gsap.set(pingChars, { yPercent: 100, opacity: 0, rotate: 0 });
    } else {
      const morph = gsap.timeline({ repeat: -1, defaults: { ease: 'power3.out' } });
      morph
        .set(talkChars, { yPercent: 0, opacity: 1, rotate: 0 })
        .set(pingChars, { yPercent: 100, opacity: 0, rotate: 0 })
        .to(
          talkChars,
          { yPercent: -100, opacity: 0, rotate: -4, stagger: 0.02, duration: 0.35, ease: 'power2.in' },
          1.55,
        )
        .fromTo(
          pingChars,
          { yPercent: 100, opacity: 0, rotate: 4 },
          { yPercent: 0, opacity: 1, rotate: 0, stagger: 0.04, duration: 0.6 },
          2.0,
        )
        .to(
          pingChars,
          { yPercent: -100, opacity: 0, rotate: -4, stagger: 0.02, duration: 0.3, ease: 'power2.in' },
          3.95,
        )
        .fromTo(
          talkChars,
          { yPercent: 100, opacity: 0, rotate: 4 },
          { yPercent: 0, opacity: 1, rotate: 0, stagger: 0.03, duration: 0.4 },
          4.15,
        )
        .to({}, { duration: 0.02 }, 4.55);
      window.__neerMorph = morph;
    }
  }

  // Cursor-following tooltip — reference behaviour.
  const cta = document.querySelector('.cta');
  const hint = cta?.querySelector('.cta__hint');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (cta && hint && finePointer && !reduce && window.innerWidth > 767) {
    let xTo;
    let yTo;

    const move = (event) => {
      xTo?.(event.clientX);
      yTo?.(event.clientY);
    };

    const show = (event) => {
      gsap.set(hint, { x: event.clientX, y: event.clientY, visibility: 'visible' });
      gsap.to(hint, { opacity: 1, scale: 1, duration: 0.2, overwrite: 'auto' });
      xTo = gsap.quickTo(hint, 'x', { duration: 0.6, ease: 'power3' });
      yTo = gsap.quickTo(hint, 'y', { duration: 0.6, ease: 'power3' });
      window.addEventListener('mousemove', move, { passive: true });
    };

    const hide = () => {
      gsap.to(hint, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        overwrite: 'auto',
        onComplete: () => gsap.set(hint, { visibility: 'hidden' }),
      });
      xTo?.tween.kill();
      yTo?.tween.kill();
      window.removeEventListener('mousemove', move);
    };

    cta.addEventListener('mouseenter', show);
    cta.addEventListener('mouseleave', hide);
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
})();

/* Hands — binary field with a connecting intro and water ripples. */
(() => {
  const section = document.querySelector('.hands');
  const canvas = document.querySelector('[data-hands-canvas]');
  const topBtn = document.querySelector('[data-back-to-top]');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (topBtn) {
    topBtn.addEventListener('click', () => {
      if (window.__neerLenis && typeof window.__neerLenis.scrollTo === 'function') {
        window.__neerLenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      }
    });
  }

  if (!section || !canvas) return;
  const ctx = canvas.getContext('2d');
  const base64 = window.NEER_HANDS_BASE64;
  if (!ctx || !base64) return;

  const FONT = '500 9px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
  const CELL = 11;
  const MIN_H = 140;
  const LIME = [204, 255, 0];
  const MIST = [161, 161, 170];
  const state = { ready: false, cells: [], ripples: [], frames: 0 };
  window.__neerHands = state;

  const img = new Image();
  img.decoding = 'async';
  img.src = `data:image/webp;base64,${base64}`;

  let W = 1;
  let H = 1;
  let dpr = 1;
  let raf = 0;
  let visible = false;
  let introStart = 0;
  let introProgress = reduce ? 1 : 0;
  let lastMove = 0;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  // Presence mask shared by the bbox measurement and the cell sampler.
  const presenceOf = (r, g, b) => {
    const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    const warmth = (r - b) / 255;
    const darkness = clamp((0.9 - lum) / 0.4, 0, 1);
    return clamp((warmth - 0.07) * 6 + darkness * 1.1, 0, 1);
  };

  // Bounding box of the glyphs inside the source image, so the section can be
  // sized to the hands instead of a full viewport of black.
  let box = null;
  let measured = false;
  const measure = () => {
    if (measured) return box;
    measured = true;
    if (!img.naturalWidth) return null;
    const sw = 320;
    const sh = Math.max(1, Math.round((img.naturalHeight / img.naturalWidth) * sw));
    const off = document.createElement('canvas');
    off.width = sw;
    off.height = sh;
    const octx = off.getContext('2d', { willReadFrequently: true });
    if (!octx) return null;
    octx.drawImage(img, 0, 0, sw, sh);
    let data;
    try {
      data = octx.getImageData(0, 0, sw, sh).data;
    } catch {
      return null;
    }
    let minX = sw;
    let minY = sh;
    let maxX = -1;
    let maxY = -1;
    for (let y = 0; y < sh; y += 1) {
      for (let x = 0; x < sw; x += 1) {
        const o = (y * sw + x) * 4;
        if (presenceOf(data[o], data[o + 1], data[o + 2]) < 0.12) continue;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
    if (maxX < 0) return null;
    const kx = img.naturalWidth / sw;
    const ky = img.naturalHeight / sh;
    box = {
      x: minX * kx,
      y: minY * ky,
      w: (maxX - minX + 1) * kx,
      h: (maxY - minY + 1) * ky,
    };
    return box;
  };

  const draw = (now, force = false) => {
    if (!state.ready) return;
    if (!visible && !force) return;

    const intro = reduce ? 1 : introProgress;
    for (const ripple of state.ripples) ripple.age = (now - ripple.born) / 1000;
    state.ripples = state.ripples.filter((ripple) => ripple.age < 2.2);

    ctx.clearRect(0, 0, W, H);
    ctx.font = FONT;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (const cell of state.cells) {
      const nx = cell.x / W;
      const distanceFromEdge = Math.min(nx, 1 - nx);
      const reveal = reduce ? 1 : clamp((intro * 0.62 - distanceFromEdge) * 10, 0, 1);
      if (reveal <= 0) continue;

      let dx = 0;
      let dy = 0;
      let boost = 0;

      for (const ripple of state.ripples) {
        const ddx = cell.x - ripple.x;
        const ddy = cell.y - ripple.y;
        const density = Math.hypot(ddx, ddy) || 0.001;
        const wave = ripple.age * 300;
        const ring = density - wave;
        if (Math.abs(ring) > 150) continue;
        const fall = Math.exp(-(ring * ring) / (2 * 70 * 70)) * Math.exp(-ripple.age * 1.1) * ripple.strength;
        const push = Math.sin(ring * 0.07) * fall * 16;
        dx += (ddx / density) * push;
        dy += (ddy / density) * push;
        boost += fall * 1.4;
      }

      const alpha = clamp(cell.alpha * reveal + boost * 0.5, 0, 1);
      if (alpha < 0.02) continue;
      const bright = clamp(cell.tone + boost, 0, 1);
      const base = bright > 0.55 ? LIME : MIST;
      const glow = clamp(boost * 0.8, 0, 1);
      const r = Math.round(base[0] + (255 - base[0]) * glow * 0.7);
      const g = Math.round(base[1] + (255 - base[1]) * glow * 0.7);
      const b = Math.round(base[2] + (255 - base[2]) * glow * 0.7);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
      ctx.fillText(cell.char, cell.x + dx, cell.y + dy);
    }

    state.frames += 1;

    if (visible && ((!reduce && introProgress < 1) || state.ripples.length)) {
      raf = requestAnimationFrame(frame);
    } else {
      raf = 0;
    }
  };

  const frame = (now) => {
    raf = 0;
    if (!visible) return;
    if (!reduce && introProgress < 1) {
      introProgress = clamp((now - introStart) / 1800, 0, 1);
    }
    draw(now);
  };

  const start = () => {
    if (raf || !visible || !state.ready) return;
    if (reduce) {
      draw(performance.now(), true);
      return;
    }
    raf = requestAnimationFrame(frame);
  };

  const build = () => {
    if (!img.naturalWidth) return;
    const b = measure();
    if (!b) return;

    W = Math.max(1, section.getBoundingClientRect().width);
    const naturalH = W * (b.h / b.w);
    H = Math.max(1, Math.round(clamp(naturalH, MIN_H, window.innerHeight * 0.72)));
    if (Math.abs(section.getBoundingClientRect().height - H) > 1) {
      section.style.height = `${H}px`;
    }

    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const scale = Math.max(W / b.w, H / b.h);
    const dw = b.w * scale;
    const dh = b.h * scale;
    const ox = (W - dw) / 2;
    const oy = (H - dh) / 2;
    const gw = Math.max(1, Math.ceil(W / CELL));
    const gh = Math.max(1, Math.ceil(H / CELL));

    const off = document.createElement('canvas');
    off.width = gw;
    off.height = gh;
    const octx = off.getContext('2d', { willReadFrequently: true });
    if (!octx) return;

    // Draw only the source region that lands on the canvas.
    const sx = b.x - ox / scale;
    const sy = b.y - oy / scale;
    const sw = W / scale;
    const sh = H / scale;
    octx.drawImage(img, sx, sy, sw, sh, 0, 0, gw, gh);

    let data;
    try {
      data = octx.getImageData(0, 0, gw, gh).data;
    } catch {
      return;
    }

    const cellW = W / gw;
    const cellH = H / gh;
    const cells = [];
    for (let gy = 0; gy < gh; gy += 1) {
      for (let gx = 0; gx < gw; gx += 1) {
        const offset = (gy * gw + gx) * 4;
        const r = data[offset];
        const g = data[offset + 1];
        const b2 = data[offset + 2];
        const presence = presenceOf(r, g, b2);
        if (presence < 0.12) continue;
        const hash = ((gx * 73856093) ^ (gy * 19349663)) >>> 0;
        const x = (gx + 0.5) * cellW;
        const y = (gy + 0.5) * cellH;
        cells.push({
          x,
          y,
          char: hash & 1 ? '1' : '0',
          tone: presence,
          alpha: 0.2 + presence * 0.8,
        });
      }
    }

    state.cells = cells;
    state.ready = true;
    draw(performance.now(), true);
  };

  const addRipple = (x, y, strength) => {
    state.ripples.push({ x, y, born: performance.now(), strength, age: 0 });
    if (state.ripples.length > 6) state.ripples.shift();
    start();
  };

  section.addEventListener('pointermove', (event) => {
    if (reduce) return;
    const now = performance.now();
    if (now - lastMove < 55) return;
    lastMove = now;
    const rect = section.getBoundingClientRect();
    addRipple(event.clientX - rect.left, event.clientY - rect.top, 0.55);
  }, { passive: true });

  section.addEventListener('pointerdown', (event) => {
    if (reduce) return;
    const rect = section.getBoundingClientRect();
    addRipple(event.clientX - rect.left, event.clientY - rect.top, 1.4);
  }, { passive: true });

  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) {
      if (!introStart) introStart = performance.now();
      start();
    } else {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  }, { threshold: 0.2 });
  io.observe(section);

  const ro = new ResizeObserver(() => {
    build();
    start();
  });
  ro.observe(section);

  const onLoad = () => {
    build();
    start();
  };
  img.addEventListener('load', onLoad);
  img.addEventListener('error', () => { state.ready = false; });

  if (img.complete && img.naturalWidth) onLoad();
})();
