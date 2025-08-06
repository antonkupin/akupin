# Deployment Guide

## 🚀 Deploy to GitHub Pages

### Step 1: Install Git (if not already installed)

Download and install Git from: https://git-scm.com/downloads

### Step 2: Initialize Git Repository

```bash
# Navigate to your project directory
cd "C:\Users\anton\Desktop\brand tools"

# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Brand tools portfolio with TIYPN SS25 collection"
```

### Step 3: Create GitHub Repository

1. Go to https://github.com
2. Click "New repository"
3. Name it `brand-tools` or `portfolio`
4. Make it public
5. Don't initialize with README (we already have one)

### Step 4: Connect and Push to GitHub

```bash
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/brand-tools.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch
6. Select "/ (root)" folder
7. Click "Save"

### Step 6: Configure for GitHub Pages

Since your main site is in the `akupin` folder, you need to either:

**Option A: Move files to root**
```bash
# Copy akupin contents to root
copy akupin\* .
# Then commit and push
git add .
git commit -m "Move site files to root for GitHub Pages"
git push
```

**Option B: Use custom domain**
1. In GitHub Pages settings, set custom domain to your domain
2. Add CNAME file to root with your domain

**Option C: Deploy from akupin folder**
1. In GitHub Pages settings, set source to "main" branch
2. Set folder to "/akupin"
3. Your site will be at: `https://your-username.github.io/brand-tools/akupin/`

## 🌐 Alternative Deployment Options

### Netlify (Recommended)

1. Go to https://netlify.com
2. Drag and drop the `akupin` folder
3. Your site will be live instantly
4. You can set up custom domain later

### Vercel

1. Go to https://vercel.com
2. Connect your GitHub repository
3. Deploy automatically on every push

### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init hosting

# Deploy
firebase deploy
```

## 📝 Update Instructions

After making changes:

```bash
# Add all changes
git add .

# Commit with descriptive message
git commit -m "Update TIYPN SS25 gallery with new images"

# Push to GitHub
git push origin main
```

## 🔧 Troubleshooting

### Images not loading
- Check file paths are correct
- Ensure images are in the right folder
- Verify file names match exactly (case-sensitive)

### GitHub Pages not updating
- Wait 5-10 minutes for changes to propagate
- Check GitHub Actions for build errors
- Verify branch and folder settings

### Local server issues
```bash
# Try different ports
py -m http.server 3000
py -m http.server 8080

# Or use Node.js if available
npx serve akupin
```

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify all file paths are correct
3. Ensure all images are properly copied
4. Test locally before deploying

---

**Your site should now be live at: `https://your-username.github.io/brand-tools/`** 