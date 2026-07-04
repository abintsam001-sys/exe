// ─────────────────────────────────────────────────────────────
// SITE_STATS — numbers that aren't tied to a single script.
// totalUsers isn't derivable from the scripts list, so set it by hand
// (or wire it up to a real backend/DB later).
// ─────────────────────────────────────────────────────────────
const SITE_STATS = {
  totalUsers: 8951
};

// ─────────────────────────────────────────────────────────────
// Add, remove, or edit your scripts here. Each object = one card.
//
// image:      path or URL to a thumbnail (1280x720ish works best).
//             Drop files into public/images/ and reference them like
//             "images/my-script.png". Leave "" to use a placeholder.
// badge:      optional small overlay label, e.g. "NEW", "HOT". "" to omit.
// status:     "online" | "beta" | "offline" (controls the dot + label)
// price:      "FREE" or a string like "$12"
// date:       release/update date shown on the card, "YYYY-MM-DD"
// frameworks: tags shown on the card, e.g. "ESX", "QBCore", "Standalone"
// link:       where the download button sends people (Tebex, Keymaster, Discord, etc.)
// ─────────────────────────────────────────────────────────────

const SCRIPTS = [
  {
    id: "TEST",
    name: "TES",
    version: "v2.4.1",
    status: "online",
    badge: "HOT",
    image: "",
    tagline: "Real-time 911 dispatch with unit routing and live map pings.",
    frameworks: ["ESX", "QBCore"],
    price: "FREE",
    date: "2026-05-12",
    stats: { stars: 128, downloads: 4200 },
    link: "",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "TEST",
    name: "TEST",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "",
    tagline: "",
    frameworks: ["Standalone"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "",
    linkLabel: "GET SCRIPT"
  }
];
