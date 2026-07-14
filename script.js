// ── Helpers ──────────────────────────────────────────────────
function formatCount(n) {
  if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + 'k';
  return String(n);
}

function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  if (isNaN(d)) return iso;
  return d.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
}

function getBookmarks() {
  try {
    return JSON.parse(localStorage.getItem('bookmarked-scripts') || '[]');
  } catch {
    return [];
  }
}

function toggleBookmark(id) {
  const current = getBookmarks();
  const next = current.includes(id) ? current.filter(x => x !== id) : [...current, id];
  try {
    localStorage.setItem('bookmarked-scripts', JSON.stringify(next));
  } catch {
    // localStorage may be unavailable (e.g. private browsing) — fail silently
  }
  return next;
}

// Simple deterministic placeholder so cards without an image still look
// intentional instead of broken — an angled gradient panel in a hue
// derived from the script's id.
function placeholderDataUri(seed) {
  const hue = Array.from(seed).reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="360">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="hsl(${hue},70%,14%)"/>
          <stop offset="100%" stop-color="hsl(${(hue + 40) % 360},70%,8%)"/>
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill="url(#g)"/>
      <g opacity="0.5" font-family="monospace" font-size="14" fill="hsl(${hue},80%,65%)">
        <text x="24" y="332">no_preview.img</text>
      </g>
    </svg>`;
  return 'data:image/svg+xml;base64,' + btoa(svg);
}

// ── Stats bar ────────────────────────────────────────────────
function renderStatsBar() {
  const el = document.getElementById('statsBar');
  if (!el || typeof SCRIPTS === 'undefined') return;

  const totalDownloads = 9;
  const totalUsers = 274;

  const items = [
    {
      label: 'Total users',
      value: formatCount(totalUsers),
      color: 'cyan',
      icon: '<path d="M7 8a3 3 0 100-6 3 3 0 000 6zM1.5 15c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 3.2c1.4.3 2.5 1.5 2.5 3s-1.1 2.7-2.5 3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M13 10.3c1.6.4 2.8 1.6 3 3.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>'
    },
    {
      label: 'Resources',
      value: String(SCRIPTS.length),
      color: 'magenta',
      icon: '<rect x="2" y="5" width="12" height="9" rx="1.2" stroke="currentColor" stroke-width="1.4"/><path d="M2 7.5h12" stroke="currentColor" stroke-width="1.4"/><path d="M5.5 5V3.8A1.3 1.3 0 016.8 2.5h2.4a1.3 1.3 0 011.3 1.3V5" stroke="currentColor" stroke-width="1.4"/>'
    }
  ];

  el.innerHTML = items.map(i => `
    <div class="stat-panel">
      <span class="stat-icon stat-icon-${i.color}">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">${i.icon}</svg>
      </span>
      <span class="stat-text">
        <span class="stat-value">${i.value}</span>
        <span class="stat-label">${i.label}</span>
      </span>
    </div>
  `).join('');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ── Script cards ─────────────────────────────────────────────
let activeCategory = 'all';
let currentPage = 1;
let pageSize = 20;
let lastFilter = '';

function renderCards(filter = '') {
  lastFilter = filter;
  const grid = document.getElementById('scriptsGrid');
  const emptyState = document.getElementById('emptyState');
  const emptyQuery = document.getElementById('emptyQuery');
  const searchCount = document.getElementById('searchCount');
  if (!grid || typeof SCRIPTS === 'undefined') return;

  const q = filter.trim().toLowerCase();
  const bookmarks = getBookmarks();

  const filtered = SCRIPTS.filter(s => {
    if (activeCategory !== 'all' && (s.category || '').toLowerCase() !== activeCategory) return false;
    if (!q) return true;
    const haystack = [s.name, s.tagline, ...s.frameworks].join(' ').toLowerCase();
    return haystack.includes(q);
  });

  if (searchCount) {
    searchCount.textContent = q ? `${filtered.length} of ${SCRIPTS.length}` : `${SCRIPTS.length} resources`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyQuery) emptyQuery.textContent = filter;
    if (emptyState) emptyState.hidden = false;
    renderPaginationBar(0, 0);
    return;
  }
  if (emptyState) emptyState.hidden = true;

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const startIdx = (currentPage - 1) * pageSize;
  const pageItems = filtered.slice(startIdx, startIdx + pageSize);

  grid.innerHTML = pageItems.map(s => {
    const isBookmarked = bookmarks.includes(s.id);
    const imgSrc = s.image && s.image.trim() ? s.image : placeholderDataUri(s.id);
    const priceClass = s.price === 'FREE' ? 'free' : 'paid';
    const safeId = escapeHtml(s.id);
    const safeName = escapeHtml(s.name);

    return `
    <article class="script-card" role="listitem" data-id="${safeId}">
      <div class="card-media">
        <img src="${escapeHtml(imgSrc)}" alt="${safeName} preview" loading="lazy"
             onerror="this.onerror=null;this.src='${placeholderDataUri(s.id)}'">
        <div class="media-overlay">
          <span class="status-pill">
            <span class="status-dot ${escapeHtml(s.status)}"></span><span class="status-label ${escapeHtml(s.status)}">${escapeHtml(s.status)}</span>
          </span>
          ${s.badge ? `<span class="media-badge">${escapeHtml(s.badge)}</span>` : ''}
        </div>
      </div>

      <div class="card-body">
        <div class="card-title-row">
          <span class="card-name">${safeName}</span>
          <span class="card-version">${escapeHtml(s.version)}</span>
        </div>
        <p class="card-tagline">${escapeHtml(s.tagline)}</p>
        <div class="card-tags">
          ${s.frameworks.map(f => `<span class="tag">${escapeHtml(f)}</span>`).join('')}
        </div>
        <div class="card-meta-row">
          <span class="meta-item">${formatDate(s.date)}</span>
          <span class="meta-item">★ ${escapeHtml(s.stats.stars)}</span>
          <span class="meta-item">⬇ ${formatCount(s.stats.downloads)}</span>
        </div>
        <div class="card-footer">
          <span class="price-pill ${priceClass}">${escapeHtml(s.price)}</span>
          <div class="card-footer-actions">
            <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" data-id="${safeId}" aria-label="${isBookmarked ? 'Remove bookmark' : 'Save script'}" aria-pressed="${isBookmarked}">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="${isBookmarked ? 'currentColor' : 'none'}" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 2.5h9a.5.5 0 01.5.5v10.3a.4.4 0 01-.63.33L8 11l-4.37 2.63a.4.4 0 01-.63-.33V3a.5.5 0 01.5-.5z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
              </svg>
            </button>
            ${s.preview ? `<a href="${escapeHtml(s.preview)}" class="preview-btn" target="_blank" rel="noopener noreferrer">▶ Preview</a>` : ''}
            <a href="${escapeHtml(s.link)}" class="card-link" target="_blank" rel="noopener noreferrer">${escapeHtml(s.linkLabel)} →</a>
          </div>
        </div>
      </div>
    </article>
  `;
  }).join('');

  grid.querySelectorAll('.bookmark-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const updated = toggleBookmark(id);
      const active = updated.includes(id);
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
      btn.setAttribute('aria-label', active ? 'Remove bookmark' : 'Save script');
      btn.querySelector('svg').setAttribute('fill', active ? 'currentColor' : 'none');
    });
  });

  renderPaginationBar(filtered.length, totalPages);
}

// ── Pagination bar (SHOW size selector + page controls) ──────
function renderPaginationBar(totalItems, totalPages) {
  const grid = document.getElementById('scriptsGrid');
  if (!grid) return;

  let bar = document.getElementById('paginationBar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'paginationBar';
    bar.className = 'pagination-bar';
    grid.insertAdjacentElement('afterend', bar);
  }

  if (totalItems === 0) {
    bar.innerHTML = '';
    bar.hidden = true;
    return;
  }
  bar.hidden = false;

  // ── SHOW selector ──
  const sizes = [20, 50, 100];
  const showHtml = `
    <div class="show-selector">
      <span class="show-label">Show</span>
      ${sizes.map(sz => `
        <button class="show-btn ${pageSize === sz ? 'active' : ''}" data-size="${sz}">${sz}</button>
      `).join('')}
    </div>
  `;

  // ── Page number buttons with ellipsis ──
  function pageBtn(n) {
    return `<button class="page-btn ${n === currentPage ? 'active' : ''}" data-page="${n}">${n}</button>`;
  }

  let pages = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(pageBtn(i));
  } else {
    pages.push(pageBtn(1));
    if (currentPage > 3) pages.push('<span class="page-ellipsis">…</span>');
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) pages.push(pageBtn(i));
    if (currentPage < totalPages - 2) pages.push('<span class="page-ellipsis">…</span>');
    pages.push(pageBtn(totalPages));
  }

  const paginationHtml = `
    <div class="pagination">
      <button class="page-arrow" data-action="prev" ${currentPage === 1 ? 'disabled' : ''} aria-label="Previous page">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5L5.5 8l4.5 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      ${pages.join('')}
      <button class="page-arrow" data-action="next" ${currentPage === totalPages ? 'disabled' : ''} aria-label="Next page">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3.5L10.5 8 6 12.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>
  `;

  bar.innerHTML = showHtml + paginationHtml;

  // ── Wire up SHOW buttons ──
  bar.querySelectorAll('.show-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const size = parseInt(btn.dataset.size, 10);
      if (size === pageSize) return;
      pageSize = size;
      currentPage = 1;
      renderCards(lastFilter);
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ── Wire up page number buttons ──
  bar.querySelectorAll('.page-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const n = parseInt(btn.dataset.page, 10);
      if (n === currentPage) return;
      currentPage = n;
      renderCards(lastFilter);
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ── Wire up prev/next arrows ──
  bar.querySelectorAll('.page-arrow').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.disabled) return;
      currentPage += btn.dataset.action === 'next' ? 1 : -1;
      renderCards(lastFilter);
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ── Search wiring ────────────────────────────────────────────
function initSearch() {
  const input = document.getElementById('scriptSearch');
  if (!input) return;
  input.addEventListener('input', () => {
    currentPage = 1;
    renderCards(input.value);
  });
}

// ── Category tabs wiring ─────────────────────────────────────
function initCategoryTabs() {
  const tabs = document.querySelectorAll('.cat-tab');
  const input = document.getElementById('scriptSearch');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      activeCategory = tab.dataset.cat;
      currentPage = 1;
      renderCards(input ? input.value : '');
    });
  });
}

// ── Boot log terminal animation ─────────────────────────────
function typeBootLog() {
  const el = document.getElementById('bootLog');
  if (!el) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const lines = [
    { text: '> booting resource manifest...', className: '' },
    { text: `> loaded ${typeof SCRIPTS !== 'undefined' ? SCRIPTS.length : 4} resources`, className: 'tag' },
    { text: '> status: ALL SYSTEMS OPERATIONAL', className: 'ok' },
  ];

  if (prefersReduced) {
    el.innerHTML = lines.map(l => `<span class="${l.className}">${l.text}</span>`).join('\n');
    return;
  }

  let lineIndex = 0;
  let charIndex = 0;
  el.innerHTML = '';

  function typeChar() {
    if (lineIndex >= lines.length) return;
    const current = lines[lineIndex];

    if (charIndex === 0) {
      const span = document.createElement('span');
      span.className = current.className;
      span.dataset.building = 'true';
      el.appendChild(span);
    }

    const activeSpan = el.querySelector('[data-building="true"]');
    if (charIndex <= current.text.length) {
      activeSpan.textContent = current.text.slice(0, charIndex);
      charIndex++;
      setTimeout(typeChar, 14);
    } else {
      activeSpan.removeAttribute('data-building');
      el.appendChild(document.createTextNode('\n'));
      lineIndex++;
      charIndex = 0;
      setTimeout(typeChar, 160);
    }
  }

  typeChar();
}

// ── Promo banner ─────────────────────────────────────────────
function initPromoBanner() {
  const banner = document.getElementById('promoBanner');
  const closeBtn = document.getElementById('promoBannerClose');
  if (!banner || !closeBtn) return;

  const DISMISS_KEY = 'promo-banner-dismissed-v1';

  try {
    if (localStorage.getItem(DISMISS_KEY) === 'true') {
      banner.classList.add('hidden');
      return;
    }
  } catch {
    // localStorage may be unavailable — banner just stays visible
  }

  closeBtn.addEventListener('click', () => {
    banner.classList.add('hidden');
    try {
      localStorage.setItem(DISMISS_KEY, 'true');
    } catch {
      // fail silently
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderStatsBar();
  renderCards();
  initSearch();
  initCategoryTabs();
  initPromoBanner();
  typeBootLog();
});
