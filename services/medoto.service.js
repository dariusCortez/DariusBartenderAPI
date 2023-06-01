const { faker } = require('@faker-js/faker');

class MetodoService {

    constructor() {
        this.metodos = [];
        this.generate();
    }

    generate() {
        this.metodos = [{
                id: faker.datatype.uuid(),
                metodo: "Directo",
                descripcion: "Son aquellos que se sirven directamente en el vaso ya que sus componentes no necesitan ser mezclados."
            },
            {
                id: faker.datatype.uuid(),
                metodo: "Batido",
                descripcion: "Son aquellos tragos o coctales que se realizan en coctelera, se bate si o si con hielo hasta lograr una mezcla homogenea (10 segundos para tragos o cocteles simples) (15 segundos para tragos o cocteles mas densos) Nota: a la coctelera no se ponen cosas calientes ni efervecentes."
            },
            {
                id: faker.datatype.uuid(),
                metodo: "Licuados",
                descripcion: "Son aquellos que tienen ingredientes de diferentes texturas. Los componentes se ponen en la licuadora para luego poner la licuadora en el motor (No se pone nada cuando la licuadora este en el motor)."
            },
            {
                id: faker.datatype.uuid(),
                metodo: "Refrescados",
                descripcion: "Son aquellos cocteles elaaborados en el vaso Mix & Glass, los componentes son alcoholicos y cristalinos. Solo necesitan ser mezclados con la cucharilla bailarina."
            },
            {
                id: faker.datatype.uuid(),
                metodo: "Edificados",
                descripcion: "Son aquellos cocteles que se elaboran de manera cuidadosa y en shots. Se ponen los ingredientes uno encima del otro, para lograr un matiz de colores."
            },
            {
                id: faker.datatype.uuid(),
                metodo: "Shows de entretenimiento",
                descripcion: "Son aquellos cocteles que tiene un show en su elaboración (Working Flair)."
            },
        ]
    }

    async create(data) {
        const newMetodo = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.metodos.push(newMetodo);
        return newMetodo;
    }

    async find() {
        return this.metodos;
    }

    async findOne(id) {
        const index = this.metodos.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('Método not found');
        } else {
            return this.metodos.find(item => item.id === id);
        }
    }

    async update(id, changes) {
        const index = this.metodos.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('Método not found');
        } else {
            const metodo = this.metodos[index];
            this.metodos[index] = {
                ...metodo,
                ...changes
            };
            return this.metodos[index];
        }
    }

    async delete(id) {
        const index = this.metodos.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('Método not found');
        } else {
            this.metodos.splice(index, 1);
            return { id };
        }
    }

}

module.exports = MetodoService;