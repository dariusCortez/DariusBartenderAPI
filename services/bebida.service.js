const { faker } = require('@faker-js/faker');

class BebidaService {

    constructor() {
        this.bebidas = [];
        this.generate();
    }

    generate() {
        this.bebidas = [{
                id: faker.datatype.uuid(),
                bebida: "Campari",
                componentes: "Elaborado con 60 ingredientes, entre estos yerbas, especias y cortezas. Predominan la Naranja y Toronja.",
                origen: "Italia",
                grado: 28.5
            },
            {
                id: faker.datatype.uuid(),
                bebida: "Frangelico",
                componentes: "Licor de abellanas creado por los monjes Benedictinos.",
                origen: "Italia",
                grado: 20
            },
            {
                id: faker.datatype.uuid(),
                bebida: "Fernet",
                componentes: "Digestivo a base de yerbas y gusto muy amargo.",
                origen: "Italia, Argentina",
                grado: 40
            },
            {
                id: faker.datatype.uuid(),
                bebida: "Apsenta - Ajenjo",
                componentes: "Elaborado en base a la planta de Ajenjo.",
                origen: "",
                grado: 60
            },
            {
                id: faker.datatype.uuid(),
                bebida: "Amareto",
                componentes: "Elaborado a base de almendras con un toque de Melocotón o Durazno.",
                origen: "Italia",
                grado: 24
            },
            {
                id: faker.datatype.uuid(),
                bebida: "Anis 8 Hermanos",
                componentes: "Bebida anizada y almibarada con anis dulce o seco.",
                origen: "",
                grado: 36
            },
            {
                id: faker.datatype.uuid(),
                bebida: "Biter Angostura",
                componentes: "Infusionado y destilado de cortezas, raices y frutas, nuez moscada y clavo de olor.",
                origen: "Trinidad y Tobago",
                grado: 44.7
            },
            {
                id: faker.datatype.uuid(),
                bebida: "Malibu",
                componentes: "Licor tropical sabor a coco y agregado de Ron.",
                origen: "Islas Barbados",
                grado: 21
            },
            {
                id: faker.datatype.uuid(),
                bebida: "Licor 43",
                componentes: "Elaborado en base a 43 ingredientes, los más predominantes son la Vainilla y el Brandy.",
                origen: "España",
                grado: 31
            },
            {
                id: faker.datatype.uuid(),
                bebida: "Midori",
                componentes: "Licor sabor a Melón.",
                origen: "Japón",
                grado: 20
            },
            {
                id: faker.datatype.uuid(),
                bebida: "Bayles",
                componentes: "Irish Cream.",
                origen: "Irlanda",
                grado: 17
            },
            {
                id: faker.datatype.uuid(),
                bebida: "Amarula",
                componentes: "Elaborado en base a la fruta Marula. (No es Irish Cream)",
                origen: "Sud Africa",
                grado: 17
            },
            {
                id: faker.datatype.uuid(),
                bebida: "YagerMeister",
                componentes: "Elaborado con 16 ingredientes.(Maestro de cazadores - San Humbreto, patrón de los cazadores).",
                origen: "Alemania",
                grado: 35
            },
            {
                id: faker.datatype.uuid(),
                bebida: "Aperol",
                componentes: "Elaborado en base a Naranja amarga.(Parecido al Campari).",
                origen: "Italia",
                grado: 11
            },
            {
                id: faker.datatype.uuid(),
                bebida: "Drambue",
                componentes: "Licor en base a Wiskey y Miel. Es el más antiguo y famoso de Gales.",
                origen: "Escocia",
                grado: 40
            },
            {
                id: faker.datatype.uuid(),
                bebida: "Contreau",
                componentes: "Alcohol y escencia de Azajar.",
                origen: "Francia",
                grado: 40
            },
            {
                id: faker.datatype.uuid(),
                bebida: "Granadina",
                componentes: "Jarabe en base a la fruta granada",
                origen: "",
                grado: 0
            },
        ]
    }

    async create(data) {
        const newBebida = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.bebidas.push(newBebida);
        return newBebida;
    }

    async find() {
        return this.bebidas;
    }

    async findOne(id) {
        const index = this.bebidas.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('Bebida not found');
        } else {
            return this.bebidas.find(item => item.id === id);
        }
    }

    async update(id, changes) {
        const index = this.bebidas.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('Bebida not found');
        } else {
            const bebida = this.bebidas[index];
            this.bebidas[index] = {
                ...bebida,
                ...changes
            };
            return this.bebidas[index];
        }
    }

    async delete(id) {
        const index = this.bebidas.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('Bebida not found');
        } else {
            this.bebidas.splice(index, 1);
            return { id };
        }
    }

}

module.exports = BebidaService;