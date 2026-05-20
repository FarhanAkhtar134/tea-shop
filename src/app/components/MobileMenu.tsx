"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg transition-colors"
        style={{ color: 'var(--text-primary)' }}
        aria-label="Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-14 left-0 right-0 p-4 shadow-lg z-50"
             style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}>
          <div className="flex flex-col gap-4">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="transition-colors hover:opacity-80 py-2 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('nav.home')}
            </Link>
            <Link 
              href="/catalog" 
              onClick={() => setIsOpen(false)}
              className="transition-colors hover:opacity-80 py-2 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('nav.teas')}
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="transition-colors hover:opacity-80 py-2 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('nav.about')}
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="transition-colors hover:opacity-80 py-2 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}