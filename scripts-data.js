1// ─────────────────────────────────────────────────────────────
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
    frameworks: ["Leaked"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://mega.nz/file/YBdmSRQb#u36g7W6VG3f85Il4VgHgKuAzkFYXIgdlecb0SORGbW0",
    linkLabel: "GET SCRIPT"
  },
    {
    id: "[MLO] Asgard Beach Disco Club",
    name: "[MLO] Asgard Beach Disco Club",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://img.youtube.com/vi/E3y30z6JAE8/maxresdefault.jpg",
    tagline: "",
    frameworks: ["Leaked"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://store-eu-par-4.gofile.io/download/direct/89f09cd2-62c2-4cd9-9164-e07e3d0619f5/AXISFORGE_asgard.zip?hash=MzsfQSPCYJgGRYvQbNNvn8FChoqrylLaEmLkzp11yEYshOkrUl5Eswpzzd8jLLi2",
    linkLabel: "GET SCRIPT"
  },
    
    {
    id: "NTEAM DRONE [ MAP + VEHICLE + SCRIPT ]",
    name: "NTEAM DRONE [ MAP + VEHICLE + SCRIPT ]",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://img.youtube.com/vi/SGb3ywF3FSA/maxresdefault.jpg",
    tagline: "",
    frameworks: ["Leaked"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://www.mediafire.com/file/fii146kdxw8iesi/%5Bcfx-nteam-drone-script%5D.rar/file",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "AXIS-FORGE - Nass fighting",
    name: "AXIS-FORGE - Nass fighting",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://imagedelivery.net/a5r9Tc1KZUombyb_AZ4nqA/3b63d271-5e99-44aa-9581-8b44d3d39b00/hd",
    tagline: "",
    frameworks: ["Leaked"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://cold4.gofile.io/download/direct/c01fa470-53d9-4c96-9634-1c76ae2a6e61/AxisForge-nass_fighting.zip?hash=QZMtZzsRGbNtNHAohzZeI5dyHnpwzyvILAceBYblcEqoMzlQx6eQL7QO5l0rwdRD",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "FPSBOOST - FiveM Script (ESX, QBCORE & QBOX)",
    name: "FPSBOOST - FiveM Script (ESX, QBCORE & QBOX)",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://img.youtube.com/vi/lwYDi0C1pPM/maxresdefault.jpg",
    tagline: "",
    frameworks: ["Leaked"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://cold-eu-par-1.gofile.io/download/direct/d655e916-201f-46b8-9985-96da9f2b85db/AxisForge-17mov_FpsBooster.zip?hash=h06AmcEQmICKl9hnWoZDfywSjAB3JPCfAgehd5LrauclFbIV8Dx9Rvf00ocuzTKL",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "Advanced Reports - FiveM Script (ESX, QBCORE & QBOX)",
    name: "Advanced Reports - FiveM Script (ESX, QBCORE & QBOX)",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://img.youtube.com/vi/L4yBmPvyvuQ/maxresdefault.jpg",
    tagline: "",
    frameworks: ["Leaked"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://store6.gofile.io/download/direct/bfb6cacf-c13c-436d-9839-ac788bab6d43/AxisForge-RxReports.zip?hash=FGqjATSa65A5IerfsGVJgVCZnWCoJtLhPL3IBnEZF6pXQ53ANSwU1TkGsAHA3nyZ",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "JG HUD - Ultra Customisable & Vehicle Focused FiveM HUD",
    name: "JG HUD - Ultra Customisable & Vehicle Focused FiveM HUD",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://cdn.discordapp.com/attachments/1503599521790165106/1520898092973424730/maxresdefault_5.jpg?ex=6a4ac73a&is=6a4975ba&hm=a3262cb79b601b3e48a28326970b0f2682027048f0d34140285aec99680b9a71&",
    tagline: "",
    frameworks: ["Leaked"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://store6.gofile.io/download/direct/f4903a60-f73a-4c41-ad7c-84ef71c06d10/AxisForge-Jg-hud.zip?hash=HFg4bWiifE7KGTvUoe4hE8L2IJfWxfwIWMO6pXgoW5i9yAh7WLVvO84uLrN7CFK5",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "Multicharacter System - Identity, Spawn Selector and Loading Screen [ESX/QB/QBOX]",
    name: "Multicharacter System - Identity, Spawn Selector and Loading Screen [ESX/QB/QBOX]",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://cdn.discordapp.com/attachments/1503599521790165106/1520887182586413096/maxresdefault_2.jpg?ex=6a4abd11&is=6a496b91&hm=1758f28857db9c7de51af3fcc960d0ff83a5075023ba60371c093e4315896f67&",
    tagline: "",
    frameworks: ["Leaked"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://www.mediafire.com/file/8iwqt3hj6ym4zds/op-multicharacter.rar/file",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "Vons Weapon Pack V1 | Addon Weapons for FiveM | High Quality Pack for Cheap",
    name: "Vons Weapon Pack V1 | Addon Weapons for FiveM | High Quality Pack for Cheap",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://cdn.discordapp.com/attachments/1503599521790165106/1520884817615524041/maxresdefault_1.jpg?ex=6a4abadd&is=6a49695d&hm=e3b3256e5e380ce8fdfc90dae966c2a2133830dd24671ae0576775ad9344f3aa&",
    tagline: "",
    frameworks: ["Leaked"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://mega.nz/file/agpCBCDZ#J1na1gMiccBom-vKjiOsbWM4zMHEhgW6M5fuCPwx5Uk",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "SD-Beekeeping | FiveM Script |  QBCore, ESX",
    name: "SD-Beekeeping | FiveM Script |  QBCore, ESX",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://cdn.discordapp.com/attachments/1503599521790165106/1520867165807313026/maxresdefault.jpg?ex=6a4aaa6c&is=6a4958ec&hm=02e4a452b1dde221d50266439c08ef3d572052dc4944455b06a15ab251b2fe22&",
    tagline: "",
    frameworks: ["Leaked"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://mega.nz/folder/FIgUlIzZ#iOEv68YmZFcLBNLj8gZe6A",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "London Studios | SmartFires",
    name: "London Studios | SmartFires",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://img.youtube.com/vi/6Rf7USu5yqU/maxresdefault.jpg",
    tagline: "",
    frameworks: ["Leaked"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://mega.nz/file/FQF12SJT#ApiicS1HXLIwBkeheIvL0YKsrLkHcAQDqNw5-oZEGII",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "DJS | Uwu Cafe Props",
    name: "DJS | Uwu Cafe Props",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://cdn.discordapp.com/attachments/1513935895177462002/1517141786995196108/b5s410c4.png?ex=6a4af4a5&is=6a49a325&hm=2277bc4c15c30cfb449623243c0b0ffef58135ef4f69a550220f494b354d733c&",
    tagline: "",
    frameworks: ["Leaked"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://mega.nz/file/dQNFyaCK#n97z1PufES_9ZnuBbpUafdnx69zVZWna-8Yi476ibwk",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "cDev | Plate Taping / Removal System",
    name: "cDev | Plate Taping / Removal System",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://img.youtube.com/vi/S8cElR1mWFA/maxresdefault.jpg",
    tagline: "",
    frameworks: ["Leaked"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://mega.nz/file/oUl3CJqC#8v2M_DHKHOewxBdfjtB3JTswRoAyxX5AZEyWjgaW2DM",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "OP | Garages V3",
    name: "OP | Garages V3",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://img.youtube.com/vi/53nIV0HQyxI/maxresdefault.jpg",
    tagline: "",
    frameworks: ["Leaked"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://mega.nz/file/MdkzTZIJ#ObjlCLLo-6NmdvECBbK0mt47l6-knZpNlGksxme2lRA",
    linkLabel: "GET SCRIPT"
  },
  {
    id: "Zerio | Multi Jobs",
    name: "Zerio | Multi Jobs",
    version: "v1.9.0",
    status: "online",
    badge: "",
    image: "https://img.youtube.com/vi/Z6aVf3uD_T0/maxresdefault.jpg",
    tagline: "",
    frameworks: ["Leaked"],
    price: "FREE",
    date: "2026-04-02",
    stats: { stars: 96, downloads: 3100 },
    link: "https://mega.nz/file/BFU12ayC#esp7ZAfE_PNkiVqyTpYqRSHxMn1F9bU0CvMRBpVp1Fw",
    linkLabel: "GET SCRIPT"
  },
];
