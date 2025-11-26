import { Estudiante } from "./General";

export const estudiante: Estudiante = {
  id: "123",
  nombre: "Ana Sofía Rojas",
  email: "ana@example.com",
  usuario: "anaAdmin",
  passwordHash: "12345",
  avatarPath: "",

  carrera: {
    id: "c1",
    nombre: "Administración de Empresas",
    cursos: [
      {
        id: "curso1",
        nombre: "Inglés de Negocio",
        descripcion: "Comunícate sin fronteras y abre nuevas oportunidades",
        imagenPath: "../assets/imagenes/curso_ingles.webp",
        progreso: 65,
        temas: [
          {
            id: "t1",
            titulo: "Gramática Avanzada",
            descripcion: "Estudio y aplicación de las estructuras complejas de un idioma.",
            iconoPath: "language",
            completado: true,
          },
          {
            id: "t2",
            titulo: "Vocabulario Empresarial",
            descripcion: "Incluye términos especializados, acrónimos, jerga y conceptos clave que se usan en el mundo de los negocios.",
            iconoPath: "bag-shopping",
            completado: false,
          },
        ]
      },
      {
        id: "curso2",
        nombre: "Matemáticas para los Negocios",
        descripcion: "Domina los números que impulsan el éxito empresarial.",
        imagenPath: "../assets/imagenes/curso_mate.jpg",
        progreso: 80,
        temas: [
          {
            id: "t1",
            titulo: "Algebra Lineal",
            descripcion: "Vectores, matrices y sistema de ecuaciones.",
            iconoPath: "table-cells",
            completado: true,
          },
          {
            id: "t2",
            titulo: "Cálculo Diferencial e Integral",
            descripcion: "Límites, derivadas, integrales y sus aplicaciones.",
            iconoPath: "florin-sign",
            completado: false,
          },
          {
            id: "t3",
            titulo: "Estadística Aplicada",
            descripcion: "Análisis de datos para la toma de decisiones.",
            iconoPath: "chart-simple",
            completado: true,
          }
        ]
      }
    ]
  },
  progresoGeneral: 20,
};
