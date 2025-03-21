"use client"

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

function InteractiveHoverButtonDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 p-10">
      <InteractiveHoverButton text="Ver Demo" className="min-w-36 h-11" />
      <InteractiveHoverButton 
        text="Botón con texto largo" 
        className="min-w-52 h-11 border-primary bg-transparent group-hover:text-white" 
      />
    </div>
  );
}

export { InteractiveHoverButtonDemo }; 