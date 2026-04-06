"use client"

import { Button } from "./ui/button"
import { Mail, Github, Linkedin, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations, t } from "@/lib/translations"

export function ContactSection() {
  const { locale } = useLanguage()

  return (
    <section id="contact" className="py-16 px-6 md:px-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">
        {t(translations.contact.title, locale)}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">{t(translations.contact.infoTitle, locale)}</h3>
          <p className="text-muted-foreground mb-6">
            {t(translations.contact.infoDescription, locale)}
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-primary" />
              <a href="mailto:fjrodriguez00@outlook.com" className="hover:underline">fjrodriguez00@outlook.com</a>
            </div>
            <div className="flex items-center">
              <Linkedin className="h-5 w-5 mr-3 text-primary" />
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            </div>
            <div className="flex items-center">
              <Github className="h-5 w-5 mr-3 text-primary" />
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-3 text-primary" />
              <span>Monterrey, México</span>
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                {t(translations.contact.nameLabel, locale)}
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder={t(translations.contact.namePlaceholder, locale)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="fjrodriguez00@outlook.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              {t(translations.contact.subjectLabel, locale)}
            </label>
            <input
              id="subject"
              type="text"
              className="w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder={t(translations.contact.subjectPlaceholder, locale)}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              {t(translations.contact.messageLabel, locale)}
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder={t(translations.contact.messagePlaceholder, locale)}
              required
            ></textarea>
          </div>

          <Button type="submit" className="w-full">
            {t(translations.contact.send, locale)}
          </Button>
        </form>
      </div>
    </section>
  )
}
