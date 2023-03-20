// ==============================
// ======== DEPENDENCIES ========
// ==============================

const express = require('express');
const fs = require('fs');

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
app.use(express.static("public"));

// ==============================
// ========= ROUTE SETUP ========
// ==============================

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log(`App now listening on PORT ${PORT}`);
});