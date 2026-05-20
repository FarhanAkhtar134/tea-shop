"use client";
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function NavLinks() {
  const { t } = useLanguage();
  
  return (
    <div className="hidden sm:flex items-center gap-4 md:gap-8">
      <Link href="/" className="transition-colors hover:opacity-80 text-sm md:text-base whitespace-nowrap"
            style={{ color: 'var(--text-primary)' }}>
        {t('nav.home')}
      </Link>
      <Link href="/catalog" className="transition-colors hover:opacity-80 text-sm md:text-base whitespace-nowrap"
            style={{ color: 'var(--text-primary)' }}>
        {t('nav.teas')}
      </Link>
      <Link href="/about" className="transition-colors hover:opacity-80 text-sm md:text-base whitespace-nowrap"
            style={{ color: 'var(--text-primary)' }}>
        {t('nav.about')}
      </Link>
      <Link href="/contact" className="transition-colors hover:opacity-80 text-sm md:text-base whitespace-nowrap"
            style={{ color: 'var(--text-primary)' }}>
        {t('nav.contact')}
      </Link>
    </div>
  );
}