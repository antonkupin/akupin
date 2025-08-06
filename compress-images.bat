@echo off
echo ========================================
echo    TIYPN SS25 Image Compression Tool
echo ========================================
echo.
echo This script will help you compress images for faster loading.
echo.
echo OPTIONS:
echo 1. Use the HTML compressor (recommended)
echo 2. Use online compression tools
echo 3. Manual compression instructions
echo.
set /p choice="Choose an option (1-3): "

if "%choice%"=="1" goto html_compressor
if "%choice%"=="2" goto online_tools
if "%choice%"=="3" goto manual_instructions
goto invalid_choice

:html_compressor
echo.
echo Opening HTML image compressor...
echo 1. Open compress-images.html in your browser
echo 2. Drag and drop your images
echo 3. Adjust quality slider (70%% recommended)
echo 4. Click "Compress Images"
echo 5. Download the compressed versions
echo 6. Replace original images with compressed ones
echo.
pause
start compress-images.html
goto end

:online_tools
echo.
echo Online Image Compression Tools:
echo.
echo 1. TinyPNG (https://tinypng.com)
echo    - Drag and drop images
echo    - Automatic compression
echo    - Download optimized versions
echo.
echo 2. Squoosh (https://squoosh.app)
echo    - Advanced compression options
echo    - Multiple format support
echo    - Quality control
echo.
echo 3. ImageOptim (https://imageoptim.com)
echo    - Desktop app for Mac
echo    - Batch processing
echo.
echo 4. Compressor.io (https://compressor.io)
echo    - Simple web interface
echo    - Good compression ratios
echo.
pause
goto end

:manual_instructions
echo.
echo Manual Image Compression Instructions:
echo.
echo 1. Open your images in any image editor (Paint, GIMP, Photoshop)
echo 2. Resize images to maximum 800x600 pixels
echo 3. Save as JPEG with 70%% quality
echo 4. For thumbnails, resize to 150x100 pixels
echo 5. Save thumbnails as JPEG with 60%% quality
echo.
echo File size targets:
echo - Main images: Under 200 KB each
echo - Thumbnails: Under 50 KB each
echo.
echo Replace the original PNG files with compressed JPEG versions
echo Update the HTML file to use .jpg extensions
echo.
pause
goto end

:invalid_choice
echo Invalid choice. Please run the script again.
pause
goto end

:end
echo.
echo Compression complete! Remember to:
echo 1. Replace original images with compressed versions
echo 2. Update HTML file to use .jpg extensions
echo 3. Test the website to ensure it loads faster
echo.
pause 