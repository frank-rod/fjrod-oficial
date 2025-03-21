"use client"

import { useState, useEffect } from "react"
import { BookOpen, FileText, Briefcase, Phone, User, GraduationCap, Lightbulb } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { useTheme } from "next-themes"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { ThemeImage } from "@/components/theme-image"
import { REMOTE_IMAGES } from "@/lib/remote-images"

export function Navbar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: 'Sobre mí', url: '#about', icon: User },
    { name: 'Proyectos', url: '#projects', icon: FileText },
    { name: 'Habilidades', url: '#skills', icon: Lightbulb },
    { name: 'Experiencia', url: '#experience', icon: Briefcase },
    { name: 'Educación', url: '#education', icon: GraduationCap },
    { name: 'Contacto', url: '#contact', icon: Phone }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 px-4 backdrop-blur-md">
      <div className="flex items-center max-w-[1400px] mx-auto px-4">
        <a href="#" className="flex-shrink-0" aria-label="Inicio">
          {mounted && (
            <div className="relative w-36 h-12 flex items-center transition-transform hover:scale-105">
              <ThemeImage
                darkSrc={REMOTE_IMAGES.logoDark}
                lightSrc={REMOTE_IMAGES.logoLight}
                alt="Logo de Francisco J. Rodriguez"
                width={144}
                height={48}
                className="object-contain"
                priority
              />
            </div>
          )}
        </a>
        
        <div className="flex items-center gap-6 ml-auto pr-0 md:pr-10 lg:pr-20">
          <ThemeToggle />
          <NavBar items={navItems} />
        </div>
      </div>
    </header>
  )
}