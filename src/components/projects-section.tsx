"use client"

import { Github } from "lucide-react"
import { BentoDemo } from "./ui/bento-demo"
import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

export function ProjectsSection() {
  const { locale } = useLanguage()

  return (
    <section id="projects" className="py-16 px-6 md:px-10 max-w-6xl mx-auto bg-muted/50">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
        {t(translations.projects.title, locale)}
      </h2>

      <BentoDemo />

      <div className="mt-8 text-center">
        <p className="text-muted-foreground mb-4">{t(translations.projects.moreOnGithub, locale)}</p>
        <a
          href="https://github.com/fjrod"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-primary/80"
        >
          <Github className="mr-2 h-5 w-5" />
          {t(translations.projects.viewMore, locale)}
        </a>
      </div>
    </section>
  )
}
