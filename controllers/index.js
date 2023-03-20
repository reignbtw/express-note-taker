// ==============================
// ====== ROUTER TEMPLATE =======
// all routes directed from here
// ==============================

const { Router } = require('express');

const routerPath = require('./routerPath');
const routerAPI = require('./api');

const allRouters = new Router();

allRouters.use('/', routerPath);
allRouters.use('/api', routerAPI);

module.exports = allRouters;