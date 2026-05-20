"use client";
import { useLanguage } from '../context/LanguageContext';
import PouringTea from "./PouringTea";

export default function CatalogHeader() {
  const { t } = useLanguage();
  
  return (
    <div className="mb-8 sm:mb-12 px-4">
      <PouringTea />
      <h1 
        className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-2 sm:mb-3 tracking-wide"
        style={{ color: 'var(--text-primary)' }}
      >
        {t('catalog.title')}
      </h1>
      <div 
        className="w-16 sm:w-20 h-px mx-auto my-3 sm:my-4"
        style={{ backgroundColor: 'var(--border-color)' }}
      />
      <p 
        className="text-center max-w-2xl mx-auto text-xs sm:text-sm tracking-wide px-4"
        style={{ color: 'var(--text-secondary)' }}
      >
        {t('catalog.subtitle')}
      </p>
    </div>
  );
}