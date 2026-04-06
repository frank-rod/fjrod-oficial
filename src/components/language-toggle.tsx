"use client"

import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  return (
    <button
      onClick={() => setLocale(locale === "es" ? "en" : "es")}
      className="fixed top-4 right-4 z-[60] flex items-center gap-2 rounded-full bg-background/80 backdrop-blur-md border border-border px-3 py-1.5 shadow-lg hover:bg-muted transition-colors cursor-pointer"
      aria-label={locale === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <span className={`text-lg leading-none transition-opacity ${locale === "es" ? "opacity-100" : "opacity-40"}`}>
        🇲🇽
      </span>
      <div className="relative w-10 h-5 rounded-full bg-muted-foreground/20">
        <div
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-primary transition-transform duration-200 ${
            locale === "en" ? "translate-x-[22px]" : "translate-x-0.5"
          }`}
        />
      </div>
      <span className={`text-lg leading-none transition-opacity ${locale === "en" ? "opacity-100" : "opacity-40"}`}>
        🇺🇸
      </span>
    </button>
  )
}
