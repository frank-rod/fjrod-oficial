"use client"

import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

export function Footer() {
  const { locale } = useLanguage()

  return (
    <footer className="py-6 px-6 border-t">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4">
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Francisco J. Rodriguez. {t(translations.footer.rights, locale)}
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
            href="mailto:fjrodriguez00@outlook.com"
            className="text-muted-foreground text-sm hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
