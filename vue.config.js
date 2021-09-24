const { resolve } = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
// 需要压缩的类型
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.VUE_APP_GLOBAL_ENV !== 'development'
const cdn = {
  css: ['//cdn.jsdelivr.net/npm/vant@2.12/lib/index.css'],
  js: [
    '//cdn.jsdelivr.net/npm/vant@2.12/lib/vant.min.js',
    '//unpkg.com/axios@0.21.4/dist/axios.min.js'
  ]
}

module.exports = {
  productionSourceMap: false,
  // 链式调用
  chainWebpack: (config) => {
    // 解决热更失效问题
    config.resolve.symlinks(true)
    // 文件名路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
    // 降低带宽请求
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugin('html').tap((args) => {
      args[0].title = 'piece'
      // html中添加cdn
      args[0].cdn = cdn
      return args
    })
    if (isProduction) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
    // 配置svg: 添加svg-sprite-loader插件，加载svg图标
    config.module
      .rule('svg-icon')
      .include.add(resolve('src/assets/icon/svg'))
      .end()
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    // 删除自带的svg解析规则
    config.module.rule('svg').exclude.add(resolve('src/assets/icon/svg'))
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ bypassOnDebug: true })
      .end()
  },
  configureWebpack: (config) => {
    // 打包环境
    if (isProduction) {
      config.plugins.push(
        new CompressionPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: false
        })
      )
    }
    if (isProduction) {
      config.externals = { vant: 'vant' }
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
