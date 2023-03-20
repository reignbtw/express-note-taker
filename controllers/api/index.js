const { Router } = require('express');

const routerNotes = require('./note');

const routerAPI = new Router();

routerAPI.use('/note', routerNotes);

module.exports = routerAPI;