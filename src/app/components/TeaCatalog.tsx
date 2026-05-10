// "use client";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import Image from "next/image";
// import SteamingCup from "./SteamingCup";
// import Link from "next/link";

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
//       className="py-20 bg-gradient-to-b from-[#0f0e0a] to-[#1a1814]"
//     >
//       <div className="container mx-auto px-4">
//         {/* Section Header with Steaming Cup */}
//         <div className="text-center mb-16">
//           <SteamingCup />
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="text-3xl md:text-4xl font-serif text-amber-200/80 mb-3"
//           >
//             Our Tea Collection
//           </motion.h2>
//           <motion.div
//             initial={{ width: 0 }}
//             animate={isInView ? { width: "4rem" } : {}}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="h-px bg-amber-500/40 mx-auto mb-4"
//           />
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 0.6 } : {}}
//             transition={{ delay: 0.7 }}
//             className="text-gray-500 max-w-2xl mx-auto text-sm tracking-wide"
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
//               className="group bg-[#1a1814] border border-amber-900/30 rounded-xl overflow-hidden hover:border-amber-700/50 transition-all duration-300"
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
//                 <h3 className="text-xl font-serif text-amber-200/80 mb-1 group-hover:text-amber-200 transition-colors">
//                   {tea.name}
//                 </h3>
//                 <p className="text-xs text-amber-500/50 mb-3 tracking-wide">
//                   {tea.origin}
//                 </p>

//                 {/* Tasting notes */}
//                 <div className="mb-4">
//                   <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-1">
//                     Tasting Notes
//                   </p>
//                   <p className="text-sm text-gray-400">{tea.notes}</p>
//                 </div>

//                 {/* Price and CTA */}
//                 <div className="flex items-center justify-between pt-3 border-t border-amber-900/30">
//                   <span className="text-2xl font-light text-amber-400">
//                     {tea.price}
//                   </span>
//                   <button className="text-xs tracking-wider text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-1">
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

//         {/* View All Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.8 }}
//           className="text-center mt-12"
//         >
//           <Link href="/catalog">
//             <button className="px-8 py-2 border border-amber-500/30 text-amber-400 text-sm rounded-full hover:bg-amber-500/10 hover:border-amber-500/50 transition-all duration-300">
//               View Full Collection →
//             </button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import SteamingCup from "./SteamingCup";

const teaProducts = [
  {
    id: 1,
    name: "Silver Needle White Tea",
    origin: "Fujian, China",
    notes: "Honey, Melon, Fresh Hay",
    price: "$24.99",
    image: "🍃",
    rarity: "Rare",
  },
  {
    id: 2,
    name: "Da Hong Pao",
    origin: "Wuyi Mountains",
    notes: "Mineral, Orchid, Stone Fruit",
    price: "$32.99",
    image: "🌿",
    rarity: "Premium",
  },
  {
    id: 3,
    name: "Gyokuro",
    origin: "Uji, Japan",
    notes: "Umami, Seaweed, Sweet",
    price: "$29.99",
    image: "🍵",
    rarity: "Limited",
  },
  {
    id: 4,
    name: "Ancient Pu-Erh",
    origin: "Yunnan, China",
    notes: "Earthy, Dark Chocolate, Mushroom",
    price: "$45.99",
    image: "🍂",
    rarity: "Aged 10 Years",
  },
  {
    id: 5,
    name: "Darjeeling First Flush",
    origin: "West Bengal, India",
    notes: "Muscatel, Floral, Citrus",
    price: "$27.99",
    image: "🌱",
    rarity: "Seasonal",
  },
  {
    id: 6,
    name: "Matcha Tencha",
    origin: "Kyoto, Japan",
    notes: "Creamy, Vegetal, Sweet",
    price: "$34.99",
    image: "✨",
    rarity: "Ceremonial",
  },
];

export default function TeaCatalog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [mounted, setMounted] = useState(false);

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
            Our Tea Collection
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
            Each leaf tells a story of terroir, tradition, and time
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
                    {tea.rarity}
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
                  {tea.name}
                </h3>
                <p
                  className="text-xs mb-3 tracking-wide"
                  style={{ color: "var(--accent)", opacity: 0.5 }}
                >
                  {tea.origin}
                </p>

                {/* Tasting notes */}
                <div className="mb-4">
                  <p
                    className="text-[11px] uppercase tracking-wider mb-1"
                    style={{ color: "var(--text-secondary)", opacity: 0.7 }}
                  >
                    Tasting Notes
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {tea.notes}
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
                    Learn More
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

        {/* View All Button - Fixed version without getComputedStyle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/catalog">
            <button className="view-all-button">View Full Collection →</button>
          </Link>
        </motion.div>
      </div>

      {/* Add this style to handle hover without inline JS */}
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
