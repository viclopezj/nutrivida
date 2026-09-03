const productos = [
    {
        id: 1,
        nombre: "Batido Proteico Sabor Vainilla",
        categoria: "Suplementos",
        precio: 12990,
        descripcion: "Batido proteico en polvo sabor vainilla, ideal como complemento post-entrenamiento o snack saludable entre comidas. Aporta proteína de alta calidad con bajo contenido de azúcar.",
        hoverSwap: true,
        imagenes: [
            "IMG/productos/batido-vainilla-1.png",
            "IMG/productos/batido-vainilla-2.png"
        ]
    },
    {
        id: 2,
        nombre: "Barra de Cereal Integral",
        categoria: "Snacks",
        precio: 2990,
        descripcion: "Barra de cereal integral con avena, miel y frutos secos, perfecta para una colación rápida y nutritiva entre comidas.",
        imagenes: [
            "IMG/productos/barras-cereales-1.webp",
            "IMG/productos/barras-cereales-2.jpg"
        ]
    },
    {
        id: 3,
        nombre: "Multivitamínico Diario",
        categoria: "Suplementos",
        precio: 9990,
        descripcion: "Complejo multivitamínico con 12 vitaminas y minerales esenciales para apoyar el funcionamiento diario del organismo.",
        imagenes: [
            "IMG/productos/multivitaminico-1.png",
            "IMG/productos/multivitaminico-2.png",
            "IMG/productos/multivitaminico-3.png",
            "IMG/productos/multivitaminico-4.png"
        ]
    },
    {
        id: 4,
        nombre: "Aceite de Oliva Extra Virgen 500ml",
        categoria: "Despensa",
        precio: 7990,
        descripcion: "Aceite de oliva extra virgen prensado en frío, rico en ácidos grasos saludables, ideal para ensaladas y cocina diaria.",
        imagenes: [
            "img/productos/aceite_oliva_extra_virgen.jpg",
        ]
    },
    {
        id: 5,
        nombre: "Quinoa Orgánica 500g",
        categoria: "Despensa",
        precio: 5990,
        descripcion: "Quinoa orgánica libre de gluten, alta en proteínas y fibra, ideal para una alimentación balanceada.",
        imagenes: [
            "IMG/productos/quinoa-1.png",
            "IMG/productos/quinoa-2.png"
        ]
    },
    {
        id: 6,
        nombre: "Mix de Frutos Secos",
        categoria: "Snacks",
        precio: 6990,
        descripcion: "Mezcla de almendras, nueces y pasas sin sal, fuente natural de energía y grasas saludables.",
        imagenes: [
            "IMG/productos/frutos-secos-1.png"
        ]
    },
    {
        id: 7,
        nombre: "Batido Proteico Sabor Chocolate",
        categoria: "Suplementos",
        precio: 13990,
        descripcion: "Batido proteico en polvo sabor chocolate a base de superalimentos, con 20g de proteína por porción e ingredientes naturales.",
        imagenes: [
            "IMG/productos/batido-chocolate-1.png",
            "IMG/productos/batido-chocolate-2.png"
        ]
    },
    {
        id: 8,
        nombre: "Miel de Abeja Orgánica 500g",
        categoria: "Despensa",
        precio: 6490,
        descripcion: "Miel 100% natural de abejas, sin procesos de refinación ni azúcares añadidos, ideal como endulzante saludable.",
        imagenes: [
            "img/productos/miel_abeja_organica.jpg",
        ]
    },
    {
        id: 9,
        nombre: "Avena Integral en Hojuelas 1kg",
        categoria: "Despensa",
        precio: 3490,
        descripcion: "Avena integral en hojuelas, fuente de fibra y energía de liberación lenta, perfecta para desayunos y repostería saludable.",
        imagenes: [
            "IMG/productos/avena_integral.png"
        ]
    },
    {
        id: 10,
        nombre: "Chía Orgánica 250g",
        categoria: "Superalimentos",
        precio: 4990,
        descripcion: "Semillas de chía ricas en omega-3, fibra y antioxidantes, fáciles de agregar a batidos, yogures y ensaladas.",
        imagenes: [
            "img/productos/chia_organica.jpg"
        ]
    },
    {
        id: 11,
        nombre: "Semillas de Lino Molidas 300g",
        categoria: "Superalimentos",
        precio: 3990,
        descripcion: "Linaza molida, excelente fuente vegetal de omega-3 y fibra, ideal para mejorar la digestión y la salud cardiovascular.",
        imagenes: [
            "img/productos/semillas_lino.png"
        ]
    },
    {
        id: 12,
        nombre: "Proteína Vegana Sabor Chocolate",
        categoria: "Suplementos",
        precio: 15990,
        descripcion: "Mezcla de proteínas vegetales (arveja y arroz) sabor chocolate, sin lactosa ni gluten, con perfil completo de aminoácidos.",
        imagenes: [
            "img/productos/proteinas_vegana_chocolate.jpg"
        ]
    },
    {
        id: 13,
        nombre: "Colágeno Hidrolizado con Vitamina C",
        categoria: "Suplementos",
        precio: 11990,
        descripcion: "Colágeno hidrolizado enriquecido con vitamina C que favorece la salud de la piel, articulaciones y tejido conectivo.",
        imagenes: [
            "img/productos/Colágeno_vitC.png"
        ]
    },
    {
        id: 14,
        nombre: "Omega 3 Aceite de Pescado",
        categoria: "Suplementos",
        precio: 10990,
        descripcion: "Cápsulas de aceite de pescado ricas en EPA y DHA, que contribuyen a la salud cardiovascular y cerebral.",
        imagenes: [
            "img/productos/omega3_aceite_pescado.png"
        ]
    },
    {
        id: 15,
        nombre: "Té Verde Matcha Orgánico 100g",
        categoria: "Bebidas Saludables",
        precio: 8990,
        descripcion: "Matcha ceremonial 100% orgánico, alto en antioxidantes, ideal para preparar en agua caliente o batidos energizantes.",
        imagenes: [
            "img/productos/te_matcha_organico.png"
        ]
    },
    {
        id: 16,
        nombre: "Agua de Coco Natural 1L",
        categoria: "Bebidas Saludables",
        precio: 3990,
        descripcion: "Agua de coco 100% natural, rica en electrolitos, ideal para hidratarse después de entrenar o en días calurosos.",
        imagenes: [
            "img/productos/agua_coco_natural.jpg"
        ]
    },
    {
        id: 17,
        nombre: "Jugo Verde Detox Prensado en Frío",
        categoria: "Bebidas Saludables",
        precio: 4490,
        descripcion: "Jugo prensado en frío de espinaca, pepino, apio y manzana verde, sin azúcares añadidos ni conservantes.",
        imagenes: [
            "img/productos/jugo_verde_detox.png"
        ]
    },
    {
        id: 18,
        nombre: "Barritas de Proteína Sabor Maní",
        categoria: "Snacks",
        precio: 3290,
        descripcion: "Barritas horneadas con proteína de suero y maní natural, sin azúcares añadidos, ideales como snack post-entrenamiento.",
        imagenes: [
            "img/productos/barritas_proteina_mani.png"
        ]
    },
    {
        id: 19,
        nombre: "Chips de Vegetales Horneados",
        categoria: "Snacks",
        precio: 3790,
        descripcion: "Chips crocantes de camote, remolacha y zanahoria, horneados sin freír, con solo un toque de sal marina.",
        imagenes: [
            "img/productos/chips_vegetales.png"
        ]
    },
    {
        id: 20,
        nombre: "Palomitas de Maíz Orgánicas",
        categoria: "Snacks",
        precio: 2490,
        descripcion: "Palomitas de maíz orgánico infladas con aire caliente, bajas en grasa y perfectas para una colación ligera.",
        imagenes: [
            "img/productos/palomitas_organicas.png"
        ]
    },
    {
        id: 21,
        nombre: "Pasta de Almendra Natural 300g",
        categoria: "Despensa",
        precio: 7490,
        descripcion: "Crema de almendras 100% natural, sin azúcar ni aceites añadidos, fuente de grasas saludables y proteína vegetal.",
        imagenes: [
            "img/productos/pasta_almendra_natural.png"
        ]
    },
    {
        id: 22,
        nombre: "Leche de Almendras sin Azúcar 1L",
        categoria: "Despensa",
        precio: 3290,
        descripcion: "Bebida vegetal de almendras sin azúcar añadida, baja en calorías, ideal para intolerantes a la lactosa.",
        imagenes: [
            "img/productos/leche_almendras_sin_azucar.png"
        ]
    },
    {
        id: 23,
        nombre: "Granola Artesanal con Frutos Rojos",
        categoria: "Despensa",
        precio: 4990,
        descripcion: "Granola horneada artesanalmente con avena, frutos rojos deshidratados y semillas, sin azúcares refinados.",
        imagenes: [
            "img/productos/granola_artesanal.png"
        ]
    },
    {
        id: 24,
        nombre: "Espirulina en Polvo 200g",
        categoria: "Superalimentos",
        precio: 9490,
        descripcion: "Espirulina 100% pura en polvo, alta en proteína y hierro, ideal para fortalecer batidos verdes y jugos.",
        imagenes: [
            "img/productos/espirulina_polvo.png"
        ]
    },
    {
        id: 25,
        nombre: "Cúrcuma en Polvo Orgánica 150g",
        categoria: "Superalimentos",
        precio: 4290,
        descripcion: "Cúrcuma orgánica molida, con propiedades antiinflamatorias naturales, perfecta para condimentar o preparar golden milk.",
        imagenes: [
            "img/productos/curcuma_polvo.png"
        ]
    }
];

function formatoPrecio(valor) {
    return "$" + valor.toLocaleString("es-CL");
}
