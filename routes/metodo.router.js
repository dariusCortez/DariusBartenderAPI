const express = require('express');
const router = express.Router();

const MetodoService = require('./../services/medoto.service');
const service = new MetodoService();

const validatorHandler = require('./../middlewares/validator.handler');
const { getMetodoSchema, createBebidaSchema, updateBebidaSchema } = require('./../schemas/metodo.schema');


router.get("/", async(req, res) => {
    const metodos = await service.find();
    res.json(metodos);
});

router.get("/:id",
    validatorHandler(getMetodoSchema, 'params'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const metodo = await service.findOne(id);
            res.json(metodo);
        } catch (error) {
            next(error);
        }
    });

router.post("/",
    validatorHandler(createBebidaSchema, 'body'),
    async(req, res) => {
        const body = req.body;
        const newMetodo = await service.create(body);
        res.json({
            message: "Create Método",
            data: newMetodo
        });
    });

router.patch("/:id",
    validatorHandler(getMetodoSchema, 'params'),
    validatorHandler(updateBebidaSchema, 'body'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const metodo = await service.update(id, body);
            res.json(metodo);
        } catch (error) {
            next(error);
        }
    });

router.delete("/:id",
    validatorHandler(getMetodoSchema, 'params'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const respuesta = await service.delete(id);
            res.json(respuesta);
        } catch (error) {
            next(error);
        }
    });

module.exports = router;