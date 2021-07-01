const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    lesson: path.resolve(__dirname, 'src', 'content_scripts', 'lesson.js'),
    tips: path.resolve(__dirname, 'src', 'content_scripts', 'tips.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'manifest.json'),
          to: path.resolve(__dirname, "dist")
        },
        {
          from: path.resolve(__dirname, 'src', 'background.js'),
          to: path.resolve(__dirname, 'dist')
        }
      ]
    })
  ]
};
