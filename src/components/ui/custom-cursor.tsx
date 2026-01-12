"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)

    const updatePosition = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }

      const target = e.target as HTMLElement
      const isClickable =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest("[onclick]") ||
        window.getComputedStyle(target).cursor === "pointer"

      setIsHovering(!!isClickable)
    }

    window.addEventListener("mousemove", updatePosition)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] rounded-full bg-white mix-blend-difference transition-[width,height] duration-150 ease-out"
      style={{
        transform: "translate(-50%, -50%)",
        width: isHovering ? 28 : 14,
        height: isHovering ? 28 : 14,
        left: -100,
        top: -100,
      }}
    />
  )
}
