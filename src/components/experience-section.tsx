"use client"

import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

const experiencesBase = [
  {
    company: "GP Vivienda",
    location: "Monterrey, NL, México",
    logo: "/experience/gpvivienda-logo.png",
    photo: "/experience/gpvivienda-yo.png",
  },
  {
    company: "Manuable",
    location: "Monterrey, NL, México",
    logo: "/experience/manuable-logo.png",
    photo: "/experience/manuable-yo.png",
  },
  {
    company: "DGas - Dharma Capital",
    location: "Monterrey, NL, México",
    logo: "/experience/dgas-logo.png",
    photo: "/experience/dgas-yo.jpg",
  },
]

export function ExperienceSection() {
  const { locale } = useLanguage()

  const experiences = experiencesBase.map((base, i) => ({
    ...base,
    title: t(translations.experience.jobs[i].title, locale),
    period: t(translations.experience.jobs[i].period, locale),
    responsibilities: translations.experience.jobs[i].responsibilities[locale],
  }))

  return (
    <section id="experience" className="py-16 px-6 md:px-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
        {t(translations.experience.title, locale)}
      </h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0 w-full md:w-60 h-56 bg-white rounded-2xl overflow-hidden shadow-md flex flex-col mx-auto md:mx-0 max-w-60">
              <div className="h-14 flex items-center justify-center p-2 bg-white">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="max-w-[80%] max-h-10 object-contain"
                />
              </div>
              <div className="flex-1 overflow-hidden">
                <img
                  src={exp.photo}
                  alt={`Francisco en ${exp.company}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2 flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-x-2">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <div className="md:ml-auto text-sm text-muted-foreground">{exp.period}</div>
              </div>
              <p className="text-base font-medium">{exp.company} - {exp.location}</p>
              <ul className="list-disc list-outside ml-5 text-muted-foreground text-left">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
