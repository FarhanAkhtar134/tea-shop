"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function UnfurlingLeaf() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { t } = useLanguage(); // Add this line

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

  // Memoize particles to prevent recreation
  const particles = useMemo(() => {
    return [...Array(6)].map((_, i) => ({
      // Reduced from 8 to 6 particles
      id: i,
      left: 50 + (Math.random() - 0.5) * 80,
      top: 50 + (Math.random() - 0.5) * 80,
      xRange: (Math.random() - 0.5) * 30, // Reduced movement range
      yRange: (Math.random() - 0.5) * 30,
      duration: 2.5 + Math.random() * 1.5,
      delay: i * 0.15,
    }));
  }, []); // Empty deps array means this runs once

  // Optimize SVG animations with will-change
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Grain texture - simplified for performance */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-noise will-change-transform" />
      </div>

      {/* Warm ambient light - single light source */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-800/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 min-h-screen flex flex-col items-center justify-center">
        {/* Animated Leaf SVG - optimized */}
        <div className="relative w-48 h-60 sm:w-64 sm:h-80 mb-8 sm:mb-12 will-change-transform">
          <svg viewBox="0 0 200 250" className="w-full h-full">
            {/* Leaf stem - simplified */}
            <motion.path
              d="M100 220 L100 150"
              stroke="#889944"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={hasAnimated ? { pathLength: 1, opacity: 0.6 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "linear" }}
            />

            {/* Leaf outline - combined paths where possible */}
            <motion.path
              d="M100 150 Q60 130 40 100 Q20 70 50 50 Q80 30 100 60 Q120 30 150 50 Q180 70 160 100 Q140 130 100 150 Z"
              stroke="#C8A882"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={hasAnimated ? { pathLength: 1, opacity: 0.8 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            />

            {/* Main vein - combined with side veins using reduced complexity */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={hasAnimated ? { opacity: 0.5 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <path
                d="M100 150 L100 80"
                stroke="#D4A574"
                strokeWidth="0.8"
                fill="none"
              />
              <path
                d="M100 110 L60 85"
                stroke="#D4A574"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M100 110 L140 85"
                stroke="#D4A574"
                strokeWidth="0.5"
                fill="none"
              />
            </motion.g>

            {/* Inner glow - simplified pulse using CSS animation instead of Framer Motion */}
            <path
              d="M100 145 Q65 125 45 98 Q28 70 55 52 Q82 35 100 62 Q118 35 145 52 Q172 70 155 98 Q135 125 100 145 Z"
              fill="url(#leafGlow)"
              className="leaf-glow"
            />

            <defs>
              <radialGradient id="leafGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C8A882" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#C8A882" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
          {/* Floating particles - optimized with CSS transforms */}
          {hasAnimated &&
            particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-0.5 h-0.5 bg-amber-400/40 rounded-full will-change-transform"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  x: [0, particle.xRange],
                  y: [0, particle.yRange],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "easeOut",
                  repeatDelay: 1, // Add pause between animations
                }}
              />
            ))}
        </div>

        {/* Text section - optimized with translations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 2 }}
          className="text-center will-change-transform px-4"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-3 sm:mb-4 tracking-wide"
            style={{ color: "var(--text-primary)" }}
          >
            {t("home.hero.title")}
          </h1>
          <div
            className="w-12 sm:w-16 h-px mx-auto my-4 sm:my-6"
            style={{ backgroundColor: "var(--border-color)" }}
          />
          <p
            className="max-w-md mx-auto text-sm sm:text-base md:text-lg font-light mb-6 sm:mb-8 px-4"
            style={{ color: "var(--text-secondary)" }}
          >
            {t("home.hero.subtitle")}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 2.3 }}
          >
            <Link href="/catalog">
              <button className="explore-button relative overflow-hidden text-sm sm:text-base px-5 sm:px-8 py-2 sm:py-3">
                {t("home.hero.button")}
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - optimized with will-change */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={hasAnimated ? { opacity: 0.4 } : {}}
        transition={{ delay: 2.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <div className="w-6 h-10 border border-amber-500/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-amber-500/50 rounded-full mt-2 will-change-transform"
          />
        </div>
      </motion.div>

      <style jsx>{`
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
          pointer-events: none;
        }

        .leaf-glow {
          animation: gentlePulse 2s ease-in-out infinite;
        }

        @keyframes gentlePulse {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.25;
          }
        }

        .explore-button {
          padding: 0.75rem 2rem;
          background: rgba(200, 168, 130, 0.1);
          border: 1px solid rgba(200, 168, 130, 0.3);
          color: var(--text-primary);
          border-radius: 2rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .explore-button:hover {
          background: rgba(200, 168, 130, 0.2);
          border-color: rgba(200, 168, 130, 0.5);
          transform: translateY(-2px);
        }

        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
