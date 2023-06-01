const express = require('express');
const router = express.Router();



router.get("/", (req, res) => {
    const metodos = [{
            id: 1,
            metodo: "Directo",
            descripcion: "Son aquellos que se sirven directamente en el vaso ya que sus componentes no necesitan ser mezclados."
        },
        {
            id: 2,
            metodo: "Batido",
            descripcion: "Son aquellos tragos o coctales que se realizan en coctelera, se bate si o si con hielo hasta lograr una mezcla homogenea (10 segundos para tragos o cocteles simples) (15 segundos para tragos o cocteles mas densos) Nota: a la coctelera no se ponen cosas calientes ni efervecentes."
        },
        {
            id: 3,
            metodo: "Licuados",
            descripcion: "Son aquellos que tienen ingredientes de diferentes texturas. Los componentes se ponen en la licuadora para luego poner la licuadora en el motor (No se pone nada cuando la licuadora este en el motor)."
        },
        {
            id: 4,
            metodo: "Refrescados",
            descripcion: "Son aquellos cocteles elaaborados en el vaso Mix & Glass, los componentes son alcoholicos y cristalinos. Solo necesitan ser mezclados con la cucharilla bailarina."
        },
        {
            id: 5,
            metodo: "Edificados",
            descripcion: "Son aquellos cocteles que se elaboran de manera cuidadosa y en shots. Se ponen los ingredientes uno encima del otro, para lograr un matiz de colores."
        },
        {
            id: 6,
            metodo: "Shows de entretenimiento",
            descripcion: "Son aquellos cocteles que tiene un show en su elaboración (Working Flair)."
        },
    ]
    res.json(metodos);
});

router.post("/", (req, res) => {
    const newMetodo = req.body;
    res.json({
        message: "Create Método",
        data: newMetodo
    });
});
router.patch("/:idMetodo", (req, res) => {
    const { idMetodo } = req.params;
    const body = req.body;
    res.json({
        message: "Update Método",
        idMetodo,
        data: body
    });
});
router.delete("/:idMetodo", (req, res) => {
    const { idMetodo } = req.params
    res.json({
        message: "Delete Método",
        idMetodo
    });
});

module.exports = router;
