"use client"

import {
  Code2Icon,
  BriefcaseIcon,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { REMOTE_IMAGES } from "@/lib/remote-images";
import { useLanguage } from "@/lib/language-context";
import { translations, t } from "@/lib/translations";

function BentoDemo() {
  const { locale } = useLanguage();

  const projects = [
    {
      Icon: null,
      name: t(translations.projects.retail.name, locale),
      description: t(translations.projects.retail.description, locale),
      href: "https://github.com/frank-rod/retail-analysis-ML-/blob/main/retail_analysis_portfolio.ipynb",
      cta: t(translations.projects.viewAnalysis, locale),
      background: (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={REMOTE_IMAGES.retail}
            alt="Retail analysis background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
      ),
      className: "lg:col-span-1",
    },
    {
      Icon: null,
      name: t(translations.projects.google.name, locale),
      description: t(translations.projects.google.description, locale),
      href: "https://github.com/frank-rod/GoogleStock/blob/main/google_stock_analysis.ipynb",
      cta: t(translations.projects.viewAnalysis, locale),
      background: (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={REMOTE_IMAGES.googleStock}
            alt="Google stock analysis background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
      ),
      className: "lg:col-span-1",
    },
    {
      Icon: null,
      name: t(translations.projects.titanic.name, locale),
      description: t(translations.projects.titanic.description, locale),
      href: "https://github.com/frank-rod/analisis_titanic/blob/main/analisis_titanic.ipynb",
      cta: t(translations.projects.viewAnalysis, locale),
      background: (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={REMOTE_IMAGES.titanic}
            alt="Titanic background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
      ),
      className: "lg:col-span-1 !bg-transparent !shadow-none dark:!bg-transparent dark:!border-none",
    },
    {
      Icon: Code2Icon,
      name: t(translations.projects.comingSoon.name, locale),
      description: t(translations.projects.comingSoon.description, locale),
      href: "#",
      cta: t(translations.projects.inDevelopment, locale),
      background: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-gradient-to-br from-secondary/30 to-cyan-500/20 blur-3xl opacity-70"></div>
          <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-gradient-to-tr from-teal-500/20 to-secondary/20 blur-2xl opacity-60"></div>
        </div>
      ),
      className: "lg:col-span-1",
    },
    {
      Icon: BriefcaseIcon,
      name: t(translations.projects.inDev.name, locale),
      description: t(translations.projects.inDev.description, locale),
      href: "#",
      cta: t(translations.projects.inDevelopment, locale),
      background: (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-gradient-to-tl from-secondary/30 to-indigo-500/20 blur-3xl opacity-70"></div>
          <div className="absolute left-20 top-10 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500/20 to-secondary/20 blur-xl opacity-60"></div>
        </div>
      ),
      className: "lg:col-span-1",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.slice(0, 3).map((project) => (
          <div key={project.name} className="h-[18rem]">
            <BentoCard {...project} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.slice(3, 5).map((project) => (
          <div key={project.name} className="h-[18rem]">
            <BentoCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export { BentoDemo };
