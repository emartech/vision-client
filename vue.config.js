

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
          SERVICE_URL: JSON.stringify(process.env.SERVICE_URL || 'http://localhost:9222'),
          SUITE_URL: JSON.stringify(process.env.SUITE_URL || 'http://suitedocker.ett.local')
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
