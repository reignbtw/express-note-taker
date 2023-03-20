// ==============================
// ======== DEPENDENCIES ========
// ==============================

const express = require('express');

// ==============================
// ======= EXPRESS CONFIG =======
// ==============================

const app = express();

// ==============================
// ========= PORT SETUP =========
// ==============================

const PORT = process.env.PORT || 3001;

// ==============================
// ======= EXPRESS SETUP ========
// ==============================

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// ==============================
// ========= ROUTE SETUP ========
// ==============================

const routerMain = require('./controllers');

app.use(routerMain);

app.listen(PORT, function() {
    console.log(`App now listening on PORT ${PORT}`);
});