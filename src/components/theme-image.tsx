"use client"

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ThemeImageProps {
  darkSrc: string
  lightSrc: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function ThemeImage({
  darkSrc,
  lightSrc,
  alt,
  width,
  height,
  className = "",
  priority = false
}: ThemeImageProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Durante el renderizado del servidor, mostrar un placeholder
  if (!mounted) {
    return (
      <div className={`bg-muted animate-pulse ${className}`} 
           style={{ width: width || '100%', height: height || '100%' }}
      />
    )
  }
  
  const imageSrc = resolvedTheme === 'dark' ? darkSrc : lightSrc
  
  if (width && height) {
    return (
      <Image 
        src={imageSrc} 
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-200 ${className}`}
        priority={priority}
      />
    )
  }
  
  return (
    <div className="relative h-full w-full">
      <Image 
        src={imageSrc} 
        alt={alt}
        fill={true}
        className={`object-cover transition-opacity duration-200 ${className}`}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
      />
    </div>
  )
}