const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'img/[name][ext]', // Output images directly to dist/img folder
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Bill's Cafe",
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
  performance: {
    maxEntrypointSize: 700000,
    maxAssetSize: 700000
  },
};
