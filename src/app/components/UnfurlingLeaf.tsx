"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function UnfurlingLeaf() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToCatalog = () => {
    const catalog = document.getElementById("catalog");
    if (catalog) {
      catalog.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-noise" />

      {/* Warm ambient light */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-800/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 min-h-screen flex flex-col items-center justify-center">
        {/* Animated Leaf SVG */}
        <div className="relative w-64 h-80 mb-12">
          <svg viewBox="0 0 200 250" className="w-full h-full">
            {/* Leaf stem */}
            <motion.path
              d="M100 220 L100 150"
              stroke="#889944"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={hasAnimated ? { pathLength: 1, opacity: 0.6 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            {/* Leaf outline - unfurling */}
            <motion.path
              d="M100 150 
                 Q60 130 40 100 
                 Q20 70 50 50 
                 Q80 30 100 60 
                 Q120 30 150 50 
                 Q180 70 160 100 
                 Q140 130 100 150 Z"
              stroke="#C8A882"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={hasAnimated ? { pathLength: 1, opacity: 0.8 } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
            />

            {/* Main vein */}
            <motion.path
              d="M100 150 L100 80"
              stroke="#D4A574"
              strokeWidth="0.8"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={hasAnimated ? { pathLength: 1, opacity: 0.5 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            />

            {/* Side veins */}
            <motion.path
              d="M100 110 L60 85"
              stroke="#D4A574"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={hasAnimated ? { pathLength: 1, opacity: 0.4 } : {}}
              transition={{ duration: 0.6, delay: 1.5 }}
            />

            <motion.path
              d="M100 110 L140 85"
              stroke="#D4A574"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={hasAnimated ? { pathLength: 1, opacity: 0.4 } : {}}
              transition={{ duration: 0.6, delay: 1.7 }}
            />

            {/* Inner glow - continuous subtle pulse after animation */}
            <motion.path
              d="M100 145 
                 Q65 125 45 98 
                 Q28 70 55 52 
                 Q82 35 100 62 
                 Q118 35 145 52 
                 Q172 70 155 98 
                 Q135 125 100 145 Z"
              fill="url(#leafGlow)"
              initial={{ opacity: 0 }}
              animate={hasAnimated ? { opacity: [0, 0.25, 0.1] } : {}}
              transition={{
                duration: 2,
                delay: 1.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <defs>
              <radialGradient id="leafGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C8A882" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#C8A882" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>

          {/* Floating particles - continuous gentle floating */}
          {hasAnimated &&
            [...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-amber-400/40 rounded-full"
                style={{
                  left: `${50 + (Math.random() - 0.5) * 80}%`,
                  top: `${50 + (Math.random() - 0.5) * 80}%`,
                }}
                animate={{
                  x: [0, (Math.random() - 0.5) * 40],
                  y: [0, (Math.random() - 0.5) * 40],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
        </div>

        {/* Text - fades in once */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 2 }}
          className="text-center"
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 tracking-wide"
            style={{ color: "var(--text-primary)" }}
          >
            Rare Tea Leaves
          </h1>
          <div
            className="w-16 h-px mx-auto my-6"
            style={{ backgroundColor: "var(--border-color)" }}
          />
          <p
            className="max-w-md mx-auto text-base md:text-lg font-light mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Hand-picked from ancient mountain gardens. Patiently aged for depth
            and character.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 2.3 }}
          >
            <Link href="/catalog">
              <button className="explore-button">Explore Collection</button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - subtle continuous animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={hasAnimated ? { opacity: 0.4 } : {}}
        transition={{ delay: 2.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border border-amber-500/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-amber-500/50 rounded-full mt-2"
          />
        </div>
      </motion.div>

      <style jsx>{`
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </div>
  );
}
