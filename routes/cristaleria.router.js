const express = require('express');
const router = express.Router();



router.get("/", (req, res) => {
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

router.post("/", (req, res) => {
    const newCristaleria = req.body;
    res.json({
        message: "Create Cristaleria",
        data: newCristaleria
    });
});

router.patch("/:idCristaleria", (req, res) => {
    const { idCristaleria } = req.params;
    const body = req.body;
    res.json({
        message: "Update Cristaleria",
        idCristaleria,
        data: body
    });
});

router.delete("/:idCristaleria", (req, res) => {
    const { idCristaleria } = req.params
    res.json({
        message: "Delete Cristaleria",
        idCristaleria
    });
});

module.exports = router;
