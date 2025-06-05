// Paint.js

/**
 * Represents a single paint artwork.
 */
export class Paint { // <-- EXPORTING THE CLASS
    /**
     * Creates an instance of Paint.
     * @param {string} name - The name of the paint.
     * @param {string} description - The description of the paint.
     * @param {string} filename - The file name of the paint.
     * @param {number} price - The price of the paint.
     * @param {number} width - The width of the paint in units (e.g., cm).
     * @param {number} height - The height of the paint in units (e.g., cm).
     */
    constructor(name, description, technique , filename, price, width, height, available) {
        this.name = name;
        this.description = description;
        this.technique = technique;
        this.filename = filename;
        this.price = price;
        this.width = width;
        this.height = height;
        this.available = available;
    }

    getDimensions() {
        return `${this.width} x ${this.height} cms`;
    }

    getFormattedPrice() {
        const formattedAmount = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(this.price);

        return `USD ${formattedAmount}`;
    }
}

export const paints = [ 
    new Paint(
        "Amor",
        "Basada en el amor universal, imaginado como un todo que nos unifica",
        "Acrilico sobre lienzo",
        "amor.jpg",
        0,
        80,
        100,
        true
    ),
    new Paint(
        "Paseo por mundos",
        "Sin descripción",
        "Acrilico sobre lienzo",
        "paseo_por_mundos.jpg",
        0,
        80,
        100,
        true
    ),
    new Paint(
        "Dama cabellos de roca",
        "Sin descripción",
        "Texturado sobre lienzo pintado con acrilico",
        "dama_cabellos_de_roca.jpg",
        0,
        50,
        70,
        true
    ),
    new Paint(
        "Historias con historia",
        "Sin descripción",
        "Texturado doble lienzo pintado con acrílico",
        "historias_con_historias.jpg",
        0,
        30,
        20,
        true
    ),
    new Paint(
        "Caledoscopio",
        "Sin descripción",
        "Técnica mixta, acrílica con óleo pastel y soporte en lienzo",
        "caledoscopio.JPG",
        0,
        100,
        80,
        true
    ),
    new Paint(
        "Sinfonía",
        "Sin descripción",
        "Tecnica mixta: texturado, oleo pastel, acrílico en soporte de lienzo",
        "sinfonia.jpg",
        0,
        100,
        80,
        true
    ),
    new Paint(
        "Desde el vuelo",
        "Sin descripción",
        "Tecnica acrílico sobre lienzo",
        "desde_el_vuelo.jpg",
        0,
        60,
        60,
        true
    ),
    new Paint(
        "Mirada escondida en un jardín encantado",
        "Sin descripción",
        "Sin técnica",
        "mirada_escondida.jpg",
        0,
        80,
        100,
        true
    ),
    new Paint(
        "Ciudad misterio",
        "Sin descripción",
        "Tecnica acrílico sobre lienzo",
        "ciudad_misterio.jpg",
        0,
        100,
        80,
        true
    ),
    new Paint(
        "Diálogo de Primavera",
        "Sin descripción",
        "Tecnica acrílico sobre lienzo",
        "dialogo_primavera.jpg",
        0,
        80,
        100,
        true
    ),
    new Paint(
        "Viaje por mundos felices",
        "Sin descripción",
        "Tecnica acrílico sobre lienzo",
        "viaje_por_mundos.jpg",
        0,
        80,
        100,
        true
    ),
    new Paint(
        "Nosotras",
        "Sin descripción",
        "Tecnica pintura acrílica",
        "nosotras.jpg",
        0,
        100,
        80,
        true
    ),
    new Paint(
        "Vuelo al centro",
        "Sin descripción",
        "Tecnica acrílico sobre lienzo",
        "vuelo_al_centro.jpg",
        0,
        130,
        100,
        true
    ),
    new Paint(
        "Anónimo",
        "Sin descripción",
        "Tecnica acrílico sobre lienzo",
        "anonimo.jpg",
        0,
        80,
        100,
        true
    ),
    new Paint(
        "Centro",
        "Sin descripción",
        "Materico mixto",
        "centro.jpg",
        0,
        45,
        45,
        true
    ),
    new Paint(
        "Escaleras",
        "Sin descripción",
        "Tecnica acrílico sobre lienzo",
        "escaleras.jpg",
        0,
        100,
        80,
        true
    ),
];