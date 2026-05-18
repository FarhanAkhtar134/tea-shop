"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Your translations
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.teas": "Teas",
    "nav.about": "About",

    // Home Hero
    "home.hero.title": "Rare Tea Leaves",
    "home.hero.subtitle":
      "Hand-picked from ancient mountain gardens. Patiently aged for depth and character.",
    "home.hero.button": "Explore Collection",

    // Home Catalog
    "home.catalog.title": "Our Tea Collection",
    "home.catalog.subtitle":
      "Each leaf tells a story of terroir, tradition, and time",

    // Catalog Page
    "catalog.title": "Our Tea Collection",
    "catalog.subtitle":
      "Each leaf tells a story of terroir, tradition, and the patient hands that harvested it",
    "catalog.tastingNotes": "Tasting Notes",
    "catalog.learnMore": "Learn More",
    "catalog.viewFull": "View Full Collection →",
    "catalog.backToHome": "Back to Home",
    "catalog.caffeine": "Caffeine",
    "catalog.steepTime": "Steep",
    "catalog.temperature": "Temp",

    // Filters
    "filter.all": "All",
    "filter.white": "White Tea",
    "filter.green": "Green Tea",
    "filter.oolong": "Oolong",
    "filter.black": "Black Tea",
    "filter.puerh": "Pu-Erh",
    "filter.matcha": "Matcha",

    // Tea Names
    "tea.silverNeedle": "Silver Needle White Tea",
    "tea.daHongPao": "Da Hong Pao",
    "tea.gyokuro": "Gyokuro",
    "tea.ancientPuErh": "Ancient Pu-Erh",
    "tea.darjeeling": "Darjeeling First Flush",
    "tea.matchaTencha": "Matcha Tencha",

    // Origins
    "origin.fujian": "Fujian, China",
    "origin.wuyi": "Wuyi Mountains",
    "origin.uji": "Uji, Japan",
    "origin.yunnan": "Yunnan, China",
    "origin.westBengal": "West Bengal, India",
    "origin.kyoto": "Kyoto, Japan",

    // Tasting Notes
    "notes.silverNeedle": "Honey, Melon, Fresh Hay",
    "notes.daHongPao": "Mineral, Orchid, Stone Fruit",
    "notes.gyokuro": "Umami, Seaweed, Sweet",
    "notes.ancientPuErh": "Earthy, Dark Chocolate, Mushroom",
    "notes.darjeeling": "Muscatel, Floral, Citrus",
    "notes.matchaTencha": "Creamy, Vegetal, Sweet",

    // Rarity
    "rarity.rare": "Rare",
    "rarity.premium": "Premium",
    "rarity.limited": "Limited",
    "rarity.aged10": "Aged 10 Years",
    "rarity.seasonal": "Seasonal",
    "rarity.ceremonial": "Ceremonial",

    // Footer
    "footer.copyright": "Sip slowly, live fully.",

    //About Page
    "about.hero.title": "Our Tea Philosophy",
    "about.hero.subtitle":
      "Sourcing the world's finest leaves, then blending them to create something extraordinary",

    "about.blending.title": "The Art of Tea Blending",
    "about.blending.subtitle": "Where tradition meets innovation",
    "about.blending.section1.title": "Beyond Single Origins",
    "about.blending.section1.p1":
      "While single-origin teas have their place, we believe the magic happens when different leaves dance together. Our master blenders combine teas from across continents — a bold Yunnan black with delicate Fujian white, or umami-rich Japanese gyokuro with floral Darjeeling.",
    "about.blending.section1.p2":
      "This cross-cultural approach creates flavor profiles you simply cannot find anywhere else. Each blend tells a story of collaboration between ancient tea traditions, resulting in cups that are greater than the sum of their parts.",
    "about.blending.card1.title": "Precision Crafting",
    "about.blending.card1.desc":
      "Every blend is tested dozens of times to achieve perfect balance",
    "about.blending.card2.title": "Flavor Layering",
    "about.blending.card2.desc":
      "We build blends with top, middle, and base notes for complexity",
    "about.blending.card3.title": "Signature Creations",
    "about.blending.card3.desc":
      "Exclusive blends you won't find in any other tea shop",

    "about.sourcing.title": "Sourcing From Tea Capitals",
    "about.sourcing.subtitle":
      "We travel to the world's most prestigious tea regions",

    "about.unique.title": "Why Tea Haven Is Different",
    "about.unique.p1":
      "Most tea shops offer single-origin teas. We celebrate the beauty of diversity. By sourcing premium leaves from across the globe and artfully blending them, we create flavor experiences that transcend traditional boundaries.",
    "about.unique.p2":
      "Whether it's combining Chinese oolongs with Indian blacks or Japanese greens with Taiwanese whites, every blend is a journey. You'll discover tastes that are familiar yet surprising — the best of every tea-growing region in a single cup.",
    "about.unique.badge1": "12+ Tea Regions",
    "about.unique.badge2": "Signature Blends",
    "about.unique.badge3": "Premium Quality",
    "about.unique.badge4": "Fresh Harvest",
    "about.unique.button": "Explore Our Blends →",

    "about.sourcing.banner": "From garden to cup — across continents",

    // Tea type descriptions
    "tea.types.daHongPao": "Da Hong Pao, Oolongs",
    "tea.types.puErh": "Pu-Erh, Ancient teas",
    "tea.types.gyokuro": "Gyokuro, Matcha",
    "tea.types.darjeeling": "First Flush Black Teas",
    "tea.types.silverNeedle": "Silver Needle, White Teas",
    "tea.types.matcha": "Ceremonial Matcha",

    // Tea characteristics
    "tea.characteristics.wuyi": "Mineral, roasted, complex",
    "tea.characteristics.yunnan": "Earthy, smooth, aged",
    "tea.characteristics.uji": "Umami, sweet, vegetal",
    "tea.characteristics.westBengal": "Muscatel, floral, bright",
    "tea.characteristics.fujian": "Delicate, honey, fresh",
    "tea.characteristics.kyoto": "Creamy, vibrant, smooth",
  },
  zh: {
    // Navigation
    "nav.home": "首页",
    "nav.teas": "茶品",
    "nav.about": "关于",

    // Home Hero
    "home.hero.title": "稀有茶叶",
    "home.hero.subtitle":
      "从古老的山地茶园手工采摘。耐心陈化，赋予深度与个性。",
    "home.hero.button": "探索茶品",

    // Home Catalog
    "home.catalog.title": "我们的茶系列",
    "home.catalog.subtitle": "每一片茶叶都讲述着风土、传统与时光的故事",

    // Catalog Page
    "catalog.title": "我们的茶系列",
    "catalog.subtitle": "每一片茶叶都讲述着风土、传统与匠心采摘的故事",
    "catalog.tastingNotes": "品鉴笔记",
    "catalog.learnMore": "了解更多",
    "catalog.viewFull": "查看完整系列 →",
    "catalog.backToHome": "返回首页",
    "catalog.caffeine": "咖啡因",
    "catalog.steepTime": "冲泡时间",
    "catalog.temperature": "水温",

    // Filters
    "filter.all": "全部",
    "filter.white": "白茶",
    "filter.green": "绿茶",
    "filter.oolong": "乌龙茶",
    "filter.black": "红茶",
    "filter.puerh": "普洱茶",
    "filter.matcha": "抹茶",

    // Tea Names
    "tea.silverNeedle": "白毫银针",
    "tea.daHongPao": "大红袍",
    "tea.gyokuro": "玉露",
    "tea.ancientPuErh": "古树普洱茶",
    "tea.darjeeling": "大吉岭初摘",
    "tea.matchaTencha": "抹茶碾茶",

    // Origins
    "origin.fujian": "中国福建",
    "origin.wuyi": "武夷山",
    "origin.uji": "日本宇治",
    "origin.yunnan": "中国云南",
    "origin.westBengal": "印度西孟加拉邦",
    "origin.kyoto": "日本京都",

    // Tasting Notes
    "notes.silverNeedle": "蜂蜜、蜜瓜、鲜草",
    "notes.daHongPao": "矿物质、兰花、核果",
    "notes.gyokuro": "鲜味、海苔、甘甜",
    "notes.ancientPuErh": "泥土、黑巧克力、蘑菇",
    "notes.darjeeling": "麝香葡萄、花香、柑橘",
    "notes.matchaTencha": "奶油、蔬菜、甘甜",

    // Rarity
    "rarity.rare": "稀有",
    "rarity.premium": "尊贵",
    "rarity.limited": "限量",
    "rarity.aged10": "陈化10年",
    "rarity.seasonal": "季节性",
    "rarity.ceremonial": "仪式级",

    // Footer
    "footer.copyright": "慢慢啜饮，品味生活",

    // About Page
    "about.hero.title": "我们的茶道哲学",
    "about.hero.subtitle": "精选全球顶级茶叶，匠心调配，创造非凡体验",

    "about.blending.title": "茶叶调配的艺术",
    "about.blending.subtitle": "传统与创新的完美融合",
    "about.blending.section1.title": "超越单一产地",
    "about.blending.section1.p1":
      "虽然单一产地茶叶有其独特魅力，但我们相信不同茶叶的融合能创造奇迹。我们的调配大师将来自各大洲的茶叶巧妙结合——云南红茶的浓郁与福建白茶的清雅，或是日本玉露的鲜味与印度大吉岭的花香。",
    "about.blending.section1.p2":
      "这种跨文化的调配方式创造出独一无二的风味层次。每一款调配茶都讲述着古老茶文化之间的对话，带来超越单一茶叶的完美体验。",
    "about.blending.card1.title": "精准工艺",
    "about.blending.card1.desc": "每款调配经过数十次测试，追求完美平衡",
    "about.blending.card2.title": "风味层次",
    "about.blending.card2.desc": "精心构建前调、中调、尾调的复杂口感",
    "about.blending.card3.title": "独家配方",
    "about.blending.card3.desc": "只在此处才能品尝到的特色调配茶",

    "about.sourcing.title": "全球茶叶产区直采",
    "about.sourcing.subtitle": "踏遍世界最负盛名的茶叶产地",

    "about.unique.title": "茶港的独特之处",
    "about.unique.p1":
      "多数茶店只提供单一产地茶叶。而我们赞美多元之美。通过从全球各地精选优质茶叶并进行艺术化调配，我们创造出超越传统界限的风味体验。",
    "about.unique.p2":
      "无论是将中国乌龙与印度红茶结合，还是将日本煎茶与台湾白茶调配，每一款都是味觉的旅程。您将发现熟悉又惊喜的味道 — 每个茶叶产区的最佳风味，尽在一杯之中。",
    "about.unique.badge1": "12+ 茶叶产区",
    "about.unique.badge2": "独家调配",
    "about.unique.badge3": "顶级品质",
    "about.unique.badge4": "新鲜采摘",
    "about.unique.button": "探索我们的调配茶 →",

    "about.sourcing.banner": "从茶园到茶杯 — 跨越大陆的旅程",

    // Tea type descriptions (Chinese)
    "tea.types.daHongPao": "大红袍、乌龙茶",
    "tea.types.puErh": "普洱茶、古树茶",
    "tea.types.gyokuro": "玉露、抹茶",
    "tea.types.darjeeling": "大吉岭初摘红茶",
    "tea.types.silverNeedle": "白毫银针、白茶",
    "tea.types.matcha": "仪式级抹茶",

    // Tea characteristics (Chinese)
    "tea.characteristics.wuyi": "矿物质、兰花、核果香",
    "tea.characteristics.yunnan": "陈香、醇厚、层次丰富",
    "tea.characteristics.uji": "鲜味、海苔、甘甜",
    "tea.characteristics.westBengal": "麝香葡萄、花香、明亮",
    "tea.characteristics.fujian": "清雅、蜜香、鲜爽",
    "tea.characteristics.kyoto": "柔滑、鲜活、醇厚",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "en" || saved === "zh")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
