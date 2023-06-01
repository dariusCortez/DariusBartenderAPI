const express = require("express");
const app = express();
const port = 3000;


const path = require('path');

app.use(express.json());

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'assets')));



app.get("/", (req, res) => {
    const urlActual = req.get('host');
    res.render('urlsApi', { URLActual: urlActual });
});




app.get("/Cristaleria", (req, res) => {
    const cristaleria = [{
            id: 1,
            nombre: "Vaso de trago largo - Long drinks - Tubo",
            capacidadOz: 10,
            servicio: "Jugos, Gaseosas y coctails.",
            tipo: "Indispensable",
            imagen: ""
        },
        {
            id: 2,
            nombre: "Vaso Highball",
            capacidadOz: 8,
            servicio: "Jugos, Gaseosas se utiliza en eventos.",
            tipo: "Indispensable",
            imagen: ""
        },
        {
            id: 3,
            nombre: "Vaso corto - Wiskero - Old fashioned - On the rock",
            capacidadOz: 7,
            servicio: "Wiskey, coctails, licor con hielo.",
            tipo: "Indispensable",
            imagen: ""
        },
        {
            id: 4,
            nombre: "Copa Coctail - Copa Martini",
            capacidadOz: [5, 3],
            servicio: "coctails sin hielo.",
            tipo: "Indispensable",
            imagen: ""
        },
        {
            id: 5,
            nombre: "Copa de Vino - Tall wine",
            capacidadOz: 6.5,
            servicio: "Vino o Agua.",
            tipo: "Indispensable",
            imagen: ""
        },
        {
            id: 6,
            nombre: "Copa balón",
            capacidadOz: [6.5, 12],
            servicio: "Coñak o Brandi.",
            tipo: "Indispensable",
            imagen: ""
        },
        {
            id: 7,
            nombre: "Chop",
            capacidadOz: 12,
            servicio: "Cerveza.",
            tipo: "Indispensable",
            imagen: ""
        },
        {
            id: 8,
            nombre: "Copa de Champagne - Copa flauta",
            capacidadOz: 7,
            servicio: "Champagne.",
            tipo: "Indispensable",
            imagen: ""
        },
        {
            id: 9,
            nombre: "Shot - Tequilero - Caballito",
            capacidadOz: 2.5,
            servicio: "Shots, Tequilas y otros.",
            tipo: "Indispensable",
            imagen: ""
        },
        {
            id: 10,
            nombre: "Copa Heineken - Copa Huracán",
            capacidadOz: [15, 18],
            servicio: "Coctail de la casa.",
            tipo: "Específica",
            imagen: ""
        },
        {
            id: 11,
            nombre: "Copa Margarita",
            capacidadOz: 6,
            servicio: "Margaritas.",
            tipo: "Específica",
            imagen: ""
        },
        {
            id: 12,
            nombre: "Copa Milkshake",
            capacidadOz: 12,
            servicio: "Coctail con helado / Milkshake.",
            tipo: "Específica",
            imagen: ""
        },
        {
            id: 13,
            nombre: "Copa Pera - Vivachica",
            capacidadOz: 10,
            servicio: "Coctails cremosos.",
            tipo: "Específica",
            imagen: ""
        },
        {
            id: 14,
            nombre: "Copa Mag - Copa Refractaria",
            capacidadOz: 8.5,
            servicio: "Cafeteria especial.",
            tipo: "Específica",
            imagen: ""
        },
        {
            id: 15,
            nombre: "Vaso Beverage",
            capacidadOz: 10,
            servicio: "Jugos, gaseosas, tragos de vaso largo. Nota: Encaja en la coctelera Boston",
            tipo: "Específica",
            imagen: ""
        },
    ];
    res.json(cristaleria);
});

app.post("/Cristaleria", (req, res) => {
    const newCristaleria = req.body;
    res.json({
        message: "Create Cristaleria",
        data: newCristaleria
    });
});

app.patch("/Cristaleria/:idCristaleria", (req, res) => {
    const { idCristaleria } = req.params;
    const body = req.body;
    res.json({
        message: "Update Cristaleria",
        idCristaleria,
        data: body
    });
});

app.delete("/Cristaleria/:idCristaleria", (req, res) => {
    const { idCristaleria } = req.params
    res.json({
        message: "Delete Cristaleria",
        idCristaleria
    });
});






app.get("/Metodo", (req, res) => {
    const metodos = [{
            id: 1,
            metodo: "Directo",
            descripcion: "Son aquellos que se sirven directamente en el vaso ya que sus componentes no necesitan ser mezclados."
        },
        {
            id: 2,
            metodo: "Batido",
            descripcion: "Son aquellos tragos o coctales que se realizan en coctelera, se bate si o si con hielo hasta lograr una mezcla homogenea (10 segundos para tragos o cocteles simples) (15 segundos para tragos o cocteles mas densos) Nota: a la coctelera no se ponen cosas calientes ni efervecentes."
        },
        {
            id: 3,
            metodo: "Licuados",
            descripcion: "Son aquellos que tienen ingredientes de diferentes texturas. Los componentes se ponen en la licuadora para luego poner la licuadora en el motor (No se pone nada cuando la licuadora este en el motor)."
        },
        {
            id: 4,
            metodo: "Refrescados",
            descripcion: "Son aquellos cocteles elaaborados en el vaso Mix & Glass, los componentes son alcoholicos y cristalinos. Solo necesitan ser mezclados con la cucharilla bailarina."
        },
        {
            id: 5,
            metodo: "Edificados",
            descripcion: "Son aquellos cocteles que se elaboran de manera cuidadosa y en shots. Se ponen los ingredientes uno encima del otro, para lograr un matiz de colores."
        },
        {
            id: 6,
            metodo: "Shows de entretenimiento",
            descripcion: "Son aquellos cocteles que tiene un show en su elaboración (Working Flair)."
        },
    ]
    res.json(metodos);
});

