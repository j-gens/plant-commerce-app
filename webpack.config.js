const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          /node_modules/,
        ],
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react', '@babel/preset-env',
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-transform-runtime',
            '@babel/plugin-syntax-dynamic-import',
          ],
        },
      },
      {
        test: /\.css$/i,
        exclude: [
          /node_modules/,
        ],
        use: [
          'style-loader', 'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.SplitChunksPlugin(),
    // new HTMLWebpackPlugin(),
    new HTMLWebpackPlugin({
      templateContent: `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Plantology: Plant Commerce</title>
            <link href="https://fonts.googleapis.com/css?family=Heebo&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet">
            <base href="/">
          </head>
          <body>
            <div id="root"></div>
          </body>
        </html>
      `
    }),
  ],
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
};
