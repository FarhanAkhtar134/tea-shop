"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const teaProducts = [
  {
    id: 1,
    teaKey: "silverNeedle",
    originKey: "fujian",
    notesKey: "silverNeedle",
    descriptionKey: "silverNeedle",
    caffeine: "Low",
    brewTime: "2-3 minutes",
    temperature: "175°F",
    price: "$24.99",
    image: "/tea-shop/teas/silver-needle.jpg",
    rarityKey: "rare",
    category: "White Tea",
    categoryKey: "white",
    priority: true, // Add priority for first image
  },
  {
    id: 2,
    teaKey: "daHongPao",
    originKey: "wuyi",
    notesKey: "daHongPao",
    descriptionKey: "daHongPao",
    caffeine: "Medium",
    brewTime: "3-4 minutes",
    temperature: "200°F",
    price: "$32.99",
    image: "/tea-shop/teas/da-hong-pao.jpg",
    rarityKey: "premium",
    category: "Oolong",
    categoryKey: "oolong",
    priority: true, // Second image also priority
  },
  {
    id: 3,
    teaKey: "gyokuro",
    originKey: "uji",
    notesKey: "gyokuro",
    descriptionKey: "gyokuro",
    caffeine: "Medium",
    brewTime: "1-2 minutes",
    temperature: "140°F",
    price: "$29.99",
    image: "/tea-shop/teas/gyokuro.jpg",
    rarityKey: "limited",
    category: "Green Tea",
    categoryKey: "green",
    priority: false,
  },
  {
    id: 4,
    teaKey: "ancientPuErh",
    originKey: "yunnan",
    notesKey: "ancientPuErh",
    descriptionKey: "ancientPuErh",
    caffeine: "High",
    brewTime: "4-5 minutes",
    temperature: "212°F",
    price: "$45.99",
    image: "/tea-shop/teas/ancient-pu-erh.jpg",
    rarityKey: "aged10",
    category: "Pu-Erh",
    categoryKey: "puerh",
    priority: false,
  },
  {
    id: 5,
    teaKey: "darjeeling",
    originKey: "westBengal",
    notesKey: "darjeeling",
    descriptionKey: "darjeeling",
    caffeine: "Medium",
    brewTime: "2-3 minutes",
    temperature: "195°F",
    price: "$27.99",
    image: "/tea-shop/teas/darjeeling.jpg",
    rarityKey: "seasonal",
    category: "Black Tea",
    categoryKey: "black",
    priority: false,
  },
  {
    id: 6,
    teaKey: "matchaTencha",
    originKey: "kyoto",
    notesKey: "matchaTencha",
    descriptionKey: "matchaTencha",
    caffeine: "High",
    brewTime: "Whisk",
    temperature: "175°F",
    price: "$34.99",
    image: "/tea-shop/teas/matcha-tencha.jpg",
    rarityKey: "ceremonial",
    category: "Matcha",
    categoryKey: "matcha",
    priority: false,
  },
];

