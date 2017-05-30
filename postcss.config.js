module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-properties': {},
    'postcss-custom-media': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
  },
}
