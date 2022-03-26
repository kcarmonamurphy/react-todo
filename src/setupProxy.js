const { createProxyMiddleware } = require('http-proxy-middleware');

const DEFAULT_SERVER_PORT = 7002
const port = process.env.SERVER_PORT || DEFAULT_SERVER_PORT

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://localhost:${port}`,
      changeOrigin: true,
    })
  );
};