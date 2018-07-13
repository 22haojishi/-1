module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api/': {
                target: 'https://jiaxiao.kakamobi.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/apis': ' '
                }
            }
        }

    }
}
