# Health Talia - Doctor Appointment & Clinic Management System

> Modern Medical & Healthcare UI Design - Complete Doctor Appointment and Clinic Management System

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-production-success.svg)

## 🏥 Overview

Health Talia is a comprehensive doctor appointment and clinic management system featuring bilingual support (Turkish/English), multi-currency pricing (GBP/EUR/USD), and modern medical-grade styling. The application manages patient records, appointment scheduling, treatment planning with multi-visit support, payment tracking, expense management, and generates professional PDF treatment quotes.

## ✨ Features

### 🎯 Core Functionality
- **Patient Management**: Complete patient record system with search, filter, and detailed profiles
- **Treatment Planning**: Multi-visit treatment planner with drag-and-drop functionality
- **Payment Tracking**: Comprehensive payment entry and history tracking
- **Expense Management**: Track clinic expenses with plan linking and profit calculation
- **Reports Dashboard**: Financial reports, treatment statistics, and patient analytics
- **PDF Generation**: Professional treatment plan quotes with customizable templates

### 🌐 International Support
- **Bilingual Interface**: Full Turkish and English language support
- **Multi-Currency**: GBP, EUR, and USD pricing with real-time conversion
- **Localized Content**: Date formats, number formats, and cultural customization

### 🎨 Design System
- **Professional Medical UI**: Clean, trust-building design with medical-grade aesthetics
- **Dark Mode**: Full dark mode support with seamless transitions
- **Responsive Design**: Works perfectly on desktop (1024px+), tablet, and mobile
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation support

## 📁 Project Structure

```
juck/
├── index.html              # Login page
├── pages/                  # Application pages
│   ├── dashboard.html      # Main dashboard with KPI cards
│   ├── patients.html       # Patient management
│   ├── treatment-planner.html  # Treatment planning tool
│   ├── treatment-history.html  # Treatment history
│   ├── payments.html       # Payment tracking
│   ├── expenses.html       # Expense management
│   ├── reports.html        # Reports dashboard
│   ├── settings.html       # System settings
│   └── admin.html          # Admin panel
├── css/                    # Stylesheets
│   ├── design-system.css   # Design tokens and variables
│   ├── components.css      # Reusable UI components
│   └── layout.css          # Layout structure
├── js/                     # JavaScript files
│   ├── app.js              # Main application logic
│   └── translations.js     # Bilingual translations
└── assets/                 # Static assets
    └── images/             # Image files
```

## 🎨 Design System

### Color Palette (Modern Medical Theme)

```css
Primary (Medical Cyan):    #06B6D4
Secondary (Indigo):        #6366F1
Accent (Teal):             #14B8A6
Success (Green):           #10B981
Warning (Orange):          #F97316
Danger (Red):              #EF4444
Background (Light):        #F9FAFB
```

### Typography

- **Font Family**: Inter
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Heading Sizes**: H1 (32px), H2 (24px), H3 (20px), H4 (16px)
- **Body Text**: 14px with proper line-height

### Components