const categories = [
  { key: "all", label: "All", value: "All" },
  { key: "white", label: "White Tea", value: "White Tea" },
  { key: "green", label: "Green Tea", value: "Green Tea" },
  { key: "oolong", label: "Oolong", value: "Oolong" },
  { key: "black", label: "Black Tea", value: "Black Tea" },
  { key: "puerh", label: "Pu-Erh", value: "Pu-Erh" },
  { key: "matcha", label: "Matcha", value: "Matcha" },
];

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(teaProducts);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const { t } = useLanguage();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(teaProducts);
    } else {
      setFilteredProducts(
        teaProducts.filter((product) => product.category === selectedCategory),
      );
    }
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const getCategoryLabel = (categoryValue: string) => {
    if (categoryValue === "All") return t("filter.all");
    const category = categories.find((c) => c.value === categoryValue);
    if (category) {
      return t(`filter.${category.key}`);
    }
    return categoryValue;
  };

  return (
    <div
      className="min-h-screen pt-24 pb-20 transition-colors duration-300"
      style={{
        background:
          "linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            {t("catalog.title")}
          </h1>
          <div
            className="w-16 h-px mx-auto mb-4"
            style={{ backgroundColor: "var(--border-color)" }}
          />
          <p
            className="max-w-2xl mx-auto text-xs sm:text-sm tracking-wide px-4"
            style={{ color: "var(--text-secondary)" }}
          >
            {t("catalog.subtitle")}
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm tracking-wide transition-all duration-300 ${
                selectedCategory === category.value
                  ? "bg-opacity-20 border"
                  : "border border-transparent"
              }`}
              style={{
                backgroundColor:
                  selectedCategory === category.value
                    ? "var(--accent)"
                    : "transparent",
                color:
                  selectedCategory === category.value
                    ? "var(--bg-primary)"
                    : "var(--text-secondary)",
                borderColor:
                  selectedCategory === category.value
                    ? "var(--accent)"
                    : "transparent",
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category.value) {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category.value) {
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }
              }}
            >
              {getCategoryLabel(category.value)}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        {!isLoading && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto"
          >
            {filteredProducts.map((tea) => (
              <motion.div
                key={tea.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="tea-card group overflow-hidden transition-all duration-300"
              >
                {/* Tea image with optimized loading */}
                <div className="h-48 sm:h-52 md:h-56 relative overflow-hidden bg-gradient-to-br from-amber-900/20 to-transparent">
                  {/* Loading skeleton */}
                  {!loadedImages[tea.id] && (
                    <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-amber-900/30 to-amber-800/10" />
                  )}

                  <Image
                    src={tea.image}
                    alt={t(`tea.${tea.teaKey}`)}
                    fill
                    className={`object-cover transition-all duration-500 ${
                      loadedImages[tea.id]
                        ? "opacity-100 group-hover:scale-110"
                        : "opacity-0"
                    }`}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    quality={65} // Reduced quality for faster loading
                    priority={tea.priority || false}
                    fetchPriority={tea.priority ? "high" : "auto"}
                    loading={tea.priority ? "eager" : "lazy"}
                    onLoad={() =>
                      setLoadedImages((prev) => ({ ...prev, [tea.id]: true }))
                    }
                  />

                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-[10px] tracking-wider bg-amber-900/80 text-amber-400 px-2 py-1 rounded-full backdrop-blur-sm">
                      {t(`rarity.${tea.rarityKey}`)}
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] tracking-wider bg-black/60 text-gray-300 px-2 py-1 rounded-full backdrop-blur-sm">
                      {t(`filter.${tea.categoryKey}`)}
                    </span>
                  </div>
                </div>

                {/* Tea info */}
                <div className="p-4 sm:p-6">
                  <h3
                    className="text-lg sm:text-xl font-serif mb-1 group-hover:opacity-80 transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {t(`tea.${tea.teaKey}`)}
                  </h3>
                  <p
                    className="text-xs mb-3 tracking-wide"
                    style={{ color: "var(--accent)", opacity: 0.5 }}
                  >
                    {t(`origin.${tea.originKey}`)}
                  </p>

                  <div className="mb-4">
                    <p
                      className="text-[10px] uppercase tracking-wider mb-1"
                      style={{ color: "var(--text-secondary)", opacity: 0.7 }}
                    >
                      {t("catalog.tastingNotes")}
                    </p>
                    <p
                      className="text-xs sm:text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {t(`notes.${tea.notesKey}`)}
                    </p>
                  </div>

                  <motion.div
                    className="mb-4 p-2 sm:p-3 rounded-lg"
                    style={{ backgroundColor: "var(--accent-glow)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex justify-between text-[10px] sm:text-xs">
                      <div>
                        <span className="text-gray-500">
                          🍃 {t("catalog.caffeine")}
                        </span>
                        <p style={{ color: "var(--accent)" }}>{tea.caffeine}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">
                          ⏱️ {t("catalog.steepTime")}
                        </span>
                        <p style={{ color: "var(--accent)" }}>{tea.brewTime}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">
                          🌡️ {t("catalog.temperature")}
                        </span>
                        <p style={{ color: "var(--accent)" }}>
                          {tea.temperature}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <div
                    className="flex items-center justify-between pt-3 border-t"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    <span
                      className="text-xl sm:text-2xl font-light"
                      style={{ color: "var(--accent)" }}
                    >
                      {tea.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-xs tracking-wider transition-colors flex items-center gap-1"
                      style={{ color: "var(--text-secondary)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-secondary)")
                      }
                    >
                      {t("catalog.learnMore")}
                      <svg
                        className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Loading state */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="text-4xl animate-pulse mb-2">🍃</div>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Steeping your collection...
              </p>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!isLoading && filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🍂</div>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              No teas found in this category
            </p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="mt-4 text-sm transition-colors hover:opacity-80"
              style={{ color: "var(--accent)" }}
            >
              {t("catalog.viewFull")}
            </button>
          </div>
        )}

        {/* Back to top button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/">
            <button
              className="text-sm transition-colors flex items-center gap-1 mx-auto hover:opacity-80"
              style={{ color: "var(--text-secondary)" }}
            >
              <svg
                className="w-4 h-4 rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              {t("catalog.backToHome")}
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
