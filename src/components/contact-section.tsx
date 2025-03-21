"use client"

import { Button } from "./ui/button"
import { Mail, Github, Linkedin, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-6 md:px-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">
        Contacto
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
          <p className="text-muted-foreground mb-6">
            Si estás interesado en colaborar en proyectos o tienes alguna pregunta, 
            no dudes en contactarme.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-primary" />
              <a href="mailto:tu@email.com" className="hover:underline">tu@email.com</a>
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
                Nombre
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Tu nombre"
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
                placeholder="tu@email.com"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Asunto
            </label>
            <input
              id="subject"
              type="text"
              className="w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Asunto del mensaje"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Mensaje
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Tu mensaje..."
              required
            ></textarea>
          </div>
          
          <Button type="submit" className="w-full">
            Enviar Mensaje
          </Button>
        </form>
      </div>
    </section>
  )
} 