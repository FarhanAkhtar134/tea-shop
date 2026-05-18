"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Your translations
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.teas': 'Teas',
    'nav.about': 'About',
    
    // Home Hero
    'home.hero.title': 'Rare Tea Leaves',
    'home.hero.subtitle': 'Hand-picked from ancient mountain gardens. Patiently aged for depth and character.',
    'home.hero.button': 'Explore Collection',
    
    // Home Catalog
    'home.catalog.title': 'Our Tea Collection',
    'home.catalog.subtitle': 'Each leaf tells a story of terroir, tradition, and time',
    
    // Catalog Page
    'catalog.title': 'Our Tea Collection',
    'catalog.subtitle': 'Each leaf tells a story of terroir, tradition, and the patient hands that harvested it',
    'catalog.tastingNotes': 'Tasting Notes',
    'catalog.learnMore': 'Learn More',
    'catalog.viewFull': 'View Full Collection →',
    'catalog.backToHome': 'Back to Home',
    'catalog.caffeine': 'Caffeine',
    'catalog.steepTime': 'Steep',
    'catalog.temperature': 'Temp',
    
    // Filters
    'filter.all': 'All',
    'filter.white': 'White Tea',
    'filter.green': 'Green Tea',
    'filter.oolong': 'Oolong',
    'filter.black': 'Black Tea',
    'filter.puerh': 'Pu-Erh',
    'filter.matcha': 'Matcha',
    
    // Tea Names
    'tea.silverNeedle': 'Silver Needle White Tea',
    'tea.daHongPao': 'Da Hong Pao',
    'tea.gyokuro': 'Gyokuro',
    'tea.ancientPuErh': 'Ancient Pu-Erh',
    'tea.darjeeling': 'Darjeeling First Flush',
    'tea.matchaTencha': 'Matcha Tencha',
    
    // Origins
    'origin.fujian': 'Fujian, China',
    'origin.wuyi': 'Wuyi Mountains',
    'origin.uji': 'Uji, Japan',
    'origin.yunnan': 'Yunnan, China',
    'origin.westBengal': 'West Bengal, India',
    'origin.kyoto': 'Kyoto, Japan',
    
    // Tasting Notes
    'notes.silverNeedle': 'Honey, Melon, Fresh Hay',
    'notes.daHongPao': 'Mineral, Orchid, Stone Fruit',
    'notes.gyokuro': 'Umami, Seaweed, Sweet',
    'notes.ancientPuErh': 'Earthy, Dark Chocolate, Mushroom',
    'notes.darjeeling': 'Muscatel, Floral, Citrus',
    'notes.matchaTencha': 'Creamy, Vegetal, Sweet',
    
    // Rarity
    'rarity.rare': 'Rare',
    'rarity.premium': 'Premium',
    'rarity.limited': 'Limited',
    'rarity.aged10': 'Aged 10 Years',
    'rarity.seasonal': 'Seasonal',
    'rarity.ceremonial': 'Ceremonial',
    
    // Footer
    'footer.copyright': 'Sip slowly, live fully.',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.teas': '茶品',
    'nav.about': '关于',
    
    // Home Hero
    'home.hero.title': '稀有茶叶',
    'home.hero.subtitle': '从古老的山地茶园手工采摘。耐心陈化，赋予深度与个性。',
    'home.hero.button': '探索茶品',
    
    // Home Catalog
    'home.catalog.title': '我们的茶系列',
    'home.catalog.subtitle': '每一片茶叶都讲述着风土、传统与时光的故事',
    
    // Catalog Page
    'catalog.title': '我们的茶系列',
    'catalog.subtitle': '每一片茶叶都讲述着风土、传统与匠心采摘的故事',
    'catalog.tastingNotes': '品鉴笔记',
    'catalog.learnMore': '了解更多',
    'catalog.viewFull': '查看完整系列 →',
    'catalog.backToHome': '返回首页',
    'catalog.caffeine': '咖啡因',
    'catalog.steepTime': '冲泡时间',
    'catalog.temperature': '水温',
    
    // Filters
    'filter.all': '全部',
    'filter.white': '白茶',
    'filter.green': '绿茶',
    'filter.oolong': '乌龙茶',
    'filter.black': '红茶',
    'filter.puerh': '普洱茶',
    'filter.matcha': '抹茶',
    
    // Tea Names
    'tea.silverNeedle': '白毫银针',
    'tea.daHongPao': '大红袍',
    'tea.gyokuro': '玉露',
    'tea.ancientPuErh': '古树普洱茶',
    'tea.darjeeling': '大吉岭初摘',
    'tea.matchaTencha': '抹茶碾茶',
    
    // Origins
    'origin.fujian': '中国福建',
    'origin.wuyi': '武夷山',
    'origin.uji': '日本宇治',
    'origin.yunnan': '中国云南',
    'origin.westBengal': '印度西孟加拉邦',
    'origin.kyoto': '日本京都',
    
    // Tasting Notes
    'notes.silverNeedle': '蜂蜜、蜜瓜、鲜草',
    'notes.daHongPao': '矿物质、兰花、核果',
    'notes.gyokuro': '鲜味、海苔、甘甜',
    'notes.ancientPuErh': '泥土、黑巧克力、蘑菇',
    'notes.darjeeling': '麝香葡萄、花香、柑橘',
    'notes.matchaTencha': '奶油、蔬菜、甘甜',
    
    // Rarity
    'rarity.rare': '稀有',
    'rarity.premium': '尊贵',
    'rarity.limited': '限量',
    'rarity.aged10': '陈化10年',
    'rarity.seasonal': '季节性',
    'rarity.ceremonial': '仪式级',
    
    // Footer
    'footer.copyright': '慢慢啜饮，品味生活',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'zh')) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}