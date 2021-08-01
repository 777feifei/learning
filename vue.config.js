let url = 'http://122.51.249.55:7005'
const port = process.env.port || process.env.npm_config_port || 3030
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
  }
  
module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    devServer: {
        port: port, // 端口
        open: true, // 热更新
        overlay: { // 显示警告
            warnings: false,
            errors: true
        },
        proxy: { // 配置反向代理
            [process.env.VUE_APP_BASE_API]: {
                target: url+`${process.env.VUE_APP_BASE_API}` ,
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        },
        // proxy: {
        //     '/admin': {
        //         target: 'http://122.51.249.55:7005/admin',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/admin': ''
        //         }
        //     }
        // }

    },
    // scss全局变量的配置
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "./src/style/index";'
            }
        }
    },
    configureWebpack: {
        // 配置别名
        // name: name,
        resolve: {
          alias: {
            '@': resolve('src')
          }
        }
      },
      chainWebpack(config) {
        // it can improve the speed of the first screen, it is recommended to turn on preload
        config.plugin('preload').tap(() => [
          {
            rel: 'preload',
            // to ignore runtime.js
            // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
            fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
            include: 'initial'
          }
        ])
    
        // when there are many pages, it will cause too many meaningless requests
        config.plugins.delete('prefetch')
    
        // set svg-sprite-loader
        config.module
          .rule('svg')
          .exclude.add(resolve('src/icons'))
          .end()
        config.module
          .rule('icons')
          .test(/\.svg$/)
          .include.add(resolve('src/icons'))
          .end()
          .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
            symbolId: 'icon-[name]'
          })
          .end()
    
        // set preserveWhitespace
        config.module
          .rule('vue')
          .use('vue-loader')
          .loader('vue-loader')
          .tap(options => {
            options.compilerOptions.preserveWhitespace = true
            return options
          })
          .end()
    
        config
          .when(process.env.NODE_ENV !== 'development',
            config => {
              config
                .plugin('ScriptExtHtmlWebpackPlugin')
                .after('html')
                .use('script-ext-html-webpack-plugin', [{
                // `runtime` must same as runtimeChunk name. default is `runtime`
                  inline: /runtime\..*\.js$/
                }])
                .end()
              config
                .optimization.splitChunks({
                  chunks: 'all',
                  cacheGroups: {
                    libs: {
                      name: 'chunk-libs',
                      test: /[\\/]node_modules[\\/]/,
                      priority: 10,
                      chunks: 'initial' // only package third parties that are initially dependent
                    },
                    elementUI: {
                      name: 'chunk-elementUI', // split elementUI into a single package
                      priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                      test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                    },
                    commons: {
                      name: 'chunk-commons',
                      test: resolve('src/components'), // can customize your rules
                      minChunks: 3, //  minimum common number
                      priority: 5,
                      reuseExistingChunk: true
                    }
                  }
                })
              // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
              config.optimization.runtimeChunk('single')
            }
          )
      }
}