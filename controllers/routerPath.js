// ==============================
// ====== BASE URL ROUTING ======
// ==============================

const { Router } = require('express');
const path = require('path');

const routerPath = new Router();

routerPath.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

routerPath.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'notes.html'));
});

module.exports = routerPath;