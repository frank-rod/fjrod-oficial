"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const isHoveringRef = useRef(false)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let rafId: number | null = null
    let targetX = -100
    let targetY = -100

    const updatePosition = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY

      const target = e.target as HTMLElement
      const isClickable = !!(
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select")
      )

      if (isClickable !== isHoveringRef.current) {
        isHoveringRef.current = isClickable
        const size = isClickable ? "28px" : "14px"
        cursor.style.width = size
        cursor.style.height = size
      }
    }

    const animate = () => {
      cursor.style.left = `${targetX}px`
      cursor.style.top = `${targetY}px`
      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    window.addEventListener("mousemove", updatePosition, { passive: true })

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] rounded-full bg-white mix-blend-difference transition-[width,height] duration-150 ease-out"
      style={{
        transform: "translate(-50%, -50%)",
        width: 14,
        height: 14,
        left: -100,
        top: -100,
        willChange: "left, top, width, height",
      }}
    />
  )
}
