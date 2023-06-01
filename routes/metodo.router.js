const express = require('express');
const router = express.Router();
const MetodoService = require('./../services/medoto.service');
const service = new MetodoService();


router.get("/", async(req, res) => {
    const metodos = await service.find();
    res.json(metodos);
});

router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const metodo = await service.findOne(id);
        res.json(metodo);
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
});

router.post("/", async(req, res) => {
    const body = req.body;
    const newMetodo = await service.create(body);
    res.json({
        message: "Create Método",
        data: newMetodo
    });
});

router.patch("/:idMetodo", async(req, res) => {
    try {
        const { idMetodo } = req.params;
        const body = req.body;
        const metodo = await service.update(idMetodo, body);
        res.json(metodo);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
});

router.delete("/:idMetodo", async(req, res) => {
    try {
        const { idMetodo } = req.params;
        const respuesta = await service.delete(idMetodo);
        res.json(respuesta);
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
});

module.exports = router;