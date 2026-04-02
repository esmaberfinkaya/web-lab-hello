import React from 'react';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana İçeriğe Atla
      </a>

      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <figure>
            <img 
              src="/profil.jpg" 
              alt="Esma Berfin Kaya'nın fotoğrafı" 
            />
            <figcaption>Esma Berfin Kaya</figcaption>
          </figure>
          <p>
            Merhaba! Ben Esma, oyun geliştirme ve erişilebilir web tasarımı konularına ilgili bir geliştiriciyim. 
            Amacım oyun geliştiricilerin iş akışlarını kolaylaştıracak sistemler ve kullanıcı dostu arayüzler tasarlamaktır.
          </p>
          <h3>Yetenekler & İlgi Alanları</h3>
          <ul>
            <li>Semantik HTML5 & Erişilebilirlik (a11y)</li>
            <li>React & TypeScript</li>
            <li>Oyun Tasarım Mekanikleri</li>
            <li>Topluluk ve Ekosistem Yönetimi</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          
          <article>
            <h3>Gameveloper</h3>
            <p><strong>Proje Türü:</strong> Oyun geliştiriciler ve oynayanlar için ortaklık ve fikir danışma ekosistemi</p>
            <p><strong>Problem:</strong> Oyun geliştirmeye yeni başlayanlar, karmaşık araç yığınları arasında yolunu kaybetmektedir. Odaklanmış rehberlik, hızlı çözüm ve yatırımcı-ekip uyumu sağlayan tek bir birleştirici platform bulunmamaktadır.</p>
            <p><strong>Hedef Kullanıcı:</strong></p>
            <ul>
              <li>Oyun dünyasına yeni adım atan öğrenciler ve hobi kullanıcıları</li>
              <li>Araçlar arası geçiş ve teknik sorunlar yaşayan bağımsız (indie) geliştiriciler</li>
              <li>Tavsiye ve eleştiri sunmak isteyen oyun tutkunları</li>
            </ul>
            <p><strong>Özellikler:</strong></p>
            <ul>
              <li><strong>Araç Kütüphanesi & Rehberler:</strong> Unity, Unreal, Blender arasındaki doğru iş akışları.</li>
              <li><strong>Soru-Cevap & Etiketleme:</strong> Geliştiriciler için versiyon bazlı (Örn: #Unity2022) odaklı yardım modülü.</li>
              <li><strong>Yol Haritası (Roadmap):</strong> Kullanıcılar tarafından oluşturulabilen, oylanabilen detaylı "nasıl yapılır" akışları.</li>
              <li><strong>Collaboration Hub:</strong> Projelerde eksik roller için ilan açma ve görev planlama.</li>
              <li><strong>Review-as-a-Service:</strong> Yeni oyunların uzmanlar ve oyuncular tarafından test edilip raporlanması.</li>
              <li><strong>Premium Store:</strong> Geliştiriciler tarafından satılan asset, eklenti ve mentorluk pazar yeri.</li>
            </ul>
          </article>
          
          <article>
            <h3>Erişilebilir Portföy Sayfası (LAB-2)</h3>
            <p><strong>Açıklama:</strong> HTML5 semantik etiketleri tamamen doğru hiyerarşide (H1 &gt; H2) kullanılarak hazırlanmış, görme ve motor engelli kullanıcılar dahil tüm bireyler için optimize edilmiş portföy tasarımı.</p>
            <p><strong>Teknolojiler:</strong> React, a11y standartları, Responsive CSS.</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Bizimle İletişime Geçin</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  minLength={2} 
                  aria-describedby="name-error" 
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  aria-describedby="email-error" 
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select 
                  id="subject" 
                  name="subject" 
                  required 
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="soru">Genel Soru</option>
                  <option value="oyun">Review-as-a-Service Talebi</option>
                  <option value="ortaklik">Gameveloper Proje Ortaklığı</option>
                  <option value="mentorluk">Mentorluk / Premium Store</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  minLength={10} 
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Esma Berfin Kaya (Gameveloper v1.0). Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;
