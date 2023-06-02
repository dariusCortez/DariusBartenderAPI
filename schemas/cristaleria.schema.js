const joi = require('joi');

const id = joi.string().uuid();
const nombre = joi.string().min(3).max(30);
const capacidadOz = joi.number().positive();
const servicio = joi.string().min(3).max(150);
const tipo = joi.string().min(3).max(20);
const imagen = joi.string().uri();
const isBlocked = joi.boolean();


const getCristaleriaSchema = joi.object({
    id: id.required(),
});

const createCristaleriaSchema = joi.object({
    nombre: nombre.required(),
    capacidadOz: capacidadOz.required(),
    servicio: servicio.required(),
    tipo: tipo.required(),
    imagen: imagen.required(),
    isBlocked: isBlocked.required(),
});

const updateCristaleriaSchema = joi.object({
    nombre: nombre.required(),
    capacidadOz: capacidadOz.required(),
    servicio: servicio.required(),
    tipo: tipo.required(),
    imagen: imagen.required(),
    isBlocked: isBlocked.required(),
});


module.exports = { getCristaleriaSchema, createCristaleriaSchema, updateCristaleriaSchema };

/*
"id": "889fa672-cfd2-41a2-8b82-c72aed7a8b8e",
        "nombre": "Vaso de trago largo - Long drinks - Tubo",
        "capacidadOz": 10,
        "servicio": "Jugos, Gaseosas y coctails.",
        "tipo": "Indispensable",
        "imagen": "https://loremflickr.com/640/480",
        "isBlocked": true
*/