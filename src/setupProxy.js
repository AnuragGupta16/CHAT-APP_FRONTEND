const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://wonderful-meerkat-de194d.netlify.app',
      changeOrigin: true,
    })
  );
};
