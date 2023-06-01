const express = require('express');
const router = express.Router();

const CristaleriaService = require('./../services/cristaleria.service');
const service = new CristaleriaService();


router.get("/", async(req, res) => {
    const cristaleria = await service.find();
    res.json(cristaleria);
});

router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const cristaleria = await service.findOne(id);
        res.json(cristaleria);
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
});

router.post("/", async(req, res) => {
    const body = req.body;
    const newCristaleria = await service.create(body);
    res.json({
        message: "Create Cristaleria",
        data: newCristaleria
    });
});

router.patch("/:idCristaleria", async(req, res) => {
    try {
        const { idCristaleria } = req.params;
        const body = req.body;
        const cristaleria = await service.update(idCristaleria, body);
        res.json(cristaleria);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
});

router.delete("/:idCristaleria", async(req, res) => {
    try {
        const { idCristaleria } = req.params;
        const respuesta = await service.delete(idCristaleria);
        res.json(respuesta);
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
});

module.exports = router;