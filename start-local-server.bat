@echo off
echo Starting local web server for Brand Tools...
echo.
echo Checking if Python is installed...

python --version >nul 2>&1
if errorlevel 1 (
    echo Python is not installed or not in PATH.
    echo Please install Python from https://www.python.org/
    pause
    exit /b 1
)

echo Python found! Starting server...
echo.
echo The server will run at: http://localhost:8000
echo.
echo To open the Clothing Mockup Generator, visit:
echo http://localhost:8000/clothing-mockup-generator.html
echo.
echo Press Ctrl+C to stop the server
echo.

REM Start Python HTTP server
python -m http.server 8000

pause 