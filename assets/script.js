/* ============================================================
   ICONS — small inline SVGs, one string per name
   ============================================================ */
const ICONS = {
  grid: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4.5v11L12 22l-8-4.5v-11L12 2z"/><path d="M12 2v20M4 6.5l8 4.5 8-4.5M4 17.5l8-4.5 8 4.5"/></svg>',
  sparkle: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 11l8-7 8 7"/><path d="M6 10v10a1 1 0 001 1h4v-6h2v6h4a1 1 0 001-1V10"/></svg>',
  code: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3"/><path d="M13 15h4"/></svg>',
  shirt: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="4.3" r="1.2"/><path d="M12 5.5v1.8"/><path d="M12 7.3c-5 0-9.2 3-9.2 5.3 0 .5.5.9 1 .7L12 10l8.2 3.3c.5.2 1-.2 1-.7 0-2.3-4.2-5.3-9.2-5.3z"/><path d="M6 14.5v3.7a1 1 0 001 1h10a1 1 0 001-1v-3.7"/></svg>',
  wrench: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 3.3a1 1 0 011.6.4l.6 1.6 1.6.6a1 1 0 01.4 1.6l-1.2 1.2a5.6 5.6 0 01.1 1v.2l1.4 1.4a1 1 0 010 1.4l-1.1 1.1a1 1 0 01-1.4 0l-1.4-1.4h-.2a5.6 5.6 0 01-1 0l-1.2 1.2a1 1 0 01-1.6-.4l-.6-1.6-1.6-.6a1 1 0 01-.4-1.6l1.2-1.2a5.6 5.6 0 01-.1-1v-.2L7.9 5.5a1 1 0 010-1.4l1.1-1.1a1 1 0 011.4 0l1.4 1.4h.2c.3 0 .6 0 1 .1z"/><circle cx="12" cy="9.5" r="1.7"/></svg>',
  car: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.2"/><path d="M12 4.8v4M7.2 15.2l3.4-2M16.8 15.2l-3.4-2"/></svg>',
  dollar: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M15 9.5c0-1.4-1.3-2.5-3-2.5s-3 1-3 2.3c0 3 6 1.4 6 4.4 0 1.4-1.3 2.3-3 2.3s-3-1-3-2.5"/></svg>',
  star: '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l2.6 5.8L21 9.6l-4.6 4.2L17.6 21 12 17.7 6.4 21l1.2-7.2L3 9.6l6.4-0.8z"/></svg>',
  download: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 20h16"/></svg>',
  calendar: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  bookmark: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h12v18l-6-4-6 4V3z"/></svg>',
  play: '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8V4z"/></svg>',
  arrow: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  close: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  chevL: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 18l-6-6 6-6"/></svg>',
  chevR: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 18l6-6-6-6"/></svg>',
  boost: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z"/></svg>',
  graphics: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',
  software: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M8 6L2 12l6 6M16 6l6 6-6 6"/></svg>'
};

/* ============================================================
   PROMO POPUP AD — edit everything in this block
   ============================================================ */
const PROMO_AD = {
  enabled: true,               // set to false to turn the popup off entirely
  image: "https://github.com/abintsam001-sys/exe/blob/main/standard%20(1).gif?raw=true", // banner shown in the popup — .jpg, .png, or .gif all work fine
  link: "https://discord.gg/ZvMMnrJys9", // where clicking the banner / button goes
  buttonText: "join our discord",
  delay: 2000                     // ms to wait before showing the popup (0 = instant, 3000 = 3s, etc.)
};

/* ============================================================
   FAKE DOWNLOAD TOASTS — edit the script list below, names are
   generated anonymously and the wording is mixed up randomly
   ============================================================ */
