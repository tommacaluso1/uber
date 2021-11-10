const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: "babel-loader"
        },
         
     },
     {
      test: /\.(sa|sc|c)ss$/i,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
    },
    ]
},
  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: "3000",
      server: {baseDir: ["dist"] },
      files: ['**/*.css','**/*.html',]
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
]
};