# E-Commerce Service



### Winston Logger ile sistem logları

![](./project_images/service_1_start.png)



### Dosya Hiyerarşisi



![](./project_images/service_2_dosya_yapisi.png)





### Route'lar

![](./project_images/service_3_routes.png)





### Postgresql Tabloları

![](./project_images/service_3_postgresql_tables.png)





### Postgresql Extension'ları

![](./project_images/service_5_postgresql_extensions.png)





### App.js

![](./project_images/service_6_appjs.png)

### Kategoriler için ltree insertler
```SQL
INSERT INTO product_category(title, descript, path) VALUES('Elektronik', 'descript', 'elektronik');
	INSERT INTO product_category(title, descript, path) VALUES('Bilgisayar/Tablet', 'Bilgisayar/Tablet', 'elektronik.bilgisayar_tablet');

		INSERT INTO product_category(title, descript, path) VALUES('Dizüstü Bilgisayar', 'Dizüstü Bilgisayar', 'elektronik.bilgisayar_tablet.dizustu');
		INSERT INTO product_category(title, descript, path) VALUES('Masaüstü Bilgisayar', 'Masaüstü Bilgisayar', 'elektronik.bilgisayar_tablet.masaustu');
		INSERT INTO product_category(title, descript, path) VALUES('Tablet', 'Tablet', 'elektronik.bilgisayar_tablet.tablet');

	INSERT INTO product_category(title, descript, path) VALUES('Yazıcılar/Projeksiyon', 'Yazıcılar/Projeksiyon', 'elektronik.yazicilar_projeksiyon');
		INSERT INTO product_category(title, descript, path) VALUES('Yazıcılar', 'Yazıcılar', 'elektronik.yazicilar_projeksiyon.yazicilar');
		INSERT INTO product_category(title, descript, path) VALUES('Projeksiyonlar', 'Projeksiyonlar', 'elektronik.yazicilar_projeksiyon.projeksiyonlar');
		
	INSERT INTO product_category(title, descript, path) VALUES('Telefon & Telefon Aksesuarları', 'Telefon & Telefon Aksesuarları', 'elektronik.telefon_aksesuar');
		INSERT INTO product_category(title, descript, path) VALUES('Cep Telefonu', 'Cep Telefonu', 'elektronik.telefon_aksesuar.cep_telefonu');
		INSERT INTO product_category(title, descript, path) VALUES('Powerbank', 'Powerbank', 'elektronik.telefon_aksesuar.powerbank');
		INSERT INTO product_category(title, descript, path) VALUES('Kulaklık', 'Kulaklık', 'elektronik.telefon_aksesuar.kulaklik');
		INSERT INTO product_category(title, descript, path) VALUES('Kılıflar', 'Kılıflar', 'elektronik.telefon_aksesuar.kiliflar');

	INSERT INTO product_category(title, descript, path) VALUES('Beyaz Eşya', 'Beyaz Eşya', 'elektronik.beyaz_esya');
		INSERT INTO product_category(title, descript, path) VALUES('Buzdolapları', 'Buzdolapları', 'elektronik.beyaz_esya.buzdolabi');
		INSERT INTO product_category(title, descript, path) VALUES('Bulaşık Makineleri', 'Bulaşık Makineleri', 'elektronik.beyaz_esya.bulasik_makinesi');
		INSERT INTO product_category(title, descript, path) VALUES('Çamaşır Makineleri', 'Çamaşır Makineleri', 'elektronik.beyaz_esya.camasir_makinesi');
		
	INSERT INTO product_category(title, descript, path) VALUES('Klima ve Isıtıcılar', 'Klima ve Isıtıcılar', 'elektronik.klima_isitici');
		INSERT INTO product_category(title, descript, path) VALUES('Klimalar', 'Klimalar', 'elektronik.klima_isitici.klima');
		INSERT INTO product_category(title, descript, path) VALUES('Isıtıcılar', 'Isıtıcılar', 'elektronik.klima_isitici.isitici');
		INSERT INTO product_category(title, descript, path) VALUES('Kombiler', 'Kombiler', 'elektronik.klima_isitici.kombi');
		
	INSERT INTO product_category(title, descript, path) VALUES('Foto & Kamera', 'Foto & Kamera', 'elektronik.foto_kamera');
		INSERT INTO product_category(title, descript, path) VALUES('Optikler', 'Optikler', 'elektronik.foto_kamera.optik');
		INSERT INTO product_category(title, descript, path) VALUES('Lensler', 'Lensler', 'elektronik.foto_kamera.lens');
		INSERT INTO product_category(title, descript, path) VALUES('Dijital Fotograf Makineleri', 'Dijital Fotograf Makineleri', 'elektronik.foto_kamera.digital_fotograf');




INSERT INTO product_category(title, descript, path) VALUES('Moda', 'Moda', 'moda');
	INSERT INTO product_category(title, descript, path) VALUES('Erkek Giyim', 'Erkek Giyim', 'moda.erkek_giyim');
		INSERT INTO product_category(title, descript, path) VALUES('Spor', 'Spor', 'moda.erkek_giyim.spor');
		INSERT INTO product_category(title, descript, path) VALUES('Klasik', 'Klasik', 'moda.erkek_giyim.klasik');
		INSERT INTO product_category(title, descript, path) VALUES('Takım Elbise', 'Takım Elbise', 'moda.erkek_giyim.takim_elbise');
	INSERT INTO product_category(title, descript, path) VALUES('Kadın Giyim', 'Kadın Giyim', 'moda.kadin_giyim');
		INSERT INTO product_category(title, descript, path) VALUES('Spor Giyim', 'Spor Giyim', 'moda.kadin_giyim.spor');
		INSERT INTO product_category(title, descript, path) VALUES('Tesettür', 'Tesettür', 'moda.kadin_giyim.tesettur');
		INSERT INTO product_category(title, descript, path) VALUES('Pijama', 'Pijama', 'moda.kadin_giyim.pijama');
	INSERT INTO product_category(title, descript, path) VALUES('Çocuk Giyim', 'Çocuk Giyim', 'moda.cocuk_giyim');
		INSERT INTO product_category(title, descript, path) VALUES('Kız', 'Kız', 'moda.cocuk_giyim.kiz');
		INSERT INTO product_category(title, descript, path) VALUES('Erkek', 'Erkek', 'moda.cocuk_giyim.erkek');
		INSERT INTO product_category(title, descript, path) VALUES('Bebek', 'Bebek', 'moda.cocuk_giyim.bebek');



INSERT INTO product_category(title, descript, path) VALUES('Kitap, Müzik, Film Hobi', 'Kitap, Müzik, Film Hobi', 'kitap_muzik_film_hobi');
	INSERT INTO product_category(title, descript, path) VALUES('Kitap & Dergi', 'Kitap & Dergi', 'kitap_muzik_film_hobi.kitap_dergi');
		INSERT INTO product_category(title, descript, path) VALUES('Çok Satanlar', 'Çok Satanlar', 'kitap_muzik_film_hobi.kitap_dergi.cok_satanlar');
		INSERT INTO product_category(title, descript, path) VALUES('Edebiyat', 'Edebiyat', 'kitap_muzik_film_hobi.kitap_dergi.edebiyat');
		INSERT INTO product_category(title, descript, path) VALUES('Eğitim', 'Eğitim', 'kitap_muzik_film_hobi.kitap_dergi.egitim');
		
	INSERT INTO product_category(title, descript, path) VALUES('Müzik Enstrümanları', 'Müzik Enstrümanları', 'kitap_muzik_film_hobi.muzik_enstruman');
		INSERT INTO product_category(title, descript, path) VALUES('Telli Çalgılar', 'Telli Çalgılar', 'kitap_muzik_film_hobi.muzik_enstruman.telli_calgi');
		INSERT INTO product_category(title, descript, path) VALUES('Vurmalı Çalgılar', 'Vurmalı Çalgılar', 'kitap_muzik_film_hobi.muzik_enstruman.vurmali_calgi');
		INSERT INTO product_category(title, descript, path) VALUES('Nefesli Çalgılar', 'Nefesli Çalgılar', 'kitap_muzik_film_hobi.muzik_enstruman.nefesli_calgi');
		
	INSERT INTO product_category(title, descript, path) VALUES('Drone & Helikopter', 'Drone & Helikopter', 'kitap_muzik_film_hobi.drone_helikopter');
		INSERT INTO product_category(title, descript, path) VALUES('DJI', 'Dji', 'kitap_muzik_film_hobi.drone_helikopter.dji');
		INSERT INTO product_category(title, descript, path) VALUES('Corby', 'Corby', 'kitap_muzik_film_hobi.drone_helikopter.corby');
		INSERT INTO product_category(title, descript, path) VALUES('Aden', 'Aden', 'kitap_muzik_film_hobi.drone_helikopter.aden');



INSERT INTO product_category(title, descript, path) VALUES('Ev & Ofis', 'Ev & Ofis', 'ev_ofis');
	INSERT INTO product_category(title, descript, path) VALUES('Mobilya', 'Mobilya', 'ev_ofis.mobilya');
		INSERT INTO product_category(title, descript, path) VALUES('Çalışma Odası', 'Çalışma Odası', 'ev_ofis.mobilya.calisma_odasi');
		INSERT INTO product_category(title, descript, path) VALUES('Mutfak Mobilyaları', 'Mutfak Mobilyaları', 'ev_ofis.mobilya.mutfak_mobilya');
		INSERT INTO product_category(title, descript, path) VALUES('Salon Mobilyaları', 'Salon Mobilyaları', 'ev_ofis.mobilya.salon_mobilya');
	INSERT INTO product_category(title, descript, path) VALUES('Ev Tekstili', 'Ev Tekstili', 'ev_ofis.ev_tekstili');
	INSERT INTO product_category(title, descript, path) VALUES('Banyo', 'Banyo', 'ev_ofis.banyo');
	INSERT INTO product_category(title, descript, path) VALUES('Sofra & Mutfak', 'Sofra & Mutfak', 'ev_ofis.sofra_mutfak');


INSERT INTO product_category(title, descript, path) VALUES('Spor & Outdoor', 'Spor & Outdoor', 'spor_outdoor');
	INSERT INTO product_category(title, descript, path) VALUES('Kamp', 'Kamp', 'spor_outdoor.kamp');
	
	INSERT INTO product_category(title, descript, path) VALUES('Bisiklet', 'Bisiklet', 'spor_outdoor.bisiklet');
		INSERT INTO product_category(title, descript, path) VALUES('Elektrikli Bisiklet', 'Elektrikli Bisiklet', 'spor_outdoor.bisiklet.elektrikli_bisiklet');
		INSERT INTO product_category(title, descript, path) VALUES('Katlanır Bisiklet', 'Katlanır Bisiklet', 'spor_outdoor.bisiklet.katlanir_bisiklet');
		INSERT INTO product_category(title, descript, path) VALUES('Çocuk Bisikleti', 'Çocuk Bisiklet', 'spor_outdoor.bisiklet.cocuk_bisiklet');
		
	INSERT INTO product_category(title, descript, path) VALUES('Spor Giyim & Ayakkabı', 'Spor Giyim & Ayakkabı', 'spor_outdoor.spor_giyim');
  
```
