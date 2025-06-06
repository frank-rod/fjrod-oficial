"use client"

import { CircleCheckBig, Database, FileSpreadsheet, BarChart4, LineChart, BrainCircuit } from "lucide-react"

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-6 md:px-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
        Habilidades
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <FileSpreadsheet className="h-6 w-6 text-primary" />
            <h3 className="font-bold text-lg">Microsoft Office & Google Suite</h3>
          </div>
          <p className="text-muted-foreground">
            Excel avanzado (Macros & Visual Basics), PowerPoint y Word - Google Docs, Slides y Sheets.
          </p>
        </div>
        
        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <CircleCheckBig className="h-6 w-6 text-primary" />
            <h3 className="font-bold text-lg">Python</h3>
          </div>
          <p className="text-muted-foreground">
            Librerías NumPy, Pandas, Matplotlib, TensorFlow y Scikit-learn para análisis y visualización de datos.
          </p>
        </div>
        
        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Database className="h-6 w-6 text-primary" />
            <h3 className="font-bold text-lg">SQL</h3>
          </div>
          <p className="text-muted-foreground">
            Diseño avanzado de consultas para obtención precisa de datos.
          </p>
        </div>
        
        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Database className="h-6 w-6 text-primary" />
            <h3 className="font-bold text-lg">Google Cloud Console</h3>
          </div>
          <p className="text-muted-foreground">
            Almacenamiento y optimización de datos (BigQuery).
          </p>
        </div>
        
        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <BarChart4 className="h-6 w-6 text-primary" />
            <h3 className="font-bold text-lg">Visualización de Datos</h3>
          </div>
          <p className="text-muted-foreground">
            PowerBI y LookerStudio para visualización de datos (aprendiendo Tableau también).
          </p>
        </div>
        
        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <h3 className="font-bold text-lg">Inteligencia Artificial</h3>
          </div>
          <p className="text-muted-foreground">
            Uso y comprensión de herramientas de inteligencia artificial (ChatGPT, Gemini, Microsoft Copilot, Cursor, n8n) para análisis de datos.
          </p>
        </div>
      </div>
    </section>
  )
} 