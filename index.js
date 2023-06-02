const express = require("express");
const cors = require('cors');
const routerApi = require('./routes');
const path = require('path');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

//const enforce = require('express-sslify');



const app = express();
const port = 3000;
const version = "1.5";


app.use(express.json());

//app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'assets')));

app.get("/", (req, res) => {
    const protocolo = req.protocol;
    const hostname = req.get('host');
    const urlActual = `${protocolo}://${hostname}`;
    res.render('urlsApi', { URLActual: urlActual, Version: version });
});

const whitelist = ['http://localhost:4200', 'https://dariusdiy.com']; //probado con Angular
const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('No permitido'));
        }
    }
}
app.use(cors(options));

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log('Puerto:', port);
    console.log('Version: ', version);
});