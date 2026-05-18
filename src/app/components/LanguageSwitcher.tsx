"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed top-20 right-4 z-50 flex gap-1 p-1 rounded-full backdrop-blur-md border"
      style={{ 
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--border-color)'
      }}
    >
      <button
        onClick={() => setLanguage('en')}
        className="px-3 py-1 text-xs rounded-full transition-all duration-200"
        style={{
          backgroundColor: language === 'en' ? 'var(--accent)' : 'transparent',
          color: language === 'en' ? 'var(--bg-primary)' : 'var(--text-secondary)'
        }}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('zh')}
        className="px-3 py-1 text-xs rounded-full transition-all duration-200"
        style={{
          backgroundColor: language === 'zh' ? 'var(--accent)' : 'transparent',
          color: language === 'zh' ? 'var(--bg-primary)' : 'var(--text-secondary)'
        }}
      >
        中文
      </button>
    </motion.div>
  );
}