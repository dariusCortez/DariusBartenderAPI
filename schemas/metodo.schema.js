const joi = require('joi');

const id = joi.string().uuid();
const metodo = joi.string().min(3).max(20);
const descripcion = joi.string().min(5).max(500);

const getMetodoSchema = joi.object({
    id: id.required(),
});

const createBebidaSchema = joi.object({
    metodo: metodo.required(),
    descripcion: descripcion.required(),
});

const updateBebidaSchema = joi.object({
    metodo: metodo.required(),
    descripcion: descripcion.required(),
});

module.exports = { getMetodoSchema, createBebidaSchema, updateBebidaSchema };

/*
{
        "id": "0a7e6c15-894e-4deb-9088-e4162b1bac01",
        "metodo": "Directo",
        "descripcion": "Son aquellos que se sirven directamente en el vaso ya que sus componentes no necesitan ser mezclados."
}
*/