const express = require('express');
const router = express.Router();



router.get("/", (req, res) => {
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
router.post("/", (req, res) => {
    const newBebida = req.body;
    res.json({
        message: "Create Bebida",
        data: newBebida
    });
});
router.patch("/:idBebida", (req, res) => {
    const { idBebida } = req.params;
    const body = req.body;
    res.json({
        message: "Update Bebida",
        idBebida,
        data: body
    });
});
router.delete("/:idBebida", (req, res) => {
    const { idBebida } = req.params
    res.json({
        message: "Delete Bebida",
        idBebida
    });
});

module.exports = router;