app.post("/Metodo", (req, res) => {
    const newMetodo = req.body;
    res.json({
        message: "Create Método",
        data: newMetodo
    });
});
app.patch("/Metodo/:idMetodo", (req, res) => {
    const { idMetodo } = req.params;
    const body = req.body;
    res.json({
        message: "Update Método",
        idMetodo,
        data: body
    });
});
app.delete("/Metodo/:idMetodo", (req, res) => {
    const { idMetodo } = req.params
    res.json({
        message: "Delete Método",
        idMetodo
    });
});











app.get("/Bebida", (req, res) => {
    const bebidas = [{
            id: 1,
            bebida: "Campari",
            componentes: "Elaborado con 60 ingredientes, entre estos yerbas, especias y cortezas. Predominan la Naranja y Toronja.",
            origen: "Italia",
            grado: 28.5
        },
        {
            id: 2,
            bebida: "Frangelico",
            componentes: "Licor de abellanas creado por los monjes Benedictinos.",
            origen: "Italia",
            grado: 20
        },
        {
            id: 3,
            bebida: "Fernet",
            componentes: "Digestivo a base de yerbas y gusto muy amargo.",
            origen: "Italia, Argentina",
            grado: 40
        },
        {
            id: 4,
            bebida: "Apsenta - Ajenjo",
            componentes: "Elaborado en base a la planta de Ajenjo.",
            origen: "",
            grado: 60
        },
        {
            id: 5,
            bebida: "Amareto",
            componentes: "Elaborado a base de almendras con un toque de Melocotón o Durazno.",
            origen: "Italia",
            grado: 24
        },
        {
            id: 6,
            bebida: "Anis 8 Hermanos",
            componentes: "Bebida anizada y almibarada con anis dulce o seco.",
            origen: "",
            grado: 36
        },
        {
            id: 7,
            bebida: "Biter Angostura",
            componentes: "Infusionado y destilado de cortezas, raices y frutas, nuez moscada y clavo de olor.",
            origen: "Trinidad y Tobago",
            grado: 44.7
        },
        {
            id: 8,
            bebida: "Malibu",
            componentes: "Licor tropical sabor a coco y agregado de Ron.",
            origen: "Islas Barbados",
            grado: 21
        },
        {
            id: 9,
            bebida: "Licor 43",
            componentes: "Elaborado en base a 43 ingredientes, los más predominantes son la Vainilla y el Brandy.",
            origen: "España",
            grado: 31
        },
        {
            id: 10,
            bebida: "Midori",
            componentes: "Licor sabor a Melón.",
            origen: "Japón",
            grado: 20
        },
        {
            id: 11,
            bebida: "Bayles",
            componentes: "Irish Cream.",
            origen: "Irlanda",
            grado: 17
        },
        {
            id: 12,
            bebida: "Amarula",
            componentes: "Elaborado en base a la fruta Marula. (No es Irish Cream)",
            origen: "Sud Africa",
            grado: 17
        },
        {
            id: 13,
            bebida: "YagerMeister",
            componentes: "Elaborado con 16 ingredientes.(Maestro de cazadores - San Humbreto, patrón de los cazadores).",
            origen: "Alemania",
            grado: 35
        },
        {
            id: 14,
            bebida: "Aperol",
            componentes: "Elaborado en base a Naranja amarga.(Parecido al Campari).",
            origen: "Italia",
            grado: 11
        },
        {
            id: 15,
            bebida: "Drambue",
            componentes: "Licor en base a Wiskey y Miel. Es el más antiguo y famoso de Gales.",
            origen: "Escocia",
            grado: 40
        },
        {
            id: 16,
            bebida: "Contreau",
            componentes: "Alcohol y escencia de Azajar.",
            origen: "Francia",
            grado: 40
        },
        {
            id: 17,
            bebida: "Granadina",
            componentes: "Jarabe en base a la fruta granada",
            origen: "",
            grado: 0
        },
    ]
    res.json(bebidas);
});
app.post("/Bebida", (req, res) => {
    const newBebida = req.body;
    res.json({
        message: "Create Bebida",
        data: newBebida
    });
});
app.patch("/Bebida/:idBebida", (req, res) => {
    const { idBebida } = req.params;
    const body = req.body;
    res.json({
        message: "Update Bebida",
        idBebida,
        data: body
    });
});
app.delete("/Bebida/:idBebida", (req, res) => {
    const { idBebida } = req.params
    res.json({
        message: "Delete Bebida",
        idBebida
    });
});



app.listen(port, () => {
    console.log('Mi puerto:', port);
});
