#!/bin/bash

# Deployment script for Websouls hosting
# Make sure to set your FTP credentials in GitHub secrets

set -e

echo "🚀 Starting deployment to Websouls..."

# Build the project
echo "📦 Building project..."
npm run build

echo "✅ Build completed successfully!"
echo "📁 Build files are ready in ./dist/ directory"
echo ""
echo "🔧 To complete deployment, make sure you have set the following GitHub secrets:"
echo "   - SFTP_SERVER (your Websouls server hostname)"
echo "   - SFTP_USERNAME (your FTP/SFTP username)"
echo "   - SFTP_PASSWORD (your FTP/SFTP password)"
echo ""
echo "💡 Alternative: You can manually upload the contents of ./dist/ to your Websouls public_html directory"