const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class CristaleriaService {

    constructor() {
        this.cristalerias = [];
        this.generate();
    }

    generate() {
        this.cristalerias = [{
                id: faker.datatype.uuid(),
                nombre: "Vaso de trago largo - Long drinks - Tubo",
                capacidadOz: 10,
                servicio: "Jugos, Gaseosas y coctails.",
                tipo: "Indispensable",
                imagen: faker.image.imageUrl(),
                isBlocked: faker.datatype.boolean()
            },
            {
                id: faker.datatype.uuid(),
                nombre: "Vaso Highball",
                capacidadOz: 8,
                servicio: "Jugos, Gaseosas se utiliza en eventos.",
                tipo: "Indispensable",
                imagen: faker.image.imageUrl(),
                isBlocked: faker.datatype.boolean()
            },
            {
                id: faker.datatype.uuid(),
                nombre: "Vaso corto - Wiskero - Old fashioned - On the rock",
                capacidadOz: 7,
                servicio: "Wiskey, coctails, licor con hielo.",
                imagen: faker.image.imageUrl(),
                isBlocked: faker.datatype.boolean()
            },
            {
                id: faker.datatype.uuid(),
                nombre: "Copa Coctail - Copa Martini",
                capacidadOz: [5, 3],
                servicio: "coctails sin hielo.",
                tipo: "Indispensable",
                imagen: faker.image.imageUrl(),
                isBlocked: faker.datatype.boolean()
            },
            {
                id: faker.datatype.uuid(),
                nombre: "Copa de Vino - Tall wine",
                capacidadOz: 6.5,
                servicio: "Vino o Agua.",
                tipo: "Indispensable",
                imagen: faker.image.imageUrl(),
                isBlocked: faker.datatype.boolean()
            },
            {
                id: faker.datatype.uuid(),
                nombre: "Copa balón",
                capacidadOz: [6.5, 12],
                servicio: "Coñak o Brandi.",
                tipo: "Indispensable",
                imagen: faker.image.imageUrl(),
                isBlocked: faker.datatype.boolean()
            },
            {
                id: faker.datatype.uuid(),
                nombre: "Chop",
                capacidadOz: 12,
                servicio: "Cerveza.",
                tipo: "Indispensable",
                imagen: faker.image.imageUrl(),
                isBlocked: faker.datatype.boolean()
            },
            {
                id: faker.datatype.uuid(),
                nombre: "Copa de Champagne - Copa flauta",
                capacidadOz: 7,
                servicio: "Champagne.",
                tipo: "Indispensable",
                imagen: faker.image.imageUrl(),
                isBlocked: faker.datatype.boolean()
            },
            {
                id: faker.datatype.uuid(),
                nombre: "Shot - Tequilero - Caballito",
                capacidadOz: 2.5,
                servicio: "Shots, Tequilas y otros.",
                tipo: "Indispensable",
                imagen: faker.image.imageUrl(),
                isBlocked: faker.datatype.boolean()
            },
            {
                id: faker.datatype.uuid(),
                nombre: "Copa Heineken - Copa Huracán",
                capacidadOz: [15, 18],
                servicio: "Coctail de la casa.",
                tipo: "Específica",
                imagen: faker.image.imageUrl(),
                isBlocked: faker.datatype.boolean()
            },
            {
                id: faker.datatype.uuid(),
                nombre: "Copa Margarita",
                capacidadOz: 6,
                servicio: "Margaritas.",
                tipo: "Específica",
                imagen: faker.image.imageUrl(),
                isBlocked: faker.datatype.boolean()
            },
            {
                id: faker.datatype.uuid(),
                nombre: "Copa Milkshake",
                capacidadOz: 12,
                servicio: "Coctail con helado / Milkshake.",
                tipo: "Específica",
                imagen: faker.image.imageUrl(),
                isBlocked: faker.datatype.boolean()
            },
            {
                id: faker.datatype.uuid(),
                nombre: "Copa Pera - Vivachica",
                capacidadOz: 10,
                servicio: "Coctails cremosos.",
                tipo: "Específica",
                imagen: faker.image.imageUrl(),
                isBlocked: faker.datatype.boolean()
            },
            {
                id: faker.datatype.uuid(),
                nombre: "Copa Mag - Copa Refractaria",
                capacidadOz: 8.5,
                servicio: "Cafeteria especial.",
                tipo: "Específica",
                imagen: faker.image.imageUrl(),
                isBlocked: faker.datatype.boolean()
            },
            {
                id: faker.datatype.uuid(),
                nombre: "Vaso Beverage",
                capacidadOz: 10,
                servicio: "Jugos, gaseosas, tragos de vaso largo. Nota: Encaja en la coctelera Boston",
                tipo: "Específica",
                imagen: faker.image.imageUrl(),
                isBlocked: faker.datatype.boolean()
            }
        ];
    }

    async create(data) {
        const newCristaleria = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.cristalerias.push(newCristaleria);
        return newCristaleria;
    }

    find() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.cristalerias);
            }, 2000);
        })
    }

    async findOne(id) {
        const cristaleria = this.cristalerias.find(item => item.id === id);
        if (!cristaleria) {
            throw boom.notFound('Cristaleria not found');
        } else {
            if (cristaleria.isBlocked) {
                throw boom.conflict('Cristaleria is blocked');
            }
            return cristaleria;
        }
    }

    async update(id, changes) {
        const index = this.cristalerias.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('Cristaleria not found');
        } else {
            const cristaleria = this.cristalerias[index];
            this.cristalerias[index] = {
                ...cristaleria,
                ...changes
            };
            return this.cristalerias[index];
        }
    }

    async delete(id) {
        const index = this.cristalerias.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('Cristaleria not found');
        } else {
            this.cristalerias.splice(index, 1);
            return { id };
        }
    }
}

module.exports = CristaleriaService;