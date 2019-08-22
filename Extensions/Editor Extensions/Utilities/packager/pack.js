const fs = require('fs');
const path = require('path');

const extensionPath = process.argv.slice(2)[0] || '.';

console.log(`Packing extension at path:  ${extensionPath}`);
console.log('Gathering the extension components...');

let configFile = fs.readFileSync(path.join(extensionPath, 'extension_properties.json'), 'utf8');
let configObj = JSON.parse(configFile);

const html = fs.readFileSync(path.join(extensionPath, 'extension.html'), 'utf8');
const css = fs.readFileSync(path.join(extensionPath, 'extension.css'), 'utf8');
const apply_js = fs.readFileSync(path.join(extensionPath, 'extension_apply.js'), 'utf8');
const undo_js = fs.readFileSync(path.join(extensionPath, 'extension_undo.js'), 'utf8');

configObj.options = {
  html,
  css,
  apply_js,
  undo_js,
}

console.log('Writing the config.json');

let configJSON = JSON.stringify(configObj, null, '  ');
fs.writeFileSync(path.join(extensionPath, 'config.json'), configJSON);

console.log('Successfully packed extension!');
