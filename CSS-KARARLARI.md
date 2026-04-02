# CSS Kararları

## 1. Breakpoint Seçimi
- **Neden 640px ve 1024px seçtim?**: 640px ile büyük telefonlar ve dikey tabletlere (sm-md cihazlar) geçiş sağladım. 1024px ise dizüstü bilgisayarlar ve yatay tabletlerde (lg cihazlar) tam genişlik ihtiyacından doğan mantıklı bir ekran kırılım (breakpoint) noktasıdır.
- **İçeriğim bu noktalarda nasıl değişiyor?**: Dar ekranlarda 640px'e kadar header içerikleri, formlar ve kartlar dikey (alt alta) yığılırken; 640px'ten sonra hakkımda bölümü yataya evriliyor. 1024px eşiği geçildiğinde ise "Projeler" bölümü 3'lü tam (grid) bir sütun dizilimine kavuşuyor ve içeriğin ekranı tamamen kaplamaması için max-width kısıtlaması (1200px) uygulanıyor.

## 2. Layout Tercihleri
- **Header için neden Flexbox seçtim?**: Header içerisinde logonun solda, navigasyon linklerinin ise sağda dizilmesi tipik tek boyutlu (yatay) bir düzenleme işlemidir. Flexbox bu `space-between` hizalanmasını kusursuz şekilde yaptığı için tercih ettim.
- **Proje kartları için neden Grid seçtim?**: Proje kartları hem satır (row) hem de sütun (column) düzeni içeren iki boyutlu yapılar oldukları için CSS Grid sistemine ihtiyaç duyar ve daha temiz ölçeklenir.
- **auto-fit mi auto-fill mi kullandım, neden?**: `auto-fit` kullandım çünkü ekran büyüdüğünde oluşan boş kalan sütuna yeni kart yerleştirmek yerine, eldeki mevcut kartların boşluğu kaplayıp "sıvı (fluid)" şekilde genişlemelerini istedim, bu şekilde arayüz hiç boşluklu durmuyor.

## 3. Design Tokens
- **Hangi renk paletini seçtim ve neden?**: Ana renk (#1E3A8A - Koyu Mavi) ve ikincil Vurgu (#2563EB) renklerini kullandım. Bu renkler profesyonelliği yansıtırken WCAG uygunluğunu ve yüksek kontrast erişilebilirliğini (a11y) sağlar.
- **Spacing skalasını nasıl belirledim?**: 0.25rem'den (4px) başlayıp 4rem'e (64px) kadar çıkan kademeli (t-shirt sizing) bir oranlama (xs, sm, md, lg, xl, 2xl) kurdum, böylelikle sitedeki bütün boşluklar (margin, padding vs.) birbiriyle tutarlı oluyor.
- **Fluid typography için clamp değerlerini nasıl ayarladım?**: `clamp(minimum, tercih_edilen, maximum)` yapısı ile örneğin `clamp(1rem, 0.9rem + 0.5vw, 1.125rem)` formülü kurdum. Bu sayede ekran genişlediğinde font boyutu `.vw` bazında ufak ufak artarken asgari 16px (1rem), azami ise ~18px seviyesinde sınırlı kalmayı başarıyor.

## 4. Responsive Stratejiler
- **Mobile-first yaklaşımını nasıl uyguladım?**: Tüm kodlarda varsayılan CSS'imi (mobil, yani dar ekran için) global düzlemde yazdım. Daha sonra medyaları `@media (min-width)` kuralı ile sınırlayarak tasarımların büyük ekranlara doğru "üstüne inşa edilmesini" sağladım.
- **Hangi elemanlar breakpoint'lerde değişiyor?**: Navigasyon yönleri (column -> row), Hakkımda bölümü ve form elemanlarının genişlik/konumlandırmaları ve Projelerim grid düzeninin sütun sayısıyla esnemesi bu geçişlerde (640 ve 1024px) değişiyor.
- **Görsel boyutları nasıl yönettim?**: Görsellere `max-width: 100%` ve `height: auto` kombinasyonunu uyguladım. Proje kartlarındaki görsellerin orantısızca sıkışıp çirkin bozulmasını önlemek için ise `object-fit: cover` ve belirli bir aspect/height oranı tercih ettim.
