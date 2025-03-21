"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { scrollToElement } from "@/lib/smooth-scroll"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Navegación basada en el scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map((item) => item.url.replace('#', ''))
      const scrollTop = window.scrollY
      const headerHeight = 60 // Altura aproximada del header
      const landingThreshold = 100 // Umbral para considerar que estás en la landing
      
      // Si estás en la parte superior (landing), no selecciones ninguna sección
      if (scrollTop < landingThreshold) {
        setActiveTab(null)
        return
      }
      
      const getOffset = () => window.innerHeight * 0.2
      let foundActiveSection = false
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= getOffset() && rect.bottom > getOffset()) {
            const matchingItem = items.find(item => item.url === `#${section}`)
            if (matchingItem && matchingItem.name !== activeTab) {
              setActiveTab(matchingItem.name)
              foundActiveSection = true
            }
            break
          }
        }
      }
      
      // Si no encontramos una sección activa y no estamos en la landing, mantén la última sección activa
      if (!foundActiveSection && scrollTop >= landingThreshold) {
        // No hacer nada, mantener la última sección activa
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Llamar una vez al inicio para establecer el estado correcto
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [items, activeTab])

  return (
    <div
      className={cn(
        "bg-background/80 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg",
        className,
      )}
    >
      <div className="flex items-center gap-1">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name
          const sectionId = item.url.replace('#', '')

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={(e) => {
                setActiveTab(item.name)
                scrollToElement(sectionId, e)
              }}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}