const path = require('path');
const { promisify } = require('util');
const nodeSass = require('node-sass');
const fs = require('fs-extra');
const outputFile = promisify(fs.outputFile);

const PHENOTYPES = 'phenotypes';
const WORKSPACE_ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(WORKSPACE_ROOT, 'dist');
const STYLES_DIR = path.resolve(WORKSPACE_ROOT, 'styles');
const PHENOTYPES_SCSS = path.resolve(STYLES_DIR, `${PHENOTYPES}.scss`);
const PHENOTYPES_CSS = path.resolve(STYLES_DIR, `${PHENOTYPES}.css`);

function logGreen(text) {
  console.log(`\u001b[32m${text}\u001b[0m`);
}

function compileScss(changedPath) {
  if (changedPath) {
    console.log(`=> changed: ${changedPath}`);
  }
  return nodeSass.render(
    {
      file: PHENOTYPES_SCSS,
    },
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        logGreen('Rendering Complete, saving .css file...');
        outputFile(PHENOTYPES_CSS, result.css)
          .then(() => {
            logGreen(`Wrote CSS to ${PHENOTYPES_CSS}`);
          })
          .catch((err) => {
            console.error('error:', err);
          });
      }
    }
  );
}

module.exports = {
  compileScss,
  logGreen,
  paths: {
    DIST_DIR,
    STYLES_DIR,
    PHENOTYPES_CSS,
  },
};