const TOAST_CONFIG = {
  enabled: true,
  initialDelay: 8000, // ms to wait before the very first toast shows
  minDelay: 15000,    // shortest gap between toasts (ms)
  maxDelay: 45000,    // longest gap between toasts (ms)
  visibleFor: 5000,   // how long each toast stays on screen (ms)

  // ---- PASTE YOUR SCRIPT NAMES HERE ----
  // leave empty [] to auto-pull names from your RESOURCES list instead
  scriptNames: [
    "lation_diving",
    "Swaggy Dubai V1",
    "devmade_gangs",
    "New Car Play - Car Radio | PRO",
    "Avia Estate V4",
    "cDev - Game Cone (Uno)",
    "AuraStudio - Lumia Beach",
    "Modern Pharmacy - Realistic & Fully Optimized Interior",
    "2002 Nissan Skyline",
    "dr-jobcreator",
    "AriRig",
    "SkylineRevive",
    "Banana Dev | Mobile Stores",
    "universeStore",
    "Internationalfootball",
    "dz_venetia",
    "ofx_binco_rework",
    "Bori Khalifa",
    "Error Hub | Flameheart Restaurant MLO",
    "AshBobs VinewoodSign GFX",
    "Advanced Secondhand Vehicle Script",
    "Arena V1",
    "The Pier | FiveM MLO",
    "Advanced Housing System V2",
    "SeaDome MLO V2",
    "CCTV SYSTEM FOR LAW ENFORCEMENT",
    "Origin Multicharacter",
    "Origin police",
    "origin_housing",
    "origin_admin",
    "Lunar Advanced Trucker Job",
    "Lunar Advanced Robbery Script",
    "Lunar Advanced Electrician Job",
    "FPS Optimization Tool",
    "Wasabi Advanced Policejob",
    "Trstudio MRPD - ZhiMafias",
    "3D Academy Cartel Island",
    "Solex Crystal Lab",
    "VStudio Pacific Bluffs",
    "VMS Multicharacter + VMS Identity",
    "EMS CLOTHING - BABY MODE",
    "VStudios West Vinewood Auto",
    "VStudios Paleto Bay - Luxury Classic & Modern Dealership",
    "ZION CITY MAPS",
    "Fast Loading Screen V7",
    "Envi Weddings (MAP + SCRIPT)",
    "Flame Studios FIB Headquarters"
  ],

  // every toast shows the name as "Anonymous"

  // wording variations — {script} is swapped for a script name each time.
  // add/remove lines to change the mix, {script} must stay somewhere in each one
  messages: [
    "downloaded: {script}",
    "just downloaded {script}",
    "installed {script}",
    "just downloaded {script}",
  ]
};

/* ============================================================
   STATE
   ============================================================ */
const state = {
  search: "",
  category: "all",
  pricing: "all",
  sort: "newest",
  pageSize: 20,
  page: 1
};

/* ============================================================
   HELPERS
   ============================================================ */
function fmtNumber(n) {
  return Number(n).toLocaleString("en-US");
}
function fmtCompact(n) {
  n = Number(n);
  if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + "k";
  return String(n);
}
function fmtDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
// normalizes a category string for loose matching: lowercase, trailing "s" trimmed
function normalizeCat(str) {
  let s = String(str || "").toLowerCase().trim();
  if (s.endsWith("s")) s = s.slice(0, -1);
  return s;
}
function categoryMeta(resourceCategory) {
  const norm = normalizeCat(resourceCategory);
  return CATEGORIES.find((c) => c.id !== "all" && normalizeCat(c.id) === norm) || CATEGORIES[0];
}
function titleCase(str) {
  str = String(str || "");
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function isFreePrice(price) {
  return String(price || "").toUpperCase() === "FREE";
}

/* ============================================================
   STATS STRIP
   ============================================================ */
function renderStats() {
  document.getElementById("stat-resources").textContent = fmtNumber(RESOURCES.length);
  document.getElementById("stat-downloads").textContent = fmtNumber(SITE_STATS.totalDownloads);
  document.getElementById("stat-users").textContent = fmtNumber(SITE_STATS.totalUsers);
}

/* ============================================================
   SIDEBAR FILTERS
   ============================================================ */
function renderCategoryFilters() {
  const el = document.getElementById("category-filters");
  el.innerHTML = CATEGORIES.map(
    (c) => `<button class="filter-option ${c.id === state.category ? "is-active" : ""}" data-category="${c.id}">${ICONS[c.icon]}<span>${c.label}</span></button>`
  ).join("");
  el.querySelectorAll("[data-category]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.category = btn.dataset.category;
      state.page = 1;
      renderCategoryFilters();
      renderGrid();
    });
  });
}

