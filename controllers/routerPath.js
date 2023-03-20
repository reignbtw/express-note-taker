// ==============================
// ====== BASE URL ROUTING ======
// ==============================

const { Router } = require('express');
const path = require('path');

const routerPath = new Router();

routerPaths.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

routerPaths.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'notes.html'));
});

module.exports = routerPath;