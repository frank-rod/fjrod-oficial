"use client"

export function Footer() {
  return (
    <footer className="py-6 px-6 border-t">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4">
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Francisco J. Rodriguez. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <a 
            href="#" 
            className="text-muted-foreground text-sm hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-muted-foreground">•</span>
          <a 
            href="#" 
            className="text-muted-foreground text-sm hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <span className="text-muted-foreground">•</span>
          <a 
            href="mailto:tu@email.com" 
            className="text-muted-foreground text-sm hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
} 