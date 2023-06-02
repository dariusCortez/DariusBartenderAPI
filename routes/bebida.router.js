const express = require('express');
const router = express.Router();

const BebidaService = require('./../services/bebida.service')
const service = new BebidaService();


router.get("/", async(req, res) => {
    const bebidas = await service.find();
    res.json(bebidas);
});

router.get("/:id", async(req, res, next) => {
    try {
        const { id } = req.params;
        const bebida = await service.findOne(id);
        res.json(bebida);
    } catch (error) {
        next(error);
    }
});

router.post("/", async(req, res) => {
    const body = req.body;
    const newBebida = await service.create(body);
    res.json(newBebida);
});

router.patch("/:idBebida", async(req, res, next) => {
    try {
        const { idBebida } = req.params;
        const body = req.body;
        const bebida = await service.update(idBebida, body);
        res.json(bebida);
    } catch (error) {
        next(error);
    }
});
router.delete("/:idBebida", async(req, res, next) => {
    try {
        const { idBebida } = req.params
        const respuesta = await service.delete(idBebida);
        res.json(respuesta);
    } catch (error) {
        next(error);
    }
});

module.exports = router;