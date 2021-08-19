module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/shop/'
        : '/'
    ,
    devServer: {
        open: true,
        hot: true,
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://localhost:80/',
                pathRewrite: { '^/api': '' },
                secure: false,
                changeOrigin: true,
                logLevel: "debug"
            }
        }
    }
}