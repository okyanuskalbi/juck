/* ============================================
   Health Talia Dental CRM - Main Application JavaScript
   ============================================ */

// ============================================
// Theme Management (Dark Mode)
// ============================================

function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeIcon(theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.textContent = theme === 'light' ? '🌙' : '☀️';
  }
}

// ============================================
// Currency Management
// ============================================

function initCurrency() {
  const savedCurrency = localStorage.getItem('currency') || 'GBP';
  setCurrency(savedCurrency);
}

function setCurrency(currency) {
  localStorage.setItem('currency', currency);
  const currencyDisplay = document.getElementById('currency-display');
  if (currencyDisplay) {
    currencyDisplay.textContent = currency;
  }
  // Update all price displays
  updatePriceDisplays();
}

function updatePriceDisplays() {
  // This would update all prices on the page based on selected currency
  // In a real app, this would involve exchange rate calculations
}

// ============================================
// Language Management
// ============================================

function initLanguage() {
  const savedLanguage = localStorage.getItem('language') || 'en';
  setLanguage(savedLanguage);
}

function setLanguage(lang) {
  localStorage.setItem('language', lang);
  const languageDisplay = document.getElementById('language-display');
  if (languageDisplay) {
    languageDisplay.textContent = lang.toUpperCase();
  }
  // Update all text on the page
  updateLanguageDisplay();
}

function updateLanguageDisplay() {
  const currentLang = localStorage.getItem('language') || 'en';

  // Update elements with data-lang attribute
  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.getAttribute('data-lang');
    if (translations[currentLang] && translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
    const key = element.getAttribute('data-lang-placeholder');
    if (translations[currentLang] && translations[currentLang][key]) {
      element.placeholder = translations[currentLang][key];
    }
  });
}

// ============================================
// Sidebar Management
// ============================================

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.classList.toggle('collapsed');
    localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
  }
}

function initSidebar() {
  const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
  const sidebar = document.querySelector('.sidebar');
  if (sidebar && isCollapsed) {
    sidebar.classList.add('collapsed');
  }
}

// ============================================
// Mobile Navigation
// ============================================

function toggleMobileMenu() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.classList.toggle('active');
  }
}

// ============================================
// Modal Management
// ============================================

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal when clicking backdrop
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ============================================
// Dropdown Management
// ============================================

function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  if (dropdown) {
    dropdown.classList.toggle('active');
  }
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      dropdown.classList.remove('active');
    });
  }
});

// ============================================
// Tab Management
// ============================================

function switchTab(tabId) {
  // Hide all tab contents
  document.querySelectorAll('.tabs-content').forEach(content => {
    content.classList.remove('active');
  });

  // Remove active class from all tabs
  document.querySelectorAll('.tabs-tab').forEach(tab => {
    tab.classList.remove('active');
  });

  // Show selected tab content
  const selectedContent = document.getElementById(tabId);
  if (selectedContent) {
    selectedContent.classList.add('active');
  }

  // Add active class to selected tab
  const selectedTab = document.querySelector(`[onclick="switchTab('${tabId}')"]`);
  if (selectedTab) {
    selectedTab.classList.add('active');
  }
}

// ============================================
// Toast Notifications
// ============================================

function showToast(message, type = 'info', duration = 3000) {
  const toastContainer = document.getElementById('toast-container') || createToastContainer();

  const toast = document.createElement('div');
  toast.className = `toast alert alert-${type}`;
  toast.innerHTML = `
    <div class="alert-icon">${getToastIcon(type)}</div>
    <div class="alert-content">
      <div class="alert-message">${message}</div>
    </div>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function createToastContainer() {
  const container = document.createElement('div');
  container.id = 'toast-container';
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
}

function getToastIcon(type) {
  const icons = {
    success: '✓',
    warning: '⚠',
    danger: '✕',
    info: 'ℹ'
  };
  return icons[type] || icons.info;
}

// ============================================
// Form Validation
// ============================================

function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  let isValid = true;
  const inputs = form.querySelectorAll('[required]');

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('error');
      isValid = false;
    } else {
      input.classList.remove('error');
    }
  });

  return isValid;
}

// ============================================
// Table Sorting
// ============================================

function sortTable(tableId, columnIndex, isNumeric = false) {
  const table = document.getElementById(tableId);
  if (!table) return;

  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  const sortedRows = rows.sort((a, b) => {
    const aValue = a.cells[columnIndex].textContent.trim();
    const bValue = b.cells[columnIndex].textContent.trim();

    if (isNumeric) {
      return parseFloat(aValue) - parseFloat(bValue);
    }
    return aValue.localeCompare(bValue);
  });

  tbody.innerHTML = '';
  sortedRows.forEach(row => tbody.appendChild(row));
}

// ============================================
// Authentication Check
// ============================================

function checkAuth() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn && !window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/')) {
    window.location.href = '../index.html';
  }
}

function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userEmail');
  window.location.href = '../index.html';
}

// ============================================
// Search Functionality
// ============================================

function searchTable(inputId, tableId) {
  const input = document.getElementById(inputId);
  const table = document.getElementById(tableId);

  if (!input || !table) return;

  const filter = input.value.toLowerCase();
  const rows = table.querySelectorAll('tbody tr');

  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(filter) ? '' : 'none';
  });
}

// ============================================
// Format Currency
// ============================================

function formatCurrency(amount, currency = null) {
  const currencyCode = currency || localStorage.getItem('currency') || 'GBP';
  const symbols = {
    'GBP': '£',
    'EUR': '€',
    'USD': '$'
  };

  return `${symbols[currencyCode] || currencyCode} ${amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

// ============================================
// Format Date
// ============================================

function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

// ============================================
// Pagination
// ============================================

class Pagination {
  constructor(items, itemsPerPage = 10) {
    this.items = items;
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
    this.totalPages = Math.ceil(items.length / itemsPerPage);
  }

  getCurrentPageItems() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.items.slice(start, end);
  }

  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      return this.getCurrentPageItems();
    }
    return null;
  }

  nextPage() {
    return this.goToPage(this.currentPage + 1);
  }

  prevPage() {
    return this.goToPage(this.currentPage - 1);
  }
}

// ============================================
// Initialize Application
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initCurrency();
  initSidebar();
  checkAuth();
});

// ============================================
// Export functions for use in HTML
// ============================================

window.toggleTheme = toggleTheme;
window.setLanguage = setLanguage;
window.setCurrency = setCurrency;
window.toggleSidebar = toggleSidebar;
window.toggleMobileMenu = toggleMobileMenu;
window.openModal = openModal;
window.closeModal = closeModal;
window.toggleDropdown = toggleDropdown;
window.switchTab = switchTab;
window.showToast = showToast;
window.validateForm = validateForm;
window.sortTable = sortTable;
window.logout = logout;
window.searchTable = searchTable;
window.formatCurrency = formatCurrency;
window.formatDate = formatDate;
