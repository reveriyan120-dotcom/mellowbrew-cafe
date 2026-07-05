import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { GALLERY_ITEMS } from "../data";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "interior" | "coffee" | "brunch" | "roasting">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const prevIndex = (lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length;
      setLightboxIndex(prevIndex);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const nextIndex = (lightboxIndex + 1) % filteredGallery.length;
      setLightboxIndex(nextIndex);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-brand-beige-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-brand-brown-500 uppercase inline-block mb-3 bg-brand-beige-200/50 px-3.5 py-1.5 rounded-full">
            Visual Harmony
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-brown-900 tracking-tight mb-4">
            공간과 미각의 기록
          </h2>
          <p className="text-xs md:text-sm text-brand-brown-600 max-w-xl mx-auto font-light leading-relaxed">
            나른한 햇살이 머무는 멜로우브루의 인테리어 스냅과 바리스타의 정성이 깃든 브루잉 라인업,<br />
            매일의 향긋한 순간들을 프레임에 고스란히 옮겼습니다.
          </p>
          <div className="w-12 h-[2.5px] bg-brand-brown-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Gallery Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(["all", "interior", "coffee", "brunch", "roasting"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4.5 py-2 rounded-full text-xs font-medium tracking-wide border transition-all duration-300 focus:outline-none capitalize cursor-pointer ${
                activeFilter === filter
                  ? "bg-brand-brown-800 border-brand-brown-800 text-brand-beige-50 shadow-md"
                  : "bg-transparent border-brand-beige-300 text-brand-brown-700 hover:border-brand-brown-400 hover:text-brand-brown-900"
              }`}
            >
              {filter === "all" ? "전체 스냅" : filter === "interior" ? "인테리어 & 아늑함" : filter === "coffee" ? "스페셜티 에스프레소" : filter === "brunch" ? "수제 브런치" : "로스팅 랩"}
            </button>
          ))}
        </div>

        {/* Masonry / Bento Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-brand-brown-950 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-brand-beige-200"
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Elegant overlay scrim on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-950/80 via-brand-brown-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                {/* Overlay Text Content */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-brand-beige-50 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <span className="text-[9px] font-mono tracking-widest text-brand-beige-400 uppercase bg-white/10 px-2 py-0.5 rounded backdrop-blur-xs">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-base font-bold mt-2.5 flex items-center justify-between">
                    <span>{item.title}</span>
                    <Maximize2 className="w-3.5 h-3.5 text-brand-beige-300 hover:text-white" />
                  </h4>
                  <p className="text-[11px] text-brand-beige-200/90 font-light mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Ambient Camera Deco Line */}
        <div className="flex justify-center items-center space-x-2 mt-16 text-brand-brown-400">
          <Camera className="w-4 h-4" />
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase">Instantly Captured Moments at MELLOW BREW</span>
        </div>

      </div>

      {/* Exquisite Lightbox Portal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-4xl w-full flex flex-col space-y-4 z-10"
            >
              
              {/* Close trigger */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Slider Image Box */}
              <div className="relative aspect-[16/10] bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                <img
                  src={filteredGallery[lightboxIndex].image}
                  alt={filteredGallery[lightboxIndex].title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />

                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/45 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-black/75 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/45 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-black/75 transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Slider Caption details */}
              <div className="text-center px-4 max-w-2xl mx-auto space-y-1">
                <span className="text-[10px] font-mono text-brand-beige-400 tracking-widest uppercase">
                  Photo {lightboxIndex + 1} of {filteredGallery.length} • {filteredGallery[lightboxIndex].category}
                </span>
                <h3 className="font-serif text-lg md:text-xl font-bold text-white">
                  {filteredGallery[lightboxIndex].title}
                </h3>
                <p className="text-xs text-brand-beige-200/80 font-light leading-relaxed">
                  {filteredGallery[lightboxIndex].description}
                </p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
