const path = require('path');
const { promisify } = require('util');
const fs = require('fs-extra');
const copy = promisify(fs.copy);
const {
  paths: { DIST_DIR, STYLES_DIR, PHENOTYPES_CSS },
  logGreen,
} = require('./compileScss');

const SAILEC_CSS = path.resolve(STYLES_DIR, 'sailec.css');
const WEBFONTS_DIR = path.resolve(STYLES_DIR, 'webfonts');
const DIST_CSS = path.resolve(DIST_DIR, 'css');

function copyAssets() {
  copy(PHENOTYPES_CSS, path.resolve(DIST_CSS, 'phenotypes.css'))
    .then(() => logGreen('Copied phenotypes.css to dist directory.'))
    .catch((err) => console.error(err));
  copy(SAILEC_CSS, path.resolve(DIST_CSS, 'sailec.css'))
    .then(() => logGreen('Copied sailec.css to dist directory.'))
    .catch((err) => console.error(err));
  copy(WEBFONTS_DIR, path.resolve(DIST_CSS, 'webfonts'))
    .then(() => logGreen('Copied webfonts to dist directory.'))
    .catch((err) => console.error(err));
}

copyAssets();
