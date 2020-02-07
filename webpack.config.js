const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "public/dist")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          /node_modules/
        ],
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-react", "@babel/preset-env"
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties"
          ]
        }
      },
      {
        test: /\.css$/,
        exclude: [
          /node_modules/
        ],
        use: [
          "style-loader", "css-loader"
        ]
      }
    ]
  },
  watch: true
}
