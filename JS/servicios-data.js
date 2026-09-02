// Datos de los planes alimenticios de NutriVida
const planes = [
    {
        id: 1,
        nombre: "Plan Detox Verde",
        categoria: "Desintoxicación",
        descripcion: "Enfocado en depurar el organismo con vegetales de hoja verde, jugos naturales y porciones ligeras. Ideal para comenzar una rutina alimenticia más limpia.",
        imagen: "IMG/Planes/detox_verde.jpg",
        comidas: {
            desayuno: 2990,
            snack: 1490,
            almuerzo: 4490
        }
    },
    {
        id: 2,
        nombre: "Plan Balance Mediterráneo",
        categoria: "Equilibrado",
        descripcion: "Inspirado en la dieta mediterránea: pescados, legumbres, aceite de oliva y frutos secos en las cuatro comidas del día para mantener energía constante.",
        imagen: "IMG/Planes/Balance_Mediterráneo.jpg",
        comidas: {
            desayuno: 3290,
            snack: 1690,
            almuerzo: 5490,
            cena: 4990
        }
    },
    {
        id: 3,
        nombre: "Plan Vegetariano Integral",
        categoria: "Vegetariano",
        descripcion: "Almuerzos y cenas 100% vegetarianos, elaborados con legumbres, cereales integrales y vegetales de estación para una alimentación libre de carnes.",
        imagen: "IMG/Planes/vegetariano_integral.jpg",
        comidas: {
            almuerzo: 4790,
            cena: 4390
        }
    },
    {
        id: 4,
        nombre: "Plan Proteico Fitness",
        categoria: "Deportivo",
        descripcion: "Pensado para quienes entrenan con frecuencia: desayunos altos en proteína, snacks post-entrenamiento y cenas ligeras para favorecer la recuperación muscular.",
        imagen: "IMG/Planes/proteico_fitness.jpg",
        comidas: {
            desayuno: 3690,
            snack: 1990,
            cena: 4690
        }
    },
    {
        id: 5,
        nombre: "Plan Vegano Energía",
        categoria: "Vegano",
        descripcion: "Cuatro comidas 100% de origen vegetal, pensadas para mantener buenos niveles de energía durante todo el día sin productos de origen animal.",
        imagen: "IMG/Planes/Vegano_Energía.jpg",
        comidas: {
            desayuno: 2890,
            snack: 1390,
            almuerzo: 4590,
            cena: 4290
        }
    },
    {
        id: 6,
        nombre: "Plan Control de Peso",
        categoria: "Control de peso",
        descripcion: "Porciones calculadas y bajas en calorías para desayuno, almuerzo y cena, diseñado en conjunto con nuestras nutricionistas para un descenso de peso saludable.",
        imagen: "IMG/Planes/control_peso.jpg",
        comidas: {
            desayuno: 2690,
            almuerzo: 4290,
            cena: 3990
        }
    }
];

// Duraciones disponibles para contratar un plan.
const duraciones = {
    semanal: { etiqueta: "Semanal (7 días)", dias: 7, factor: 1 },
    mensual: { etiqueta: "Mensual (30 días)", dias: 30, factor: 0.9 },
    trimestral: { etiqueta: "Trimestral (90 días)", dias: 90, factor: 0.8 }
};

// Nombres visibles y orden fijo para cada tipo de comida.
const nombresComida = {
    desayuno: "Desayuno",
    snack: "Snack",
    almuerzo: "Almuerzo",
    cena: "Cena"
};
