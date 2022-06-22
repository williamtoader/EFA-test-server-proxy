const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
    '/mock',
    createProxyMiddleware({
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
            '^/mock' : ''
        }
    })
);

app.use(
    '/api',
    createProxyMiddleware({
        target: 'http://127.0.0.1:80',
        changeOrigin: true,
        pathRewrite: {
            '^/api' : ''
        }
    })
);

app.use(
    '/gocd',
    createProxyMiddleware({
        target: 'http://127.0.0.1:8153',
        changeOrigin: true,
        pathRewrite: {
            '^/gocd' : ''
        }
    })
);

app.listen(3000, "10.138.0.2");