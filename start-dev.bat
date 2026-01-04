@echo off
echo 🚀 Starting Aditya Kumar Chaudhary Portfolio...
echo 📁 Navigating to project directory...

cd /d "%~dp0"

echo 📦 Installing dependencies (if needed)...
npm install

echo 🔧 Starting development server...
echo 🌐 Server will be available at: http://localhost:5173
echo ⚡ Press Ctrl+C to stop the server
echo.

npm run dev

