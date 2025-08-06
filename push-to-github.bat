@echo off
echo ========================================
echo    Push to GitHub Setup Script
echo ========================================
echo.
echo This script will help you push your brand tools portfolio to GitHub.
echo.
echo STEP 1: Create a new repository on GitHub
echo 1. Go to https://github.com
echo 2. Click "New repository"
echo 3. Name it: brand-tools
echo 4. Make it public
echo 5. DON'T initialize with README (we already have one)
echo 6. Click "Create repository"
echo.
echo STEP 2: Copy the repository URL
echo After creating the repository, copy the HTTPS URL
echo It will look like: https://github.com/YOUR_USERNAME/brand-tools.git
echo.
echo STEP 3: Run the next command with your repository URL
echo.
pause

set /p REPO_URL="Enter your GitHub repository URL: "

echo.
echo Adding remote repository...
"C:\Program Files\Git\bin\git.exe" remote add origin %REPO_URL%

echo.
echo Renaming branch to main...
"C:\Program Files\Git\bin\git.exe" branch -M main

echo.
echo Pushing to GitHub...
"C:\Program Files\Git\bin\git.exe" push -u origin main

echo.
echo ========================================
echo    Success! Your repository is now on GitHub
echo ========================================
echo.
echo Next steps:
echo 1. Go to your repository on GitHub
echo 2. Click "Settings" tab
echo 3. Scroll down to "Pages" section
echo 4. Under "Source", select "Deploy from a branch"
echo 5. Select "main" branch
echo 6. Select "/ (root)" folder
echo 7. Click "Save"
echo.
echo Your site will be available at:
echo https://YOUR_USERNAME.github.io/brand-tools/
echo.
pause 