function renderPricingFilters() {
  const options = [
    { id: "all", label: "All", icon: "dollar" },
    { id: "free", label: "Free Only", icon: "dollar" },
    { id: "booster", label: "Booster Exclusive", icon: "boost" }
  ];
  const el = document.getElementById("pricing-filters");
  el.innerHTML = options.map(
    (o) => `<button class="filter-option ${o.id === state.pricing ? "is-active" : ""}" data-pricing="${o.id}">${ICONS[o.icon]}<span>${o.label}</span></button>`
  ).join("");
  el.querySelectorAll("[data-pricing]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.pricing = btn.dataset.pricing;
      state.page = 1;
      renderPricingFilters();
      renderGrid();
    });
  });
}

/* ============================================================
   FILTER + SORT
   ============================================================ */
function getFilteredResources() {
  let list = RESOURCES.slice();

  if (state.category !== "all") {
    list = list.filter((r) => normalizeCat(r.category) === normalizeCat(state.category));
  }
  if (state.pricing === "free") list = list.filter((r) => isFreePrice(r.price));
  if (state.pricing === "booster") list = list.filter((r) => !isFreePrice(r.price));

  if (state.search.trim()) {
    const q = state.search.trim().toLowerCase();
    list = list.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        String(r.category).toLowerCase().includes(q) ||
        String(r.tagline).toLowerCase().includes(q)
    );
  }

  switch (state.sort) {
    case "downloads":
      list.sort((a, b) => b.stats.downloads - a.stats.downloads);
      break;
    case "rating":
      list.sort((a, b) => b.stats.stars - a.stats.stars);
      break;
    case "name":
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      list.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  return list;
}

/* ============================================================
   CARD MARKUP
   ============================================================ */
function badgeClass(badge) {
  const b = String(badge || "").toLowerCase();
  if (b === "new") return "badge-new";
  if (b === "updated") return "badge-updated";
  return "badge-generic";
}

function cardArtStyle(image) {
  return `background-image: linear-gradient(180deg, rgba(10,10,15,0.1), rgba(10,10,15,0.6)), url('${image}'); background-size: cover; background-position: center;`;
}

function buildCard(r) {
  const cat = categoryMeta(r.category);
  const badge = r.badge ? `<span class="badge-tag ${badgeClass(r.badge)}">${r.badge}</span>` : "";
  const free = isFreePrice(r.price);
  const price = free
    ? `<span class="price-free">FREE</span>`
    : `<span class="price-paid">${r.price}</span>`;
  const previewBtn = r.preview
    ? `<button class="icon-btn" data-preview="${r.id}" title="Preview" aria-label="Preview ${r.name}">${ICONS.play}</button>`
    : "";
  const versionTag = r.version ? `<span class="card-version">v${r.version}</span>` : "";
  const online = String(r.status).toLowerCase() === "online";

  return `
  <article class="card">
    <div class="card-art" style="${cardArtStyle(r.image)}">
      <span class="status ${online ? "online" : ""}"><span class="dot"></span>${online ? "ONLINE" : "OFFLINE"}</span>
      ${badge}
      <span class="filepath">${r.id}.zip</span>
    </div>
    <div class="card-body">
      <div class="card-top">
        <span class="card-name">${r.name}</span>
        ${versionTag}
      </div>
      <span class="card-cat">${ICONS[cat.icon]}${titleCase(r.category)}</span>
      <div class="card-meta">
        <span>${ICONS.calendar}${fmtDate(r.date)}</span>
        <span>${ICONS.star}${Number(r.stats.stars).toFixed(1)}</span>
        <span>${ICONS.download}${fmtCompact(r.stats.downloads)}</span>
      </div>
      <div class="card-foot">
        ${price}
        <div class="card-actions">
          <button class="icon-btn" data-bookmark="${r.id}" title="Save" aria-label="Save ${r.name}">${ICONS.bookmark}</button>
          ${previewBtn}
          <button class="get-btn" data-open="${r.id}">${r.linkLabel || "Get Script"} ${ICONS.arrow}</button>
        </div>
      </div>
    </div>
  </article>`;
}

/* ============================================================
   GRID + PAGINATION RENDER
   ============================================================ */
