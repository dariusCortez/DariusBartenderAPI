const express = require('express');
const router = express.Router();

const CristaleriaService = require('./../services/cristaleria.service');
const service = new CristaleriaService();

const validatorHandler = require('./../middlewares/validator.handler');
const { getCristaleriaSchema, createCristaleriaSchema, updateCristaleriaSchema } = require('./../schemas/cristaleria.schema')


router.get("/", async(req, res) => {
    const cristaleria = await service.find();
    res.json(cristaleria);
});

router.get("/:id",
    validatorHandler(getCristaleriaSchema, 'params'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const cristaleria = await service.findOne(id);
            res.json(cristaleria);
        } catch (error) {
            next(error);
        }
    });

router.post("/",
    validatorHandler(createCristaleriaSchema, 'body'),
    async(req, res) => {
        const body = req.body;
        const newCristaleria = await service.create(body);
        res.json({
            message: "Create Cristaleria",
            data: newCristaleria
        });
    });

router.patch("/:id",
    validatorHandler(getCristaleriaSchema, 'params'),
    validatorHandler(updateCristaleriaSchema, 'body'),
    async(req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const cristaleria = await service.update(id, body);
            res.json(cristaleria);
        } catch (error) {
            next(error);
        }
    });

router.delete("/:id",
    validatorHandler(getCristaleriaSchema, 'params'),
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