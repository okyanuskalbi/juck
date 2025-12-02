/* ============================================
   Health Talia - Node.js Express Server
   Serves static HTML/CSS/JS files
   Compatible with Hostinger Node.js Hosting
   ============================================ */

const express = require('express');
const compression = require('compression');
const path = require('path');

// Initialize Express app
const app = express();

// Get port from environment variable (Hostinger sets this) or use 3000 for local
const PORT = process.env.PORT || 3000;

// Enable gzip compression for better performance
app.use(compression());

// Serve static files from root directory
app.use(express.static(path.join(__dirname), {
  extensions: ['html'],  // Allow .html extension to be omitted
  index: 'index.html',   // Default file
  maxAge: '1d'          // Cache static assets for 1 day
}));

// Serve CSS files
app.use('/css', express.static(path.join(__dirname, 'css'), {
  maxAge: '7d',
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

// Serve JavaScript files
app.use('/js', express.static(path.join(__dirname, 'js'), {
  maxAge: '7d',
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// Serve pages directory
app.use('/pages', express.static(path.join(__dirname, 'pages'), {
  extensions: ['html'],
  maxAge: '1d'
}));

// Serve assets directory
app.use('/assets', express.static(path.join(__dirname, 'assets'), {
  maxAge: '30d'  // Cache images longer
}));

// Health check endpoint (useful for monitoring)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// API endpoint to get clinic branding (future use)
app.get('/api/branding', (req, res) => {
  res.json({
    message: 'Branding is stored in browser localStorage',
    defaultBranding: {
      clinicName: 'Your Clinic',
      clinicLogo: '🏥',
      clinicSubtitle: 'Healthcare Management System'
    }
  });
});

// Redirect /dashboard to /pages/dashboard.html
app.get('/dashboard', (req, res) => {
  res.redirect('/pages/dashboard.html');
});

// Catch-all route - serve index.html for any unmatched routes
// This enables client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════╗
║                                                        ║
║   🏥 Health Talia Healthcare Management System       ║
║                                                        ║
║   ✅ Server running on port ${PORT}                      ║
║   🌐 Local:  http://localhost:${PORT}                   ║
║   📁 Serving static files from: ${__dirname}
║                                                        ║
║   🚀 Ready for production!                            ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
  `);

  console.log('Environment:', process.env.NODE_ENV || 'development');
  console.log('Node version:', process.version);
  console.log('\nPress Ctrl+C to stop the server\n');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('\nSIGTERM received. Shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('\nSIGINT received. Shutting down gracefully...');
  process.exit(0);
});
