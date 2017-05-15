const path = require('path');

module.exports = {
  entry: ['./fractal_react/client.jsx'],
  output: {
    path: path.resolve('fractal_assets/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
