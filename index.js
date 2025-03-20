const fs = require('fs');
const path = require('path');

function setupBackend(targetDir) {
    const templatesDir = path.join(__dirname, 'templates');

    // Copy all files and folders recursively
    fs.cpSync(templatesDir, targetDir, { recursive: true });

    console.log('Backend structure setup complete!');
}

module.exports = setupBackend;