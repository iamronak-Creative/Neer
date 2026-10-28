/* Footer backdrop — the /home-v2 "grainient" shader, ported to raw WebGL2.
 * Same ramps, direction, bands, silk, contrast and grain as the live hero
 * backdrop (no sphere, no word). Renders at half resolution, ~30 fps, and
 * only while the footer is on screen. */
(() => {
  const canvas = document.querySelector('[data-footer-bg]');
  const footer = document.querySelector('.neer-footer');
  if (!canvas || !footer) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const gl = canvas.getContext('webgl2', {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: 'low-power',
  });
  if (!gl) {
    footer.classList.add('neer-footer--static');
    return;
  }

  // Same ramp colours as the live hero, converted to Oklab like the original.
  const oklab = (hex) => {
    const n = parseInt(hex.replace('#', ''), 16);
    const lin = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
    const r = lin(((n >> 16) & 255) / 255);
    const g = lin(((n >> 8) & 255) / 255);
    const b = lin((n & 255) / 255);
    const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
    const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
    const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
    return [
      0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
      1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
      0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
    ];
  };

  const VS = `#version 300 es
    in vec2 aPos;
    out vec2 vUv;
    void main() {
      vUv = aPos * 0.5 + 0.5;
      gl_Position = vec4(aPos, 0.0, 1.0);
    }`;

  const FS = `#version 300 es
    precision highp float;

    in vec2 vUv;
    out vec4 fragColor;

    uniform float uTime;
    uniform float uAspect;
    uniform float uExtent;
    uniform vec3 uR0;
    uniform vec3 uR1;
    uniform vec3 uR2;

    const vec2 DIR = vec2(0.6427876, 0.7660444);

    vec2 gHash2(vec2 p) {
      vec3 q = fract(vec3(p.xyx) * vec3(0.1031, 0.103, 0.0973));
      q += dot(q, q.yzx + 33.33);
      return fract((q.xx + q.yz) * q.zy) * 2.0 - 1.0;
    }

    float gNoise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
      float a = dot(gHash2(i), f);
      float b = dot(gHash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
      float c = dot(gHash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
      float d = dot(gHash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
      return 0.5 + 0.5 * mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
    }

    vec2 gDrift(vec2 p, float t) {
      vec2 w1 = vec2(
        gNoise(p * 0.85 + vec2(t * 0.11, t * 0.07)),
        gNoise(p * 0.85 + vec2(4.1, 1.7) - vec2(t * 0.08, t * 0.12))
      );
      vec2 w2 = vec2(
        gNoise(p * 1.55 + w1 * 1.8 + vec2(1.3, 7.1) + t * 0.05),
        gNoise(p * 1.55 + w1 * 1.8 + vec2(6.4, 2.2) - t * 0.06)
      );
      return (w1 - 0.5) * 1.1 + (w2 - 0.5) * 0.55;
    }

    vec2 gWarp(vec2 p, float t) {
      vec2 q = p + vec2(-DIR.y, DIR.x) * t * 0.45;
      return p + gDrift(q, t) * 0.8;
    }

    float gCoord(vec2 p, float t) {
      vec2 w = gWarp(p, t);
      return dot(w, DIR) / uExtent + 0.5;
    }

    vec3 gLabToRgb(vec3 lab) {
      float l = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
      float m = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
      float s = lab.x - 0.0894841775 * lab.y - 1.2914855480 * lab.z;
      l = l * l * l;
      m = m * m * m;
      s = s * s * s;
      return vec3(
        4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
        -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
        -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
      );
    }

    vec3 gEncode(vec3 c) {
      c = clamp(c, 0.0, 1.0);
      return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
    }

    float gHashS(vec2 p) {
      vec3 q = fract(vec3(p.xyx) * 0.1031);
      q += dot(q, q.yzx + 33.33);
      return fract((q.x + q.y) * q.z);
    }

    void main() {
      vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0);

      float raw = gCoord(p, uTime);
      float s = raw * 2.0;
      float cycle = floor(s);
      s = fract(s);
      if (mod(cycle, 2.0) > 0.5) s = 1.0 - s;
      s = clamp(s, 0.0, 1.0);

      float scaled = s * 2.0;
      int index = scaled < 1.0 ? 0 : 1;
      float f = scaled - float(index);
      vec3 from = index == 0 ? uR0 : uR1;
      vec3 to = index == 0 ? uR1 : uR2;

      float edge = max(0.5, fwidth(scaled) * 0.75);
      float shaped = smoothstep(0.5 - edge, 0.5 + edge, f);
      vec3 lab = mix(from, to, shaped);

      vec2 grad = vec2(
        gCoord(p + vec2(0.004, 0.0), uTime) - raw,
        gCoord(p + vec2(0.0, 0.004), uTime) - raw
      ) / 0.004;
      vec2 slope = grad * sin(3.14159265 * clamp(raw, 0.0, 1.0) * 2.0) * 4.0;
      vec3 normal = normalize(vec3(-slope, 1.0));
      vec3 light = normalize(vec3(-DIR.y, DIR.x, 1.2));
      float diffuse = dot(normal, light) - light.z;
      lab = uR0 + (lab - uR0) * (1.0 + (diffuse * 0.35 + max(diffuse, 0.0) * diffuse * 0.6));

      lab.x = (lab.x - 0.55) * 0.95 + 0.55;
      lab.yz *= 0.0;

      vec3 col = gEncode(gLabToRgb(lab));

      vec2 pixel = gl_FragCoord.xy + uTime * vec2(17.0, 59.0);
      float fine = gHashS(pixel) + gHashS(pixel + 7.13) - 1.0;
      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col += fine * 0.03 * (0.45 + 2.2 * luma * (1.0 - luma));

      fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }`;

  const compile = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  };

  const vs = compile(gl.VERTEX_SHADER, VS);
  const fs = compile(gl.FRAGMENT_SHADER, FS);
  if (!vs || !fs) {
    footer.classList.add('neer-footer--static');
    return;
  }

  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    footer.classList.add('neer-footer--static');
    return;
  }
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(program, 'aPos');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const uTime = gl.getUniformLocation(program, 'uTime');
  const uAspect = gl.getUniformLocation(program, 'uAspect');
  const uExtent = gl.getUniformLocation(program, 'uExtent');
  const uR = [gl.getUniformLocation(program, 'uR0'), gl.getUniformLocation(program, 'uR1'), gl.getUniformLocation(program, 'uR2')];
  ['#050507', '#111116', '#26262e'].forEach((hex, i) => {
    const [l, a, b] = oklab(hex);
    gl.uniform3f(uR[i], l, a, b);
  });

  const RES = 0.5;
  let width = 0;
  let height = 0;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return false;
    const w = Math.max(2, Math.round(rect.width * RES));
    const h = Math.max(2, Math.round(rect.height * RES));
    const aspect = rect.width / rect.height;
    if (w === width && h === height) {
      gl.uniform1f(uAspect, aspect);
      gl.uniform1f(uExtent, aspect * 0.6427876 + 0.7660444);
      return false;
    }
    width = w;
    height = h;
    canvas.width = w;
    canvas.height = h;
    gl.viewport(0, 0, w, h);
    gl.uniform1f(uAspect, aspect);
    gl.uniform1f(uExtent, aspect * 0.6427876 + 0.7660444);
    return true;
  };

  resize();

  const draw = (time) => {
    gl.uniform1f(uTime, time);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  if (reduce) {
    draw(0);
    new ResizeObserver(() => {
      if (resize()) draw(0);
    }).observe(canvas);
    return;
  }

  let time = 0;
  let last = 0;
  let acc = 0;
  let raf = 0;
  let visible = false;

  const frame = (now) => {
    raf = 0;
    if (!visible) return;
    if (!last) last = now;
    const dt = Math.min(0.1, (now - last) / 1000);
    last = now;
    acc += dt;
    if (acc < 1 / 30) {
      raf = requestAnimationFrame(frame);
      return;
    }
    time += acc;
    acc = 0;
    draw(time);
    raf = requestAnimationFrame(frame);
  };

  const start = () => {
    if (raf || !visible) return;
    last = 0;
    raf = requestAnimationFrame(frame);
  };

  const stop = () => {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  };

  const io = new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    },
    { rootMargin: '120px 0px' },
  );
  io.observe(footer);

  new ResizeObserver(() => {
    if (resize()) {
      draw(time);
    }
  }).observe(canvas);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });

  // Paint immediately so the footer is never plain while it scrolls in.
  draw(0);
})();
