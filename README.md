# fjrod-oficial - Sitio Web Personal Optimizado

Este repositorio contiene el código fuente optimizado de mi sitio web personal [fjrod.com](https://fjrod.com), desarrollado con tecnologías modernas para mostrar mi perfil profesional, proyectos y habilidades.

## Versión 1.0.0
La versión actual incluye:
- Diseño responsivo y moderno con soporte para temas claro/oscuro
- Navegación fluida con efectos animados y partículas interactivas
- Secciones de proyectos, habilidades, experiencia y educación
- Optimización de imágenes según el tema seleccionado (con ImageKit)
- Configuración optimizada para despliegue en Vercel
- Correcciones de ESLint para evitar problemas en producción

## Tecnologías Utilizadas

- **[Next.js 15](https://nextjs.org/)**: Framework React con renderizado del lado del servidor
- **[React 19](https://react.dev/)**: Biblioteca JavaScript para crear interfaces de usuario
- **[TypeScript](https://www.typescriptlang.org/)**: Superset tipado de JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first
- **[Shadcn UI](https://ui.shadcn.com/)**: Componentes reutilizables y accesibles
- **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animaciones fluidas
- **[next-themes](https://github.com/pacocoursey/next-themes)**: Soporte para temas claro/oscuro

## Características

- **Diseño Responsivo**: Adaptable a todos los tamaños de pantalla
- **Tema Claro/Oscuro**: Soporte para cambio de tema con persistencia
- **Componentes Animados**: Partículas interactivas y efectos de hover
- **Optimización de Imágenes**: Carga condicional según el tema seleccionado
- **Estructura Modular**: Código organizado en componentes reutilizables
- **Despliegue Optimizado**: Configuración especial para Vercel sin errores de ESLint

## Desarrollo Local

1. Clona este repositorio:
```bash
git clone https://github.com/frank-rod/fjrod-oficial.git
cd fjrod-oficial
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev:webpack
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del Proyecto

- `/src/app`: Componentes principales de la aplicación y configuración global
- `/src/components`: Componentes reutilizables de la interfaz de usuario
- `/src/components/ui`: Componentes UI básicos (botones, menús, etc.)
- `/src/lib`: Utilidades y funciones de ayuda
- `/public`: Archivos estáticos (imágenes, iconos)

## Licencia

MIT © [Francisco J. Rodriguez](https://github.com/frank-rod)