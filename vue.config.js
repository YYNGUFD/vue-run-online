 
module.exports = {
  productionSourceMap: false,
  css: { extract: false },
  outputDir: './docs/',
  publicPath: './',
  configureWebpack: {
    entry: './examples/index.js',
    output: {
      libraryExport: 'default'
    }
  }
}
