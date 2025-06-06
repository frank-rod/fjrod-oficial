"use client"

import { Particles } from "@/components/ui/particles"

export function ParticlesDemo() {
  const color = "#ffffff"

  return (
    <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  )
} 