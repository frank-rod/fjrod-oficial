"use client"

export function EducationSection() {
  return (
    <section id="education" className="py-16 px-6 md:px-10 max-w-6xl mx-auto bg-muted/50">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
        Educación
      </h2>
      
      <div className="space-y-10">
        <div className="bg-background rounded-2xl p-6 shadow-sm border border-border flex gap-6">
          <div className="flex-shrink-0">
            <img
              src="/experience/tec-yo.jpg"
              alt="Francisco en el Tec de Monterrey"
              className="w-32 h-32 object-cover rounded-2xl"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold">Tecnológico de Monterrey, Campus Monterrey</h3>
            <p className="text-sm text-muted-foreground">2018 - 2022</p>
            <p className="mt-2">Licenciatura en Finanzas | Especialización en Fintech & Data Science</p>
            <ul className="list-disc list-outside ml-5 mt-2 text-muted-foreground">
              <li>Coordinador en la Sociedad de Alumnos de Administración Financiera (SALAF).</li>
              <li>Servicio social en 'DCA Mexico - Ciudadanitos' como profesor y creador de contenido.</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-background rounded-2xl p-6 shadow-sm border border-border flex gap-6">
          <div className="flex-shrink-0">
            <img
              src="/experience/ieb-yo.jpg"
              alt="Francisco en el IEB Madrid"
              className="w-32 h-32 object-cover rounded-2xl"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold">Instituto de Estudios Bursátiles de Madrid</h3>
            <p className="text-sm text-muted-foreground">2022</p>
            <p className="mt-2">Semestre de intercambio en España para la concentración de Fintech y Data Science</p>
            <ul className="list-disc list-outside ml-5 mt-2 text-muted-foreground">
              <li>Fundamentos de la ciencia de datos aplicada a finanzas corporativas y bursátiles.</li>
              <li>Metodologías estadísticas para la toma de decisiones.</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-background rounded-2xl p-6 shadow-sm border border-border">
          <h3 className="text-xl font-bold">Certificados y Diplomas</h3>
          <ul className="list-disc list-outside ml-5 mt-2 text-muted-foreground">
            <li><span className="font-medium">Analítica de Datos Avanzada</span> - Google</li>
            <li><span className="font-medium">Estadística de Negocios y Análisis</span> - Universidad Rice</li>
            <li><span className="font-medium">Business Intelligence Data Analyst</span> - Codecademy</li>
          </ul>
        </div>
      </div>
    </section>
  )
} 