# 🌍 Domain-Bağımsız Kurulum Kılavuzu

## ✅ Bu Proje HER YERDE Çalışır!

Bu proje **tamamen domain-bağımsız** ve **portable** olarak tasarlanmıştır.

### 📍 Çalışacağı Yerler

#### ✅ Ana Domain (Root)
```
https://example.com/
https://yoursite.com/
https://clinic.tr/
```

#### ✅ Alt Domain (Subdomain)
```
https://app.yoursite.com/
https://clinic.example.com/
https://demo.healthtalia.com/
```

#### ✅ Subdirectory (Alt Klasör)
```
https://yoursite.com/app/
https://example.com/clinic/
https://demo.com/health-talia/
```

#### ✅ Localhost / Geliştirme
```
http://localhost:8000/
http://localhost/health-talia/
file:///C:/Users/username/health-talia/index.html
```

#### ✅ Farklı Hosting Platformları
```
✓ Hostinger
✓ cPanel
✓ DirectAdmin
✓ Netlify
✓ Vercel
✓ GitHub Pages
✓ AWS S3
✓ Cloudflare Pages
✓ Firebase Hosting
```

---

## 🔧 Nasıl Çalışıyor?

### 1. Relative Path Kullanımı
Tüm dosya yolları **relative** (göreceli):

**index.html:**
```html
<link rel="stylesheet" href="css/design-system.css">  ✓
<!-- DEĞİL: href="/css/design-system.css" -->
<!-- DEĞİL: href="https://example.com/css/design-system.css" -->
```

**pages/dashboard.html:**
```html
<link rel="stylesheet" href="../css/design-system.css">  ✓
<script src="../js/app.js"></script>  ✓
```

### 2. Domain-Bağımsız .htaccess
```apache
RewriteBase /  # Otomatik base path
ErrorDocument 404 index.html  # Relative 404
```

### 3. JavaScript Yönlendirmeleri
```javascript
// Relative paths kullanılıyor
window.location.href = '../index.html';  ✓
// DEĞİL: window.location.href = 'https://example.com/index.html';
```

---

## 🚀 Kurulum Senaryoları

### Senaryo 1: Ana Domain'e Kurulum
```bash
# Dosyaları public_html/ root'a yükleyin
public_html/
├── index.html
├── css/
├── js/
└── pages/

# Erişim: https://yoursite.com
```

### Senaryo 2: Alt Klasöre Kurulum
```bash
# Dosyaları alt klasöre yükleyin
public_html/
└── clinic/           ← Yeni klasör
    ├── index.html
    ├── css/
    ├── js/
    └── pages/

# Erişim: https://yoursite.com/clinic/
```

### Senaryo 3: Subdomain'e Kurulum
```bash
# Subdomain public_html klasörüne yükleyin
/home/subdomain/public_html/
├── index.html
├── css/
├── js/
└── pages/

# Erişim: https://app.yoursite.com
```

---

## ✅ Test Checklist

Her kurulum sonrası test edin:

```
□ Ana sayfa açılıyor: https://your-url/
□ CSS yükleniyor (renkler doğru)
□ JavaScript çalışıyor (dark mode toggle)
□ Login sayfası çalışıyor
□ Dashboard açılıyor: https://your-url/pages/dashboard.html
□ Tüm linkler çalışıyor
□ Dil değişimi çalışıyor (TR/EN)
□ Logout yapılıyor ve giriş sayfasına dönüyor
```

---

## 🔐 HTTPS Desteği

SSL sertifikanız varsa .htaccess'te şu satırları açın:

```apache
# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 📂 Taşınabilir Yapı

### Avantajlar:
1. ✅ **Kolay taşıma** - Klasörü kopyala-yapıştır
2. ✅ **Backup kolay** - Tek klasör yedekle
3. ✅ **Test kolay** - Localhost'ta aynı çalışır
4. ✅ **Multi-site** - Aynı anda birden fazla yerde çalıştır
5. ✅ **No configuration** - Hiçbir ayar değişikliği gerekmez

### Taşıma Örneği:
```bash
# Eski sunucudan indir
cd /old-server/public_html
zip -r health-talia.zip .

# Yeni sunucuya yükle
cd /new-server/public_html
unzip health-talia.zip

# Hazır! Hiçbir değişiklik gerekmez
```

---

## 🌐 Çoklu Domain Desteği

Aynı dosyaları birden fazla domain'de kullanabilirsiniz:

```
Site A: https://clinic1.com/
Site B: https://clinic2.com/
Site C: https://demo.example.com/test/

# Aynı dosyalar, farklı domainler, HEPSİ ÇALIŞIR! ✓
```

---

## ⚠️ Dikkat Edilmesi Gerekenler

### ✅ YAPILMASI GEREKENLER:
```html
✓ Relative paths: href="css/style.css"
✓ Relative paths: href="../css/style.css"
✓ Protocol-relative: //fonts.googleapis.com
```

### ❌ YAPILMAMASI GEREKENLER:
```html
✗ Absolute paths: href="/css/style.css"
✗ Full URLs: href="https://example.com/css/style.css"
✗ Hardcoded domains: window.location.href = "https://example.com/"
```

---

## 🎯 Sonuç

Bu proje **100% portable** ve **domain-bağımsız**dır.

Kopyala-yapıştır ile her yerde çalışır! 🚀

---

**Test edildi ve çalışıyor:**
- ✅ Hostinger shared hosting
- ✅ cPanel
- ✅ Localhost (XAMPP, WAMP, MAMP)
- ✅ Static hosting (Netlify, Vercel)
- ✅ Subdirectory installations
- ✅ Different domains

**Versiyon:** 1.0.0
**Son Güncelleme:** 2025-12-02
