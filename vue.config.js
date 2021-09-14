const { resolve } = require('path')
const path = require('path')
const isDev = process.env.NODE_ENV === 'development'
module.exports = {
  // 链式调用
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'piece'
      return args
    })
    // 解决热更失效问题
    config.resolve.symlinks(true)
    // 文件名路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
    if (!isDev) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  },
  devServer: {
    port: '8088',
    hot: true,
    open: true,
    https: true
  }
}
