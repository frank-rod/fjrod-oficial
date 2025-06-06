import {
  Code2Icon,
  DatabaseIcon,
  LineChartIcon,
  BarChartIcon,
  BriefcaseIcon,
  ShipIcon,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { REMOTE_IMAGES } from "@/lib/remote-images";

const projects = [
  {
    Icon: null,
    name: "Ciencia de Datos para Retail",
    description: "Proyecto completo con 4 modelos de ML aplicados a datos reales de retail: clustering, sistemas de recomendación, forecasting y detección de anomalías con Python.",
    href: "https://github.com/frank-rod/retail-analysis-ML-/blob/main/retail_analysis_portfolio.ipynb",
    cta: "Ver análisis",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={REMOTE_IMAGES.retail} 
          alt="Retail analysis background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
    ),
    className: "lg:col-span-1",
  },
  {
    Icon: null,
    name: "Análisis Técnico - Google Stock",
    description: "Análisis cuantitativo completo de 5 años de datos históricos de Google (GOOGL) con indicadores técnicos, estrategias de trading algorítmico, análisis de riesgo y modelos predictivos usando LSTM.",
    href: "https://github.com/frank-rod/GoogleStock/blob/main/google_stock_analysis.ipynb",
    cta: "Ver análisis",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={REMOTE_IMAGES.googleStock} 
          alt="Google stock analysis background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75"></div>
      </div>
    ),
    className: "lg:col-span-1",
  },
  {
    Icon: null,
    name: "Historias entre números: el Titanic",
    description: "Más que predecir, el objetivo es aprender de los datos detrás de una de las tragedias más recordadas de la historia.",
    href: "https://github.com/frank-rod/analisis_titanic/blob/main/analisis_titanic.ipynb",
    cta: "Ver análisis",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={REMOTE_IMAGES.titanic} 
          alt="Titanic background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75"></div>
      </div>
    ),
    className: "lg:col-span-1 !bg-transparent !shadow-none dark:!bg-transparent dark:!border-none",
  },
  {
    Icon: Code2Icon,
    name: "Próximamente...",
    description: "Actualmente aprendiendo sobre IA generativa y sus aplicaciones en análisis de datos, automatización de procesos y desarrollo de soluciones inteligentes.",
    href: "#",
    cta: "En desarrollo",
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
    name: "En Desarrollo...",
    description: "Explorando la creación de agentes de IA para automatización y análisis de datos, con enfoque en optimización de procesos empresariales y toma de decisiones inteligentes.",
    href: "#",
    cta: "En desarrollo",
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