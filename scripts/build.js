// Build script for WebSocket Chat Widget CDN package
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Install terser if not already installed
try {
  require.resolve('terser');
  console.log('✅ Terser is already installed');
} catch (error) {
  console.log('📦 Installing terser for JavaScript minification...');
  execSync('npm install --no-save terser', { stdio: 'inherit' });
}

// Load terser for minification
const { minify } = require('terser');

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

// Minify JavaScript function using terser
async function minifyJavaScript(source, destination) {
  try {
    // Read the source file
    const code = fs.readFileSync(source, 'utf8');
    
    // Minify with terser
    const minified = await minify(code, {
      compress: {
        drop_console: false,
        drop_debugger: true
      },
      mangle: true,
      output: {
        comments: /^!|@license|@preserve|@version/
      },
      sourceMap: {
        filename: path.basename(destination),
        url: path.basename(destination) + '.map'
      }
    });
    
    // Write the minified code to the destination
    fs.writeFileSync(destination, minified.code);
    
    // Write source map if available
    if (minified.map) {
      fs.writeFileSync(destination + '.map', minified.map);
    }
    
    // Calculate file size reduction
    const originalSize = fs.statSync(source).size;
    const minifiedSize = fs.statSync(destination).size;
    const reduction = ((1 - minifiedSize / originalSize) * 100).toFixed(1);
    
    console.log(`✅ Minified: ${path.basename(source)} to ${path.basename(destination)} (${reduction}% reduction)`);
  } catch (error) {
    console.error(`❌ Error minifying ${source}: ${error.message}`);
    // Fallback to simple copy if minification fails
    console.log('⚠️ Falling back to copying the file without minification');
    copyFile(source, destination);
  }
}

// Main build process
console.log('🚀 Building WebSocket Chat Widget v1.0.1 for CDN...');

// Process the main JavaScript file
const jsSource = path.join(srcDir, 'websocket-chat-widget.js');
const jsDest = path.join(distDir, 'websocket-chat-widget.js');
const jsMinDest = path.join(distDir, 'websocket-chat-widget.min.js');

if (fs.existsSync(jsSource)) {
  copyFile(jsSource, jsDest);
  
  // Use async IIFE for minification
  (async () => {
    await minifyJavaScript(jsSource, jsMinDest);
    console.log('✅ Build completed!');
    console.log('📦 Files ready for CDN in the dist/ directory');
  })();
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
