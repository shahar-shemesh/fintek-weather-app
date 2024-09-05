const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://fintek-weather-app.onrender.com',
            // target: process.env.REACT_APP_API_BASE_URL,
            // target: `http://localhost:4000`,
            changeOrigin: true,
        })
    );
};
