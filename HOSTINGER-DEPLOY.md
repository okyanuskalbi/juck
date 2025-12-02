# 🚀 Hostinger Node.js Deployment Guide

## ✅ Requirements

1. **Hostinger VPS** or **Cloud Hosting** plan (Node.js NOT supported on shared hosting)
2. **Node.js** 14.x or higher
3. **npm** 6.x or higher

---

## 📋 Pre-Deployment Checklist

Before deploying to Hostinger:

```bash
# 1. Install dependencies locally
npm install

# 2. Test locally
npm start

# 3. Open browser
http://localhost:3000
```

---

## 🔧 Hostinger VPS Deployment

### Method 1: Git Deployment (Recommended)

**1. Connect to your VPS via SSH:**
```bash
ssh username@your-vps-ip
```

**2. Install Node.js (if not installed):**
```bash
# Using Node Version Manager (nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
```

**3. Clone your repository:**
```bash
cd /home/username
git clone https://github.com/okyanuskalbi/juck.git
cd juck
```

**4. Install dependencies:**
```bash
npm install --production
```

**5. Start the server:**
```bash
# Using PM2 (recommended for production)
npm install -g pm2
pm2 start server.js --name health-talia
pm2 save
pm2 startup

# Or using nohup
nohup npm start > app.log 2>&1 &
```

**6. Configure Nginx as reverse proxy:**
```nginx
# /etc/nginx/sites-available/health-talia
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**7. Enable site and restart Nginx:**
```bash
sudo ln -s /etc/nginx/sites-available/health-talia /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

**8. Setup SSL with Let's Encrypt:**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

### Method 2: Manual Upload via FTP/SFTP

**1. Upload files to VPS:**
- Connect via FileZilla or similar
- Upload all project files to `/home/username/juck/`

**2. Connect via SSH and install:**
```bash
cd /home/username/juck
npm install --production
pm2 start server.js --name health-talia
```

---

## 🔄 Update Deployment

```bash
# SSH to VPS
ssh username@your-vps-ip

# Navigate to project
cd /home/username/juck

# Pull latest changes
git pull origin main

# Install any new dependencies
npm install --production

# Restart application
pm2 restart health-talia

# Or without PM2
pkill -f "node server.js"
nohup npm start > app.log 2>&1 &
```

---

## 📊 PM2 Management Commands

```bash
# Start app
pm2 start server.js --name health-talia

# Stop app
pm2 stop health-talia

# Restart app
pm2 restart health-talia

# View logs
pm2 logs health-talia

# Monitor
pm2 monit

# List all apps
pm2 list

# Save configuration
pm2 save

# Auto-start on reboot
pm2 startup
```

---

## 🔍 Troubleshooting

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 PID
```

### Permission Denied
```bash
# Fix permissions
chmod -R 755 /home/username/juck
chown -R username:username /home/username/juck
```

### App Not Starting
```bash
# Check logs
pm2 logs health-talia

# Or check app.log
tail -f app.log

# Test manually
cd /home/username/juck
node server.js
```

### Nginx Not Working
```bash
# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Check Nginx logs
sudo tail -f /var/log/nginx/error.log
```

---

## 🌐 Environment Variables

**Set environment variables in PM2:**
```bash
pm2 start server.js --name health-talia --env production
```

**Or create ecosystem config:**
```javascript
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'health-talia',
    script: './server.js',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};

// Start with config
pm2 start ecosystem.config.js
```

---

## 🔒 Security Recommendations

1. **Firewall:**
```bash
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable
```

2. **Keep Node.js Updated:**
```bash
nvm install --lts
nvm use --lts
```

3. **Regular Updates:**
```bash
npm audit
npm audit fix
```

4. **Backup:**
```bash
# Create backup script
tar -czf backup-$(date +%Y%m%d).tar.gz /home/username/juck
```

---

## 📱 Testing Deployment

**1. Check if server is running:**
```bash
curl http://localhost:3000
```

**2. Check from outside:**
```bash
curl http://your-domain.com
```

**3. Check logs:**
```bash
pm2 logs health-talia --lines 100
```

---

## 🎯 Performance Optimization

**1. Enable Gzip Compression (already in server.js)**

**2. PM2 Cluster Mode:**
```bash
pm2 start server.js -i max --name health-talia
```

**3. Nginx Caching:**
```nginx
# Add to Nginx config
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 30d;
    add_header Cache-Control "public, immutable";
}
```

---

## 📞 Support Resources

- **Hostinger Support:** https://www.hostinger.com/support
- **PM2 Documentation:** https://pm2.keymetrics.io/
- **Node.js Documentation:** https://nodejs.org/docs/

---

## ✅ Post-Deployment Verification

After deployment, verify:

- [ ] Homepage loads: http://your-domain.com
- [ ] Dashboard works: http://your-domain.com/pages/dashboard.html
- [ ] Treatment planner works: http://your-domain.com/pages/treatment-planner.html
- [ ] PDF generation works
- [ ] White-label branding works (Settings page)
- [ ] Dark mode toggle works
- [ ] Language switcher works (EN/TR)
- [ ] All static assets load (CSS, JS, images)

---

**Version:** 1.0.0
**Last Updated:** December 2, 2025
**Status:** Production Ready ✅
