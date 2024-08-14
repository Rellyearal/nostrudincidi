// configHelper.js

const fs = require('fs');

function writeConfig(filePath, config) {
    try {
        const jsonData = JSON.stringify(config, null, 2);
        fs.writeFileSync(filePath, jsonData, 'utf8');
        console.log(`Configuration has been written to ${filePath}`);
    } catch (error) {
        console.error(`Failed to write configuration: ${error.message}`);
    }
}

// Export the writeConfig function
exports.writeConfig = writeConfig;
