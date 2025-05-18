#  TeknoMarket Page Projesi

Bu proje, SE3355 Web Development dersi kapsamında geliştirilmiş modern bir Teknolojik ürün mağazası ana sayfasıdır. Amaç; React/Next.js altyapısı kullanarak responsive, dinamik ve API bağlantılı bir kullanıcı arayüzü geliştirmektir.

##  Kullanılan Teknolojiler

- Next.js 13+ (App Router)
- React
- SQLite (local database)
- Next.js API Routes (backend olarak)
- Redux Toolkit (gezilen ürün takibi)
- CSS (responsive özelleştirilmiş stiller)

##  Proje Yapısı

/app  
  /api       → API endpoint'leri  
  /components   → React bileşenleri (Navbar, Slider, vb.)  
  page.js     → Ana sayfa  

/lib  
  db.js      → SQLite veritabanı bağlantısı  
  store.js    → Redux Store  
  visitedSlice.js → Gezilen ürün yönetimi  
  /sql/init.sql  → Veritabanı başlangıç komutları  

/public  
  /images    → Placeholder görseller (isteğe bağlı)  

/styles  
  globals.css  → Tüm CSS stilleri  

##  Öne Çıkan Özellikler

- Sticky ve responsive navbar (alt menüler dahil)
- Ana slider (10 ürün, veritabanından çekiliyor)
- Quick Links (8 kampanya bağlantısı)
- Elektronik Fırsatlar (3 saniyede dönen ürünler)
- Sana Özel Öneriler (kart yapısı + fiyat + yıldızlı rating)
- Gezilen Ürünler (Redux ile son 10 ürünün takibi)
- Responsive tasarım (mobil uyumlu)
- Tüm veriler SQLite kullanılarak backend API üzerinden sunuluyor

##  Veritabanı

Projede yer alan tüm veriler `data.db` dosyasında saklanır.  
Veritabanı tabloları:

- `quicklinks`  
- `slider_products`  
- `deals_products`  
- `suggested_products`


##  Geliştirici

Bu proje **İsa Batın Eren** tarafından, Yaşar Üniversitesi **SE3355 Web Development** dersi kapsamında geliştirilmiştir.

##  WEB LINK

https://three355-assigment1.onrender.com 


