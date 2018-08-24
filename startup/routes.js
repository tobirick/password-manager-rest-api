const express = require('express');
const indexRoutes = require('../routes/index');

module.exports = (app) => {
    app.use(express.json());
    app.use('/api', indexRoutes);
}