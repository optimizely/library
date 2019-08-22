const fs = require('fs');
const path = require('path');

const extensionPath = process.argv.slice(2)[0] || '.';

console.log(`Unpacking extension at path:  ${extensionPath}`);
console.log('Extracting components from the config.json...');

let config = fs.readFileSync(path.join(extensionPath, './config.json'), 'utf8');
let extension = JSON.parse(config);
const html = extension.options.html;
const css = extension.options.css;
const apply_js = extension.options.apply_js;
const undo_js = extension.options.undo_js;
delete extension.options
const extensionProperties = JSON.stringify(extension, null, '  ')

console.log('Writing separate files...');
fs.writeFileSync(path.join(extensionPath, 'extension.html'), html);
fs.writeFileSync(path.join(extensionPath, 'extension.css'), css);
fs.writeFileSync(path.join(extensionPath, 'extension_apply.js'), apply_js);
fs.writeFileSync(path.join(extensionPath, 'extension_undo.js'), undo_js);
fs.writeFileSync(path.join(extensionPath, 'extension_properties.json'), extensionProperties);

console.log('Successfully unpacked extension!');
