import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Calendar, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenReservation: () => void;
}

export default function Navbar({ onOpenReservation }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = ["hero", "story", "menu", "gallery", "location"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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

  const navLinks = [
    { name: "Brand Story", id: "story", kr: "브랜드 스토리" },
    { name: "Menu", id: "menu", kr: "메뉴" },
    { name: "Gallery", id: "gallery", kr: "갤러리" },
    { name: "Location", id: "location", kr: "오시는 길" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-brand-beige-50/85 backdrop-blur-md border-b border-brand-beige-200/50 py-4 shadow-xs"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-start text-left focus:outline-none group cursor-pointer"
          >
            <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.2em] text-brand-brown-800 transition-colors group-hover:text-brand-brown-600">
              MELLOW BREW
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-brand-brown-500 font-medium -mt-1 pl-0.5">
              Specialty & Brunch
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="relative py-2 text-sm font-medium tracking-wide transition-colors duration-300 focus:outline-none text-brand-brown-800 hover:text-brand-brown-500 group cursor-pointer"
              >
                <span>{link.kr}</span>
                <span className="block text-[10px] text-brand-brown-400 font-light tracking-wider -mt-1 text-center scale-90 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {link.name}
                </span>
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-brown-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenReservation}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-full border border-brand-brown-600 text-brand-brown-800 font-medium text-xs tracking-wider uppercase bg-transparent hover:bg-brand-brown-800 hover:text-brand-beige-50 transition-all duration-500 focus:outline-none shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Table Reservation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-brown-800 focus:outline-none hover:bg-brand-beige-100 rounded-full transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-x-0 top-[70px] bg-brand-beige-50/95 backdrop-blur-lg border-b border-brand-beige-200 shadow-xl z-40 py-8 px-6 md:hidden flex flex-col space-y-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`flex justify-between items-center py-3 px-4 rounded-xl text-left font-medium transition-colors cursor-pointer ${
                    activeSection === link.id
                      ? "bg-brand-beige-200 text-brand-brown-900"
                      : "text-brand-brown-800 hover:bg-brand-beige-100"
                  }`}
                >
                  <span className="font-serif text-base">{link.kr}</span>
                  <span className="text-xs text-brand-brown-400 font-mono">
                    {link.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-brand-beige-200">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenReservation();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-brand-brown-700 text-brand-beige-50 py-3.5 px-6 rounded-xl hover:bg-brand-brown-800 transition-colors font-medium text-sm tracking-wider cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>예약하기 (Table Reservation)</span>
              </button>
              <div className="flex items-center justify-center space-x-1.5 mt-4 text-[11px] text-brand-brown-500">
                <Sparkles className="w-3 h-3 text-brand-brown-400" />
                <span>연남동 가을 골목길 속 프리미엄 휴식</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
