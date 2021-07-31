let url = 'http://122.51.249.55:7005'
const port = process.env.port || process.env.npm_config_port || 3030
console.log('vueconfig', process.env);
// 
module.exports = {
    lintOnSave: false,
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
    }
}