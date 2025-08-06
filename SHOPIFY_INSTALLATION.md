# Brand Tools - Shopify Installation Guide

This guide will help you install the Brand Tools section on your Shopify store.

## Files Included

1. `brand-tools-section.liquid` - The main Shopify section file
2. `brand-tools.css` - Stylesheet for the brand tools
3. `brand-tools.js` - JavaScript functionality
4. `SHOPIFY_INSTALLATION.md` - This installation guide

## Installation Steps

### Step 1: Upload Files to Shopify

1. **Log into your Shopify Admin**
   - Go to your Shopify admin panel
   - Navigate to **Online Store** > **Themes**

2. **Edit Your Theme**
   - Click **Actions** > **Edit code** on your active theme
   - Or create a duplicate theme to test first

3. **Upload CSS File**
   - In the left sidebar, click on **Assets**
   - Click **Add a new asset**
   - Choose **Create a blank file**
   - Name it `brand-tools.css`
   - Copy and paste the contents of `brand-tools.css` into the file
   - Click **Save**

4. **Upload JavaScript File**
   - In **Assets**, click **Add a new asset** again
   - Choose **Create a blank file**
   - Name it `brand-tools.js`
   - Copy and paste the contents of `brand-tools.js` into the file
   - Click **Save**

5. **Upload Section File**
   - In the left sidebar, click on **Sections**
   - Click **Add a new section**
   - Name it `brand-tools`
   - Copy and paste the contents of `brand-tools-section.liquid` into the file
   - Click **Save**

### Step 2: Add Section to a Page

#### Option A: Add to Homepage
1. Go to **Online Store** > **Themes**
2. Click **Customize** on your active theme
3. Click **Add section**
4. Select **Brand Tools** from the list
5. Configure the settings as needed
6. Click **Save**

#### Option B: Add to a Custom Page
1. Go to **Pages** in your Shopify admin
2. Create a new page or edit an existing one
3. In the page content, add this Liquid code:
   ```liquid
   {% section 'brand-tools' %}
   ```

### Step 3: Configure Section Settings

In the theme customizer, you can configure:

#### **Header Settings**
- **Header Title**: Change the main title (default: "Brand Tools")

#### **Tool Visibility**
- **Show Drop Projection Calculator**: Toggle visibility
- **Show Size Chart Generator**: Toggle visibility  
- **Show Mockup Generator**: Toggle visibility
- **Show Help Link**: Toggle visibility
- **Show Contact Link**: Toggle visibility

#### **Tool URLs**
- **Drop Calculator URL**: Link to your drop calculator page
- **Size Chart URL**: Link to your size chart page
- **Mockup Generator URL**: Link to your mockup generator page
- **Help URL**: Link to your help page
- **Contact URL**: Link to your contact page

### Step 4: Upload Mockup Images

1. **Upload Images to Shopify Files**
   - Go to **Settings** > **Files** in your Shopify admin
   - Upload all your mockup images
   - Copy the URLs of each image

2. **Update Image URLs in JavaScript**
   - Edit the `brand-tools.js` file in **Assets**
   - Replace the placeholder URLs with your actual Shopify image URLs
   - The URLs should look like: `https://cdn.shopify.com/s/files/1/YOUR_STORE_ID/files/FILENAME.png`

### Step 5: Test the Installation

1. **Preview Your Store**
   - Go to your store's homepage or the page where you added the section
   - Test all functionality:
     - Click on the Mockups folder
     - Navigate through the file explorer
     - Test image previews
     - Test download functionality
     - Test the hamburger menu
     - Test the dock at the bottom

2. **Check Mobile Responsiveness**
   - Test on different screen sizes
   - Ensure the interface works well on mobile devices

## Customization Options

### Changing the Background
Edit the CSS file and modify this line in `.brand-tools-container`:
```css
background: url('YOUR_BACKGROUND_IMAGE_URL') no-repeat center center fixed;
```

### Adding More Tools
1. Edit the `brand-tools-section.liquid` file
2. Add new draggable popup elements following the existing pattern
3. Update the navigation menu
4. Add corresponding settings in the schema

### Modifying Colors
Edit the CSS variables or direct color values in `brand-tools.css`:
- Primary blue: `#007aff`
- Background colors: Various rgba values
- Text colors: `#1d1d1f`, `#6e6e73`

## Troubleshooting

### Images Not Loading
- Ensure all image URLs are correct
- Check that images are uploaded to Shopify Files
- Verify the URLs are accessible

### JavaScript Errors
- Check browser console for errors
- Ensure `brand-tools.js` is properly uploaded
- Verify all required elements exist in the HTML

### Styling Issues
- Clear browser cache
- Ensure `brand-tools.css` is properly uploaded
- Check for CSS conflicts with your theme

### Section Not Appearing
- Verify the section is added to the page
- Check that the section file is properly uploaded
- Ensure there are no Liquid syntax errors

## Support

If you encounter issues:
1. Check the browser console for JavaScript errors
2. Verify all files are properly uploaded
3. Test with a different browser
4. Ensure your Shopify theme is compatible

## Features Included

- ✅ macOS-style interface design
- ✅ Draggable folder windows
- ✅ File explorer with navigation
- ✅ Image preview modal
- ✅ Download functionality
- ✅ Responsive design
- ✅ Customizable settings
- ✅ Hamburger navigation menu
- ✅ macOS-style dock
- ✅ Timezone display
- ✅ Organized mockup categories

## File Structure

```
Shopify Theme/
├── Assets/
│   ├── brand-tools.css
│   └── brand-tools.js
└── Sections/
    └── brand-tools-section.liquid
```

Your Brand Tools section is now ready to use on your Shopify store! 