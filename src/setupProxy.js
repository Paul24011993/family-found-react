const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
  app.use(
    createProxyMiddleware('/Home/login/',
    {
      target: 'http://desarrollo.nacion-digital.com/panel/serverFamilyFoud',
      changeOrigin: false
    })
    )
}