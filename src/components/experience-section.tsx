"use client"

const experiences = [
  {
    title: "Analista de Datos Senior",
    company: "GP Vivienda",
    location: "Monterrey, NL, México",
    period: "Agosto 2025 - Presente",
    logo: "/experience/gpvivienda-logo.png",
    photo: "/experience/gpvivienda-yo.png",
    responsibilities: [
      "Automatización de reportes financieros",
      "Creación de tableros estratégicos para dirección (Power BI)",
      "Análisis de datos en Python, Excel y SQL Server",
      "Cuadre de información directamente en la base de datos, eliminando exceles pesados",
      "Generación de insights y proyecciones",
      "Optimización de modelos financieros",
    ],
  },
  {
    title: "Gerente de Business Intelligence",
    company: "Manuable",
    location: "Monterrey, NL, México",
    period: "Septiembre 2024 - Agosto 2025",
    logo: "/experience/manuable-logo.png",
    photo: "/experience/manuable-yo.jpg",
    responsibilities: [
      "A cargo del dpto. de Business Intelligence (6 integrantes)",
      "Reducción de los tiempos de carga de bases de datos en un 98.2%",
      "Implementación de Data Warehouse",
      "Diseño de procesos ETL",
      "Análisis del comportamiento de la empresa y productos",
      "Segmentaciones de clientes",
      "Insights que incrementaron ingresos en 10%",
    ],
  },
  {
    title: "Especialista de Business Intelligence",
    company: "DGas - Dharma Capital",
    location: "Monterrey, NL, México",
    period: "Junio 2023 - Septiembre 2024",
    logo: "/experience/dgas-logo.png",
    photo: "/experience/dgas-yo.jpg",
    responsibilities: [
      "Proyecciones Financieras",
      "Análisis de comportamiento de clientes",
      "Recolección y limpieza de datos",
      "Creación de reportes y métricas clave (KPIs)",
      "Automatización de procesos",
      "Creación de dashboards en PowerBI",
      "Presentaciones a inversionistas y directores",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-6 md:px-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
        Experiencia Profesional
      </h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-6">
            <div className="flex-shrink-0 w-60 h-56 bg-white rounded-2xl overflow-hidden shadow-md flex flex-col">
              <div className="h-14 flex items-center justify-center p-2 bg-white">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="max-w-[80%] max-h-10 object-contain"
                />
              </div>
              <div className="flex-1 overflow-hidden">
                <img
                  src={exp.photo}
                  alt={`Francisco en ${exp.company}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-x-2">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <div className="sm:ml-auto text-sm text-muted-foreground">{exp.period}</div>
              </div>
              <p className="text-base font-medium">{exp.company} - {exp.location}</p>
              <ul className="list-disc list-outside ml-5 text-muted-foreground">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
