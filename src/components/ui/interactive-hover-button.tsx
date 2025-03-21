import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-full border bg-background px-4 py-2 text-center font-semibold",
        className,
      )}
      {...props}
    >
      <span className="relative z-20 inline-block transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 h-0 w-full bg-primary transition-all duration-300 group-hover:h-full"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton }; 