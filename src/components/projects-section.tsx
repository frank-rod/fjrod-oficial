"use client"

import { Github } from "lucide-react"
import { BentoDemo } from "./ui/bento-demo"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-6 md:px-10 max-w-6xl mx-auto bg-muted/50">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
        Proyectos: Datos y Machine Learning
      </h2>
      
      <BentoDemo />
      
      <div className="mt-8 text-center">
        <p className="text-muted-foreground mb-4">Puedes encontrar más de mis proyectos en GitHub</p>
        <a 
          href="https://github.com/fjrod" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-primary/80"
        >
          <Github className="mr-2 h-5 w-5" />
          Ver más proyectos
        </a>
      </div>
    </section>
  )
} 