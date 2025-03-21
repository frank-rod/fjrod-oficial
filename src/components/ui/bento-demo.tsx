import {
  Code2Icon,
  DatabaseIcon,
  LineChartIcon,
  BarChartIcon,
  BriefcaseIcon,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const projects = [
  {
    Icon: LineChartIcon,
    name: "Análisis Financiero Automatizado",
    description: "Dashboard para análisis financiero en tiempo real utilizando PowerBI y Python para automatizar la extracción y limpieza de datos.",
    href: "#",
    cta: "Ver detalles",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gradient-to-br from-primary/30 to-purple-500/20 blur-3xl opacity-70"></div>
        <div className="absolute right-0 bottom-0 h-32 w-32 rounded-full bg-gradient-to-tr from-blue-500/20 to-primary/20 blur-2xl opacity-60"></div>
      </div>
    ),
    className: "lg:col-span-1",
  },
  {
    Icon: BarChartIcon,
    name: "Sistema de Pronósticos de Ventas",
    description: "Implementación de un modelo de machine learning para predecir ventas futuras basado en datos históricos y variables de mercado.",
    href: "#",
    cta: "Ver detalles",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-gradient-to-tr from-secondary/30 to-green-500/20 blur-3xl opacity-70"></div>
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-gradient-to-bl from-blue-500/20 to-secondary/20 blur-2xl opacity-60"></div>
      </div>
    ),
    className: "lg:col-span-1",
  },
  {
    Icon: DatabaseIcon,
    name: "Optimizador de Inventario",
    description: "Herramienta para optimizar niveles de inventario basada en patrones de demanda y costos de almacenamiento.",
    href: "#",
    cta: "Ver detalles",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-gradient-to-tl from-primary/30 to-amber-500/20 blur-3xl opacity-70"></div>
        <div className="absolute right-20 top-10 h-20 w-20 rounded-full bg-gradient-to-br from-yellow-500/20 to-primary/20 blur-xl opacity-60"></div>
      </div>
    ),
    className: "lg:col-span-1",
  },
  {
    Icon: Code2Icon,
    name: "Aplicación Web de Gestión Financiera",
    description: "Desarrollo de una aplicación web para el control y seguimiento de finanzas personales y empresariales.",
    href: "#",
    cta: "Ver detalles",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-gradient-to-br from-secondary/30 to-cyan-500/20 blur-3xl opacity-70"></div>
        <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-gradient-to-tr from-teal-500/20 to-secondary/20 blur-2xl opacity-60"></div>
      </div>
    ),
    className: "lg:col-span-1",
  },
  {
    Icon: BriefcaseIcon,
    name: "Plataforma de Administración de Inversiones",
    description: "Sistema para gestionar carteras de inversión, analizar rendimientos y optimizar estrategias de inversión basadas en perfiles de riesgo.",
    href: "#",
    cta: "Ver detalles",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-gradient-to-tl from-secondary/30 to-indigo-500/20 blur-3xl opacity-70"></div>
        <div className="absolute left-20 top-10 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500/20 to-secondary/20 blur-xl opacity-60"></div>
      </div>
    ),
    className: "lg:col-span-1",
  },
];

function BentoDemo() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Primera fila - 3 proyectos (1/3 cada uno) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.slice(0, 3).map((project) => (
          <div key={project.name} className="h-[18rem]">
            <BentoCard {...project} />
          </div>
        ))}
      </div>
      
      {/* Segunda fila - 2 proyectos (1/2 cada uno) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.slice(3, 5).map((project) => (
          <div key={project.name} className="h-[18rem]">
            <BentoCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export { BentoDemo }; 