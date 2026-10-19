/* ============================================================
   DUSSEHRA THEME — standalone, does not touch script.js.
   Load it AFTER script.js. Remove the <script> tag to disable.
   ============================================================ */
(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (sel, root = document) => root.querySelector(sel);
  const rnd = (a, b) => a + Math.random() * (b - a);

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ }
    },
  };

  let festive = store.get("exehadi-festive") !== "off";
  const canFx = () => festive && !reduceMotion;

  /* ---------------- FIREWORKS ---------------- */
  const canvas = document.createElement("canvas");
  canvas.id = "fx-canvas";
  canvas.setAttribute("aria-hidden", "true");
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  let W = 0, H = 0, raf = 0;
  const parts = [];
  const PALETTE = ["#ffc83d", "#ff9a1f", "#e8431f", "#ffe9b0", "#6fd08c", "#ffffff"];

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  function burst(x, y, count = 70, palette = PALETTE) {
    if (!canFx()) return;
    const base = palette[Math.floor(Math.random() * palette.length)];
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = rnd(1.2, 6.2);
      parts.push({
        x, y, px: x, py: y,
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp,
        life: rnd(0.8, 1.5),
        max: 1.5,
        color: Math.random() < 0.65 ? base : palette[Math.floor(Math.random() * palette.length)],
        w: rnd(1.2, 2.4),
      });
    }
    if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); }
  }

  let last = 0;
  function tick(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    ctx.clearRect(0, 0, W, H);
    ctx.lineCap = "round";
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      p.px = p.x; p.py = p.y;
      p.vx *= 0.986;
      p.vy = p.vy * 0.986 + 0.07;
      p.x += p.vx * dt * 60;
      p.y += p.vy * dt * 60;
      p.life -= dt;
      if (p.life <= 0) { parts.splice(i, 1); continue; }
      ctx.globalAlpha = Math.max(0, Math.min(1, p.life / p.max * 1.4));
      ctx.strokeStyle = p.color;
      ctx.lineWidth = p.w;
      ctx.beginPath();
      ctx.moveTo(p.px, p.py);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    if (parts.length) raf = requestAnimationFrame(tick);
    else { raf = 0; ctx.clearRect(0, 0, W, H); }
  }

  /* ---------------- TORANA (marigold + mango-leaf garland) ---------------- */
  function buildTorana() {
    const nav = $(".topnav");
    if (!nav) return;
    let t = $(".torana", nav);
    if (!t) {
      t = document.createElement("div");
      t.className = "torana";
      t.setAttribute("aria-hidden", "true");
      nav.appendChild(t);
    }
    const spacing = window.innerWidth < 560 ? 30 : 40;
    const count = Math.ceil(window.innerWidth / spacing);
    let html = "";
    for (let i = 0; i < count; i++) {
      const leaf = i % 2 === 0;
      const len = leaf ? 4 + (i % 3) * 3 : 2 + (i % 4) * 2;
      html += `<span class="tr-item" style="left:${(i + 0.5) * spacing - 7}px;--d:${(-(i * 0.37) % 3.6).toFixed(2)}s;--len:${len}px">` +
        `<i class="tr-thread"></i><i class="${leaf ? "tr-leaf" : "tr-flower"}"></i></span>`;
    }
    t.innerHTML = html;
  }
  buildTorana();
  let rt;
  window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(buildTorana, 200); });

  /* ---------------- FALLING PETALS ---------------- */
  function buildPetals() {
    if (reduceMotion) return;
    const box = document.createElement("div");
    box.id = "petals";
    box.setAttribute("aria-hidden", "true");
    const n = window.innerWidth < 560 ? 9 : 16;
    let html = "";
    for (let i = 0; i < n; i++) {
      html += `<span class="petal" style="left:${rnd(0, 100).toFixed(1)}%;--s:${rnd(7, 13).toFixed(1)}px;` +
        `--t:${rnd(13, 22).toFixed(1)}s;--d:${(-rnd(0, 20)).toFixed(1)}s;--dx:${Math.round(rnd(-90, 90))}px"></span>`;
    }
    box.innerHTML = html;
    document.body.appendChild(box);
  }
  buildPetals();

  /* ---------------- FOOTER DIYAS ---------------- */
  function buildDiyas() {
    const row = $("#diya-row");
    if (!row) return;
    let html = "";
    for (let i = 0; i < 13; i++) html += `<span class="diya" style="--d:${(-rnd(0, 1)).toFixed(2)}s"></span>`;
    row.innerHTML = html;
  }
  buildDiyas();

  /* ---------------- GREETING COUNTDOWN ---------------- */
  function buildCountdown() {
    const el = $("#fest-countdown");
    if (!el) return;
    const target = new Date(2026, 9, 20); // 20 Oct 2026 (local midnight)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const days = Math.round((target - today) / 86400000);
    if (days > 1) el.textContent = `Dussehra in ${days} days · 20 Oct 2026`;
    else if (days === 1) el.textContent = "Dussehra is tomorrow · 20 Oct 2026";
    else if (days === 0) el.textContent = "Happy Dussehra — it's today!";
    else el.textContent = "Wishing you a joyful Vijayadashami";
  }
  buildCountdown();

  /* ---------------- RAVAN SCENE ---------------- */
  function head(i, x, y, r) {
    const k = (n) => (n).toFixed(1);
    return `<g class="rv-head" style="--i:${i}">` +
      `<circle cx="${x}" cy="${y}" r="${r}" fill="#d4492a" stroke="#6b1409" stroke-width="1.5"/>` +
      `<path d="M${k(x - r * 0.8)} ${k(y - r * 0.55)} L${k(x - r * 0.6)} ${k(y - r * 1.5)} L${k(x - r * 0.2)} ${k(y - r * 0.95)} L${k(x)} ${k(y - r * 1.7)} L${k(x + r * 0.2)} ${k(y - r * 0.95)} L${k(x + r * 0.6)} ${k(y - r * 1.5)} L${k(x + r * 0.8)} ${k(y - r * 0.55)}Z" fill="#f6c85f" stroke="#a9781a" stroke-width="1"/>` +
      `<ellipse cx="${k(x - r * 0.38)}" cy="${k(y - r * 0.1)}" rx="${k(r * 0.22)}" ry="${k(r * 0.15)}" fill="#fff6e0"/>` +
      `<ellipse cx="${k(x + r * 0.38)}" cy="${k(y - r * 0.1)}" rx="${k(r * 0.22)}" ry="${k(r * 0.15)}" fill="#fff6e0"/>` +
      `<circle cx="${k(x - r * 0.38)}" cy="${k(y - r * 0.1)}" r="${k(r * 0.08)}" fill="#1a0a05"/>` +
      `<circle cx="${k(x + r * 0.38)}" cy="${k(y - r * 0.1)}" r="${k(r * 0.08)}" fill="#1a0a05"/>` +
      `<path d="M${k(x - r * 0.65)} ${k(y - r * 0.38)} L${k(x - r * 0.15)} ${k(y - r * 0.26)} M${k(x + r * 0.65)} ${k(y - r * 0.38)} L${k(x + r * 0.15)} ${k(y - r * 0.26)}" stroke="#1a0a05" stroke-width="1.6" stroke-linecap="round"/>` +
      `<path d="M${k(x - r * 0.7)} ${k(y + r * 0.45)} Q${k(x)} ${k(y + r * 0.05)} ${k(x + r * 0.7)} ${k(y + r * 0.45)}" stroke="#1a0a05" stroke-width="${k(r * 0.14)}" fill="none" stroke-linecap="round"/>` +
      `</g>`;
  }

  function ravanSVG() {
    const heads =
      head(9, 120, 30, 13) +
      head(0, 94, 70, 16) + head(1, 146, 70, 16) +
      head(2, 70, 82, 15) + head(3, 170, 82, 15) +
      head(4, 51, 98, 14) + head(5, 189, 98, 14) +
      head(6, 37, 116, 13) + head(7, 203, 116, 13) +
      head(8, 120, 84, 22);
    return `<svg class="rv-svg" viewBox="0 0 240 300" role="img" aria-label="Ravan effigy with ten heads">` +
      `<rect x="88" y="200" width="26" height="84" rx="6" fill="#7a1a10"/>` +
      `<rect x="126" y="200" width="26" height="84" rx="6" fill="#7a1a10"/>` +
      `<rect x="83" y="276" width="36" height="12" rx="4" fill="#f6c85f"/>` +
      `<rect x="121" y="276" width="36" height="12" rx="4" fill="#f6c85f"/>` +
      `<path d="M84 132 L40 150 L28 192" stroke="#b02a16" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none"/>` +
      `<path d="M156 132 L200 150 L212 192" stroke="#b02a16" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none"/>` +
      `<path d="M28 192 L24 128" stroke="#efe6cf" stroke-width="5" stroke-linecap="round"/>` +
      `<rect x="18" y="188" width="20" height="5" rx="2" fill="#f6c85f"/>` +
      `<circle cx="212" cy="178" r="14" fill="#f6c85f" stroke="#a9781a" stroke-width="2"/>` +
      `<path d="M212 192 L212 230" stroke="#7a4a1a" stroke-width="5" stroke-linecap="round"/>` +
      `<path d="M76 118 Q120 104 164 118 L154 206 L86 206Z" fill="#9c2414"/>` +
      `<rect x="84" y="190" width="72" height="14" fill="#f6c85f"/>` +
      `<path d="M92 124 Q120 160 148 124" stroke="#f6c85f" stroke-width="4" fill="none"/>` +
      `<circle cx="120" cy="152" r="10" fill="#f6c85f" stroke="#a9781a" stroke-width="2"/>` +
      `<circle cx="80" cy="124" r="14" fill="#f6c85f" stroke="#a9781a" stroke-width="2"/>` +
      `<circle cx="160" cy="124" r="14" fill="#f6c85f" stroke="#a9781a" stroke-width="2"/>` +
      `<rect x="112" y="100" width="16" height="24" fill="#7a1a10"/>` +
      heads + `</svg>`;
  }

  function bowSVG() {
    return `<svg viewBox="0 0 90 150" aria-hidden="true">` +
      `<path d="M62 6 Q12 75 62 144" stroke="#f6c85f" stroke-width="5" fill="none" stroke-linecap="round"/>` +
      `<path d="M62 6 L62 144" stroke="#ffe9b0" stroke-width="1.5"/>` +
      `<rect x="32" y="62" width="9" height="26" rx="3" fill="#e8431f"/>` +
      `</svg>`;
  }

  function arrowSVG() {
    return `<svg viewBox="0 0 96 14" aria-hidden="true">` +
      `<path d="M6 7 L84 7" stroke="#e7c98a" stroke-width="2.5" stroke-linecap="round"/>` +
      `<path d="M2 1 L14 7 L2 13 L6 7Z" fill="#e8431f"/>` +
      `<ellipse class="rs-arrow-flame" cx="90" cy="7" rx="9" ry="5.5" fill="#ffb000" opacity=".85"/>` +
      `<path d="M84 2 L96 7 L84 12Z" fill="#fff3c8"/>` +
      `</svg>`;
  }

  function flamesHTML() {
    const spots = [
      [34, 10, 26], [8, 24, 22], [60, 12, 24], [22, 40, 30], [48, 38, 26],
      [70, 42, 22], [30, 58, 26], [58, 60, 28], [14, 66, 22], [74, 66, 20],
      [40, 72, 24], [50, 4, 30],
    ];
    return spots.map(([x, y, w], i) =>
      `<span class="flame" style="--x:${x}%;--y:${y}%;--w:${w}px;--d:${(-i * 0.13).toFixed(2)}s"></span>`
    ).join("");
  }

  function initScene() {
    const scene = $("#ravan-scene");
    if (!scene) return;
    const bow = $("#rs-bow", scene);
    const arrow = $("#rs-arrow", scene);
    const ravan = $("#rs-ravan", scene);
    const caption = $("#rs-caption");
    const btn = $("#rs-fire");

    bow.innerHTML = bowSVG();
    arrow.innerHTML = arrowSVG();
    ravan.innerHTML = ravanSVG() + `<div class="rs-flames">${flamesHTML()}</div><div class="rv-ash"></div>`;

    const READY = "Ravan stands tall. Release the arrow.";
    const DONE = `<span class="hi">बुराई पर अच्छाई की जीत.</span> Good wins over evil. Shubh Vijayadashami!`;
    const timers = [];
    const later = (fn, ms) => timers.push(setTimeout(fn, ms));
    let state = "ready";

    const centre = () => {
      const r = ravan.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height * 0.42, w: r.width, h: r.height };
    };

    function play() {
      state = "busy";
      btn.disabled = true;
      caption.textContent = "";

      if (reduceMotion) {
        ravan.classList.add("burning");
        caption.textContent = "The effigy burns…";
        later(finish, 900);
        return;
      }

      const a = arrow.getBoundingClientRect();
      const r = ravan.getBoundingClientRect();
      arrow.style.setProperty("--travel", `${r.left + r.width * 0.4 - a.right}px`);
      arrow.classList.add("fly");

      later(() => {
        arrow.classList.add("gone");
        ravan.classList.add("hit");
        const c = centre();
        burst(c.x, c.y, 36);
      }, 950);

      later(() => {
        ravan.classList.add("burning");
        caption.textContent = "The effigy catches fire…";
      }, 1300);

      later(() => { const c = centre(); burst(c.x - c.w * 0.3, c.y - c.h * 0.25, 80); }, 1900);
      later(() => { const c = centre(); burst(c.x + c.w * 0.35, c.y - c.h * 0.3, 80); }, 2350);
      later(() => { const c = centre(); burst(c.x, c.y - c.h * 0.55, 110); }, 2800);
      later(() => { const c = centre(); burst(c.x - c.w * 0.55, c.y - c.h * 0.1, 70); burst(c.x + c.w * 0.55, c.y - c.h * 0.1, 70); }, 3300);

      later(finish, 3900);
    }

    function finish() {
      ravan.classList.add("ashes");
      caption.innerHTML = DONE;
      btn.textContent = "Rebuild Ravan";
      btn.disabled = false;
      state = "done";
    }

    function reset() {
      timers.splice(0).forEach(clearTimeout);
      ravan.classList.remove("hit", "burning", "ashes");
      arrow.style.transition = "none";
      arrow.classList.remove("fly", "gone");
      void arrow.offsetWidth;
      arrow.style.transition = "";
      caption.textContent = READY;
      btn.textContent = "Release the arrow";
      btn.disabled = false;
      state = "ready";
    }

    btn.addEventListener("click", () => {
      if (state === "ready") play();
      else if (state === "done") reset();
    });
    caption.textContent = READY;
  }
  initScene();

  /* ---------------- SPARKS ON DOWNLOAD BUTTONS ---------------- */
  document.addEventListener("click", (e) => {
    const b = e.target.closest && e.target.closest(".get-btn");
    if (b) burst(e.clientX, e.clientY, 26);
  });

  /* ---------------- EFFECTS TOGGLE ---------------- */
  const toggle = document.createElement("button");
  toggle.className = "fest-toggle";
  toggle.type = "button";
  toggle.title = "Festive effects on/off";
  toggle.setAttribute("aria-label", "Toggle festive effects");
  toggle.textContent = "🪔";
  document.body.appendChild(toggle);

  function applyFestive() {
    document.body.classList.toggle("fest-off", !festive);
    toggle.setAttribute("aria-pressed", String(festive));
    if (!festive) { parts.length = 0; }
  }
  toggle.addEventListener("click", () => {
    festive = !festive;
    store.set("exehadi-festive", festive ? "on" : "off");
    applyFestive();
  });
  applyFestive();
})();
