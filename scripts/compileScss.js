const path = require('path');
const { promisify } = require('util');
const sass = require('sass');
const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');
const { outputFile, copy } = require('fs-extra');
const renderSass = promisify(sass.render);

const PHENOTYPES = 'phenotypes';
const WORKSPACE_ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(WORKSPACE_ROOT, 'dist');
const STYLES_DIR = path.resolve(WORKSPACE_ROOT, 'styles');
const FRACTAL_CSS_ASSETS = path.resolve(
  WORKSPACE_ROOT,
  'fractal_assets',
  'css'
);
const PHENOTYPES_SCSS = path.resolve(STYLES_DIR, `${PHENOTYPES}.scss`);
const PHENOTYPES_CSS = path.resolve(STYLES_DIR, `${PHENOTYPES}.css`);
const PHENOTYPES_THEMABLE_CSS = path.resolve(
  STYLES_DIR,
  `${PHENOTYPES}.themable.css`
);

function logGreen(text) {
  console.log(`\u001b[32m${text}\u001b[0m`);
}

function compileScss(changedPath) {
  if (changedPath) {
    console.log(`=> changed: ${changedPath}`);
  }
  return renderSass({
    file: PHENOTYPES_SCSS,
  })
    .then((result) => {
      logGreen('Rendering Complete, saving.css files...');
      return Promise.all([
        Promise.resolve(result.css),
        postcss([
          postcssPresetEnv({
            features: {
              'custom-properties': {
                preserve: false,
              },
            },
          }),
        ]).process(result.css),
      ]);
    })
    .then(([cssThemable, { css: cssWithNoVariables }]) => {
      return [
        outputFile(PHENOTYPES_THEMABLE_CSS, cssThemable).then(() => {
          logGreen(`Wrote themable CSS to ${PHENOTYPES_THEMABLE_CSS}`);
          return copy(
            PHENOTYPES_THEMABLE_CSS,
            path.resolve(FRACTAL_CSS_ASSETS, 'phenotypes.themable.css')
          );
        }),
        outputFile(PHENOTYPES_CSS, cssWithNoVariables).then(() => {
          logGreen(`Wrote non themable CSS to ${PHENOTYPES_CSS}`);
        }),
      ];
    })
    .catch((err) => {
      console.error('error:', err);
    });
}

module.exports = {
  compileScss,
  logGreen,
  paths: {
    DIST_DIR,
    STYLES_DIR,
    PHENOTYPES_CSS,
    PHENOTYPES_THEMABLE_CSS,
  },
};
