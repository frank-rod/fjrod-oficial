"use client"

import { Particles } from "@/components/ui/particles"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { InteractiveHoverButton } from "./ui/interactive-hover-button"
import { scrollToElement } from "@/lib/smooth-scroll"
import { REMOTE_IMAGES } from "@/lib/remote-images"

export function HeroSection() {
  const [color] = useState("#ffffff")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <div className="z-10 flex flex-col items-center justify-center px-6 text-center">
        {mounted && (
          <div className="relative h-48 w-48 mb-10 rounded-full overflow-hidden border-4 border-primary shadow-lg mx-auto p-1 bg-background">
            <img
              src={REMOTE_IMAGES.profileDark}
              alt="Francisco J. Rodriguez"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        )}
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Francisco J. Rodriguez
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-xl">
          Transformé modelos financieros en modelos de datos. Hoy, convierto números en decisiones.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <a href="#projects" onClick={(e) => scrollToElement('projects', e)} className="no-underline">
            <InteractiveHoverButton 
              text="Proyectos" 
              className="min-w-40 h-11 flex items-center justify-center text-base"
            />
          </a>
          <a href="#contact" onClick={(e) => scrollToElement('contact', e)} className="no-underline">
            <InteractiveHoverButton 
              text="Contacto" 
              className="min-w-40 h-11 flex items-center justify-center text-base border-primary bg-transparent group-hover:text-white"
            />
          </a>
        </div>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="lg" 
          className="rounded-full p-2 hover:bg-background/20" 
          aria-label="Desplazarse hacia abajo"
          onClick={() => scrollToElement('about')}
        >
          <ArrowDown className="h-9 w-9 text-primary" strokeWidth={1} />
        </Button>
      </div>
    </section>
  )
}