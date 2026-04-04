# Web LAB-4 - Tailwind CSS ve Yeniden Kullanılabilir Bileşenler

## Hakkinda
Bu projeyi, Web Tasarimi ve Programlama dersi LAB-4 için Vite + React + TypeScript altyapısı üzerine Tailwind CSS v4 entegre ederek yeniden tasarladım.

Bu laboratuvarda "Mobile-First" grid/flex yerleşimleri korunurken; "Utility-First" (Tailwind CSS) kurallarına geçilmiştir. Tüm statik CSS dosyaları kaldırılıp, kendi `Button`, `Input`, `Card`, `Alert` gibi React bileşen (Component) kütüphanemi oluşturdum ve **UI Kit** sayfası üzerinden sergiledim.

**Renk Paleti ve Tema Kararları:**
Kullanıcı deneyimi artırmak için modern bir görünüm seçildi:
- **Fuşya (Fuchsia)** Ana Vurgu Rengi (`#d946ef`)
- **Icy Pink** Yardımcı Renk (`#ffe4e6`)
- **Siyah & Beyaz** Zıtlık (Contrast) ve Tipografi için temel renkler
- Ayrıca **Karanlık (Dark)** ve **Aydınlık (Light)** tema (Dark Mode/Light Mode toggle) tam destekli olarak projedeki her bileşene aktarıldı.

## Gelistirici
- **Ad Soyad:** Esma Berfin Kaya
- **Ogrenci No:** 235541075

## Kullanilan Teknolojiler
- React 18 & TypeScript
- Vite
- **Tailwind CSS v4** (Utility-First CSS)
- CSS `@theme` Variables & Component Mimarisi

## Kurulum
```bash
npm install
```

## Calistirma
```bash
npm run dev
```
Uygulamayı çalıştırdıktan sonra tarayıcıda `http://localhost:5173` adresine giderek **Esma Berfin Kaya Portföyü**'ne erişebilirsiniz. Ayrıca sağ üstteki navbar alanında yer alan **"UI Kit"** butonuna tıklayarak oluşturulan bileşen kütüphanesini bütün bütüne inceleyebilirsiniz.
