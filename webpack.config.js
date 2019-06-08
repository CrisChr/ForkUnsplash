const path = require('path')
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry:{
    app: './index.js'
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    port: 3001,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif)/,
        use:[
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
              outputPath: path.resolve(__dirname, './src/images'),
            }
          },
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: path.resolve(__dirname, './node_modules')
      }
    ]
  },
  plugins: [
    new htmlPlugin({
      hash: true,
      template: './index.html'
    })
  ]
}