const path = require('path');
const webpack = require('webpack');

module.exports = {
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
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
};
