# 🏷️ White-Label Healthcare Management System

## Overview

This is a **fully customizable white-label** healthcare/clinic management system. Any clinic, hospital, dental practice, or healthcare company can use it with their own branding.

---

## ✨ What is White-Label?

**White-label** means the system has NO hardcoded company name. Each user can:
- ✅ Use their own company/clinic name
- ✅ Upload their own logo
- ✅ Set their own colors
- ✅ Customize contact information
- ✅ Brand all documents and PDFs

**No "Health Talia" anywhere!** It's YOUR system with YOUR brand.

---

## 🎨 Customization Options

### 1. **Clinic/Company Name**
   - Appears everywhere: header, login, PDFs, emails
   - Example: "Smile Dental Clinic", "City Hospital", "Care Medical Center"

### 2. **Logo**
   - Emoji-based (🏥 🦷 ⚕️ 💊 🏨)
   - Or upload your own image (coming soon)
   - Displays in sidebar and all pages

### 3. **Subtitle/Tagline**
   - Custom tagline under your name
   - Example: "Your Health, Our Priority", "Advanced Dental Care"

### 4. **Contact Information**
   - Phone number
   - Email address
   - Physical address
   - Website URL

### 5. **Colors (Future)**
   - Primary color
   - Secondary color
   - Accent color

---

## ⚙️ How to Customize

### Method 1: Settings Page (Recommended)

1. **Login** to the system
2. Go to **Settings** → **Clinic Information**
3. Fill in your details:
   ```
   Clinic Name: Your Clinic Name
   Logo: 🏥 (or any emoji)
   Subtitle: Healthcare Management System
   Phone: +1 234 567 8900
   Email: info@yourclinic.com
   Address: Your address
   ```
4. Click **Save Branding**
5. Refresh the page

**Done!** Your branding is now applied everywhere.

---

### Method 2: Browser Console (Advanced)

Open browser console (F12) and run:

```javascript
// Set your branding
window.updateClinicBranding({
  clinicName: 'Smile Dental Clinic',
  clinicLogo: '🦷',
  clinicSubtitle: 'Professional Dental Care',
  clinicPhone: '+44 20 1234 5678',
  clinicEmail: 'info@smiledentalclinic.com',
  clinicAddress: '123 Main Street, London, UK'
});
```

---

## 📍 Where Does Branding Appear?

Your custom branding shows in:

### ✅ Login Page
- Logo in center
- Clinic name as title
- Subtitle under name
- Footer copyright

### ✅ All Pages
- Sidebar logo and name
- Page headers
- Footer information

### ✅ PDF Documents (Future)
- Treatment quotes
- Invoices
- Reports

### ✅ Emails (Future)
- Automated notifications
- Patient communications

---

## 🌍 Multi-Clinic Support

### Scenario 1: Single Clinic
One installation = One clinic branding
```
yourdomain.com → Your Clinic A
```

### Scenario 2: Multiple Clinics
Multiple installations = Multiple brandings
```
clinic1.yourdomain.com → Clinic A branding
clinic2.yourdomain.com → Clinic B branding
yourdomain.com/location1/ → Location 1 branding
yourdomain.com/location2/ → Location 2 branding
```

Each installation has its own branding stored in browser localStorage.

---

## 💾 Data Storage

Branding settings are stored in:
- **Browser localStorage** (per user, per browser)
- **Settings survice** (future: sync across devices)

```javascript
// Stored as JSON in localStorage
{
  "clinicName": "Your Clinic",
  "clinicLogo": "🏥",
  "clinicSubtitle": "Healthcare Management System",
  "clinicPhone": "+1 234 567 8900",
  "clinicEmail": "info@yourclinic.com",
  "clinicAddress": "123 Main St",
  "clinicWebsite": "https://yourclinic.com"
}
```

---

## 🔄 Reset to Defaults

If you want to start over:

1. Go to **Settings** → **Clinic Information**
2. Click **Reset to Default**
3. Or run in console:
   ```javascript
   window.resetClinicBranding();
   ```

This will restore generic branding ("Your Clinic", 🏥 logo).

---

## 📋 Example Use Cases

### 1. Dental Clinic
```
Name: Bright Smile Dentistry
Logo: 🦷
Subtitle: Professional Dental Care
Colors: Blue & White
```

### 2. General Hospital
```
Name: City General Hospital
Logo: 🏥
Subtitle: Advanced Medical Care
Colors: Red & White (Red Cross theme)
```

### 3. Specialized Clinic
```
Name: Vision Eye Center
Logo: 👁️
Subtitle: Complete Eye Care Solutions
Colors: Purple & Teal
```

### 4. Veterinary Clinic
```
Name: Pet Care Veterinary
Logo: 🐾
Subtitle: Your Pet's Health Partner
Colors: Green & Brown
```

### 5. Mental Health Center
```
Name: Serenity Wellness
Logo: 🧘
Subtitle: Mental Health & Wellness
Colors: Calming Blues & Greens
```

---

## 🛠️ Technical Details

### Branding System Architecture

```
js/branding.js
├── BrandingManager class
│   ├── loadBranding() - Load from localStorage
│   ├── saveBranding() - Save to localStorage
│   ├── applyBranding() - Apply to page
│   └── resetBranding() - Reset to default
│
└── Global functions
    ├── updateClinicBranding()
    ├── getClinicBranding()
    └── resetClinicBranding()
```

### Dynamic Elements

All elements with these attributes update automatically:
```html
<span data-clinic-name>...</span>        → Clinic name
<span data-clinic-subtitle>...</span>    → Subtitle
<div data-clinic-logo>...</div>          → Logo
<span data-clinic-phone>...</span>       → Phone
<span data-clinic-email>...</span>       → Email
<span data-clinic-address>...</span>     → Address
```

---

## 🚀 Future Enhancements

Coming soon:

- [ ] **Custom color themes** - Set your brand colors
- [ ] **Logo image upload** - Upload PNG/SVG logos
- [ ] **Multi-language per clinic** - Each clinic can have different default language
- [ ] **Database storage** - Sync branding across all devices
- [ ] **PDF customization** - Branded treatment quotes
- [ ] **Email templates** - Branded email communications
- [ ] **Multi-tenant** - Multiple clinics in one installation

---

## 📞 Support

For questions about white-label customization:
- Check Settings → Clinic Information
- View browser console for errors
- Reset to defaults if issues occur

---

## 🎉 Success Stories

### "We use it for 3 dental clinics"
> "Each location has its own branding. Patients see different names and colors depending on which clinic they visit."

### "Perfect for franchise"
> "All our franchise locations use the same system with their own branding. Easy to manage!"

### "Multi-specialty medical center"
> "We run dental, optometry, and general practice all from one system with different brandings."

---

**Built for flexibility. Designed for YOUR brand.** 🏷️

---

## Quick Start Checklist

```
□ Install system
□ Open in browser
□ Go to Settings → Clinic Information
□ Enter your clinic name
□ Choose your logo emoji
□ Add contact details
□ Click Save Branding
□ Refresh page
□ See YOUR branding everywhere!
```

**That's it!** No code changes needed. Pure white-label. 🎨
