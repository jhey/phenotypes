const chokidar = require('chokidar');
const { compileScss } = require('./compileScss');

chokidar
  .watch(['library/**/**.scss', 'styles/**/**.scss', 'styles/sailec.css'], {
    ignoreInitial: true,
  })
  .on('add', compileScss)
  .on('change', compileScss);
