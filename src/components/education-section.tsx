"use client"

import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

export function EducationSection() {
  const { locale } = useLanguage()
  const certs = translations.education.certs.items[locale]

  return (
    <section id="education" className="py-16 px-6 md:px-10 max-w-6xl mx-auto bg-muted/50">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
        {t(translations.education.title, locale)}
      </h2>

      <div className="space-y-10">
        <div className="bg-background rounded-2xl p-6 shadow-sm border border-border flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <img
              src="/experience/tec-yo.jpg"
              alt="Francisco en el Tec de Monterrey"
              className="w-32 h-32 object-cover rounded-2xl"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold">{t(translations.education.tec.name, locale)}</h3>
            <p className="text-sm text-muted-foreground">2018 - 2022</p>
            <p className="mt-2">{t(translations.education.tec.degree, locale)}</p>
            <ul className="list-disc list-outside ml-5 mt-2 text-muted-foreground text-left">
              {translations.education.tec.items[locale].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-background rounded-2xl p-6 shadow-sm border border-border flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <img
              src="/experience/ieb-yo.jpg"
              alt="Francisco en el IEB Madrid"
              className="w-32 h-32 object-cover rounded-2xl"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold">{t(translations.education.ieb.name, locale)}</h3>
            <p className="text-sm text-muted-foreground">2022</p>
            <p className="mt-2">{t(translations.education.ieb.degree, locale)}</p>
            <ul className="list-disc list-outside ml-5 mt-2 text-muted-foreground text-left">
              {translations.education.ieb.items[locale].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-background rounded-2xl p-6 shadow-sm border border-border">
          <h3 className="text-xl font-bold">{t(translations.education.certs.title, locale)}</h3>
          <ul className="list-disc list-outside ml-5 mt-2 text-muted-foreground">
            {certs.map((cert, i) => (
              <li key={i}><span className="font-medium">{cert.name}</span> - {cert.org}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
