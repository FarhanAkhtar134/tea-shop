"use client";
import { motion } from "framer-motion";

export default function SteamAnimation() {
  return (
    <div className="relative w-64 h-64 mx-auto">
      {/* Tea Cup SVG */}
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Cup body */}
        <path
          d="M50 100 L60 160 L140 160 L150 100 Z"
          fill="#F5F0E6"
          stroke="#6B4E3A"
          strokeWidth="3"
        />
        {/* Cup handle */}
        <path
          d="M150 110 Q180 110 180 135 Q180 160 150 155"
          fill="none"
          stroke="#6B4E3A"
          strokeWidth="3"
        />
        {/* Tea liquid */}
        <path
          d="M55 105 L60 155 L140 155 L145 105 Z"
          fill="#C68B5E"
          opacity="0.8"
        />
        {/* Steam wisps */}
        {[...Array(3)].map((_, i) => (
          <motion.path
            key={i}
            d={`M${70 + i * 30} 90 Q${75 + i * 30} 70 ${70 + i * 30} 50 Q${65 + i * 30} 30 ${70 + i * 30} 10`}
            fill="none"
            stroke="#D4C5B0"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              pathLength: [0, 1, 1],
              y: [0, -20, -40],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}