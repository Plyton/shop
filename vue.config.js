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
                target: 'https://dry-sierra-16806.herokuapp.com/',
                pathRewrite: { '^/api': '' },
                secure: false,
                changeOrigin: true,
                logLevel: "debug"
            }
        }
    }
}