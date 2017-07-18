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

  let buffer = '/* NOTE: This file is auto-generated while Fractal is running! */\n\n';
  buffer += 'module.exports = {\n';

  function addComponentToBundle(component) {
    // Map every component handle to its require path relative to *here*
    // e.g. button: require("../libary/components/button/button.jsx"),
    const componentPath = path.join('..', componentsDir, component.relViewPath);
    buffer += `  "${component.handle}": require("${componentPath}"),\n`;
  }

  function addCollectionToBundle(collection) {
    collection.forEach((item) => {
      if (item.isCollection) {
        addCollectionToBundle(item);
      } else {
        addComponentToBundle(item);
      }
    });
  }

  addCollectionToBundle(components);

  buffer += '};\n';

  fs.writeFile(file, buffer, (err) => {
    if (err) throw err;
    console.log(`Component handles and paths successfully written to ${relFile} + '\n\n`);
  });
}

module.exports = writeComponentsMapFile;
