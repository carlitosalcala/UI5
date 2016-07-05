var express = require('express'),
    httpProxy = require('http-proxy'),
    proxy = new httpProxy.createProxyServer();

var routing = {
    'sapui5': {
        target: 'http://localhost:8001' //sdk
    },
    'apps': {
        target: 'http://localhost:8002' //applications
    },
    'sap': { // sap -> root icf  eg /sap/opu/odata etc
        target: 'https://sapes1.sapdevcenter.com/'
    }
    // 'sap': { //https
    //     target: {
    //         host: < server > ,
    //         port: < port > ,
    //         https: true,
    //         rejectUnauthorized: false, //continue on unsigned certificates
    //     },
    // }
};

var allowCrossDomain = function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Accept, Origin, Referer, User-Agent, Content-Type, Authorization, X-Mindflash-SessionID');

    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
        res.header(200);
    } else {
        var dirname = req.url.replace(/^\/([^\/]*).*$/, '$1'); //get root directory name eg sdk, app, sap
        console.log(req.method + ': ' + routing[dirname].target + req.url);
        proxy.web(req, res, routing[dirname]);
    }
};

var app = express();

app.configure(function() {
    app.use(allowCrossDomain);
}).listen(8000);
