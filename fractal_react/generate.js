const path = require('path');
const fs = require('fs');

const COMPONENTS_MAPPING_FILENAME = '__components.js';

// Write components map to a file so the browser bundle can use them too
function writeComponentsMapFile(app) {
  const components = app.components.items();
  const componentsDir = path.basename(app.components.get('path'));
  const thisDir = path.basename(__dirname);
  const relFile = path.join(thisDir, COMPONENTS_MAPPING_FILENAME);
  const file = path.join(__dirname, COMPONENTS_MAPPING_FILENAME);

  var buffer = '/* NOTE: This file is auto-generated while Fractal is running! */\n\n';
  buffer += 'module.exports = {\n';

  // Map every component handle to its require path relative to *here*
  // e.g. button: require("../components/button/button.jsx"),
  components.forEach(function(item) {
    const componentPath = path.join('..', componentsDir, item.relViewPath);
    buffer += `  "${item.handle}": require("${componentPath}"),\n`;
  });

  buffer += '};\n';

  fs.writeFile(file, buffer, (err) => {
    if (err) throw err;
    console.log('Component handles and paths successfully written to ' + relFile + '\n\n');
  });
}

module.exports = writeComponentsMapFile;
