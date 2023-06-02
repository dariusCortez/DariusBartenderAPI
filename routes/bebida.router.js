const express = require('express');
const router = express.Router();

const BebidaService = require('./../services/bebida.service')
const service = new BebidaService();

const validatorHandler = require('./../middlewares/validator.handler');
const { getBebidaSchema, createBebidaSchema, updateBebidaSchema } = require('./../schemas/bebida.schema');


router.get("/", async(req, res) => {
    const bebidas = await service.find();
    res.json(bebidas);
});

router.get("/:id",
    validatorHandler(getBebidaSchema, 'params'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const bebida = await service.findOne(id);
            res.json(bebida);
        } catch (error) {
            next(error);
        }
    });

router.post("/",
    validatorHandler(createBebidaSchema, 'body'),
    async(req, res) => {
        const body = req.body;
        const newBebida = await service.create(body);
        res.json(newBebida);
    });

router.patch("/:id",
    validatorHandler(getBebidaSchema, 'params'),
    validatorHandler(updateBebidaSchema, 'body'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const bebida = await service.update(id, body);
            res.json(bebida);
        } catch (error) {
            next(error);
        }
    });
router.delete("/:id",
    validatorHandler(getBebidaSchema, 'params'),
    async(req, res, next) => {
        try {
            const { id } = req.params
            const respuesta = await service.delete(id);
            res.json(respuesta);
        } catch (error) {
            next(error);
        }
    });

module.exports = router;