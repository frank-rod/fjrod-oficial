"use client"

import { CircleCheckBig, Database, FileSpreadsheet, BarChart4, BrainCircuit } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

export function SkillsSection() {
  const { locale } = useLanguage()

  return (
    <section id="skills" className="py-16 px-6 md:px-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
        {t(translations.skills.title, locale)}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <FileSpreadsheet className="h-6 w-6 text-primary" />
            <h3 className="font-bold text-lg">Microsoft Office & Google Suite</h3>
          </div>
          <p className="text-muted-foreground">
            {t(translations.skills.office, locale)}
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <CircleCheckBig className="h-6 w-6 text-primary" />
            <h3 className="font-bold text-lg">Python</h3>
          </div>
          <p className="text-muted-foreground">
            {t(translations.skills.python, locale)}
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Database className="h-6 w-6 text-primary" />
            <h3 className="font-bold text-lg">SQL</h3>
          </div>
          <p className="text-muted-foreground">
            {t(translations.skills.sql, locale)}
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Database className="h-6 w-6 text-primary" />
            <h3 className="font-bold text-lg">Google Cloud Console</h3>
          </div>
          <p className="text-muted-foreground">
            {t(translations.skills.cloud, locale)}
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <BarChart4 className="h-6 w-6 text-primary" />
            <h3 className="font-bold text-lg">{t(translations.skills.dataViz.title, locale)}</h3>
          </div>
          <p className="text-muted-foreground">
            {t(translations.skills.dataViz.description, locale)}
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <h3 className="font-bold text-lg">{t(translations.skills.ai.title, locale)}</h3>
          </div>
          <p className="text-muted-foreground">
            {t(translations.skills.ai.description, locale)}
          </p>
        </div>
      </div>
    </section>
  )
}
