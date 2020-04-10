module.exports = {
  publicPath: './',
  outputDir: 'dist',
  productionSourceMap: true,
  devServer: {
    port: 8090,
    proxy: {
      '/api': {
        target: 'http://10.0.0.14:80/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: true
}
