import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ArrowDown } from "lucide-react";

import heroImg from "../assets/images/mellow_brew_hero_1783253780413.jpg";
import coffeeImg from "../assets/images/mellow_brew_coffee_1783253795200.jpg";
import brunchImg from "../assets/images/mellow_brew_brunch_1783253808165.jpg";
import roasterImg from "../assets/images/mellow_brew_roaster_1783253821849.jpg";

interface HeroProps {
  onOpenReservation: () => void;
}

const HERO_IMAGES = [
  {
    url: heroImg,
    title: "A Cozy Sanctuary in Yeonnam-dong",
    subtitle: "연남동의 조용한 골목 속 따뜻함이 가득한 공간"
  },
  {
    url: coffeeImg,
    title: "Directly Roasted Specialty Coffee",
    subtitle: "매일 직접 로스팅하는 신선한 싱글오리진 스페셜티"
  },
  {
    url: brunchImg,
    title: "Sensory Brunch Experience",
    subtitle: "신선한 로컬 식재료로 완성하는 정성 가득한 브런치"
  },
  {
    url: roasterImg,
    title: "Artisanal Craftsmanship",
    subtitle: "바리스타의 고집스러운 집념으로 내리는 완벽한 한 잔"
  }
];

export default function Hero({ onOpenReservation }: HeroProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-brand-brown-900">
      {/* Background Image Fading Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={HERO_IMAGES[currentIdx].url}
              alt={HERO_IMAGES[currentIdx].title}
              className="h-full w-full object-cover filter brightness-[0.45] contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Artistic Gradient Overlay for perfect text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown-900/80 via-brand-brown-900/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-900/95 via-transparent to-brand-brown-900/40" />
      </div>

      {/* Floating Light Accents */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-beige-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 right-10 w-96 h-96 bg-brand-brown-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 md:px-12 flex flex-col justify-center text-left text-brand-beige-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          {/* Tagline / Sub-badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-beige-100/10 backdrop-blur-md border border-brand-beige-100/15 mb-6 md:mb-8 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-beige-300 animate-pulse" />
            <span className="text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase text-brand-beige-300">
              Premium Specialty Coffee & Brunch
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.15] text-white">
            Where Craft Meets <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-beige-300 via-brand-beige-200 to-brand-beige-400 italic font-normal">
              Comfort
            </span>
          </h1>

          {/* Body Description */}
          <p className="text-base md:text-xl font-light text-brand-beige-200/90 leading-relaxed mb-10 max-w-2xl font-sans">
            시간이 고요히 흐르는 연남동 골목길에서, 직접 선별하고 로스팅한 최상급 스페셜티 에스프레소와 아침을 깨우는 정성스러운 수제 브런치를 만납니다. 멜로우브루는 당신의 일상에 잔잔한 영감과 아늑한 공간을 선물합니다.
          </p>

          {/* Call To Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
            <button
              onClick={handleScrollToMenu}
              className="group flex items-center justify-center space-x-2 px-8 py-4 bg-brand-beige-300 text-brand-brown-950 font-medium text-xs sm:text-sm tracking-wider uppercase rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-brand-beige-300/10 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Our Menu</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button
              onClick={onOpenReservation}
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-transparent hover:bg-brand-beige-100/10 text-white font-medium text-xs sm:text-sm tracking-wider uppercase rounded-xl border border-white/30 hover:border-white transition-all duration-300 cursor-pointer"
            >
              <span>Book a Table</span>
            </button>
          </div>
        </motion.div>

        {/* Dynamic Image Info Overlay */}
        <div className="absolute bottom-12 left-6 md:left-12 hidden sm:flex items-center space-x-4 border-l border-brand-beige-300/30 pl-4 py-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <div className="text-[10px] font-mono tracking-widest text-brand-beige-400 uppercase">
                Now Showing
              </div>
              <div className="text-sm font-serif text-white font-medium">
                {HERO_IMAGES[currentIdx].title}
              </div>
              <div className="text-xs text-brand-beige-300 font-light mt-0.5">
                {HERO_IMAGES[currentIdx].subtitle}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 right-6 md:right-12 flex flex-col items-center">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-brand-beige-400 rotate-90 origin-right translate-x-3.5 mb-8">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-8 h-12 rounded-full border border-brand-beige-300/30 flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-brand-beige-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
