const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    open:true,
    host:"www.myvue.cn",
    port:8080,
    proxy: {
            '/api': {
                target: 'http://api.myvue.cn:8000',
                ws:false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }




})
