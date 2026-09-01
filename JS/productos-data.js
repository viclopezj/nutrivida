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
            "https://placehold.co/500x400/f2e9d8/7a5c1e?text=Aceite+Oliva+1",
            "https://placehold.co/500x400/ecdfc2/7a5c1e?text=Aceite+Oliva+2",
            "https://placehold.co/500x400/e6d5ac/7a5c1e?text=Aceite+Oliva+3",
            "https://placehold.co/500x400/e0cb96/7a5c1e?text=Aceite+Oliva+4"
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
    }
];

function formatoPrecio(valor) {
    return "$" + valor.toLocaleString("es-CL");
}
