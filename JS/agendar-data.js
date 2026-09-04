// Datos de los nutricionistas de NutriVida
const nutricionistas = [
    {
        id: 1,
        nombre: "Camila Rojas",
        especialidad: "Nutrición Deportiva",
        foto: "IMG/Nutricionistas/nutricionista (1).png",
        imagen: "IMG/Planes/Proteico_Fitness.jpg",
        bio: "Trabaja con deportistas y personas activas, ayudando a mejorar el rendimiento físico y la recuperación muscular a través de la alimentación.",
        experiencia: "8 años de experiencia"
    },
    {
        id: 2,
        nombre: "Matías Fuentes",
        especialidad: "Control de Peso",
        foto: "IMG/Nutricionistas/nutricionista (2).png",
        imagen: "IMG/Planes/Control_peso.jpg",
        bio: "Especialista en el acompañamiento de procesos de baja y mantención de peso, con un enfoque realista y sostenible en el tiempo.",
        experiencia: "10 años de experiencia"
    },
    {
        id: 3,
        nombre: "Valentina Soto",
        especialidad: "Salud Metabólica",
        foto: "IMG/Nutricionistas/nutricionista (3).png",
        imagen: "IMG/Planes/detox_verde.jpg",
        bio: "Enfocada en el manejo nutricional de la diabetes, resistencia a la insulina, colesterol y otras condiciones metabólicas.",
        experiencia: "6 años de experiencia"
    },
    {
        id: 4,
        nombre: "Diego Herrera",
        especialidad: "Alimentación Vegetariana/Vegana",
        foto: "IMG/Nutricionistas/nutricionista (4).png",
        imagen: "IMG/Planes/Vegetariano_Integral.jpg",
        bio: "Ayuda a pacientes a llevar una alimentación vegetariana o vegana completa y balanceada, cuidando cada nutriente esencial.",
        experiencia: "7 años de experiencia"
    }
];

// Horarios según el día de la semana (0 = domingo ... 6 = sábado)
const horariosPorDia = {
    semana: ["09:00", "10:30", "12:00", "15:00", "16:30"],
    sabado: ["09:00", "10:00", "11:00"]
};

// Devuelve los horarios disponibles para una fecha dada (null si no hay atención)
function obtenerHorarios(fecha) {
    const dia = fecha.getDay();
    if (dia === 0) return null; // domingo cerrado
    if (dia === 6) return horariosPorDia.sabado; // sábado solo mañana
    return horariosPorDia.semana;
}
