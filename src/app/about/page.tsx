"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from '../context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  
  const heroRef = useRef(null);
  const blendingRef = useRef(null);
  const sourcingRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const blendingInView = useInView(blendingRef, { once: true, amount: 0.3 });
  const sourcingInView = useInView(sourcingRef, { once: true, amount: 0.3 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const origins = [
    {
      region: "Wuyi Mountains, China",
      teasKey: "daHongPao",
      characteristicKey: "wuyi",
      image: "/images/about/wuyi-mountains.jpg",
      regionKey: "wuyi"
    },
    {
      region: "Yunnan, China",
      teasKey: "puErh",
      characteristicKey: "yunnan",
      image: "/images/about/yunnan-china.jpg",
      regionKey: "yunnan"
    },
    {
      region: "Uji, Japan",
      teasKey: "gyokuro",
      characteristicKey: "uji",
      image: "/images/about/uji.jpg",
      regionKey: "uji"
    },
    {
      region: "Darjeeling, India",
      teasKey: "darjeeling",
      characteristicKey: "westBengal",
      image: "/images/about/west-bengal.jpg",
      regionKey: "westBengal"
    },
    {
      region: "Fujian, China",
      teasKey: "silverNeedle",
      characteristicKey: "fujian",
      image: "/images/about/fujian.jpg",
      regionKey: "fujian"
    },
    {
      region: "Kyoto, Japan",
      teasKey: "matcha",
      characteristicKey: "kyoto",
      image: "/images/about/kyoto.jpg",
      regionKey: "kyoto"
    }
  ];

  const blendingCards = [
    {
      titleKey: "about.blending.card1.title",
      descKey: "about.blending.card1.desc",
      image: "/images/about/precision-crafting.jpg",
      alt: "Precision tea crafting"
    },
    {
      titleKey: "about.blending.card2.title",
      descKey: "about.blending.card2.desc",
      image: "/images/about/flavour-layering.jpg",
      alt: "Flavor layering process"
    },
    {
      titleKey: "about.blending.card3.title",
      descKey: "about.blending.card3.desc",
      image: "/images/about/signature-creations.jpg",
      alt: "Signature tea creations"
    }
  ];

  return (
    <div className="min-h-screen transition-colors duration-300"
         style={{ background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))' }}>
      
      {/* Hero Section with Background Image */}
      <section ref={heroRef} className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/hero-bg.jpg"
            alt="Tea plantation background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-3 sm:mb-4 text-white px-4"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              {t('about.hero.title')}
            </h1>
            <div className="w-16 sm:w-20 h-px mx-auto mb-4 sm:mb-6 bg-amber-400" />
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light text-white/90 px-4">
              {t('about.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Art of Blending Section */}
      <section ref={blendingRef} className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={blendingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-3"
                style={{ color: 'var(--text-primary)' }}>
              {t('about.blending.title')}
            </h2>
            <div className="w-16 h-px mx-auto mb-4" style={{ backgroundColor: 'var(--border-color)' }} />
            <p className="max-w-2xl mx-auto text-xs sm:text-sm tracking-wide px-4"
               style={{ color: 'var(--text-secondary)' }}>
              {t('about.blending.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={blendingInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🎨</div>
              <h3 className="text-xl sm:text-2xl font-serif mb-3 sm:mb-4"
                  style={{ color: 'var(--text-primary)' }}>
                {t('about.blending.section1.title')}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4" style={{ color: 'var(--text-secondary)' }}>
                {t('about.blending.section1.p1')}
              </p>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t('about.blending.section1.p2')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={blendingInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2"
            >
              <Image
                src="/images/about/blending.jpg"
                alt="Tea blending process"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Blending Cards with Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={blendingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t"
            style={{ borderColor: 'var(--border-color)' }}
          >
            {blendingCards.map((card, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2"
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="font-serif text-lg sm:text-xl mb-2" style={{ color: 'var(--text-primary)' }}>
                    {t(card.titleKey)}
                  </h4>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {t(card.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Sourcing Section */}
      <section ref={sourcingRef} className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sourcingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-3"
                style={{ color: 'var(--text-primary)' }}>
              {t('about.sourcing.title')}
            </h2>
            <div className="w-16 h-px mx-auto mb-4" style={{ backgroundColor: 'var(--border-color)' }} />
            <p className="max-w-2xl mx-auto text-xs sm:text-sm tracking-wide px-4"
               style={{ color: 'var(--text-secondary)' }}>
              {t('about.sourcing.subtitle')}
            </p>
          </motion.div>

          {/* Sourcing Image Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={sourcingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden mb-8 sm:mb-12 shadow-xl"
          >
            <Image
              src="/images/about/sourcing-map.jpg"
              alt="Global tea sourcing locations"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <p className="text-xs sm:text-sm tracking-wide">{t('about.sourcing.banner')}</p>
              </div>
            </div>
          </motion.div>

          {/* Origin Cards with Images */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {origins.map((origin, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={sourcingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group rounded-xl overflow-hidden transition-all duration-300"
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={origin.image}
                    alt={t(`origin.${origin.regionKey}`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-serif mb-1 sm:mb-2" style={{ color: 'var(--text-primary)' }}>
                    {t(`origin.${origin.regionKey}`)}
                  </h3>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-2" 
                     style={{ color: 'var(--accent)', opacity: 0.7 }}>
                    {t(`tea.types.${origin.teasKey}`)}
                  </p>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {t(`tea.characteristics.${origin.characteristicKey}`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-3 sm:mb-4 px-4"
                style={{ color: 'var(--text-primary)' }}>
              {t('about.unique.title')}
            </h2>
            <div className="w-16 h-px mx-auto mb-4 sm:mb-6" style={{ backgroundColor: 'var(--border-color)' }} />
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 px-4" 
               style={{ color: 'var(--text-secondary)' }}>
              {t('about.unique.p1')}
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-12 px-4" 
               style={{ color: 'var(--text-secondary)' }}>
              {t('about.unique.p2')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 pt-6 sm:pt-8 border-t" 
                 style={{ borderColor: 'var(--border-color)' }}>
              <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm transition-all hover:scale-105 duration-300"
                  style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--accent)' }}>
                🌍 {t('about.unique.badge1')}
              </div>
              <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm transition-all hover:scale-105 duration-300"
                  style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--accent)' }}>
                🎨 {t('about.unique.badge2')}
              </div>
              <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm transition-all hover:scale-105 duration-300"
                  style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--accent)' }}>
                ✨ {t('about.unique.badge3')}
              </div>
              <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm transition-all hover:scale-105 duration-300"
                  style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--accent)' }}>
                🍃 {t('about.unique.badge4')}
              </div>
            </div>

            <Link href="/catalog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 sm:mt-10 md:mt-12 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: 'var(--bg-primary)'
                }}
              >
                {t('about.unique.button')}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}