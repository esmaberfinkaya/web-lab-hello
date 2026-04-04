import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function UIKit() {
  return (
    <div className="min-h-screen bg-pure-white dark:bg-pure-black p-8 space-y-12">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-fuchsia-main dark:text-icy-pink">
          UI Kit
        </h1>
        <button
          onClick={() => document.documentElement.classList.toggle('dark')}
          className="bg-icy-pink dark:bg-fuchsia-dark text-fuchsia-dark dark:text-icy-pink p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Tema Degistir"
        >
          <span className="dark:hidden">&#9790; Karanlik</span>
          <span className="hidden dark:inline">&#9728; Aydinlik</span>
        </button>
      </div>

      {/* --- BUTTONS --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-icy-pink dark:border-fuchsia-dark pb-2 text-pure-black dark:text-pure-white">
          Buttons
        </h2>
        {/* Varyant 1: Renkler */}
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        {/* Varyant 2: Boyutlar & Durum */}
        <div className="flex flex-wrap items-end gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* --- INPUTS --- */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold border-b border-icy-pink dark:border-fuchsia-dark pb-2 text-pure-black dark:text-pure-white">
          Inputs
        </h2>
        <Input id="ui-name" label="Normal Input" placeholder="Bir sey yazin..." />
        <Input id="ui-err" label="Hatali Input" error="Bu alan zorunludur" />
        <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin" />
        <Input id="ui-dis" label="Disabled" disabled value="Duzenlenemez" />
      </section>

      {/* --- CARDS --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-icy-pink dark:border-fuchsia-dark pb-2 text-pure-black dark:text-pure-white">
          Cards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="elevated" title="Elevated Card">
            Golge ile yukseltiilmis kart.
          </Card>
          <Card variant="outlined" title="Outlined Card">
            Cerceveli kart.
          </Card>
          <Card variant="filled" title="Filled Card" footer={<Button size="sm">Detay</Button>}>
            Dolgulu arka plan.
          </Card>
        </div>
      </section>

      {/* --- ALERTS --- */}
      <section className="space-y-4 max-w-xl">
        <h2 className="text-2xl font-semibold border-b border-icy-pink dark:border-fuchsia-dark pb-2 text-pure-black dark:text-pure-white">
          Alerts
        </h2>
        <Alert variant="info" title="Bilgi">Bilgilendirme mesaji (Info).</Alert>
        <Alert variant="success" title="Basarili">Islem tamamlandi.</Alert>
        <Alert variant="warning" title="Uyari">Dikkat edilmesi gereken durum.</Alert>
        <Alert variant="error" title="Hata" dismissible onDismiss={() => alert('dismiss')}>
          Bir hata olustu.
        </Alert>
      </section>
    </div>
  );
}
