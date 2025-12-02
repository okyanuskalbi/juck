/* ============================================
   White-Label Branding System
   Dynamic clinic/company branding support
   ============================================ */

// Default branding configuration
const defaultBranding = {
  clinicName: 'Your Clinic',
  clinicSubtitle: 'Healthcare Management System',
  clinicLogo: '🏥',
  clinicWebsite: '',
  clinicPhone: '',
  clinicEmail: '',
  clinicAddress: '',

  // Color theme (can be customized per clinic)
  primaryColor: '#06B6D4',
  secondaryColor: '#6366F1',
  accentColor: '#14B8A6',

  // Feature flags
  showLogo: true,
  showPhone: true,
  showEmail: true,
  showAddress: true
};

// Branding manager
class BrandingManager {
  constructor() {
    this.branding = this.loadBranding();
  }

  // Load branding from localStorage
  loadBranding() {
    const saved = localStorage.getItem('clinicBranding');
    if (saved) {
      try {
        return { ...defaultBranding, ...JSON.parse(saved) };
      } catch (e) {
        console.error('Error loading branding:', e);
      }
    }
    return { ...defaultBranding };
  }

  // Save branding to localStorage
  saveBranding(branding) {
    this.branding = { ...this.branding, ...branding };
    localStorage.setItem('clinicBranding', JSON.stringify(this.branding));
    this.applyBranding();
  }

  // Apply branding to current page
  applyBranding() {
    // Update clinic name
    const nameElements = document.querySelectorAll('[data-clinic-name]');
    nameElements.forEach(el => {
      el.textContent = this.branding.clinicName;
    });

    // Update clinic subtitle
    const subtitleElements = document.querySelectorAll('[data-clinic-subtitle]');
    subtitleElements.forEach(el => {
      el.textContent = this.branding.clinicSubtitle;
    });

    // Update clinic logo
    const logoElements = document.querySelectorAll('[data-clinic-logo]');
    logoElements.forEach(el => {
      if (this.branding.clinicLogo.startsWith('http') || this.branding.clinicLogo.startsWith('data:')) {
        // It's an image URL
        el.innerHTML = `<img src="${this.branding.clinicLogo}" alt="Logo" style="width: 100%; height: 100%; object-fit: contain;">`;
      } else {
        // It's an emoji or text
        el.textContent = this.branding.clinicLogo;
      }
    });

    // Update page title
    if (document.title.includes('-')) {
      const titleParts = document.title.split('-');
      document.title = `${titleParts[0].trim()} - ${this.branding.clinicName}`;
    }

    // Update contact info
    if (this.branding.clinicPhone) {
      const phoneElements = document.querySelectorAll('[data-clinic-phone]');
      phoneElements.forEach(el => {
        el.textContent = this.branding.clinicPhone;
        el.href = `tel:${this.branding.clinicPhone}`;
      });
    }

    if (this.branding.clinicEmail) {
      const emailElements = document.querySelectorAll('[data-clinic-email]');
      emailElements.forEach(el => {
        el.textContent = this.branding.clinicEmail;
        el.href = `mailto:${this.branding.clinicEmail}`;
      });
    }

    if (this.branding.clinicAddress) {
      const addressElements = document.querySelectorAll('[data-clinic-address]');
      addressElements.forEach(el => {
        el.textContent = this.branding.clinicAddress;
      });
    }

    // Apply custom colors (if needed)
    if (this.branding.primaryColor) {
      document.documentElement.style.setProperty('--color-primary', this.branding.primaryColor);
    }
  }

  // Get current branding
  getBranding() {
    return { ...this.branding };
  }

  // Reset to default
  resetBranding() {
    this.branding = { ...defaultBranding };
    localStorage.removeItem('clinicBranding');
    this.applyBranding();
  }

  // Initialize branding system
  init() {
    // Apply branding on page load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.applyBranding());
    } else {
      this.applyBranding();
    }

    // Re-apply when language changes
    document.addEventListener('languageChanged', () => this.applyBranding());
  }
}

// Create global instance
const brandingManager = new BrandingManager();

// Initialize on load
brandingManager.init();

// Export for use in other scripts
window.brandingManager = brandingManager;

// Helper functions for easy access
window.updateClinicBranding = function(branding) {
  brandingManager.saveBranding(branding);
  showToast('Clinic branding updated successfully!', 'success');
};

window.getClinicBranding = function() {
  return brandingManager.getBranding();
};

window.resetClinicBranding = function() {
  if (confirm('Reset to default branding? This cannot be undone.')) {
    brandingManager.resetBranding();
    showToast('Branding reset to defaults', 'info');
  }
};
