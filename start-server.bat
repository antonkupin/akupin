@echo off
echo Starting HTTP Server on port 8000...
echo Access your website at: http://localhost:8000
echo Press Ctrl+C to stop the server
powershell -Command "Start-Process powershell -ArgumentList '-Command', 'cd \"%~dp0\"; python -m http.server 8000'" 