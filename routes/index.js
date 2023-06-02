const express = require('express');

const cristaleriaRouter = require('./cristaleria.router');
const metodoRouter = require('./metodo.router');
const bebidaRouter = require('./bebida.router');

function routerApi(app) {
    const routerV1 = express.Router();
    app.use('/api/v1', routerV1);

    routerV1.use('/Cristaleria', cristaleriaRouter);
    routerV1.use('/Metodo', metodoRouter);
    routerV1.use('/Bebida', bebidaRouter);
}


module.exports = routerApi;