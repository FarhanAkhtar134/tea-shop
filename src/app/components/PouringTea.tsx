"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function PouringTea() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [fillLevel, setFillLevel] = useState(0);
  const [isPouring, setIsPouring] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsPouring(true);
      
      const fillTimer = setTimeout(() => {
        setFillLevel(1);
      }, 800);
      
      const resetTimer = setInterval(() => {
        setFillLevel(0);
        setTimeout(() => {
          setFillLevel(1);
        }, 800);
      }, 6000);
      
      return () => {
        clearTimeout(fillTimer);
        clearInterval(resetTimer);
      };
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-full h-[320px] flex items-center justify-center overflow-visible rounded-2xl mb-8 px-8">
      
      {/* Background - uses CSS variables for theme */}
      <div 
        className="absolute inset-0 rounded-2xl -z-10 transition-colors duration-300"
        style={{ 
          background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))'
        }}
      />
      
      {/* Ambient glow - adapts to theme */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl -z-10 transition-colors duration-300"
        style={{ backgroundColor: 'var(--accent)', opacity: 0.08 }}
      />

      {/* Centered animation container - wider for handle space */}
      <div className="relative w-full max-w-lg mx-auto h-full">
        
        {/* Premium Kettle */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "3%" }}>
          <motion.div
            animate={{
              rotate: isPouring ? [-18, -18, 0, 0] : 0,
              x: isPouring ? [-6, -6, 0, 0] : 0,
              y: isPouring ? [0, 3, 0, 0] : 0,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              times: [0, 0.2, 0.7, 1],
            }}
          >
            <svg width="95" height="90" viewBox="0 0 95 90" className="drop-shadow-2xl">
              <path
                d="M18 42 Q18 18 42 18 L55 18 Q72 18 72 42 L72 58 Q72 72 55 72 L42 72 Q18 72 18 58 Z"
                fill="url(#kettleGradient)"
                stroke="var(--accent)"
                strokeWidth="1.5"
              />
              <ellipse cx="45" cy="18" rx="24" ry="6" fill="#3A3022" stroke="var(--accent)" strokeWidth="1.5"/>
              <ellipse cx="45" cy="18" rx="20" ry="4" fill="#2A2418" />
              <path
                d="M30 20 Q12 12 16 45"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M72 42 L90 36 L90 55 Z"
                fill="url(#spoutGradient)"
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path d="M22 50 L68 50" stroke="var(--accent)" strokeWidth="1" opacity="0.6"/>
              <path d="M22 55 L68 55" stroke="var(--accent)" strokeWidth="0.5" opacity="0.4"/>
              
              {isPouring && [...Array(2)].map((_, i) => (
                <motion.div
                  key={`kettle-steam-${i}`}
                  className="absolute w-1.5 h-4 bg-white/30 rounded-full blur-sm"
                  style={{ left: "80%", top: "20%", transform: "rotate(-20deg)" }}
                  animate={{
                    y: [-5, -20],
                    opacity: [0, 0.5, 0],
                    x: [0, -8],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              ))}
              
              <defs>
                <linearGradient id="kettleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3A3022" />
                  <stop offset="100%" stopColor="#2A2418" />
                </linearGradient>
                <linearGradient id="spoutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3A3022" />
                  <stop offset="100%" stopColor="#1a1814" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>

        {/* Tea Stream + Visible Drops */}
        <svg className="absolute w-full h-full" style={{ top: 0, left: 0, zIndex: 5, pointerEvents: "none" }}>
          <motion.path
            d="M 237 92 L 237 178"
            stroke="url(#teaGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: isPouring ? 1 : 0,
              opacity: isPouring ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
              repeat: isPouring ? Infinity : 0,
              repeatType: "reverse",
              repeatDelay: 0.6,
              ease: "easeInOut",
            }}
          />
          
          {isPouring && (
            <>
              <motion.circle
                r="4"
                fill="#F5A623"
                initial={{ cy: 92, opacity: 0 }}
                animate={{
                  cy: [92, 135, 178],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                style={{ cx: 237 }}
              />
              <motion.circle
                r="3.5"
                fill="#E8A87C"
                initial={{ cy: 92, opacity: 0 }}
                animate={{
                  cy: [92, 130, 178],
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.4,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                style={{ cx: 238 }}
              />
              <motion.circle
                r="2.5"
                fill="#F5A623"
                initial={{ cy: 92, opacity: 0 }}
                animate={{
                  cy: [92, 140, 178],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                style={{ cx: 236 }}
              />
              <motion.circle
                r="2"
                fill="#F5A623"
                initial={{ cy: 92, opacity: 0 }}
                animate={{
                  cy: [92, 145, 178],
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                style={{ cx: 239 }}
              />
            </>
          )}
          
          <defs>
            <linearGradient id="teaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F5A623" />
              <stop offset="50%" stopColor="#C68B5E" />
              <stop offset="100%" stopColor="#8B5A2B" />
            </linearGradient>
          </defs>
        </svg>

        {/* Premium Tea Cup */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: "5%" }}>
          <div className="relative">
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-34 h-3 bg-black/40 rounded-full blur-md" />
            
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-44 h-3.5 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-full shadow-lg">
              <div className="absolute inset-0 rounded-full border" style={{ borderColor: 'var(--accent)', opacity: 0.3 }} />
            </div>
            
            <svg width="100" height="95" viewBox="0 0 100 100" className="drop-shadow-2xl">
              <path
                d="M18 32 L24 70 L71 70 L77 32 Z"
                fill="url(#cupGradient)"
                stroke="var(--accent)"
                strokeWidth="1.5"
              />
              <ellipse cx="47.5" cy="32" rx="31" ry="7" fill="#3A3022" stroke="var(--accent)" strokeWidth="1.5" />
              <ellipse cx="47.5" cy="32" rx="27" ry="5" fill="#2A2418" />
              
              <motion.path
                d="M21 36 L26 68 L69 68 L74 36 Z"
                fill="url(#teaGradientCup)"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: fillLevel }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ transformOrigin: "bottom" }}
              />
              
              {fillLevel > 0.6 && (
                <motion.ellipse
                  cx="47.5"
                  cy="36"
                  rx="28"
                  ry="3.5"
                  fill="#E8A87C"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
              
              <path
                d="M77 44 Q100 42 100 54 Q100 68 77 66"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              
              <path d="M24 52 L71 52" stroke="var(--accent)" strokeWidth="0.8" opacity="0.5"/>
              <path d="M25 56 L70 56" stroke="var(--accent)" strokeWidth="0.5" opacity="0.3"/>
              
              <defs>
                <linearGradient id="cupGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3A3022" />
                  <stop offset="100%" stopColor="#2A2418" />
                </linearGradient>
                <linearGradient id="teaGradientCup" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#D4A574" />
                  <stop offset="100%" stopColor="#8B5A2B" />
                </linearGradient>
              </defs>
            </svg>

            {fillLevel > 0.4 && [...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-12 bg-white/40 rounded-full blur-md"
                style={{
                  left: `${36 + i * 7}%`,
                  top: "-28px",
                }}
                animate={{
                  y: [-15, -55, -95],
                  opacity: [0, 0.6, 0],
                  scale: [0.5, 1.3, 2],
                  x: [0, (i - 2) * 3, (i - 2) * 6],
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.15,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        </div>

        {/* Splash effect */}
        {isPouring && fillLevel < 0.9 && (
          <>
            <motion.div
              animate={{
                scale: [0, 1.3, 0],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                repeatDelay: 0.3,
                ease: "easeOut",
              }}
              className="absolute"
              style={{ left: "50%", bottom: "22%", transform: "translateX(-50%)" }}
            >
              <div className="w-7 h-7 bg-amber-400/25 rounded-full blur-sm" />
            </motion.div>
            
            <motion.div
              animate={{
                x: [0, -8, -12],
                y: [0, -5, -8],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 0.4,
                ease: "easeOut",
              }}
              className="absolute w-1.5 h-1.5 bg-amber-400 rounded-full"
              style={{ left: "46%", bottom: "24%" }}
            />
            <motion.div
              animate={{
                x: [0, 8, 14],
                y: [0, -4, -7],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 0.55,
                repeat: Infinity,
                repeatDelay: 0.45,
                ease: "easeOut",
              }}
              className="absolute w-1.5 h-1.5 bg-amber-400 rounded-full"
              style={{ left: "54%", bottom: "24%" }}
            />
          </>
        )}
      </div>
    </div>
  );
}