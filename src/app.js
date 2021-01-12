const express = require('express');
const app = express();

const path = require('path');

// settings, si recibe un puerto lo toma, en caso contrario usa el puerto
app.set('port', process.env.PORT || 4000);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
module.exports = app;
