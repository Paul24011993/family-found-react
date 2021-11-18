// include dependencies
// const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware("/Home/login", {
            target: "http://desarrollo.nacion-digital.com/panel/serverFamilyFoud",
            secure: false,
            changeOrigin: true
        })
    );
};