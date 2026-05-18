// "use client";
// import { motion, useInView } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import Link from "next/link";
// import SteamingCup from "./SteamingCup";

// const teaProducts = [
//   {
//     id: 1,
//     name: "Silver Needle White Tea",
//     origin: "Fujian, China",
//     notes: "Honey, Melon, Fresh Hay",
//     price: "$24.99",
//     image: "🍃",
//     rarity: "Rare",
//   },
//   {
//     id: 2,
//     name: "Da Hong Pao",
//     origin: "Wuyi Mountains",
//     notes: "Mineral, Orchid, Stone Fruit",
//     price: "$32.99",
//     image: "🌿",
//     rarity: "Premium",
//   },
//   {
//     id: 3,
//     name: "Gyokuro",
//     origin: "Uji, Japan",
//     notes: "Umami, Seaweed, Sweet",
//     price: "$29.99",
//     image: "🍵",
//     rarity: "Limited",
//   },
//   {
//     id: 4,
//     name: "Ancient Pu-Erh",
//     origin: "Yunnan, China",
//     notes: "Earthy, Dark Chocolate, Mushroom",
//     price: "$45.99",
//     image: "🍂",
//     rarity: "Aged 10 Years",
//   },
//   {
//     id: 5,
//     name: "Darjeeling First Flush",
//     origin: "West Bengal, India",
//     notes: "Muscatel, Floral, Citrus",
//     price: "$27.99",
//     image: "🌱",
//     rarity: "Seasonal",
//   },
//   {
//     id: 6,
//     name: "Matcha Tencha",
//     origin: "Kyoto, Japan",
//     notes: "Creamy, Vegetal, Sweet",
//     price: "$34.99",
//     image: "✨",
//     rarity: "Ceremonial",
//   },
// ];

// export default function TeaCatalog() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.1 });
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <section
//       ref={ref}
//       className="py-20 transition-colors duration-300"
//       style={{
//         background:
//           "linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))",
//       }}
//     >
//       <div className="container mx-auto px-4">
//         {/* Section Header with Steaming Cup */}
//         <div className="text-center mb-16">
//           <SteamingCup />
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="text-3xl md:text-4xl font-serif mb-3"
//             style={{ color: "var(--text-primary)" }}
//           >
//             Our Tea Collection
//           </motion.h2>
//           <motion.div
//             initial={{ width: 0 }}
//             animate={isInView ? { width: "4rem" } : {}}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="h-px mx-auto mb-4"
//             style={{ backgroundColor: "var(--border-color)" }}
//           />
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 0.6 } : {}}
//             transition={{ delay: 0.7 }}
//             className="max-w-2xl mx-auto text-sm tracking-wide"
//             style={{ color: "var(--text-secondary)" }}
//           >
//             Each leaf tells a story of terroir, tradition, and time
//           </motion.p>
//         </div>

//         {/* Product Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
//         >
//           {teaProducts.map((tea) => (
//             <motion.div
//               key={tea.id}
//               variants={itemVariants}
//               whileHover={{ y: -8 }}
//               className="group rounded-xl overflow-hidden transition-all duration-300 tea-card"
//             >
//               {/* Tea image placeholder */}
//               <div className="h-48 bg-gradient-to-br from-amber-900/20 to-transparent flex items-center justify-center relative overflow-hidden">
//                 <div className="text-7xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
//                   {tea.image}
//                 </div>
//                 {/* Rarity badge */}
//                 <div className="absolute top-3 right-3">
//                   <span className="text-[10px] tracking-wider bg-amber-900/60 text-amber-400 px-2 py-1 rounded-full">
//                     {tea.rarity}
//                   </span>
//                 </div>
//                 {/* Overlay gradient on hover */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>

//               {/* Tea info */}
//               <div className="p-6">
//                 <h3
//                   className="text-xl font-serif mb-1 group-hover:opacity-80 transition-colors"
//                   style={{ color: "var(--text-primary)" }}
//                 >
//                   {tea.name}
//                 </h3>
//                 <p
//                   className="text-xs mb-3 tracking-wide"
//                   style={{ color: "var(--accent)", opacity: 0.5 }}
//                 >
//                   {tea.origin}
//                 </p>

//                 {/* Tasting notes */}
//                 <div className="mb-4">
//                   <p
//                     className="text-[11px] uppercase tracking-wider mb-1"
//                     style={{ color: "var(--text-secondary)", opacity: 0.7 }}
//                   >
//                     Tasting Notes
//                   </p>
//                   <p
//                     className="text-sm"
//                     style={{ color: "var(--text-secondary)" }}
//                   >
//                     {tea.notes}
//                   </p>
//                 </div>

