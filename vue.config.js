const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
      jsonpFunction: 'customWebpackJsonp'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          SERVICE_NAME: JSON.stringify(process.env.SERVICE_NAME || 'personalization-editor'),
          SERVICE_URL: JSON.stringify(process.env.SERVICE_URL || 'http://localhost:9222'),
          TRANSLATION_NAME: JSON.stringify(process.env.TRANSLATION_NAME || 'example')
        }
      })
    ]
  },
  devServer: {
    port: 8080
  },
  css: {
    extract: {
      filename: '[name].css'
    }
  }
};
