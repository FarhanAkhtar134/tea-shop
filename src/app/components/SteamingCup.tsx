"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SteamingCup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="flex justify-center items-center py-8">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="relative w-40 h-40 md:w-48 md:h-48">
          {/* Cup shadow */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-3 bg-black/20 rounded-full blur-md" />
          
          {/* Cup saucer */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-44 h-2.5 rounded-full shadow-md"
               style={{ background: 'linear-gradient(to right, var(--text-secondary), var(--accent), var(--text-secondary))', opacity: 0.3 }}
          />
          
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
            {/* Cup background - uses theme variables */}
            <path
              d="M25 40 L30 75 L70 75 L75 40 Z"
              fill="var(--cup-gradient-end)"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
            
            {/* Cup rim */}
            <ellipse cx="50" cy="40" rx="26" ry="6" fill="var(--cup-gradient-start)" stroke="var(--accent)" strokeWidth="1.5" />
            
            {/* Tea liquid - uses theme variable */}
            <motion.path
              d="M27 43 L32 72 L68 72 L73 43 Z"
              fill="var(--cup-fill)"
              initial={{ opacity: 0.7 }}
              animate={isInView ? { opacity: [0.7, 0.9, 0.7] } : {}}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Tea surface shimmer */}
            <motion.ellipse
              cx="50"
              cy="43"
              rx="23"
              ry="3"
              fill="#E8A87C"
              initial={{ opacity: 0.4 }}
              animate={isInView ? { opacity: [0.4, 0.7, 0.4] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Cup handle */}
            <path
              d="M75 48 Q94 48 94 58 Q94 70 75 70"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            
            {/* Decorative line */}
            <path d="M30 55 L70 55" stroke="var(--accent)" strokeWidth="0.8" opacity="0.4" />
          </svg>

          {/* Steam layers - uses theme variable for steam color */}
          {isInView && [...Array(3)].map((_, i) => (
            <motion.div
              key={`bg-steam-${i}`}
              className="absolute w-12 h-16 rounded-full blur-xl"
              style={{
                left: `${35 + i * 15}%`,
                bottom: "70%",
                background: `linear-gradient(to top, ${getComputedStyle(document.documentElement).getPropertyValue('--steam-color').trim()}, transparent)`,
              }}
              animate={{
                y: [-10, -50, -90],
                opacity: [0, 0.3, 0],
                scale: [0.8, 1.5, 2],
                x: [0, (i - 1) * 5, (i - 1) * 8],
              }}
              transition={{
                duration: 3.5,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}
          
          {isInView && [...Array(4)].map((_, i) => (
            <motion.div
              key={`med-steam-${i}`}
              className="absolute w-6 h-12 rounded-full blur-md"
              style={{
                left: `${40 + i * 8}%`,
                bottom: "72%",
                background: `linear-gradient(to top, ${getComputedStyle(document.documentElement).getPropertyValue('--steam-color').trim()}, transparent)`,
              }}
              animate={{
                y: [-8, -45, -80],
                opacity: [0, 0.5, 0],
                scale: [0.6, 1.2, 1.8],
                x: [0, (i - 1.5) * 4, (i - 1.5) * 6],
              }}
              transition={{
                duration: 2.8,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}
          
          {isInView && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ top: "-30%", left: 0 }}>
              {[...Array(3)].map((_, i) => (
                <motion.path
                  key={`svg-steam-${i}`}
                  d={`M${40 + i * 20} 30 Q${35 + i * 20} 15 ${40 + i * 20} 5 Q${45 + i * 20} -5 ${40 + i * 20} -15`}
                  stroke="var(--steam-color)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{
                    opacity: [0, 0.5, 0],
                    pathLength: [0, 1, 1],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </svg>
          )}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-xs mt-4 tracking-wider"
          style={{ color: 'var(--accent)' }}
        >
          FRESHLY BREWED
        </motion.p>
      </motion.div>
    </div>
  );
}