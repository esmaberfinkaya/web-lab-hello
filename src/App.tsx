import React, { useState, useEffect } from 'react';
import type { Project, Category, SortField, SortOrder } from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";

import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';
import UIKit from './pages/UIKit';

function App() {
  const [showUIKit, setShowUIKit] = useState(false);

  // --- STATE (LAB-5) ---
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- API (FETCH) ---
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Sunucuya ulaşılamadı. Bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // --- FİLTRELENMİŞ (DERIVED) VERİ ---
  const filtered = applyFilters(projects, search, category, sortField, sortOrder);
  const categories: (Category | "all")[] = ["all", "frontend", "fullstack", "backend", "mobile", "other"];

  if (showUIKit) {
    return (
      <div className="relative">
        <button 
          onClick={() => setShowUIKit(false)}
          className="fixed bottom-4 right-4 z-50 bg-fuchsia-main text-pure-white px-4 py-2 rounded-full shadow-lg hover:bg-fuchsia-dark transition-colors"
        >
          Portföye Dön
        </button>
        <UIKit />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pure-white dark:bg-pure-black text-pure-black dark:text-pure-white font-sans transition-colors duration-200">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-fuchsia-main text-pure-white p-2 z-50">
        Ana İçeriğe Atla
      </a>

      <header className="sticky top-0 z-40 bg-pure-white/90 dark:bg-pure-black/90 backdrop-blur-md border-b border-icy-pink dark:border-fuchsia-dark">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-xl font-bold text-fuchsia-main dark:text-icy-pink">
            EBK Portföy
          </div>
          <nav aria-label="Ana navigasyon" className="flex items-center gap-4">
            <ul className="flex flex-wrap gap-2">
              <li><a href="#hakkimda" className="px-3 py-1 rounded-md hover:bg-icy-pink dark:hover:bg-fuchsia-dark/30 transition-colors font-medium">Hakkımda</a></li>
              <li><a href="#projeler" className="px-3 py-1 rounded-md hover:bg-icy-pink dark:hover:bg-fuchsia-dark/30 transition-colors font-medium">Projeler</a></li>
              <li><a href="#iletisim" className="px-3 py-1 rounded-md hover:bg-icy-pink dark:hover:bg-fuchsia-dark/30 transition-colors font-medium">İletişim</a></li>
            </ul>
            <button 
              onClick={() => setShowUIKit(true)}
              className="text-sm px-3 py-1 border border-fuchsia-main text-fuchsia-main rounded-full hover:bg-fuchsia-main hover:text-pure-white transition-colors"
            >
              UI Kit
            </button>
            <button
              onClick={() => document.documentElement.classList.toggle('dark')}
              className="p-1 rounded-full text-fuchsia-main dark:text-icy-pink hover:bg-icy-pink dark:hover:bg-fuchsia-dark/30"
              aria-label="Tema Değiştir"
            >
              <span className="dark:hidden text-lg">&#9790;</span>
              <span className="hidden dark:inline text-lg">&#9728;</span>
            </button>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0 flex flex-col items-center">
              <img 
                src="/profil.jpg" 
                alt="Esma Berfin Kaya'nın fotoğrafı" 
                className="w-48 h-48 rounded-full border-4 border-icy-pink dark:border-fuchsia-dark object-cover shadow-lg"
              />
              <figcaption className="mt-4 font-semibold text-fuchsia-main dark:text-icy-pink">Esma Berfin Kaya</figcaption>
            </figure>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Hakkımda</h2>
              <p className="text-lg leading-relaxed text-muted-gray mb-6 dark:text-gray-300">
                Merhaba! Ben Esma, oyun geliştirme ve erişilebilir web tasarımı konularına ilgili bir geliştiriciyim. 
                Amacım oyun geliştiricilerin iş akışlarını kolaylaştıracak sistemler ve kullanıcı dostu arayüzler tasarlamaktır.
              </p>
              
              <ul className="flex flex-wrap gap-2" role="list" aria-label="Beceri etiketleri">
                <li className="bg-fuchsia-main text-pure-white px-3 py-1 rounded-full text-sm shadow-sm">Semantik HTML5 & a11y</li>
                <li className="bg-fuchsia-main text-pure-white px-3 py-1 rounded-full text-sm shadow-sm">CSS3 & Native Responsive</li>
                <li className="bg-fuchsia-main text-pure-white px-3 py-1 rounded-full text-sm shadow-sm">React & TypeScript</li>
                <li className="bg-icy-pink text-fuchsia-dark px-3 py-1 rounded-full text-sm font-medium shadow-sm">Oyun Tasarımı / Mekanikleri</li>
                <li className="bg-icy-pink text-fuchsia-dark px-3 py-1 rounded-full text-sm font-medium shadow-sm">Topluluk Yönetimi</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" className="py-16 px-4 bg-icy-pink/30 dark:bg-fuchsia-dark/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Projelerim</h2>
            
            {/* HATA DURUMU */}
            {error && (
              <Alert variant="error" title="Bağlantı Hatası" className="mb-6">
                {error}
              </Alert>
            )}

            {/* FİLTRELER */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 bg-pure-white dark:bg-pure-black p-4 rounded-xl shadow-sm border border-icy-pink dark:border-fuchsia-dark">
              <Input 
                id="search"
                placeholder="Proje ara (teknoloji, kelime)..."
                value={search}
                onChange={e => setSearch(e.target.value)} 
                className="flex-1"
              />
              
              <div className="flex flex-wrap gap-2 items-center">
                {categories.map(cat => (
                  <Button 
                    key={cat}
                    variant={category === cat ? "primary" : "ghost"}
                    size="sm"
                    onClick={() => setCategory(cat)}
                  >
                    {cat === "all" ? "Tümü" : cat.toUpperCase()}
                  </Button>
                ))}
              </div>

              <div className="flex gap-2 items-center">
                <select 
                  value={sortField}
                  onChange={e => setSortField(e.target.value as SortField)}
                  className="border border-muted-gray focus:border-fuchsia-main focus:ring-1 focus:ring-fuchsia-main rounded-lg px-3 py-2 bg-pure-white dark:bg-pure-black dark:text-pure-white text-sm"
                >
                  <option value="year">Yıla Göre</option>
                  <option value="title">A-Z İsim</option>
                </select>
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={() => setSortOrder(o => o === "asc" ? "desc" : "asc")}
                >
                  {sortOrder === "asc" ? "Artan" : "Azalan"}
                </Button>
              </div>
            </div>

            {/* YÜKLENİYOR */}
            {loading && (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fuchsia-main border-l-2"></div>
              </div>
            )}

            {/* PROJE LİSTESİ */}
            {!loading && filtered.length === 0 && (
              <p className="text-center text-muted-gray py-10 font-medium text-lg">
                Seçtiğiniz kriterle eşleşen proje bulunamadı.
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(project => (
                <Card 
                  key={project.id}
                  variant={project.featured ? "elevated" : "outlined"}
                  title={project.title}
                >
                  <p className="mb-4 text-sm dark:text-gray-300">{project.description}</p>
                  
                  <div className="flex gap-2 flex-wrap text-xs font-mono mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="bg-icy-pink dark:bg-fuchsia-main/80 text-fuchsia-dark dark:text-pure-white px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs text-muted-gray font-semibold pt-4 mt-auto border-t border-icy-pink dark:border-fuchsia-dark border-opacity-50 flex justify-between">
                    <span>{project.year}</span>
                    <span className="uppercase tracking-widest">{project.category}</span>
                  </div>
                </Card>
              ))}
            </div>

            {/* SONUC SAYISI */}
            {!loading && (
              <p className="text-sm text-muted-gray mt-8 text-center bg-icy-pink dark:bg-fuchsia-dark/20 p-2 rounded-full inline-block mx-auto max-w-fit">
                Gösterilen: <strong className="text-fuchsia-main dark:text-icy-pink">{filtered.length}</strong> / Toplam: <strong>{projects.length}</strong>
              </p>
            )}
            
          </div>
        </section>

        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">İletişim</h2>
            <form action="#" method="POST" className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input id="name" label="Ad Soyad:" required placeholder="Adınız Soyadınız" />
              <Input id="email" type="email" label="E-posta:" required placeholder="ornek@mail.com" />
              
              <div className="space-y-1">
                <label htmlFor="subject" className="block text-sm font-medium text-pure-black dark:text-pure-white">Konu:</label>
                <select 
                  id="subject" 
                  name="subject" 
                  required 
                  className="w-full px-3 py-2 rounded-lg border border-muted-gray focus:outline-none focus:ring-2 focus:ring-fuchsia-main dark:bg-pure-black dark:border-fuchsia-dark"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="soru">Genel Soru</option>
                  <option value="oyun">Review-as-a-Service Talebi</option>
                  <option value="ortaklik">Gameveloper Proje Ortaklığı</option>
                  <option value="mentorluk">Mentorluk / Premium Store</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-pure-black dark:text-pure-white">Mesajınız:</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  minLength={10} 
                  className="w-full px-3 py-2 rounded-lg border border-muted-gray focus:outline-none focus:ring-2 focus:ring-fuchsia-main dark:bg-pure-black dark:border-fuchsia-dark"
                  placeholder="Mesajınızı buraya girin..."
                ></textarea>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Gönder
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-icy-pink dark:bg-fuchsia-dark/20 border-t border-fuchsia-main/20 text-center py-6 px-4 text-fuchsia-dark dark:text-icy-pink text-sm">
        <p>&copy; 2026 Esma Berfin Kaya (LAB-5: TypeScript & Fetch API). Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;
