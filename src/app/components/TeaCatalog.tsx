"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Add this import
import SteamingCup from "./SteamingCup";
import { useLanguage } from "../context/LanguageContext";

const teaProducts = [
  {
    id: 1,
    teaKey: "silverNeedle",
    originKey: "fujian",
    notesKey: "silverNeedle",
    price: "$24.99",
    image: "/images/teas/silver-needle.jpg", // Path to image
    rarityKey: "rare",
  },
  {
    id: 2,
    teaKey: "daHongPao",
    originKey: "wuyi",
    notesKey: "daHongPao",
    price: "$32.99",
    image: "/images/teas/da-hong-pao.jpg",
    rarityKey: "premium",
  },
  {
    id: 3,
    teaKey: "gyokuro",
    originKey: "uji",
    notesKey: "gyokuro",
    price: "$29.99",
    image: "/images/teas/gyokuro.jpg",
    rarityKey: "limited",
  },
  {
    id: 4,
    teaKey: "ancientPuErh",
    originKey: "yunnan",
    notesKey: "ancientPuErh",
    price: "$45.99",
    image: "/images/teas/ancient-pu-erh.jpg",
    rarityKey: "aged10",
  },
  {
    id: 5,
    teaKey: "darjeeling",
    originKey: "westBengal",
    notesKey: "darjeeling",
    price: "$27.99",
    image: "/images/teas/darjeeling.jpg",
    rarityKey: "seasonal",
  },
  {
    id: 6,
    teaKey: "matchaTencha",
    originKey: "kyoto",
    notesKey: "matchaTencha",
    price: "$34.99",
    image: "/images/teas/matcha-tencha.jpg",
    rarityKey: "ceremonial",
  },
];

export default function TeaCatalog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 md:py-20 transition-colors duration-300"
      style={{
        background:
          "linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header with Steaming Cup */}
        <div className="text-center mb-16">
          <SteamingCup />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-serif mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            {t("home.catalog.title")}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "4rem" } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px mx-auto mb-4"
            style={{ backgroundColor: "var(--border-color)" }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.6 } : {}}
            transition={{ delay: 0.7 }}
            className="max-w-2xl mx-auto text-sm tracking-wide"
            style={{ color: "var(--text-secondary)" }}
          >
            {t("home.catalog.subtitle")}
          </motion.p>
        </div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {teaProducts.map((tea) => (
            <motion.div
              key={tea.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group rounded-xl overflow-hidden transition-all duration-300 tea-card"
            >
              {/* Tea image */}
              <div className="h-40 sm:h-48 md:h-56 relative overflow-hidden bg-amber-900/10">
                <Image
                  src={tea.image}
                  alt={t(`tea.${tea.teaKey}`)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  quality={65} // Lower quality for faster loading
                  loading={tea.id <= 2 ? "eager" : "lazy"}
                  fetchPriority={tea.id <= 2 ? "high" : "auto"}
                  decoding="async"
                />

                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Rarity badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-[10px] tracking-wider bg-amber-900/80 text-amber-400 px-2 py-1 rounded-full backdrop-blur-sm">
                    {t(`rarity.${tea.rarityKey}`)}
                  </span>
                </div>
              </div>

              {/* Tea info */}
              <div className="p-4 sm:p-6">
                <h3
                  className="text-xl font-serif mb-1 group-hover:opacity-80 transition-colors"
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

                {/* Tasting notes */}
                <div className="mb-4">
                  <p
                    className="text-[11px] uppercase tracking-wider mb-1"
                    style={{ color: "var(--text-secondary)", opacity: 0.7 }}
                  >
                    {t("catalog.tastingNotes")}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {t(`notes.${tea.notesKey}`)}
                  </p>
                </div>

                {/* Price and CTA */}
                <div
                  className="flex items-center justify-between pt-3 border-t"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <span
                    className="text-2xl font-light"
                    style={{ color: "var(--accent)" }}
                  >
                    {tea.price}
                  </span>
                  <button
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
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/catalog">
            <button className="view-all-button">{t("catalog.viewFull")}</button>
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .view-all-button {
          padding: 0.75rem 2rem;
          background: transparent;
          border: 1px solid var(--accent);
          color: var(--accent);
          border-radius: 2rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .view-all-button:hover {
          background-color: var(--accent);
          color: var(--bg-primary);
          border-color: var(--accent);
        }
      `}</style>
    </section>
  );
}
