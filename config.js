/*
  ABDO / ELGEN — EASY CONFIG
  ضيف صور المودز بنفس الشكل: assets/mods/mod6.jpg ... mod30.jpg
  أي ملف مش موجود هيختفي تلقائياً من الموقع.
*/
const SITE = {
  name: "𝑨𝑩𝑫𝑶 / 𝑬𝑳𝑮𝑬𝑵",

  socials: [
    { name: "TikTok", icon: "♪", followers: "600", url: "https://www.tiktok.com/@abdo_lg_3", accent: "#ff3b68" },
    { name: "YouTube", icon: "▶", followers: "130", url: "https://youtube.com/@abdo17489", accent: "#ff2020" },
    { name: "Kick", icon: "K", followers: "30", url: "https://kick.com/3abdo-lg", accent: "#53ff83" },
    { name: "Discord", icon: "◉", followers: "200", url: "https://discord.gg/aaRENQxBE", accent: "#5865f2" }
  ],

  gallery: [
    { file: "assets/gallery/photo1.jpg", alt: "Gallery image 1" },
    { file: "assets/gallery/photo2.jpg", alt: "Gallery image 2" },
    { file: "assets/gallery/photo3.jpg", alt: "Gallery image 3" },
    { file: "assets/gallery/photo4.jpg", alt: "Gallery image 4" },
    { file: "assets/gallery/photo5.jpg", alt: "Gallery image 5" }
  ],

  // حتى 30 مود. الملفات غير الموجودة لا تظهر.
  mods: [
    { file: "assets/mods/mod1.jpg", name: "MESO", role: "STREAM MANAGER" },
    { file: "assets/mods/mod2.jpg", name: "HANA", role: "STREAM MANAGER" },
    { file: "assets/mods/mod3.jpg", name: "KHYROX", role: "STREAM MANAGER" },
    { file: "assets/mods/mod4.jpg", name: "EYAD MOTAAZ", role: "DIS MANAGER" },
    { file: "assets/mods/mod5.jpg", name: "ZERO", role: "DIS MANAGER" },
    { file: "assets/mods/mod6.jpg", name: "CONAAN", role: "DIS MANAGER" },
    { file: "assets/mods/mod7.jpg", name: "ABOSHANB", role: "HIGH MANAGEMENT" },
    { file: "assets/mods/mod8.jpg", name: "HIMA", role: "HIGH MANAGEMENT" },
    { file: "assets/mods/mod9.jpg", name: "ZIZO", role: "HIGH MANAGEMENT" },
    { file: "assets/mods/mod10.jpg", name: "DASTIN", role: "ADMIN" },
    { file: "assets/mods/mod11.jpg", name: "ALI", role: "ADMIN" },
    { file: "assets/mods/mod12.jpg", name: "FARES", role: "MOD" },
    { file: "assets/mods/mod13.jpg", name: "KHALED KHD", role: "FULL ADMIN" },
    { file: "assets/mods/mod14.jpg", name: "KARAS", role: "FULL ADMIN" },
    { file: "assets/mods/mod15.jpg", name: "TOXIC", role: "MOD" },
    { file: "assets/mods/mod16.jpg", name: "OMAR", role: "MOD" },
    { file: "assets/mods/mod17.jpg", name: "", role: "" },
    { file: "assets/mods/mod18.jpg", name: "MOD 18", role: "MOD" },
    { file: "assets/mods/mod19.jpg", name: "MOD 19", role: "MOD" },
    { file: "assets/mods/mod20.jpg", name: "MOD 20", role: "MOD" },
    { file: "assets/mods/mod21.jpg", name: "MOD 21", role: "MOD" },
    { file: "assets/mods/mod22.jpg", name: "MOD 22", role: "MOD" },
    { file: "assets/mods/mod23.jpg", name: "MOD 23", role: "MOD" },
    { file: "assets/mods/mod24.jpg", name: "MOD 24", role: "MOD" },
    { file: "assets/mods/mod25.jpg", name: "MOD 25", role: "MOD" },
    { file: "assets/mods/mod26.jpg", name: "MOD 26", role: "MOD" },
    { file: "assets/mods/mod27.jpg", name: "MOD 27", role: "MOD" },
    { file: "assets/mods/mod28.jpg", name: "MOD 28", role: "MOD" },
    { file: "assets/mods/mod29.jpg", name: "MOD 29", role: "MOD" },
    { file: "assets/mods/mod30.jpg", name: "MOD 30", role: "MOD" }
  ],

  // لو مفيش كليبات هنا، قسم Clips كله يختفي. أضف الكليب وسيظهر تلقائياً.
  clips: [],

  music: [
    { file: "assets/music/song1.mp3", title: "Song 01" },
    { file: "assets/music/song2.mp3", title: "Song 02" }
  ]
};
