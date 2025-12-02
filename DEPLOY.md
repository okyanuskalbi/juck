# 🚀 Hostinger Deployment Guide / Hostinger Yükleme Kılavuzu

## TR - Türkçe Kurulum

### Yöntem 1: Git ile Otomatik Yükleme (Önerilen)

1. **Hostinger Panel'e giriş yapın**
   - hpanel.hostinger.com

2. **Git'i seçin**
   - Website bölümüne gidin
   - "Import from Git" veya "Git'ten İçe Aktar" seçeneğine tıklayın

3. **Repository bilgilerini girin**
   ```
   Repository URL: https://github.com/okyanuskalbi/juck
   Branch: main
   ```

4. **Deploy klasörünü seçin**
   ```
   Deployment path: public_html
   ```

5. **Deploy edin**
   - "Import" veya "İçe Aktar" butonuna tıklayın
   - Sistem otomatik olarak dosyaları yükleyecek

### Yöntem 2: File Manager ile Manuel Yükleme

1. **Hostinger File Manager'a gidin**
   - hPanel → Files → File Manager

2. **public_html klasörüne gidin**

3. **Tüm dosyaları yükleyin**
   - Aşağıdaki dosya ve klasörleri sürükle-bırak ile yükleyin:
   ```
   ✓ index.html
   ✓ .htaccess
   ✓ css/
   ✓ js/
   ✓ pages/
   ✓ assets/
   ```

4. **İzinleri kontrol edin**
   - Dosyalar: 644
   - Klasörler: 755

### Yöntem 3: FTP ile Yükleme

1. **FTP bilgilerinizi alın**
   - hPanel → Files → FTP Accounts

2. **FTP istemcisi kullanın** (FileZilla, WinSCP vb.)
   ```
   Host: ftp.sitenizin-adresi.com
   Username: FTP kullanıcı adınız
   Password: FTP şifreniz
   Port: 21
   ```

3. **Dosyaları yükleyin**
   - Local: Proje klasörünüz
   - Remote: /public_html/

---

## EN - English Setup

### Method 1: Automatic Git Deployment (Recommended)

1. **Login to Hostinger Panel**
   - hpanel.hostinger.com

2. **Select Git**
   - Go to Website section
   - Click "Import from Git"

3. **Enter repository details**
   ```
   Repository URL: https://github.com/okyanuskalbi/juck
   Branch: main
   ```

4. **Select deployment folder**
   ```
   Deployment path: public_html
   ```

5. **Deploy**
   - Click "Import" button
   - System will automatically upload files

### Method 2: Manual Upload via File Manager

1. **Go to Hostinger File Manager**
   - hPanel → Files → File Manager

2. **Navigate to public_html folder**

3. **Upload all files**
   - Drag and drop these files and folders:
   ```
   ✓ index.html
   ✓ .htaccess
   ✓ css/
   ✓ js/
   ✓ pages/
   ✓ assets/
   ```

4. **Check permissions**
   - Files: 644
   - Folders: 755

### Method 3: FTP Upload

1. **Get FTP credentials**
   - hPanel → Files → FTP Accounts

2. **Use FTP client** (FileZilla, WinSCP, etc.)
   ```
   Host: ftp.your-domain.com
   Username: Your FTP username
   Password: Your FTP password
   Port: 21
   ```

3. **Upload files**
   - Local: Your project folder
   - Remote: /public_html/

---

## ✅ Kontrol / Verification

Yükleme tamamlandıktan sonra / After upload:

1. **Siteyi test edin / Test the site:**
   ```
   https://your-domain.com
   ```

2. **Kontrol listesi / Checklist:**
   - ✓ Ana sayfa açılıyor mu? / Homepage loads?
   - ✓ Login çalışıyor mu? / Login works?
   - ✓ Renkler doğru mu? / Colors correct?
   - ✓ Dark mode çalışıyor mu? / Dark mode works?
   - ✓ Türkçe/İngilizce dil değişimi? / TR/EN language switch?

---

## 🔧 Sorun Giderme / Troubleshooting

### Sorun: 404 Not Found
**Çözüm:** `.htaccess` dosyasının yüklendiğinden emin olun

### Sorun: CSS/JS yüklenmiyor
**Çözüm:** Dosya izinlerini kontrol edin (644)

### Sorun: Sayfa boş görünüyor
**Çözüm:** Tarayıcı önbelleğini temizleyin (Ctrl+F5)

---

## 📞 Destek / Support

Sorun yaşarsanız / If you encounter issues:
- Hostinger Support: support@hostinger.com
- GitHub Issues: https://github.com/okyanuskalbi/juck/issues

---

**Başarılı deployment dileklerimizle! / Best wishes for successful deployment!** 🎉