function renderGrid() {
  const grid = document.getElementById("resource-grid");
  const filtered = getFilteredResources();

  document.getElementById("results-total").textContent = fmtNumber(filtered.length);

  const totalPages = Math.max(1, Math.ceil(filtered.length / state.pageSize));
  if (state.page > totalPages) state.page = totalPages;

  const start = (state.page - 1) * state.pageSize;
  const pageItems = filtered.slice(start, start + state.pageSize);

  if (pageItems.length === 0) {
    grid.innerHTML = `<div class="empty-state"><strong>No resources match those filters</strong>Try a different category, price filter, or search term.</div>`;
  } else {
    grid.innerHTML = pageItems.map(buildCard).join("");
  }

  grid.querySelectorAll("[data-open]").forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn.dataset.open));
  });
  grid.querySelectorAll("[data-preview]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const r = RESOURCES.find((x) => x.id === btn.dataset.preview);
      if (r && r.preview && r.preview !== "#") window.open(r.preview, "_blank");
    });
  });
  grid.querySelectorAll("[data-bookmark]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      btn.classList.toggle("is-saved");
      btn.style.color = btn.classList.contains("is-saved") ? "var(--violet)" : "";
    });
  });

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const el = document.getElementById("pagination");
  if (totalPages <= 1) {
    el.innerHTML = "";
    return;
  }
  const pages = [];
  const cur = state.page;
  pages.push(1);
  for (let p = cur - 1; p <= cur + 1; p++) {
    if (p > 1 && p < totalPages) pages.push(p);
  }
  if (totalPages > 1) pages.push(totalPages);
  const unique = [...new Set(pages)].sort((a, b) => a - b);

  let html = `<button class="page-btn" data-page="${cur - 1}" ${cur === 1 ? "disabled" : ""}>${ICONS.chevL}</button>`;
  let prev = 0;
  unique.forEach((p) => {
    if (p - prev > 1) html += `<span class="page-ellipsis">…</span>`;
    html += `<button class="page-btn ${p === cur ? "is-active" : ""}" data-page="${p}">${p}</button>`;
    prev = p;
  });
  html += `<button class="page-btn" data-page="${cur + 1}" ${cur === totalPages ? "disabled" : ""}>${ICONS.chevR}</button>`;

  el.innerHTML = html;
  el.querySelectorAll("[data-page]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.page = Number(btn.dataset.page);
      renderGrid();
      document.getElementById("browse").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* ============================================================
   SHOW-COUNT BUTTONS
   ============================================================ */
function wireShowButtons() {
  const buttons = document.querySelectorAll(".show-btn");
  buttons.forEach((btn) => {
    if (Number(btn.dataset.show) === state.pageSize) btn.classList.add("is-active");
    btn.addEventListener("click", () => {
      state.pageSize = Number(btn.dataset.show);
      state.page = 1;
      buttons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderGrid();
    });
  });
}

/* ============================================================
   SEARCH INPUTS (hero + sidebar stay in sync)
   ============================================================ */
function wireSearch() {
  const hero = document.getElementById("hero-search-input");
  const sidebar = document.getElementById("sidebar-search");

  function applySearch(value) {
    state.search = value;
    state.page = 1;
    renderGrid();
  }

  hero.addEventListener("input", () => {
    sidebar.value = hero.value;
    applySearch(hero.value);
  });
  document.getElementById("hero-search-btn").addEventListener("click", () => {
    document.getElementById("browse").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  sidebar.addEventListener("input", () => {
    hero.value = sidebar.value;
    applySearch(sidebar.value);
  });
}

/* ============================================================
   MODAL
   ============================================================ */
function openModal(id) {
  const r = RESOURCES.find((x) => x.id === id);
  if (!r) return;
  const cat = categoryMeta(r.category);
  const overlay = document.getElementById("modal-overlay");
  const modal = document.getElementById("modal");

  const free = isFreePrice(r.price);
  const price = free ? `<span class="price-free">FREE</span>` : `<span class="price-paid">${r.price}</span>`;
  const previewBtn = r.preview ? `<a href="${r.preview}" target="_blank" class="btn btn-ghost">${ICONS.play} Preview</a>` : "";
  const frameworksHtml = (r.frameworks || []).map((f) => `<span class="tag-chip">${f}</span>`).join("");
  const versionText = r.version ? ` · v${r.version}` : "";

  modal.innerHTML = `
    <div class="modal-art" style="${cardArtStyle(r.image)}">
      <button class="modal-close" id="modal-close" aria-label="Close">${ICONS.close}</button>
    </div>
    <div class="modal-body">
      <div class="modal-head">
        <div>
          <div class="modal-title">${r.name}</div>
          <div class="modal-sub">${titleCase(r.category)}${versionText}</div>
        </div>
        ${price}
      </div>
      <div class="modal-desc">${r.tagline}</div>

      <div class="modal-section">
        <h4>Frameworks</h4>
        <div class="tag-list">${frameworksHtml}</div>
      </div>

      <div class="modal-section">
        <h4>Stats</h4>
        <div class="tag-list">
          <span class="tag-chip">${ICONS.star} ${Number(r.stats.stars).toFixed(1)}</span>
          <span class="tag-chip">${ICONS.download} ${fmtCompact(r.stats.downloads)} downloads</span>
          <span class="tag-chip">${ICONS.calendar} ${fmtDate(r.date)}</span>
        </div>
      </div>

      <div class="modal-actions">
        <a href="${r.link}" class="btn btn-violet btn-block">${ICONS.download} ${r.linkLabel || "Get Script"}</a>
        ${previewBtn}
      </div>
    </div>
  `;

  overlay.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("modal-close").addEventListener("click", closeModal);
}

function closeModal() {
  document.getElementById("modal-overlay").hidden = true;
  document.body.style.overflow = "";
}

/* ============================================================
   ABOUT MODAL
   ============================================================ */
function openAboutModal() {
  const overlay = document.getElementById("modal-overlay");
  const modal = document.getElementById("modal");

  // ---- EDIT YOUR ABOUT TEXT HERE ----
  modal.innerHTML = `
    <div class="modal-body" style="padding-top: 24px;">
      <div class="modal-head">
        <div>
          <div class="modal-title">About EXE LEAKS</div>
        </div>
        <button class="modal-close" id="modal-close" aria-label="Close">${ICONS.close}</button>
      </div>
      <div class="modal-desc">
        EXE LEAKS is where paywalls go to die. If it exists, we drop it—no excuses. Scripts, MLOs, vehicles, clothing, mods… all the high-value FiveM content you want, all completely free.
      </div>

      <div class="modal-section">
        <h4>Why do we do this?</h4>
        <div class="modal-desc">
          the FiveM market is filled with overpriced scripts hiding backdoors and broken code. We fix them, clean them, and release them for free—no paywalls, no scams. Simple: make FiveM open for everyone.
        </div>
      </div>

      <div class="modal-section">
        <h4>Get in touch</h4>
        <div class="modal-desc">
          Join our Discord to request resources, report issues, or just
          hang out with the community.
        </div>
      </div>
    </div>
  `;

  overlay.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("modal-close").addEventListener("click", closeModal);
}

/* ============================================================
   RULES MODAL
   ============================================================ */
function openRulesModal() {
  const overlay = document.getElementById("modal-overlay");
  const modal = document.getElementById("modal");

  // ---- EDIT YOUR RULES TEXT HERE ----
  modal.innerHTML = `
    <div class="modal-body" style="padding-top: 24px;">
      <div class="modal-head">
        <div>
          <div class="modal-title">⚖️ EXE LEAKS • Community Policy</div>
        </div>
        <button class="modal-close" id="modal-close" aria-label="Close">${ICONS.close}</button>
      </div>
      <div class="modal-desc">
        By using this website, you agree to follow all applicable laws, along with Discord’s Terms of Service and Community Guidelines. You are fully responsible for your actions while accessing or sharing content.
      </div>

      <div class="modal-section">
        <h4>Our Commitment</h4>
        <div class="modal-desc">
          EXE LEAKS is a community focused on responsible information sharing. Any illegal activity, scams, copyright abuse, or malicious content is strictly prohibited. We reserve the right to remove content or restrict access to maintain a safe environment.

        </div>
      </div>

      <div class="modal-section">
        <h4>Content Disclaimer</h4>
        <div class="modal-desc">
          EXE LEAKS does not allow user uploads. All content provided on this platform is shared for informational purposes only and may reference third-party sources. We do not host or control external files.
        </div>
      </div>

      <div class="modal-section">
        <h4>Copyright</h4>
        <div class="modal-desc">
          We respect intellectual property rights. If you believe your content has been shared without permission, you may request its removal. Verified claims will result in removal of related content from our platform.
        </div>
      </div>

      <div class="modal-section">
        <h4>Contact</h4>
        <div class="modal-desc">
          To report an issue, please provide:
• Content name
• Direct link
• Proof of ownership
• Supporting details
        </div>
      </div>

      <div class="modal-section">
        <h4>We may take action without prior notice.</h4>
        <div class="modal-desc">
          Thank you for helping keep EXE LEAKS safe and compliant.
        </div>
      </div>
    </div>
  `;

  overlay.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("modal-close").addEventListener("click", closeModal);
}

function wireRulesLink() {
  const link = document.getElementById("rules-link");
  if (!link) return;
  link.addEventListener("click", (e) => {
    e.preventDefault();
    openRulesModal();
  });
}

function wireModalOverlay() {
  const overlay = document.getElementById("modal-overlay");
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function wireAboutLink() {
  document.getElementById("about-link").addEventListener("click", (e) => {
    e.preventDefault();
    openAboutModal();
  });
}

/* ============================================================
   PROMO POPUP AD
   ============================================================ */
const PROMO_DONT_SHOW_KEY = "promoAdDontShow";

function openPromoAd() {
  const overlay = document.getElementById("promo-overlay");
  document.getElementById("promo-banner-img").src = PROMO_AD.image;
  document.getElementById("promo-banner-link").href = PROMO_AD.link;
  const cta = document.getElementById("promo-cta");
  cta.href = PROMO_AD.link;
  cta.textContent = PROMO_AD.buttonText;
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function closePromoAd() {
  document.getElementById("promo-overlay").hidden = true;
  document.body.style.overflow = "";
}

function initPromoAd() {
  if (!PROMO_AD.enabled) return;
  if (localStorage.getItem(PROMO_DONT_SHOW_KEY) === "1") return;

  setTimeout(openPromoAd, PROMO_AD.delay || 0);

  document.getElementById("promo-close").addEventListener("click", () => {
    if (document.getElementById("promo-dont-show").checked) {
      localStorage.setItem(PROMO_DONT_SHOW_KEY, "1");
    }
    closePromoAd();
  });

  document.getElementById("promo-overlay").addEventListener("click", (e) => {
    if (e.target.id === "promo-overlay") {
      if (document.getElementById("promo-dont-show").checked) {
        localStorage.setItem(PROMO_DONT_SHOW_KEY, "1");
      }
      closePromoAd();
    }
  });
}

/* ============================================================
   FAKE DOWNLOAD TOASTS
   ============================================================ */
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomAnonymousName() {
  return "Anonymous";
}

function getToastScriptList() {
  if (TOAST_CONFIG.scriptNames && TOAST_CONFIG.scriptNames.length) {
    return TOAST_CONFIG.scriptNames;
  }
  return Array.isArray(RESOURCES) ? RESOURCES.map((r) => r.name) : [];
}

function showRandomToast() {
  const list = getToastScriptList();
  if (list.length === 0) return;

  const toast = document.getElementById("toast");
  const script = list[randomBetween(0, list.length - 1)];
  const name = randomAnonymousName();
  const template = TOAST_CONFIG.messages[randomBetween(0, TOAST_CONFIG.messages.length - 1)];
  const message = template.replace("{script}", script);

  document.getElementById("toast-icon").innerHTML = ICONS.download;
  document.getElementById("toast-title").textContent = name;
  document.getElementById("toast-sub").textContent = message;

  toast.hidden = false;
  toast.classList.remove("toast-out");

  setTimeout(() => {
    toast.classList.add("toast-out");
    setTimeout(() => { toast.hidden = true; }, 300);
  }, TOAST_CONFIG.visibleFor);
}

function scheduleNextToast() {
  const delay = randomBetween(TOAST_CONFIG.minDelay, TOAST_CONFIG.maxDelay);
  setTimeout(() => {
    showRandomToast();
    scheduleNextToast();
  }, delay);
}

function initToasts() {
  if (!TOAST_CONFIG.enabled) return;
  setTimeout(() => {
    showRandomToast();
    scheduleNextToast();
  }, TOAST_CONFIG.initialDelay || 0);
}

/* ============================================================
   SORT SELECT
   ============================================================ */
function wireSort() {
  document.getElementById("sort-select").addEventListener("change", (e) => {
    state.sort = e.target.value;
    state.page = 1;
    renderGrid();
  });
}

/* ============================================================
   INIT
   ============================================================ */
function init() {
  renderStats();
  renderCategoryFilters();
  renderPricingFilters();
  wireShowButtons();
  wireSearch();
  wireSort();
  wireModalOverlay();
  wireAboutLink();
  wireRulesLink();
  renderGrid();
  initPromoAd();
  initToasts();
}

document.addEventListener("DOMContentLoaded", init);
