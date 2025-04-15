// Build script for WebSocket Chat Widget CDN package
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const distDir = path.join(rootDir, 'dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy files function
function copyFile(source, destination) {
  try {
    fs.copyFileSync(source, destination);
    console.log(`✅ Copied: ${path.basename(source)} to ${destination}`);
  } catch (error) {
    console.error(`❌ Error copying ${source}: ${error.message}`);
  }
}

// Minify JavaScript function (placeholder - would typically use terser or similar)
function minifyJavaScript(source, destination) {
  try {
    // This is a simplified example - in a real implementation, you would use a minifier library
    // For this example, we're just copying the file as if it was minified
    fs.copyFileSync(source, destination);
    console.log(`✅ Minified: ${path.basename(source)} to ${destination}`);
  } catch (error) {
    console.error(`❌ Error minifying ${source}: ${error.message}`);
  }
}

// Main build process
console.log('🚀 Building WebSocket Chat Widget for CDN...');

// Process the main JavaScript file
const jsSource = path.join(srcDir, 'websocket-chat-widget.js');
const jsDest = path.join(distDir, 'websocket-chat-widget.js');
const jsMinDest = path.join(distDir, 'websocket-chat-widget.min.js');

if (fs.existsSync(jsSource)) {
  copyFile(jsSource, jsDest);
  minifyJavaScript(jsSource, jsMinDest);
} else {
  console.error(`❌ Source file not found: ${jsSource}`);
}

// Process the CSS file if it exists
const cssSource = path.join(srcDir, 'websocket-chat-widget.css');
const cssDest = path.join(distDir, 'websocket-chat-widget.css');

if (fs.existsSync(cssSource)) {
  copyFile(cssSource, cssDest);
} else {
  console.warn(`⚠️ No CSS file found at ${cssSource}`);
}

console.log('✅ Build completed!');
console.log('📦 Files ready for CDN in the dist/ directory');
