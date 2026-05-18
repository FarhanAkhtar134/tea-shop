"use client";
import { useLanguage } from '../context/LanguageContext';

export default function FooterText() {
  const { t } = useLanguage();
  
  return <p>© 2025 Tea Haven. {t('footer.copyright')}</p>;
}