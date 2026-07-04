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
    id: "TUNNEL - FiveM MLO - GTA V Interior",
    name: "TUNNEL - FiveM MLO - GTA V Interior",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://i.ytimg.com/vi/z1yL2QSoraY/maxresdefault.jpg",
    tagline: "free",
    frameworks: ["Leaked"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://store-eu-par-1.gofile.io/download/direct/f9a133c3-5be0-4154-880e-a8cd26536cab/AxisForge-cfx-nteam-tunnel.zip?hash=LL1hDDsCOlZAaVXrv48dL42mgBBrjE2hFUqgHaqEgw1PFEaOCx88Sc0SG1yZYTtk",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    name: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://img.youtube.com/vi/aeHkDgUbrsY/maxresdefault.jpg",
    tagline: "",
    frameworks: ["Standalone"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://mega.nz/file/YBdmSRQb#u36g7W6VG3f85Il4VgHgKuAzkFYXIgdlecb0SORGbW0",
    linkLabel: "GET SCRIPT"
  },
    {
    id: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    name: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://img.youtube.com/vi/aeHkDgUbrsY/maxresdefault.jpg",
    tagline: "",
    frameworks: ["Standalone"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://mega.nz/file/YBdmSRQb#u36g7W6VG3f85Il4VgHgKuAzkFYXIgdlecb0SORGbW0",
    linkLabel: "GET SCRIPT"
  },
    
    {
    id: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    name: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://img.youtube.com/vi/aeHkDgUbrsY/maxresdefault.jpg",
    tagline: "",
    frameworks: ["Standalone"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://mega.nz/file/YBdmSRQb#u36g7W6VG3f85Il4VgHgKuAzkFYXIgdlecb0SORGbW0",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    name: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://img.youtube.com/vi/aeHkDgUbrsY/maxresdefault.jpg",
    tagline: "",
    frameworks: ["Standalone"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://mega.nz/file/YBdmSRQb#u36g7W6VG3f85Il4VgHgKuAzkFYXIgdlecb0SORGbW0",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    name: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://img.youtube.com/vi/aeHkDgUbrsY/maxresdefault.jpg",
    tagline: "",
    frameworks: ["Standalone"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://mega.nz/file/YBdmSRQb#u36g7W6VG3f85Il4VgHgKuAzkFYXIgdlecb0SORGbW0",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    name: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://img.youtube.com/vi/aeHkDgUbrsY/maxresdefault.jpg",
    tagline: "",
    frameworks: ["Standalone"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://mega.nz/file/YBdmSRQb#u36g7W6VG3f85Il4VgHgKuAzkFYXIgdlecb0SORGbW0",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    name: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://img.youtube.com/vi/aeHkDgUbrsY/maxresdefault.jpg",
    tagline: "",
    frameworks: ["Standalone"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://mega.nz/file/YBdmSRQb#u36g7W6VG3f85Il4VgHgKuAzkFYXIgdlecb0SORGbW0",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    name: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://img.youtube.com/vi/aeHkDgUbrsY/maxresdefault.jpg",
    tagline: "",
    frameworks: ["Standalone"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://mega.nz/file/YBdmSRQb#u36g7W6VG3f85Il4VgHgKuAzkFYXIgdlecb0SORGbW0",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    name: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://img.youtube.com/vi/aeHkDgUbrsY/maxresdefault.jpg",
    tagline: "",
    frameworks: ["Standalone"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://mega.nz/file/YBdmSRQb#u36g7W6VG3f85Il4VgHgKuAzkFYXIgdlecb0SORGbW0",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    name: "New FiveM Dance Emote Pack V5 (APT, Cupid, Firework and more)",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://img.youtube.com/vi/aeHkDgUbrsY/maxresdefault.jpg",
    tagline: "",
    frameworks: ["Standalone"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://mega.nz/file/YBdmSRQb#u36g7W6VG3f85Il4VgHgKuAzkFYXIgdlecb0SORGbW0",
    linkLabel: "GET SCRIPT"
  }
];
