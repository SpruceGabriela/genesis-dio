const path = require('path');

module.exports = {
  entry: '/src/js/script.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
    ],
  },
}