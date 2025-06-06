"use client"

import { Button } from "./ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { ThemeImage } from "@/components/theme-image"
import { REMOTE_IMAGES } from "@/lib/remote-images"

// Enlaces sociales
const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/fjrodriguez00/',
  github: 'https://github.com/frank-rod',
  email: 'fjrodriguez00@outlook.com',
  cv: 'https://drive.google.com/file/d/15Z_glxVG2yS3JookwmunurwfFAHxwOxY/view?usp=sharing'
}

export function AboutSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="about" className="py-16 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-2 flex justify-center md:justify-start">
          {mounted && (
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-primary shadow-lg mx-auto md:mx-0 p-2 bg-background">
              <img
                src={REMOTE_IMAGES.yomero}
                alt="Francisco J. Rodriguez"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          )}
        </div>
        
        <div className="md:col-span-3 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Sobre mí
          </h2>
          <p className="text-xl mb-4 font-medium">
            Data Specialist | Expertise en análisis y optimización de negocios
          </p>
          <p className="text-muted-foreground mb-6">
            Apasionado por el análisis de datos y la automatización, vengo de un background en finanzas que me enseñó a tomar decisiones con base en números. Hoy aplico ese mismo enfoque en el mundo del análisis de datos, trabajando con Python, SQL y Excel. Todos los días dedico al menos un par de horas a aprender herramientas de inteligencia artificial, convencido de que la curiosidad constante es clave para crecer en este campo.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Button variant="outline" size="sm" asChild>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={`mailto:${SOCIAL_LINKS.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Contacto
              </a>
            </Button>
            <Button variant="default" size="sm" asChild>
              <a href={SOCIAL_LINKS.cv} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}