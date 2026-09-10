ABDO / ELGEN — STREAMER WEBSITE
================================

تم تجهيز الموقع بحيث الصور والموسيقى تشتغل مباشرة من الملفات الموجودة داخل المشروع.

FOLDERS:
- assets/logo.png
- assets/background-desktop.png
- assets/background-mobile.png
- assets/gallery/photo1.jpg ... photo5.jpg
- assets/mods/mod1.jpg ... mod4.jpg
- assets/clips/      ← ضع الكليبات هنا
- assets/music/song1.mp3 ... song2.mp3

CONFIG:
- الروابط وأعداد المتابعين في config.js
- صور الجاليري والمودز معرفة بالفعل.
- الموسيقى song1.mp3 و song2.mp3 معرفة بالفعل.
- الكليبات تحتاج إضافة أسطرها في config.js لأن المتصفح لا يستطيع معرفة محتويات فولدر clips تلقائياً بدون API.

IMPORTANT:
- لو فتحت index.html مباشرة من file://، النسخة الجديدة لا تعتمد على fetch لفحص الصور، لذلك الصور المحلية ستظهر بشكل طبيعي.
- لو الكليب ملف MP4 محلي، أضفه في config.js وسيظهر كـ video thumbnail.
- المتصفح قد يمنع تشغيل الموسيقى تلقائياً؛ اضغط زر Play مرة واحدة.
