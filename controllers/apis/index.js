const { Router } = require('express');

const routerNotes = require('./notes');

const routerAPI = new Router();

routerAPI.use('/notes', routerNotes);

module.exports = routerAPI;