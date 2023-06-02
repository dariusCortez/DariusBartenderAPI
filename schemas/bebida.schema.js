const joi = require('joi');

const id = joi.string().uuid();
const bebida = joi.string().min(3).max(20);
const componentes = joi.string().min(5).max(150);
const origen = joi.string().min(3).max(50);
const grado = joi.number().positive();


const getBebidaSchema = joi.object({
    id: id.required(),
});

const createBebidaSchema = joi.object({
    bebida: bebida.required(),
    componentes: componentes.required(),
    origen: origen.required(),
    grado: grado.required(),
});

const updateBebidaSchema = joi.object({
    bebida: bebida.required(),
    componentes: componentes.required(),
    origen: origen.required(),
    grado: grado.required(),
});

module.exports = { getBebidaSchema, createBebidaSchema, updateBebidaSchema };


/*
{
        "id": "7266ddaa-4f6f-4a28-8864-ecd31f574880",
        "bebida": "Campari",
        "componentes": "Elaborado con 60 ingredientes, entre estos yerbas, especias y cortezas. Predominan la Naranja y Toronja.",
        "origen": "Italia",
        "grado": 28.5
}
*/