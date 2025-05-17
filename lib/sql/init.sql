
CREATE TABLE IF NOT EXISTS quicklinks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    url TEXT NOT NULL
);


INSERT INTO quicklinks (title, url) VALUES 
('Yaz İndirimi', 'https://www.hepsiburada.com/kampanyalar/defacto-erkek-urunlerini-kesfet?trackingId=12692928'),
('Kargo Bedava', 'https://www.hepsiburada.com/kampanyalar/reebok-indirim-firsati?trackingId=12329912'),
('Telefon Kampanyası', 'https://www.hepsiburada.com/kampanyalar/arzum-urunlerinde-kacirilmayacak-firsatlar?trackingId=12977026'),
('Bilgisayar İndirimi', 'https://www.hepsiburada.com/kampanyalar/sanatsal-boya-ve-malzemelerde-haftalik-firsatlar?trackingId=12486374'),
('Tablet Fırsatları', 'https://www.hepsiburada.com/kampanyalar/inova-interaktif-saticili-urunlerde-firsatlar?trackingId=13003997'),
('Aksesuar Hediyesi', 'https://www.hepsiburada.com/dv/petshop-gunleri?trackingId=13016956'),
('3 Al 2 Öde', 'https://www.hepsiburada.com/kampanyalar/bamm-bamm-saticili-bebek-bezi-cop-posetlerinde-kacirilmayacak-firsatlar?trackingId=12969616'),
('Sepette %10', 'https://www.hepsiburada.com/kampanyalar/hesap-makinelerinde-sepette-15-indirim?trackingId=12534257');




CREATE TABLE slider_products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    url TEXT NOT NULL
);

INSERT INTO slider_products (title, image , url) VALUES
("REDMI",'https://r.resimlink.com/x5a4eywsUrib.png', 'https://www.apple.com/tr/shop/go/iphone/?&mnid=sqkyMh6NI-dc_mtid_209258sv42346_pcrid_733787186351_pgrid_170836906721_pexid__ptid_kwd-334361787_&cid=wwa-tr-kwgo-iphone--slid---productid--Core-Core-Announce-&mtid=209258sv42346&aosid=p238'),
("IPAD",'https://r.resimlink.com/-bvlFLW.png', 'https://www.apple.com/mac/'),
("HUAWEI WATCHES",'https://r.resimlink.com/HpuZh086.png', 'https://www.apple.com/airpods/'),
("SPIGEN",'https://r.resimlink.com/hnXc6_ij-g1m.png', 'https://www.apple.com/watch/'),
("IPHONE",'https://r.resimlink.com/dT3U9N.png', 'https://www.apple.com/ipad/'),
("HUAWEI 5",'https://r.resimlink.com/m9CEQPgqU.png', 'https://www.playstation.com/tr-tr/'),
("HUAWEI FREEBUDS",'https://r.resimlink.com/staDHE0.png', 'https://www.xbox.com/tr-TR/'),
("HONOR MAGIC",'https://r.resimlink.com/bgj4U.png', 'https://www.samsung.com/tr/smartphones/galaxy-s25-ultra/'),
("DISCOUNTS",'https://r.resimlink.com/CGjAe2EmOS3.png', 'https://www.dell.com/tr-tr/shop/scc/sc/laptops'),
("HUAWEI 4",'https://r.resimlink.com/0F12I8y.png', 'https://www.hpstore.com.tr');


DROP TABLE IF EXISTS deals_products;

CREATE TABLE deals_products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    price TEXT NOT NULL,
    image TEXT NOT NULL,
    url TEXT NOT NULL
);

INSERT INTO deals_products (title, price, image, url) VALUES
('iPhone SE', '$399', 'https://r.resimlink.com/O-aK6F.jpeg', 'https://www.apple.com'),
('Samsung A52', '$299', 'https://r.resimlink.com/ZcOnTabBe3.jpeg', 'https://www.samsung.com/tr/'),
('Lenovo Tablet', '$199', 'https://r.resimlink.com/CLf7o.jpeg', 'https://www.lenovo.com/tr/tr/?cid=tr:sem:jo6l9a&gad_source=1&gad_campaignid=1503612195&gbraid=0AAAAADc1k-vcoD1JuOkCK4LbsAc3q9kjp&gclid=CjwKCAjw56DBBhAkEiwAaFsG-gD9ijzJh7LeL7QyZdx81lHMIofoSqAvTWzgclYJQdiLyWW8YkCwdhoCJqIQAvD_BwE');


DROP TABLE IF EXISTS suggested_products;

CREATE TABLE suggested_products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    price TEXT NOT NULL,
    rating INTEGER NOT NULL,
    image TEXT NOT NULL,
    url TEXT NOT NULL
);

INSERT INTO suggested_products (title, price, rating, image, url) VALUES
('Xiaomi Redmi Note', '$199', 4, 'https://r.resimlink.com/5uOlx4_iA9.png', 'https://www.mi.com/tr/'),
('Dell Monitor', '$159', 5, 'https://r.resimlink.com/rzKy6OCi51.png', 'https://www.dell.com/tr-tr'),
('Logitech Mouse', '$49', 4, 'https://r.resimlink.com/8043UtDd.png', 'https://www.logitech.com/tr-tr'),
('Mechanical Keyboard', '$89', 5, 'https://r.resimlink.com/wUMSX9W.png', 'https://www.hepsiburada.com/everest-kb-871u-q-usb-siyah-standart-klavye-p-BDBT3002213180023?magaza=Hepsiburada'),
('Sandisk USB 128GB', '$29', 3, 'https://r.resimlink.com/Nsbrj6q.png', 'https://www.hepsiburada.com/usb-bellekler-c-970?utm_source=google&utm_medium=cpc&utm_campaign=sc:hb-ecom.sr:google.md:text.op:purchase.cid:6552494385&utm_content=agid:85403048046&wt_gl=cpc.text.camp6552494385adgr85403048046&gad_source=1&gad_campaignid=6552494385&gbraid=0AAAAADOiRoaTSuhB3QM_krt1BHA7f26Jv&gclid=CjwKCAjw56DBBhAkEiwAaFsG-oFKOKRtXdQnxhmfP1EomklU4aFuF4p2xNAJizXVyAMUQiuo-PHGqRoCJKkQAvD_BwE');
