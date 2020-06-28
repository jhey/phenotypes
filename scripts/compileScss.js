const path = require('path');
const { promisify } = require('util');
const nodeSass = require('node-sass');
const fs = require('fs-extra');
const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');
const outputFile = promisify(fs.outputFile);
const nodeSassRender = promisify(nodeSass.render);

const PHENOTYPES = 'phenotypes';
const WORKSPACE_ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(WORKSPACE_ROOT, 'dist');
const STYLES_DIR = path.resolve(WORKSPACE_ROOT, 'styles');
const PHENOTYPES_SCSS = path.resolve(STYLES_DIR, `${PHENOTYPES}.scss`);
const PHENOTYPES_CSS = path.resolve(STYLES_DIR, `${PHENOTYPES}.css`);
const PHENOTYPES_CSS_THEMABLE = path.resolve(
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
  return nodeSassRender({
    file: PHENOTYPES_SCSS,
  })
    .then((result) => {
      logGreen('Rendering Complete, saving .css files...');

      return Promise.all([
        stripVariablesFromCss(result.css).then((result) => result.css),
        Promise.resolve(result.css),
      ]);
    })
    .then(([cssWithoutVariables, cssWithVariables]) => {
      return Promise.all([
        outputFile(PHENOTYPES_CSS, cssWithoutVariables).then(() => {
          logGreen(`Wrote CSS to ${PHENOTYPES_CSS}`);
        }),
        outputFile(PHENOTYPES_CSS_THEMABLE, cssWithVariables).then(() => {
          logGreen(`Wrote CSS to ${PHENOTYPES_CSS_THEMABLE}`);
        }),
      ]);
    })
    .catch((err) => {
      console.error(err);
    });
}

function stripVariablesFromCss(css) {
  return postcss([
    postcssPresetEnv({
      features: {
        'custom-properties': {
          preserve: false,
        },
      },
    }),
  ])
    .process(css)
    .catch((err) => console.error(err));
}

module.exports = {
  compileScss,
  logGreen,
  stripVariablesFromCss,
  paths: {
    DIST_DIR,
    STYLES_DIR,
    PHENOTYPES_CSS,
    PHENOTYPES_CSS_THEMABLE,
  },
};
