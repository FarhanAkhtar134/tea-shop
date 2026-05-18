"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import CatalogHeader from "../components/CatalogHeader";

const teaProducts = [
  {
    id: 1,
    name: "Silver Needle White Tea",
    origin: "Fujian, China",
    notes: "Honey, Melon, Fresh Hay",
    description: "Hand-harvested only two days each spring. These silvery buds produce a delicate, sweet liquor with notes of fresh hay and honey.",
    caffeine: "Low",
    brewTime: "2-3 minutes",
    temperature: "175°F",
    price: "$24.99",
    image: "🍃",
    rarity: "Rare",
    category: "White Tea",
  },
  {
    id: 2,
    name: "Da Hong Pao",
    origin: "Wuyi Mountains",
    notes: "Mineral, Orchid, Stone Fruit",
    description: "The legendary 'Big Red Robe' from the cliffs of Wuyi. Complex mineral notes with orchid fragrance and stone fruit sweetness.",
    caffeine: "Medium",
    brewTime: "3-4 minutes",
    temperature: "200°F",
    price: "$32.99",
    image: "🌿",
    rarity: "Premium",
    category: "Oolong",
  },
  {
    id: 3,
    name: "Gyokuro",
    origin: "Uji, Japan",
    notes: "Umami, Seaweed, Sweet",
    description: "Shaded for three weeks before harvest, this tea develops intense umami and sweet notes. A meditation in a cup.",
    caffeine: "Medium",
    brewTime: "1-2 minutes",
    temperature: "140°F",
    price: "$29.99",
    image: "🍵",
    rarity: "Limited",
    category: "Green Tea",
  },
  {
    id: 4,
    name: "Ancient Pu-Erh",
    origin: "Yunnan, China",
    notes: "Earthy, Dark Chocolate, Mushroom",
    description: "Aged for 10 years in Yunnan cellars. Smooth, earthy, with deep complexity that evolves with each steep.",
    caffeine: "High",
    brewTime: "4-5 minutes",
    temperature: "212°F",
    price: "$45.99",
    image: "🍂",
    rarity: "Aged 10 Years",
    category: "Pu-Erh",
  },
  {
    id: 5,
    name: "Darjeeling First Flush",
    origin: "West Bengal, India",
    notes: "Muscatel, Floral, Citrus",
    description: "The 'Champagne of Teas'. Light, bright, with distinctive muscatel notes and a floral aroma.",
    caffeine: "Medium",
    brewTime: "2-3 minutes",
    temperature: "195°F",
    price: "$27.99",
    image: "🌱",
    rarity: "Seasonal",
    category: "Black Tea",
  },
  {
    id: 6,
    name: "Matcha Tencha",
    origin: "Kyoto, Japan",
    notes: "Creamy, Vegetal, Sweet",
    description: "Ceremonial grade matcha from 50-year-old tea bushes. Vibrant green, smooth, with sweet vegetal notes.",
    caffeine: "High",
    brewTime: "Whisk",
    temperature: "175°F",
    price: "$34.99",
    image: "✨",
    rarity: "Ceremonial",
    category: "Matcha",
  },
];

const categories = ["All", "White Tea", "Green Tea", "Oolong", "Black Tea", "Pu-Erh", "Matcha"];

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(teaProducts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(teaProducts);
    } else {
      setFilteredProducts(teaProducts.filter(product => product.category === selectedCategory));
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

  return (
    <div className="min-h-screen pt-24 pb-20 transition-colors duration-300"
         style={{ background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))' }}>
      <div className="container mx-auto px-4">
        
        {/* Catalog Header with Steaming Cup */}
        {/* <CatalogHeader /> */}

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm tracking-wide transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-opacity-20 border"
                  : "border border-transparent"
              }`}
              style={{
                backgroundColor: selectedCategory === category ? 'var(--accent)' : 'transparent',
                color: selectedCategory === category ? 'var(--bg-primary)' : 'var(--text-secondary)',
                borderColor: selectedCategory === category ? 'var(--accent)' : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.color = 'var(--accent)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        {!isLoading && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {filteredProducts.map((tea) => (
              <motion.div
                key={tea.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="tea-card group overflow-hidden transition-all duration-300"
              >
                {/* Tea image placeholder */}
                <div className="h-56 bg-gradient-to-br from-amber-900/20 to-transparent flex items-center justify-center relative overflow-hidden">
                  <div className="text-7xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {tea.image}
                  </div>
                  
                  <motion.div
                    className="absolute text-2xl opacity-0 group-hover:opacity-100"
                    initial={{ x: -20, y: 20, rotate: -45 }}
                    whileHover={{ x: 20, y: -20, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ bottom: "10%", left: "10%" }}
                  >
                    🍃
                  </motion.div>
                  <motion.div
                    className="absolute text-2xl opacity-0 group-hover:opacity-100"
                    initial={{ x: 20, y: 20, rotate: 45 }}
                    whileHover={{ x: -20, y: -20, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ bottom: "10%", right: "10%" }}
                  >
                    🌿
                  </motion.div>
                  
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] tracking-wider bg-amber-900/60 text-amber-400 px-2 py-1 rounded-full backdrop-blur-sm">
                      {tea.rarity}
                    </span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] tracking-wider bg-black/40 text-gray-400 px-2 py-1 rounded-full backdrop-blur-sm">
                      {tea.category}
                    </span>
                  </div>
                </div>
                
                {/* Tea info */}
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-1 group-hover:opacity-80 transition-colors"
                      style={{ color: 'var(--text-primary)' }}>
                    {tea.name}
                  </h3>
                  <p className="text-xs mb-3 tracking-wide" style={{ color: 'var(--accent)', opacity: 0.5 }}>
                    {tea.origin}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                      Tasting Notes
                    </p>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{tea.notes}</p>
                  </div>
                  
                  <motion.div 
                    className="mb-4 p-3 rounded-lg"
                    style={{ backgroundColor: 'var(--accent-glow)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex justify-between text-xs">
                      <div>
                        <span className="text-gray-500">🍃 Caffeine</span>
                        <p style={{ color: 'var(--accent)' }}>{tea.caffeine}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">⏱️ Steep</span>
                        <p style={{ color: 'var(--accent)' }}>{tea.brewTime}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">🌡️ Temp</span>
                        <p style={{ color: 'var(--accent)' }}>{tea.temperature}</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: 'var(--border-color)' }}>
                    <span className="text-2xl font-light" style={{ color: 'var(--accent)' }}>{tea.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-xs tracking-wider transition-colors flex items-center gap-1"
                      style={{ color: 'var(--text-secondary)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      View Details
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Steeping your collection...</p>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!isLoading && filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🍂</div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>No teas found in this category</p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="mt-4 text-sm transition-colors hover:opacity-80"
              style={{ color: 'var(--accent)' }}
            >
              View all teas →
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
            <button className="text-sm transition-colors flex items-center gap-1 mx-auto hover:opacity-80"
                    style={{ color: 'var(--text-secondary)' }}>
              <svg className="w-4 h-4 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              Back to Home
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}