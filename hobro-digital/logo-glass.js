/* GlassSurface (React Bits) ported to vanilla JS for the NEER wordmark,
 * plus a magnetic hover. The shape is traced into a signed-distance field,
 * baked into a displacement map, and fed to an SVG filter with per-channel
 * offsets, so the footer backdrop is refracted through the letterforms.
 * The centre of the glass stays untouched — the logo is fully see-through. */
(() => {
  const brand = document.querySelector('.footer__brand');
  const glass = document.querySelector('.footer__glass');
  const lineEl = document.querySelector('.footer__line');
  const glowEl = document.querySelector('.footer__glow');
  const pathEl = document.querySelector('#neer-mark-path');
  if (!brand || !glass || !lineEl || !glowEl || !pathEl) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  // Move the crop box itself so the logo never slides under its own clipped edge.
  const magnet = document.querySelector('.footer__logo') || brand;

  /* ------------------------------------------------ magnetic hover */
  if (!reduce && finePointer && window.gsap) {
    const MAX_X = 16;
    const MAX_Y = 12;
    let rect = null;

    const measure = () => {
      const box = magnet.getBoundingClientRect();
      const x = Number(window.gsap.getProperty(magnet, 'x')) || 0;
      const y = Number(window.gsap.getProperty(magnet, 'y')) || 0;
      rect = { left: box.left - x, top: box.top - y, width: box.width, height: box.height };
    };

    const onMove = (event) => {
      if (!rect) measure();
      if (!rect) return;
      const nx = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const ny = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      const x = Math.max(-1, Math.min(1, nx)) * MAX_X;
      const y = Math.max(-1, Math.min(1, ny)) * MAX_Y;
      window.gsap.to(magnet, { x, y, duration: 0.55, ease: 'power3.out', overwrite: 'auto' });
    };

    const onLeave = () => {
      rect = null;
      window.gsap.to(magnet, { x: 0, y: 0, duration: 1.15, ease: 'elastic.out(1, 0.35)', overwrite: 'auto' });
    };

    magnet.addEventListener('pointerenter', measure);
    magnet.addEventListener('pointermove', onMove, { passive: true });
    magnet.addEventListener('pointerleave', onLeave);
    window.addEventListener('scroll', () => { rect = null; }, { passive: true });
    window.addEventListener('resize', () => { rect = null; });
  }

  /* ------------------------------------------------ shape helpers */
  const NS = 'http://www.w3.org/2000/svg';
  const FAR = 1e20;

  const distanceLine = (f, d, v, z, n) => {
    let k = 0;
    v[0] = 0;
    z[0] = -FAR;
    z[1] = FAR;
    for (let q = 1; q < n; q += 1) {
      let s = (f[q] + q * q - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
      while (s <= z[k]) {
        k -= 1;
        s = (f[q] + q * q - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
      }
      k += 1;
      v[k] = q;
      z[k] = s;
      z[k + 1] = FAR;
    }
    k = 0;
    for (let q = 0; q < n; q += 1) {
      while (z[k + 1] < q) k += 1;
      d[q] = (q - v[k]) * (q - v[k]) + f[v[k]];
    }
  };

  const distanceGrid = (grid, w, h) => {
    const n = Math.max(w, h);
    const f = new Float64Array(n);
    const d = new Float64Array(n);
    const v = new Int32Array(n);
    const z = new Float64Array(n + 1);
    for (let x = 0; x < w; x += 1) {
      for (let y = 0; y < h; y += 1) f[y] = grid[y * w + x];
      distanceLine(f, d, v, z, h);
      for (let y = 0; y < h; y += 1) grid[y * w + x] = d[y];
    }
    for (let y = 0; y < h; y += 1) {
      for (let x = 0; x < w; x += 1) f[x] = grid[y * w + x];
      distanceLine(f, d, v, z, w);
      for (let x = 0; x < w; x += 1) grid[y * w + x] = d[x];
    }
  };

  const blurLine = (src, dst, offset, stride, n, r) => {
    const scale = 1 / (2 * r + 1);
    let sum = src[offset] * (r + 1);
    for (let i = 1; i <= r; i += 1) sum += src[offset + Math.min(i, n - 1) * stride];
    for (let i = 0; i < n; i += 1) {
      dst[offset + i * stride] = sum * scale;
      sum += src[offset + Math.min(i + r + 1, n - 1) * stride] - src[offset + Math.max(i - r, 0) * stride];
    }
  };

  const blurGrid = (grid, w, h, r) => {
    const tmp = new Float32Array(w * h);
    for (let pass = 0; pass < 3; pass += 1) {
      for (let y = 0; y < h; y += 1) blurLine(grid, tmp, y * w, 1, w, r);
      for (let x = 0; x < w; x += 1) blurLine(tmp, grid, x, w, h, r);
    }
  };

  const settle = (x) => 1 / (1 + Math.exp(-1.702 * x));

  const paint = (w, h, fill) => {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const context = canvas.getContext('2d');
    const image = context.createImageData(w, h);
    fill(image.data);
    context.putImageData(image, 0, 0);
    return canvas.toDataURL();
  };

  const shade = (depth, w, h, falloff) =>
    paint(w, h, (data) => {
      data.fill(255);
      for (let i = 0; i < w * h; i += 1) data[i * 4 + 3] = 255 * (1 - falloff(depth[i]));
    });

  const traceShape = (image, width, height, ratio) => {
    const naturalWidth = image.naturalWidth || width;
    const naturalHeight = image.naturalHeight || height;
    const fit = Math.min(width / naturalWidth, height / naturalHeight);
    const box = {
      x: (width - naturalWidth * fit) / 2,
      y: (height - naturalHeight * fit) / 2,
      width: naturalWidth * fit,
      height: naturalHeight * fit,
    };
    const w = Math.max(2, Math.round(width * ratio));
    const h = Math.max(2, Math.round(height * ratio));
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const context = canvas.getContext('2d', { willReadFrequently: true });
    context.drawImage(image, box.x * ratio, box.y * ratio, box.width * ratio, box.height * ratio);
    const pixels = context.getImageData(0, 0, w, h).data;
    const outside = new Float32Array(w * h);
    const inside = new Float32Array(w * h);
    for (let i = 0; i < w * h; i += 1) {
      const edge = 0.5 - pixels[i * 4 + 3] / 255;
      outside[i] = edge >= 0.5 ? FAR : Math.max(edge, 0) ** 2;
      inside[i] = edge <= -0.5 ? FAR : Math.min(edge, 0) ** 2;
    }
    distanceGrid(outside, w, h);
    distanceGrid(inside, w, h);
    const depth = new Float32Array(w * h);
    for (let i = 0; i < w * h; i += 1) depth[i] = (Math.sqrt(inside[i]) - Math.sqrt(outside[i])) / ratio;
    return {
      box,
      depth,
      w,
      h,
      ratio,
      line: shade(depth, w, h, (t) => settle(t - 1)),
      glow: shade(depth, w, h, (t) => settle((t - 4) / 5)),
    };
  };

  const bendShape = (trace, edge, softness, calm, level) => {
    const { depth, w, h, ratio } = trace;
    const reach = edge + softness * 2;
    const field = new Float32Array(w * h);
    for (let i = 0; i < w * h; i += 1) field[i] = Math.min(Math.max(depth[i], -6), reach);
    blurGrid(field, w, h, Math.max(1, Math.round(Math.max(1.5, softness * 0.35) * ratio)));
    return paint(w, h, (data) => {
      for (let y = 0; y < h; y += 1) {
        for (let x = 0; x < w; x += 1) {
          const i = y * w + x;
          const dx = field[i + (x < w - 1 ? 1 : 0)] - field[i - (x > 0 ? 1 : 0)];
          const dy = field[i + (y < h - 1 ? w : 0)] - field[i - (y > 0 ? w : 0)];
          const still = calm * settle((depth[i] - edge) / softness);
          const bend = (1 - still) * ratio * 0.25;
          const shift = still * (level - 0.5);
          data[i * 4] = 255 * (0.5 + dx * bend + shift);
          data[i * 4 + 1] = 255 * (0.5 + dy * bend + shift);
          data[i * 4 + 2] = 255 * (0.5 + shift);
          data[i * 4 + 3] = 255;
        }
      }
    });
  };

  /* ------------------------------------------------ glass params */
  const CONFIG = {
    borderWidth: 0.07,
    blur: 11,
    opacity: 0.93,
    brightness: 50,
    distortionScale: -180,
    redOffset: 0,
    greenOffset: 10,
    blueOffset: 20,
  };

  const svgFilterSupported = (() => {
    const probe = document.createElement('div');
    probe.style.backdropFilter = 'url(#neer-glass)';
    return probe.style.backdropFilter !== '';
  })();

  // The shape, as an image the tracer can read (canvas-safe on file://).
  const markSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="1524" height="503" viewBox="0 0 15.24 5.03">' +
    `<path fill="#fff" d="${pathEl.getAttribute('d')}"/></svg>`;
  const markUrl = `data:image/svg+xml,${encodeURIComponent(markSvg)}`;

  /* ------------------------------------------------ SVG filter */
  const defsRoot = document.createElementNS(NS, 'svg');
  defsRoot.setAttribute('width', '0');
  defsRoot.setAttribute('height', '0');
  defsRoot.setAttribute('aria-hidden', 'true');
  defsRoot.style.position = 'absolute';
  defsRoot.style.pointerEvents = 'none';

  const defs = document.createElementNS(NS, 'defs');
  const filter = document.createElementNS(NS, 'filter');
  filter.setAttribute('id', 'neer-glass');
  filter.setAttribute('color-interpolation-filters', 'sRGB');
  filter.setAttribute('x', '0%');
  filter.setAttribute('y', '0%');
  filter.setAttribute('width', '100%');
  filter.setAttribute('height', '100%');

  const feImage = document.createElementNS(NS, 'feImage');
  feImage.setAttribute('x', '0');
  feImage.setAttribute('y', '0');
  feImage.setAttribute('width', '100%');
  feImage.setAttribute('height', '100%');
  feImage.setAttribute('preserveAspectRatio', 'none');
  feImage.setAttribute('result', 'map');
  filter.append(feImage);

  const channels = [
    { key: 'red', offset: CONFIG.redOffset, matrix: '1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0' },
    { key: 'green', offset: CONFIG.greenOffset, matrix: '0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0' },
    { key: 'blue', offset: CONFIG.blueOffset, matrix: '0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0' },
  ];
  const displacementNodes = [];

  channels.forEach((channel) => {
    const displace = document.createElementNS(NS, 'feDisplacementMap');
    displace.setAttribute('in', 'SourceGraphic');
    displace.setAttribute('in2', 'map');
    displace.setAttribute('scale', String(CONFIG.distortionScale + channel.offset));
    displace.setAttribute('xChannelSelector', 'R');
    displace.setAttribute('yChannelSelector', 'G');
    displace.setAttribute('result', `disp-${channel.key}`);

    const tint = document.createElementNS(NS, 'feColorMatrix');
    tint.setAttribute('in', `disp-${channel.key}`);
    tint.setAttribute('type', 'matrix');
    tint.setAttribute('values', channel.matrix);
    tint.setAttribute('result', channel.key);

    filter.append(displace, tint);
    displacementNodes.push(displace);
  });

  const blendRG = document.createElementNS(NS, 'feBlend');
  blendRG.setAttribute('in', 'red');
  blendRG.setAttribute('in2', 'green');
  blendRG.setAttribute('mode', 'screen');
  blendRG.setAttribute('result', 'rg');

  const blendAll = document.createElementNS(NS, 'feBlend');
  blendAll.setAttribute('in', 'rg');
  blendAll.setAttribute('in2', 'blue');
  blendAll.setAttribute('mode', 'screen');

  filter.append(blendRG, blendAll);
  defs.append(filter);
  defsRoot.append(defs);
  document.body.append(defsRoot);

  /* ------------------------------------------------ build */
  let traced = null;
  let signature = '';
  let markImage = null;

  const build = () => {
    if (!markImage) return;
    const width = Math.round(brand.getBoundingClientRect().width);
    const height = Math.round(brand.getBoundingClientRect().height);
    if (!width || !height) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1, Math.sqrt(400000 / (width * height)));
    const next = `${width}x${height}@${dpr.toFixed(2)}`;
    if (next === signature) return;
    signature = next;

    try {
      traced = traceShape(markImage, width, height, dpr);
    } catch {
      return;
    }

    const map = bendShape(
      traced,
      Math.min(width, height) * CONFIG.borderWidth * 0.5,
      Math.max(CONFIG.blur, 0.5),
      CONFIG.opacity,
      CONFIG.brightness / 100,
    );

    feImage.setAttribute('href', map);
    lineEl.style.maskImage = `url("${traced.line}")`;
    lineEl.style.webkitMaskImage = `url("${traced.line}")`;
    glowEl.style.maskImage = `url("${traced.glow}")`;
    glowEl.style.webkitMaskImage = `url("${traced.glow}")`;

    if (svgFilterSupported) {
      glass.style.backdropFilter = 'url(#neer-glass) saturate(1)';
      glass.style.webkitBackdropFilter = 'url(#neer-glass) saturate(1)';
      glass.classList.add('is-glass-surface');
    }
    brand.classList.add('is-glass-surface');
  };

  const image = new Image();
  image.decoding = 'async';
  image.onload = () => {
    markImage = image;
    const schedule = window.requestIdleCallback || ((fn) => window.setTimeout(fn, 200));
    schedule(() => {
      build();
      brand.classList.add('is-glass-surface');
    });
  };
  image.src = markUrl;

  let resizeTimer = 0;
  const observer = new ResizeObserver(() => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(build, 180);
  });
  observer.observe(brand);
})();