//                 {/* Price and CTA */}
//                 <div
//                   className="flex items-center justify-between pt-3 border-t"
//                   style={{ borderColor: "var(--border-color)" }}
//                 >
//                   <span
//                     className="text-2xl font-light"
//                     style={{ color: "var(--accent)" }}
//                   >
//                     {tea.price}
//                   </span>
//                   <button
//                     className="text-xs tracking-wider transition-colors flex items-center gap-1"
//                     style={{ color: "var(--text-secondary)" }}
//                     onMouseEnter={(e) =>
//                       (e.currentTarget.style.color = "var(--accent)")
//                     }
//                     onMouseLeave={(e) =>
//                       (e.currentTarget.style.color = "var(--text-secondary)")
//                     }
//                   >
//                     Learn More
//                     <svg
//                       className="w-3 h-3 group-hover:translate-x-1 transition-transform"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.8 }}
//           className="text-center mt-12"
//         >
//           <Link href="/catalog">
//             <button className="view-all-button">View Full Collection →</button>
//           </Link>
//         </motion.div>
//       </div>


//       <style jsx>{`
//         .view-all-button:hover {
//           background-color: var(--accent);
//           color: var(--bg-primary);
//           border-color: var(--accent);
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import SteamingCup from "./SteamingCup";
import { useLanguage } from '../context/LanguageContext';  // Add this import


const teaProducts = [
  {
    id: 1,
    teaKey: 'silverNeedle',  
    originKey: 'fujian',      
    notesKey: 'silverNeedle', 
    price: "$24.99",
    image: "🍃",
    rarityKey: 'rare',        // Add this key
  },
  {
    id: 2,
    teaKey: 'daHongPao',
    originKey: 'wuyi',
    notesKey: 'daHongPao',
    price: "$32.99",
    image: "🌿",
    rarityKey: 'premium',
  },
  {
    id: 3,
    teaKey: 'gyokuro',
    originKey: 'uji',
    notesKey: 'gyokuro',
    price: "$29.99",
    image: "🍵",
    rarityKey: 'limited',
  },
  {
    id: 4,
    teaKey: 'ancientPuErh',
    originKey: 'yunnan',
    notesKey: 'ancientPuErh',
    price: "$45.99",
    image: "🍂",
    rarityKey: 'aged10',
  },
  {
    id: 5,
    teaKey: 'darjeeling',
    originKey: 'westBengal',
    notesKey: 'darjeeling',
    price: "$27.99",
    image: "🌱",
    rarityKey: 'seasonal',
  },
  {
    id: 6,
    teaKey: 'matchaTencha',
    originKey: 'kyoto',
    notesKey: 'matchaTencha',
    price: "$34.99",
    image: "✨",
    rarityKey: 'ceremonial',
  },
];

export default function TeaCatalog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();  // Add this line

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
      className="py-20 transition-colors duration-300"
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
            {t('home.catalog.title')}  {/* Use translation */}
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
            {t('home.catalog.subtitle')}  {/* Use translation */}
          </motion.p>
        </div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {teaProducts.map((tea) => (
            <motion.div
              key={tea.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group rounded-xl overflow-hidden transition-all duration-300 tea-card"
            >
              {/* Tea image placeholder */}
              <div className="h-48 bg-gradient-to-br from-amber-900/20 to-transparent flex items-center justify-center relative overflow-hidden">
                <div className="text-7xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {tea.image}
                </div>
                {/* Rarity badge */}
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] tracking-wider bg-amber-900/60 text-amber-400 px-2 py-1 rounded-full">
                    {t(`rarity.${tea.rarityKey}`)}  {/* Use translation */}
                  </span>
                </div>
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Tea info */}
              <div className="p-6">
                <h3
                  className="text-xl font-serif mb-1 group-hover:opacity-80 transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  {t(`tea.${tea.teaKey}`)}  {/* Use translation */}
                </h3>
                <p
                  className="text-xs mb-3 tracking-wide"
                  style={{ color: "var(--accent)", opacity: 0.5 }}
                >
                  {t(`origin.${tea.originKey}`)}  {/* Use translation */}
                </p>

                {/* Tasting notes */}
                <div className="mb-4">
                  <p
                    className="text-[11px] uppercase tracking-wider mb-1"
                    style={{ color: "var(--text-secondary)", opacity: 0.7 }}
                  >
                    {t('catalog.tastingNotes')}  {/* Use translation */}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {t(`notes.${tea.notesKey}`)}  {/* Use translation */}
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
                    {t('catalog.learnMore')}  {/* Use translation */}
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
            <button className="view-all-button">{t('catalog.viewFull')}</button>  {/* Use translation */}
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .view-all-button:hover {
          background-color: var(--accent);
          color: var(--bg-primary);
          border-color: var(--accent);
        }
      `}</style>
    </section>
  );
}