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
    id: "Lunar_Drug_Creator",
    name: "Lunar_Drug_Creator",
    version: "v2.4.1",
    status: "online",
    badge: "HOT",
    image: "https://media.discordapp.net/attachments/1474462077715484964/1514611655323942953/1fa4b957-bf8c-4122-9ba9-5d5521b934a0.png?ex=6a4857c6&is=6a470646&hm=b28383e9c0c8beb1abf7b67427fbddb8bcea50ff559aebd87ce82c5049f4466b&=&format=webp&quality=lossless",
    tagline: "Real-time 911 dispatch with unit routing and live map pings.",
    frameworks: ["ESX", "QBCore"],
    price: "FREE",
    date: "2026-05-12",
    stats: { stars: 128, downloads: 4200 },
    link: "https://cdn.discordapp.com/attachments/1473993241350242541/1514611650475589774/Lunar_Drug_Creator_And_Bridge.zip?ex=6a4857c5&is=6a470645&hm=b503af06fcc8030ced605adf0f2cc6988258f6bed72bbb31bd5c97ddcc56c6b5&",
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
