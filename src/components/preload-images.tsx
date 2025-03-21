"use client"

import { REMOTE_IMAGES } from "@/lib/remote-images"
import { useEffect, useState } from "react"
import Image from "next/image"

export function PreloadImages() {
  const [loaded, setLoaded] = useState(false)
  
  // Solo ejecutar en el cliente
  useEffect(() => {
    setLoaded(true)
    
    // Precargar todas las imágenes con prioridad alta
    const imageUrls = Object.values(REMOTE_IMAGES)
    
    // Crear etiquetas <link rel="preload"> para cargar las imágenes antes
    imageUrls.forEach(url => {
      const linkElement = document.createElement('link')
      linkElement.rel = 'preload'
      linkElement.as = 'image'
      linkElement.href = url
      linkElement.fetchPriority = 'high'
      document.head.appendChild(linkElement)
    })
  }, [])
  
  if (!loaded) return null
  
  return (
    <div className="hidden">
      {Object.values(REMOTE_IMAGES).map((src, index) => (
        <Image 
          key={index}
          src={src}
          alt="Preloaded image"
          width={1}
          height={1}
          priority
        />
      ))}
    </div>
  )
}