- ✅ Buttons (primary, secondary, ghost, outline + small/medium/large sizes)
- ✅ Form inputs with labels and validation states
- ✅ Dropdown/select menus with search capability
- ✅ Tables with sortable columns and pagination
- ✅ Cards with consistent padding and shadows
- ✅ Modals/dialogs for confirmations
- ✅ Tabs for multi-section views
- ✅ Badges for status indicators
- ✅ Sidebars with collapsible navigation
- ✅ Toast notifications
- ✅ Loading spinners
- ✅ Avatars
- ✅ Toggle switches

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic web server (optional for local development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/health-talia-crm.git
cd health-talia-crm
```

2. Open `index.html` in your browser or serve with a local server:

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js:**
```bash
npx http-server
```

3. Navigate to `http://localhost:8000` in your browser

### Login Credentials

For demo purposes:
- **Email**: admin@healthtalia.com
- **Password**: Any password (demo mode)

## 📱 Screen Reference

### 1. Login Page
- Email/password authentication
- Language selector (English/Turkish)
- Theme toggle (Light/Dark)
- Clean, professional design

### 2. Dashboard
- KPI cards (Revenue, Expenses, Profit, Active Patients)
- Recent activities feed
- Quick statistics with progress bars
- Upcoming appointments table

### 3. Patients Management
- Patient list with search and filters
- Add/Edit/Delete patient records
- Patient details modal
- Contact information and medical history

### 4. Treatment Planner
- Multi-visit treatment planning
- Drag-and-drop treatment items
- Real-time pricing calculation
- PDF export functionality

### 5. Treatment History
- Historical treatment plans
- PDF preview and export
- Status tracking (Completed, In Progress, Pending)

### 6. Payments Tracking
- Payment entry forms
- Payment history by patient
- Outstanding payment tracking
- Multiple payment methods support

### 7. Expenses Management
- Expense entry with categorization
- Plan linking for treatment-related expenses
- Profit calculation
- Expense history and reporting

### 8. Reports Dashboard
- Financial reports and charts
- Treatment statistics
- Patient analytics
- Revenue growth tracking

### 9. Settings
- **Clinic Information**: Logo, name, address, contact
- **Treatments Catalog**: Service pricing in all currencies
- **PDF Settings**: Customization options for exports
- **User Preferences**: Language, currency, theme

### 10. Admin Panel
- **User Management**: Add/edit/delete users
- **Roles & Permissions**: Role-based access control
- **SMTP Settings**: Email configuration
- **System Logs**: Activity tracking

## 🌍 Internationalization

### Supported Languages

1. **English (EN)** - Default
2. **Turkish (TR)** - Full translation

### Switching Languages

Use the language selector in the header:
```javascript
setLanguage('en')  // Switch to English
setLanguage('tr')  // Switch to Turkish
```

### Supported Currencies

1. **GBP (£)** - British Pound
2. **EUR (€)** - Euro
3. **USD ($)** - US Dollar

## 🎨 Theming

### Dark Mode

Toggle between light and dark modes:
```javascript
toggleTheme()
```

Themes are automatically persisted in localStorage.

### Customization

Modify CSS variables in `css/design-system.css`:

```css
:root {
  --color-primary: #2563EB;
  --color-secondary: #F59E0B;
  /* Add your custom colors */
}
```

## 🔐 Security Features

- Client-side authentication (demo)
- Role-based access control (RBAC)
- Session management with localStorage
- Input validation on all forms
- XSS and SQL injection prevention patterns

## 📱 Responsive Design

### Breakpoints

- **Desktop**: 1024px and above (primary focus)
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

### Mobile Features

- Collapsible sidebar navigation
- Touch-friendly buttons and inputs
- Optimized table layouts
- Responsive grid system

## ♿ Accessibility

- **WCAG 2.1 AA** compliant
- High contrast ratios for all text
- Keyboard navigation support
- ARIA labels on interactive elements
- Focus indicators on all focusable elements
- Semantic HTML structure

## 🛠️ Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **LocalStorage API**: Client-side data persistence
- **Google Fonts**: Inter font family

## 📊 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (partial support)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - Initial work - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Design inspired by modern medical SaaS applications
- Inter font by Rasmus Andersson
- Icons: Unicode emoji (cross-platform compatible)

## 📞 Support

For support, email support@healthtalia.com or open an issue on GitHub.

## 🗺️ Roadmap

- [ ] Backend API integration
- [ ] Real-time notifications with WebSockets
- [ ] Advanced reporting with charts (Chart.js)
- [ ] Email automation
- [ ] Appointment scheduling calendar
- [ ] SMS notifications
- [ ] Multi-clinic support
- [ ] Mobile app (React Native)

## 📸 Screenshots

### Dashboard
![Dashboard](assets/screenshots/dashboard.png)

### Patient Management
![Patients](assets/screenshots/patients.png)

### Treatment Planner
![Treatment Planner](assets/screenshots/treatment-planner.png)

---

**Built with ❤️ for dental professionals worldwide**

**Version**: 1.0.0
**Last Updated**: December 2, 2025
**Status**: Production Ready ✅
