const products = [
    {
        id: 1,
        name: "Cap Support",
        color: "Negro",
        stock: 10,
        price: 1980,
        talle: "Unico",
        detail: "Gorra de gabardina bordada con nuestro logo",
        image:[
            "https://ibb.co/tBtvM4J"
        ],
        category:{
            name: "Accesorios",
            id: 91
        }
    },

    {
        id: 2,
        name: "Top Blaze",
        color: "Negro",
        stock: 5,
        price: 2790,
        talle: "Unico",
        detail: "Top manga larga de lurex leopardo con con abertura en manga para pasar el dedo.",
        image:[
            "https://ibb.co/WBbJ24P"
        ],
        category:{
            name:"Tops",
            id: 92
        }
    },

    {
        id:3,
        name: "Campera DENIM 90s",
        color: "Azul",
        stock: 2,
        price: 7250,
        talle: "Unico",
        detail: "Campera 90’s OVERSIZE de denim rígido azul",
        image:[
            "https://ibb.co/TvQLJ7R"
        ],
        category:{
            name:"Abrigos",
            id: 93
        }
    },

    {
        id:4,
        name:"Body Milly",
        color: "Tostado",
        stock: 3,
        price: 1840,
        talle: "Unico",
        detail:"Body recto satén.",
        image:[
            "https://ibb.co/Z1bX7j1"
        ],
        category:{
            name: "Bodys",
            id:94
        }    
    },
    
    {
        id:5,
        name:"Top Addictive",
        color: "Negro",
        stock: 8,
        price: 2090,
        talle: "M",
        detail: "Top tejido de hilo, regulable con las tiras y varias formas de usarlo.",
        image: [
            "https://ibb.co/bPF5tt5"
        ],
        category:{
            name:"Tops",
            id: 92
        }
    },

    {
        id: 5,
        name:"Support Tote bag XXL",
        color: "Blanco",
        stock: 20,
        price: 1290,
        talle: "",
        detail:"Fabricada en lienzo sublimada con nuestro logo, con asas gruesas y reforzadas para que te acompañe a la facu, oficina o en un día de playa y puedas llevar todos tus essentials, estes donde estes baby!",
        image:[
            "https://ibb.co/c8pNzQg"
        ],
        category:{
            name: "Accesorios",
            id:1
        }
    }
];

module.exports = {
    products,
}


