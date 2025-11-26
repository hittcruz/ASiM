import { Carrera } from "./General";

export const carreras: Carrera[] = [
  {
    id: "c1",
    nombre: "Administración de Empresas",
    descripcion:
      "Incluyen la planificación estratégica, la gestión de recursos (humanos, financieros, materiales y tecnológicos), el análisis financiero, el marketing y la gestión de operaciones.",
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
            descripcion:
              "Estudio y aplicación de las estructuras complejas de un idioma.",
            iconoPath: "language",
            completado: true,
          },
          {
            id: "t2",
            titulo: "Vocabulario Empresarial",
            descripcion:
              "Incluye términos especializados, acrónimos, jerga y conceptos clave que se usan en el mundo de los negocios.",
            iconoPath: "bag-shopping",
            completado: false,
          },
        ],
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
          },
        ],
      },
    ],
  },
  {
    id: "c2",
    nombre: "Contabilidad",
    descripcion:
      "Incluyen la ecuación contable (Activo = Pasivo + Patrimonio), el registro de ingresos y gastos, y la preparación de estados financieros como el balance general, el estado de resultados y el estado de flujo de efectivo.",
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
            descripcion:
              "Estudio y aplicación de las estructuras complejas de un idioma.",
            iconoPath: "language",
            completado: true,
          },
          {
            id: "t2",
            titulo: "Vocabulario Empresarial",
            descripcion:
              "Incluye términos especializados, acrónimos, jerga y conceptos clave que se usan en el mundo de los negocios.",
            iconoPath: "bag-shopping",
            completado: false,
          },
        ],
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
          },
        ],
      },
    ],
  },
  {
    id: "c3",
    nombre: "Administración en Turismo y Hotelería",
    descripcion:
      "Incluyen gestión de operaciones hoteleras y turísticas, planificación y desarrollo de destinos, marketing y ventas turísticas, y gestión financiera y de recursos humanos.",
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
            descripcion:
              "Estudio y aplicación de las estructuras complejas de un idioma.",
            iconoPath: "language",
            completado: true,
          },
          {
            id: "t2",
            titulo: "Vocabulario Empresarial",
            descripcion:
              "Incluye términos especializados, acrónimos, jerga y conceptos clave que se usan en el mundo de los negocios.",
            iconoPath: "bag-shopping",
            completado: false,
          },
        ],
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
          },
        ],
      },
    ],
  },
  {
    id: "c4",
    nombre: "Administración y Marketing",
    descripcion:
      "Abarcan la estrategia de negocios (como la dirección estratégica y el plan comercial), la gestión empresarial (organización, liderazgo, finanzas) y la relación con el cliente (investigación de mercados, comportamiento del consumidor, experiencia del cliente).",
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
            descripcion:
              "Estudio y aplicación de las estructuras complejas de un idioma.",
            iconoPath: "language",
            completado: true,
          },
          {
            id: "t2",
            titulo: "Vocabulario Empresarial",
            descripcion:
              "Incluye términos especializados, acrónimos, jerga y conceptos clave que se usan en el mundo de los negocios.",
            iconoPath: "bag-shopping",
            completado: false,
          },
        ],
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
          },
        ],
      },
    ],
  },
  {
    id: "c5",
    nombre: "Administración y Negocios Internacionales",
    descripcion:
      "Integra la gestión administrativa con un enfoque global, abarcando conceptos como la visión global del entorno, el comercio internacional (importación/exportación), la logística global, el marketing internacional y la gestión de operaciones en entornos multiculturales.",
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
            descripcion:
              "Estudio y aplicación de las estructuras complejas de un idioma.",
            iconoPath: "language",
            completado: true,
          },
          {
            id: "t2",
            titulo: "Vocabulario Empresarial",
            descripcion:
              "Incluye términos especializados, acrónimos, jerga y conceptos clave que se usan en el mundo de los negocios.",
            iconoPath: "bag-shopping",
            completado: false,
          },
        ],
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
          },
        ],
      },
    ],
  },
];
