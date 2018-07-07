
var path = require('path')
module.exports = {
    productionSourceMap: false,
    outputDir: 'dist',
    // 修改的配置 本地跨域 nodejs api接口测试
    baseUrl: '/',
    // baseUrl: 'http://127.0.0.1:8888/',
    devServer: {
        proxy: "https://cnodejs.org"
    }
}
