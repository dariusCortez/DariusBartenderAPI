const cristaleriaRouter = require('./cristaleria.router');
const metodoRouter = require('./metodo.router');
const bebidaRouter = require('./bebida.router');

function routerApi(app) {
    app.use('/Cristaleria', cristaleriaRouter);
    app.use('/Metodo', metodoRouter);
    app.use('/Bebida', bebidaRouter);
}


module.exports = routerApi;
