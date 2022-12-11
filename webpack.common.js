const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    admin: path.resolve(__dirname, 'src/script/admin.js'),
    sellerDashboard: path.resolve(__dirname, 'src/script/seller-dashboard.js'),
    login: path.resolve(__dirname, 'src/script/login.js'),
    app: path.resolve(__dirname, 'src/script/index.js'),
    sw: path.resolve(__dirname, 'src/script/sw.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: path.resolve(__dirname, 'src/templates/login.html'),
      chunks: ['login'],
    }),
    new HtmlWebpackPlugin({
      filename: 'admin/index.html',
      template: path.resolve(__dirname, 'src/templates/admin/index.html'),
      chunks: ['admin'],
    }),
    new HtmlWebpackPlugin({
      filename: 'seller/index.html',
      template: path.resolve(__dirname, 'src/templates/seller/index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'seller/dashboard/index.html',
      template: path.resolve(__dirname, 'src/templates/seller/dashboard/index.html'),
      chunks: ['sellerDashboard'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
  ],
};
