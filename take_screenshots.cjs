const puppeteer = require('puppeteer');
const { spawn } = require('child_process');
const fs = require('fs');

if (!fs.existsSync('screenshots')){
    fs.mkdirSync('screenshots');
}

// Start Vite server
const server = spawn('npm', ['run', 'dev'], { shell: true });

setTimeout(async () => {
    try {
        console.log("Sunucu baslatildi, tarayici aciliyor...");
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        // Masaustu
        await page.setViewport({ width: 1280, height: 1024 });
        await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });
        await page.screenshot({ path: 'screenshots/screenshot-desktop.png', fullPage: true });
        console.log("1. Desktop basarili");
        
        // Tablet
        await page.setViewport({ width: 768, height: 1024 });
        await page.screenshot({ path: 'screenshots/screenshot-tablet.png', fullPage: true });
        console.log("2. Tablet basarili");

        // Mobil
        await page.setViewport({ width: 375, height: 812 });
        await page.screenshot({ path: 'screenshots/screenshot-mobile.png', fullPage: true });
        console.log("3. Mobil basarili");

        await browser.close();
    } catch (e) {
        console.error("Hata olustu:", e);
    } finally {
        server.kill();
        process.exit(0);
    }
}, 4000); // Vite dev server'in acilmasi icin 4 saniye bekle
