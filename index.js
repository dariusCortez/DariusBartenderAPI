const express = require("express");
const routerApi = require('./routes');
const path = require('path');
//const enforce = require('express-sslify');



const app = express();
const port = 3000;
const version = "1.1";


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

routerApi(app);

app.listen(port, () => {
    console.log('Puerto:', port);
    console.log('Version: ', version);
});
