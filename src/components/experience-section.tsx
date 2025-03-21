"use client"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-6 md:px-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
        Experiencia Profesional
      </h2>
      
      <div className="space-y-12">
        <div className="border-l-2 border-primary pl-6">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-x-2">
              <h3 className="text-xl font-bold">Business Intelligence Manager</h3>
              <div className="ml-auto text-sm text-muted-foreground">Ene 2025 - Presente</div>
            </div>
            <p className="text-base font-medium">Manuable - Monterrey, NL, México</p>
            <ul className="list-disc list-outside ml-5 text-muted-foreground">
              <li>Responsable del equipo de Business Intelligence</li>
              <li>Análisis de insights y tendencias utilizando Python</li>
              <li>Mantenimiento e implementación de bases de datos en Google BigQuery</li>
              <li>Creación de dashboards (Power BI, LookerStudio)</li>
              <li>Automatización de procesos y análisis utilizando metodología BMPN</li>
            </ul>
          </div>
        </div>
        
        <div className="border-l-2 border-primary pl-6">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-x-2">
              <h3 className="text-xl font-bold">Data Analyst Sr</h3>
              <div className="ml-auto text-sm text-muted-foreground">Nov 2024 - Ene 2025</div>
            </div>
            <p className="text-base font-medium">Manuable - Monterrey, NL, México</p>
            <ul className="list-disc list-outside ml-5 text-muted-foreground">
              <li>Análisis y visualización de datos utilizando SQL y Python</li>
              <li>Automatización de flujos de información</li>
              <li>Integraciones de fuentes de datos usando Fivetran</li>
              <li>Creación de dashboards (Power BI, LookerStudio)</li>
              <li>Optimización de procesos analíticos</li>
              <li>Análisis numéricos y estadísticos</li>
              <li>Investigación de mercado</li>
            </ul>
          </div>
        </div>
        
        <div className="border-l-2 border-primary pl-6">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-x-2">
              <h3 className="text-xl font-bold">Financial Planning Analyst</h3>
              <div className="ml-auto text-sm text-muted-foreground">Jun 2023 - Nov 2024</div>
            </div>
            <p className="text-base font-medium">DGas - Dharma Capital - Monterrey, NL, México</p>
            <ul className="list-disc list-outside ml-5 text-muted-foreground">
              <li>Planificación financiera y análisis</li>
              <li>Automatización de procesos</li>
              <li>Presentación de resultados a accionistas e inversores</li>
              <li>Creación e interpretación de estados financieros</li>
              <li>Implementación y control de Inteligencia Artificial</li>
              <li>Encargado de dashboards en PowerBI y LookerStudio</li>
              <li>Análisis de fusiones y adquisiciones (valuaciones de capital)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 