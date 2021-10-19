const { resolve, join } = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
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
  filenameHashing: true,
  // 链式调用
  chainWebpack: (config) => {
    // 解决热更失效问题
    config.resolve.symlinks(true)
    // 文件名路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@styles', resolve('src/styles'))
    // 降低带宽请求
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    if (isProduction) {
      config.plugin('html').tap((args) => {
        args[0].title = 'piece'
        // html中添加cdn
        args[0].cdn = cdn
        return args
      })
    }
    if (process.env.use_analyzer) {
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
    // gzip压缩
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
    // 依赖包隔离
    if (isProduction) {
      config.externals = { vant: 'vant' }
    }
    // 去除console
    if (isProduction) {
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              comments: false // 去掉注释
            },
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: [
                'console.log',
                'console.warn',
                'console.info',
                'console.error',
                'console.debug'
              ] // 移除console信息打印
            },
            warnings: false
          },
          sourceMap: false,
          parallel: true
        })
      )
    }
    // 预加载
    if (isProduction) {
      config.plugins.push(
        new PrerenderSPAPlugin({
          staticDir: join(__dirname, 'dist'),
          routes: ['/home'],
          // 忽略重定向redirects
          postProcess(renderedRoute) {
            renderedRoute.route = renderedRoute.originalRoute
            return renderedRoute
          },
          renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
            inject: {
              foo: 'bar'
            },
            headless: false,
            renderAfterDocumentEvent: 'render-event'
          })
        })
      )
    }
  },
  css: {
    extract: true,
    // extract: isProduction,
    loaderOptions: {
      // sass: {
      //   additionalData: `
      //   @import "@/styles/_module.scss";
      // `
      // },
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
    https: isProduction,
    proxy: {
      '/coudMusicApi': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '/coudMusicApi': '/'
        }
      }
    }
  }
}
