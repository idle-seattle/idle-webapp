'use strict';
/*
const customMedia = require('postcss-custom-media')
const customProperties = require('postcss-custom-properties')
const nesting = require('postcss-nesting')

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    config.module.rules [
      config.module.rules.findIndex(rule => rule.loader == 'postcss-loader')
    ] = {
      test: /\.css$/,
      use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader'],
      loader: 'postcss-loader',
      options: {
        plugins: (loader) => [
          require('postcss-custom-media')(),
          require('postcss-custom-properties')(),
          require('postcss-nesting')()
        ]
      }
    }

    return config
  }
}
*/