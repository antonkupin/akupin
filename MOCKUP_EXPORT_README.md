# Clothing Mockup Generator - Export Guide

## Export Functionality

The Clothing Mockup Generator includes an export feature that allows you to download your mockup designs as PNG images with transparent backgrounds.

## Common Issues and Solutions

### If Export Fails When Running Locally

When opening the HTML file directly in your browser (file:// protocol), you may encounter export issues due to browser security restrictions. Here are the solutions:

### Solution 1: Use a Local Web Server (Recommended)

1. **Using the provided batch file (Windows):**
   - Double-click `start-local-server.bat`
   - Open your browser and go to: `http://localhost:8000/clothing-mockup-generator.html`
   - The export should now work properly

2. **Manual Python server:**
   ```bash
   # Navigate to the brand tools folder
   cd "C:\Users\anton\Desktop\brand tools"
   
   # Start Python server
   python -m http.server 8000
   
   # Open in browser: http://localhost:8000/clothing-mockup-generator.html
   ```

3. **Using Node.js (if installed):**
   ```bash
   npx http-server -p 8000
   ```

### Solution 2: Browser-Specific Settings

- **Chrome:** Use with a local server for best results
- **Firefox:** Generally more permissive with local files
- **Edge:** Similar to Chrome, works best with a server

### Solution 3: Upload to Web Hosting

Upload the files to any web hosting service (GitHub Pages, Netlify, etc.) for full functionality without local restrictions.

## Export Features

- **High Quality:** Exports at 2x resolution for crisp images
- **Transparent Background:** PNG format with alpha channel
- **Clean Export:** Automatically hides UI elements (borders, handles, measurements)
- **Dated Filenames:** Exports as `mockup_YYYYMMDD.png`

## Troubleshooting

1. **"html2canvas library not loaded" error:**
   - Check your internet connection
   - Refresh the page
   - Ensure JavaScript is enabled

2. **Images appear blank or corrupted:**
   - Use a local web server (see Solution 1)
   - Check that all images are properly loaded before exporting

3. **Export button not responding:**
   - Open browser console (F12) to check for errors
   - Try using a different browser
   - Ensure popups are not blocked

## Best Practices

1. Always wait for all images to load before exporting
2. Use Preview Mode to see exactly what will be exported
3. For best quality, avoid excessive blur effects
4. Test export functionality when first setting up

## Support

If you continue to experience issues:
1. Check the browser console for specific error messages
2. Ensure you're using an up-to-date browser
3. Try the fallback export method (automatically activated if primary method fails) 