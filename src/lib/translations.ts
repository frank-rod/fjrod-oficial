export type Locale = "es" | "en"

export const translations = {
  // Navbar
  nav: {
    about: { es: "Sobre mí", en: "About me" },
    projects: { es: "Proyectos", en: "Projects" },
    skills: { es: "Habilidades", en: "Skills" },
    experience: { es: "Experiencia", en: "Experience" },
    education: { es: "Educación", en: "Education" },
    contact: { es: "Contacto", en: "Contact" },
  },

  // Hero
  hero: {
    tagline: {
      es: "Transformé modelos financieros en modelos de datos. Hoy, convierto números en decisiones.",
      en: "I turned financial models into data models. Today, I turn numbers into decisions.",
    },
    projects: { es: "Proyectos", en: "Projects" },
    contact: { es: "Contacto", en: "Contact" },
    scrollDown: { es: "Desplazarse hacia abajo", en: "Scroll down" },
  },

  // About
  about: {
    title: { es: "Sobre mí", en: "About me" },
    subtitle: {
      es: "Data Specialist | Expertise en análisis y optimización de negocios",
      en: "Data Specialist | Expertise in business analysis & optimization",
    },
    description: {
      es: "Me gusta crear cosas y resolver problemas técnicos. Antes de construir, busco entender los fundamentos. Vengo de finanzas: aprendí a tomar decisiones con números y hoy aplico ese mismo enfoque al análisis de datos y a construir productos. Todos los días dedico un par de horas a explorar y usar herramientas de IA. Como no hay manual, la curiosidad es la ventaja real.",
      en: "I enjoy building things and solving technical problems. Before building, I seek to understand the fundamentals. I come from finance: I learned to make decisions with numbers and today I apply that same approach to data analysis and building products. Every day I spend a couple of hours exploring and using AI tools. Since there's no manual, curiosity is the real advantage.",
    },
    contact: { es: "Contacto", en: "Contact" },
    downloadCV: { es: "Descargar CV", en: "Download CV" },
  },

  // Projects
  projects: {
    title: { es: "Proyectos: Datos y Machine Learning", en: "Projects: Data & Machine Learning" },
    moreOnGithub: {
      es: "Puedes encontrar más de mis proyectos en GitHub",
      en: "You can find more of my projects on GitHub",
    },
    viewMore: { es: "Ver más proyectos", en: "View more projects" },
    viewAnalysis: { es: "Ver análisis", en: "View analysis" },
    inDevelopment: { es: "En desarrollo", en: "In development" },
    retail: {
      name: { es: "Ciencia de Datos para Retail", en: "Data Science for Retail" },
      description: {
        es: "Proyecto completo con 4 modelos de ML aplicados a datos reales de retail: clustering, sistemas de recomendación, forecasting y detección de anomalías con Python.",
        en: "Complete project with 4 ML models applied to real retail data: clustering, recommendation systems, forecasting, and anomaly detection with Python.",
      },
    },
    google: {
      name: { es: "Análisis Técnico - Google Stock", en: "Technical Analysis - Google Stock" },
      description: {
        es: "Análisis cuantitativo completo de 5 años de datos históricos de Google (GOOGL) con indicadores técnicos, estrategias de trading algorítmico, análisis de riesgo y modelos predictivos usando LSTM.",
        en: "Complete quantitative analysis of 5 years of Google (GOOGL) historical data with technical indicators, algorithmic trading strategies, risk analysis, and predictive models using LSTM.",
      },
    },
    titanic: {
      name: { es: "Historias entre números: el Titanic", en: "Stories in Numbers: the Titanic" },
      description: {
        es: "Más que predecir, el objetivo es aprender de los datos detrás de una de las tragedias más recordadas de la historia.",
        en: "More than predicting, the goal is to learn from the data behind one of history's most remembered tragedies.",
      },
    },
    comingSoon: {
      name: { es: "Próximamente...", en: "Coming soon..." },
      description: {
        es: "Actualmente aprendiendo sobre IA generativa y sus aplicaciones en análisis de datos, automatización de procesos y desarrollo de soluciones inteligentes.",
        en: "Currently learning about generative AI and its applications in data analysis, process automation, and intelligent solution development.",
      },
    },
    inDev: {
      name: { es: "En Desarrollo...", en: "In Development..." },
      description: {
        es: "Explorando la creación de agentes de IA para automatización y análisis de datos, con enfoque en optimización de procesos empresariales y toma de decisiones inteligentes.",
        en: "Exploring the creation of AI agents for automation and data analysis, focused on business process optimization and intelligent decision-making.",
      },
    },
  },

  // Skills
  skills: {
    title: { es: "Habilidades", en: "Skills" },
    office: {
      es: "Excel avanzado (Macros & Visual Basics), PowerPoint y Word - Google Docs, Slides y Sheets.",
      en: "Advanced Excel (Macros & Visual Basics), PowerPoint & Word - Google Docs, Slides & Sheets.",
    },
    python: {
      es: "Librerías NumPy, Pandas, Matplotlib, TensorFlow y Scikit-learn para análisis y visualización de datos.",
      en: "NumPy, Pandas, Matplotlib, TensorFlow & Scikit-learn libraries for data analysis and visualization.",
    },
    sql: {
      es: "Diseño avanzado de consultas para obtención precisa de datos.",
      en: "Advanced query design for precise data retrieval.",
    },
    cloud: {
      es: "Almacenamiento y optimización de datos (BigQuery).",
      en: "Data storage and optimization (BigQuery).",
    },
    dataViz: {
      title: { es: "Visualización de Datos", en: "Data Visualization" },
      description: {
        es: "PowerBI y LookerStudio para visualización de datos (aprendiendo Tableau también).",
        en: "PowerBI & LookerStudio for data visualization (learning Tableau too).",
      },
    },
    ai: {
      title: { es: "Inteligencia Artificial", en: "Artificial Intelligence" },
      description: {
        es: "Uso y comprensión de herramientas de inteligencia artificial (ChatGPT, Gemini, Microsoft Copilot, Cursor, n8n) para análisis de datos.",
        en: "Use and understanding of AI tools (ChatGPT, Gemini, Microsoft Copilot, Cursor, n8n) for data analysis.",
      },
    },
  },

  // Experience
  experience: {
    title: { es: "Experiencia Profesional", en: "Professional Experience" },
    jobs: [
      {
        title: { es: "Analista de Datos Senior", en: "Senior Data Analyst" },
        period: { es: "Agosto 2025 - Presente", en: "August 2025 - Present" },
        responsibilities: {
          es: [
            "Automatización de reportes financieros",
            "Creación de tableros estratégicos para dirección (Power BI)",
            "Análisis de datos en Python, Excel y SQL Server",
            "Cuadre de información directamente en la base de datos, eliminando exceles pesados",
            "Generación de insights y proyecciones",
            "Optimización de modelos financieros",
          ],
          en: [
            "Financial report automation",
            "Strategic dashboard creation for management (Power BI)",
            "Data analysis in Python, Excel & SQL Server",
            "Data reconciliation directly in the database, eliminating heavy spreadsheets",
            "Insight generation and projections",
            "Financial model optimization",
          ],
        },
      },
      {
        title: { es: "Gerente de Business Intelligence", en: "Business Intelligence Manager" },
        period: { es: "Septiembre 2024 - Agosto 2025", en: "September 2024 - August 2025" },
        responsibilities: {
          es: [
            "A cargo del dpto. de Business Intelligence",
            "Reducción de los tiempos de carga de bases de datos en un 98.2%",
            "Implementación de Data Warehouse",
            "Diseño de procesos ETL",
            "Análisis del comportamiento de la empresa y productos",
            "Segmentaciones de clientes",
            "Insights que incrementaron ingresos en 10%",
          ],
          en: [
            "In charge of the Business Intelligence department",
            "Reduced database load times by 98.2%",
            "Data Warehouse implementation",
            "ETL process design",
            "Company and product behavior analysis",
            "Customer segmentation",
            "Insights that increased revenue by 10%",
          ],
        },
      },
      {
        title: { es: "Especialista de Business Intelligence", en: "Business Intelligence Specialist" },
        period: { es: "Junio 2023 - Septiembre 2024", en: "June 2023 - September 2024" },
        responsibilities: {
          es: [
            "Proyecciones Financieras",
            "Análisis de comportamiento de clientes",
            "Recolección y limpieza de datos",
            "Creación de reportes y métricas clave (KPIs)",
            "Automatización de procesos",
            "Creación de dashboards en PowerBI",
            "Presentaciones a inversionistas y directores",
          ],
          en: [
            "Financial Projections",
            "Customer behavior analysis",
            "Data collection and cleaning",
            "Report creation and key metrics (KPIs)",
            "Process automation",
            "PowerBI dashboard creation",
            "Presentations to investors and directors",
          ],
        },
      },
    ],
  },

  // Education
  education: {
    title: { es: "Educación", en: "Education" },
    tec: {
      name: { es: "Tecnológico de Monterrey, Campus Monterrey", en: "Tecnológico de Monterrey, Monterrey Campus" },
      degree: {
        es: "Licenciatura en Finanzas | Especialización en Fintech & Data Science",
        en: "Bachelor's in Finance | Specialization in Fintech & Data Science",
      },
      items: {
        es: [
          "Coordinador en la Sociedad de Alumnos de Administración Financiera (SALAF).",
          "Servicio social en 'DCA Mexico - Ciudadanitos' como profesor y creador de contenido.",
        ],
        en: [
          "Coordinator at the Financial Administration Student Society (SALAF).",
          "Social service at 'DCA Mexico - Ciudadanitos' as teacher and content creator.",
        ],
      },
    },
    ieb: {
      name: { es: "Instituto de Estudios Bursátiles de Madrid", en: "Madrid Stock Exchange Institute (IEB)" },
      degree: {
        es: "Semestre de intercambio en España para la concentración de Fintech y Data Science",
        en: "Exchange semester in Spain for Fintech and Data Science concentration",
      },
      items: {
        es: [
          "Fundamentos de la ciencia de datos aplicada a finanzas corporativas y bursátiles.",
          "Metodologías estadísticas para la toma de decisiones.",
        ],
        en: [
          "Data science fundamentals applied to corporate and stock market finance.",
          "Statistical methodologies for decision-making.",
        ],
      },
    },
    certs: {
      title: { es: "Certificados y Diplomas", en: "Certificates & Diplomas" },
      items: {
        es: [
          { name: "Analítica de Datos Avanzada", org: "Google" },
          { name: "Estadística de Negocios y Análisis", org: "Universidad Rice" },
          { name: "Business Intelligence Data Analyst", org: "Codecademy" },
        ],
        en: [
          { name: "Advanced Data Analytics", org: "Google" },
          { name: "Business Statistics and Analysis", org: "Rice University" },
          { name: "Business Intelligence Data Analyst", org: "Codecademy" },
        ],
      },
    },
  },

  // Contact
  contact: {
    title: { es: "Contacto", en: "Contact" },
    infoTitle: { es: "Información de Contacto", en: "Contact Information" },
    infoDescription: {
      es: "Si estás interesado en colaborar en proyectos o tienes alguna pregunta, no dudes en contactarme.",
      en: "If you're interested in collaborating on projects or have any questions, feel free to reach out.",
    },
    nameLabel: { es: "Nombre", en: "Name" },
    namePlaceholder: { es: "Tu nombre", en: "Your name" },
    subjectLabel: { es: "Asunto", en: "Subject" },
    subjectPlaceholder: { es: "Asunto del mensaje", en: "Message subject" },
    messageLabel: { es: "Mensaje", en: "Message" },
    messagePlaceholder: { es: "Tu mensaje...", en: "Your message..." },
    send: { es: "Enviar Mensaje", en: "Send Message" },
  },

  // Footer
  footer: {
    rights: {
      es: "Todos los derechos reservados.",
      en: "All rights reserved.",
    },
  },
} as const

export function t(
  obj: { es: string; en: string } | undefined,
  locale: Locale
): string {
  if (!obj) return ""
  return obj[locale]
}
