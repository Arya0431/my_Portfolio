#!/bin/bash

# Portfolio Development Server Startup Script
# This script automatically starts the development server

echo "🚀 Starting Aditya Kumar Chaudhary Portfolio..."
echo "📁 Navigating to project directory..."

# Navigate to the project directory (adjust path if needed)
cd "$(dirname "$0")"

echo "📦 Installing dependencies (if needed)..."
npm install

echo "🔧 Starting development server..."
echo "🌐 Server will be available at: http://localhost:5173"
echo "⚡ Press Ctrl+C to stop the server"
echo ""

# Start the development server
npm run dev
