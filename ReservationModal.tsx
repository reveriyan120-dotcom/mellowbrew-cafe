import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, Eye, X, ArrowRight, Heart, Sparkles, Sliders } from "lucide-react";
import { MENU_ITEMS } from "../data";
import { MenuItem } from "../types";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "coffee" | "brunch" | "dessert">("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Coffee Finder Quiz State
  const [quizStep, setQuizStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState<{ flavor?: string; texture?: string }>({});
  const [quizResult, setQuizResult] = useState<MenuItem | null>(null);

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const handleRunQuiz = (key: "flavor" | "texture", val: string) => {
    const updatedAnswers = { ...quizAnswers, [key]: val };
    setQuizAnswers(updatedAnswers);

    if (key === "flavor") {
      setQuizStep(2);
    } else {
      // Find recommendation
      let recommendation: MenuItem | null = null;
      if (updatedAnswers.flavor === "fruity") {
        if (updatedAnswers.texture === "clean") {
          // Fruity + Clean = Filter Coffee
          recommendation = MENU_ITEMS.find((m) => m.id === "m2") || null;
        } else {
          // Fruity + Creamy = Signature Spanner (has peach notes / peanut milk) or Pancake
          recommendation = MENU_ITEMS.find((m) => m.id === "m1") || null;
        }
      } else {
        if (updatedAnswers.texture === "clean") {
          // Nutty + Clean = Flat White
          recommendation = MENU_ITEMS.find((m) => m.id === "m3") || null;
        } else {
          // Nutty + Creamy = Signature Spanner
          recommendation = MENU_ITEMS.find((m) => m.id === "m1") || null;
        }
      }
      setQuizResult(recommendation);
      setQuizStep(3);
    }
  };

  const resetQuiz = () => {
    setQuizStep(1);
    setQuizAnswers({});
    setQuizResult(null);
  };

  return (
    <section id="menu" className="py-24 md:py-32 bg-brand-beige-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-brand-brown-500 uppercase inline-block mb-3 bg-brand-beige-200/50 px-3.5 py-1.5 rounded-full">
            Taste our crafts
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-brown-900 tracking-tight mb-4">
            정성을 담은 메뉴
          </h2>
          <p className="text-xs md:text-sm text-brand-brown-600 max-w-xl mx-auto font-light leading-relaxed">
            매일 정성을 볶아내는 스페셜티 하우스 커피 원두의 깊은 풍미와<br />
            유기농 로컬 식자재로 플레이팅하는 명품 브런치의 예술적 균형을 감상해 보세요.
          </p>
          <div className="w-12 h-[2.5px] bg-brand-brown-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Category Tab Bar with spring layout */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex space-x-1.5 bg-brand-beige-100 p-1.5 rounded-2xl border border-brand-beige-200">
            {(["all", "coffee", "brunch", "dessert"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-3 rounded-xl text-xs md:text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none capitalize cursor-pointer ${
                  activeCategory === cat
                    ? "text-brand-brown-950 font-bold"
                    : "text-brand-brown-600 hover:text-brand-brown-800"
                }`}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="activeMenuCategory"
                    className="absolute inset-0 bg-white rounded-xl shadow-xs border border-brand-beige-200"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10">
                  {cat === "all" ? "전체보기" : cat === "coffee" ? "스페셜티 커피" : cat === "brunch" ? "수제 브런치" : "프리미엄 디저트"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Cards Grid - Compact and Easy to Scan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                onClick={() => setSelectedItem(item)}
                className="group relative bg-brand-beige-100 rounded-2xl overflow-hidden border border-brand-beige-200/60 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-row items-stretch p-3.5 sm:p-4.5 gap-4 sm:gap-6 hover:-translate-y-0.5"
              >
                {/* Card Left: Image & Badge */}
                <div className="relative overflow-hidden w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-xl bg-brand-brown-900/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover visual scanlines/dimmer */}
                  <div className="absolute inset-0 bg-brand-brown-950/10 group-hover:bg-brand-brown-950/20 transition-colors duration-500" />

                  {/* Specialty Signatures Badge */}
                  {item.isSignature && (
                    <div className="absolute top-2 left-2 bg-brand-brown-850/95 backdrop-blur-md text-brand-beige-50 text-[8px] sm:text-[9px] tracking-widest uppercase font-mono py-1 px-1.5 rounded-md flex items-center space-x-1 border border-brand-beige-300/20">
                      <Sparkles className="w-2.5 h-2.5 text-brand-beige-300 animate-pulse" />
                      <span className="hidden sm:inline">Signature</span>
                    </div>
                  )}

                  {/* Eye Icon Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-brown-950/30">
                    <Eye className="w-5 h-5 text-brand-beige-50" />
                  </div>
                </div>

                {/* Card Right: Content */}
                <div className="flex-1 flex flex-col justify-between py-0.5 min-w-0">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-1 sm:mb-1.5">
                      {item.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-semibold text-brand-brown-600 bg-brand-beige-200/50 py-0.5 px-1.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Titles */}
                    <h3 className="font-serif text-sm sm:text-base font-bold text-brand-brown-900 leading-snug truncate">
                      {item.name}
                    </h3>
                    <p className="font-mono text-[9px] sm:text-[10px] text-brand-brown-500 tracking-wide uppercase truncate mt-0.5">
                      {item.englishName}
                    </p>

                    {/* Description */}
                    <p className="text-[11px] sm:text-xs text-brand-brown-700/80 leading-relaxed font-light mt-1 line-clamp-1 sm:line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Pricing Footer */}
                  <div className="flex justify-between items-center pt-2 mt-2 border-t border-brand-beige-200/40">
                    <span className="text-[9px] sm:text-xs font-mono text-brand-brown-500">Price</span>
                    <span className="font-serif text-sm sm:text-base font-bold text-brand-brown-800">
                      ₩ {item.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic "Coffee Taste quiz" Widget section */}
        <div className="mt-24 bg-brand-beige-100 rounded-3xl border border-brand-beige-200/70 p-8 md:p-12 shadow-lg relative overflow-hidden max-w-4xl mx-auto">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-beige-200/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Title */}
            <div className="md:col-span-5 space-y-3">
              <div className="inline-flex items-center space-x-1.5 text-brand-brown-600">
                <Coffee className="w-4 h-4" />
                <span className="text-[10px] font-mono tracking-wider font-bold uppercase">Mellow Flavor Quiz</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-brown-900 leading-snug">
                나의 스페셜티<br />
                커피 취향 찾기
              </h3>
              <p className="text-xs text-brand-brown-700 leading-relaxed font-light">
                가벼운 질문을 통해 당신의 미각을 채울 최적의 싱글 오리진 로스팅 원두와 시그니처 컵을 추천해 드립니다.
              </p>
            </div>

            {/* Quiz Screen Wrapper */}
            <div className="md:col-span-7 bg-white rounded-2xl border border-brand-beige-200 p-6 md:p-8 min-h-[220px] flex flex-col justify-between shadow-xs">
              <AnimatePresence mode="wait">
                
                {/* Step 1: Flavor Preferrence */}
                {quizStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-brand-brown-500">Q1. 선호하는 원두 플레이버 향</span>
                      <span className="text-xs text-brand-brown-400 font-mono">1 / 2</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        onClick={() => handleRunQuiz("flavor", "fruity")}
                        className="p-4 rounded-xl border border-brand-beige-300 text-left hover:border-brand-brown-600 hover:bg-brand-beige-50 transition-all cursor-pointer group"
                      >
                        <div className="font-semibold text-xs text-brand-brown-900 mb-1 group-hover:text-brand-brown-700">과일 & 베리 (Fruity)</div>
                        <div className="text-[10px] text-brand-brown-600 font-light">자스민, 블루베리, 산뜻한 산미와 화사함</div>
                      </button>
                      <button
                        onClick={() => handleRunQuiz("flavor", "nutty")}
                        className="p-4 rounded-xl border border-brand-beige-300 text-left hover:border-brand-brown-600 hover:bg-brand-beige-50 transition-all cursor-pointer group"
                      >
                        <div className="font-semibold text-xs text-brand-brown-900 mb-1 group-hover:text-brand-brown-700">견과류 & 너티 (Nutty)</div>
                        <div className="text-[10px] text-brand-brown-600 font-light">다크 초콜릿, 아몬드, 묵직하고 리치한 단맛</div>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Body Texture Preference */}
                {quizStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-brand-brown-500">Q2. 선호하는 바디감과 마우스필</span>
                      <span className="text-xs text-brand-brown-400 font-mono">2 / 2</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        onClick={() => handleRunQuiz("texture", "clean")}
                        className="p-4 rounded-xl border border-brand-beige-300 text-left hover:border-brand-brown-600 hover:bg-brand-beige-50 transition-all cursor-pointer group"
                      >
                        <div className="font-semibold text-xs text-brand-brown-900 mb-1 group-hover:text-brand-brown-700">맑음 & 부드러움 (Clean)</div>
                        <div className="text-[10px] text-brand-brown-600 font-light">가벼운 티(Tea)처럼 맑고 기분 좋게 깔끔한 느낌</div>
                      </button>
                      <button
                        onClick={() => handleRunQuiz("texture", "creamy")}
                        className="p-4 rounded-xl border border-brand-beige-300 text-left hover:border-brand-brown-600 hover:bg-brand-beige-50 transition-all cursor-pointer group"
                      >
                        <div className="font-semibold text-xs text-brand-brown-900 mb-1 group-hover:text-brand-brown-700">묵직함 & 리치함 (Creamy)</div>
                        <div className="text-[10px] text-brand-brown-600 font-light">벨벳 크림처럼 쫀득하고 부드럽고 가득 차는 느낌</div>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Result recommendation */}
                {quizStep === 3 && quizResult && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col h-full justify-between space-y-4"
                  >
                    <div>
                      <div className="flex justify-between items-center border-b border-brand-beige-200 pb-2 mb-3">
                        <span className="text-xs font-bold text-brand-brown-700">당신을 위한 스페셜티 추천</span>
                        <button
                          onClick={resetQuiz}
                          className="text-[10px] text-brand-brown-500 hover:underline hover:text-brand-brown-800"
                        >
                          다시 하기
                        </button>
                      </div>

                      <div className="flex items-start space-x-4">
                        <img
                          src={quizResult.image}
                          alt={quizResult.name}
                          className="w-16 h-16 rounded-xl object-cover border border-brand-beige-200"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <span className="text-[9px] bg-brand-brown-500 text-brand-beige-50 px-2 py-0.5 rounded-full font-bold uppercase">
                            RECOMMENDED
                          </span>
                          <h4 className="font-serif text-base md:text-lg font-bold text-brand-brown-900 mt-1">
                            {quizResult.name}
                          </h4>
                          <p className="text-[11px] text-brand-brown-600 font-light leading-relaxed mt-1">
                            {quizResult.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedItem(quizResult)}
                      className="w-full py-2.5 bg-brand-brown-800 text-brand-beige-50 text-xs font-bold rounded-xl tracking-wider uppercase hover:bg-brand-brown-900 transition-colors flex items-center justify-center space-x-1"
                    >
                      <span>메뉴 맛 분석 & 디테일 확인하기</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>

      {/* Exquisite Popup Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-brand-brown-950/70 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-brand-beige-50 rounded-2xl border border-brand-beige-200 overflow-hidden shadow-2xl z-10"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 p-2 text-white bg-brand-brown-900/40 hover:bg-brand-brown-900/60 rounded-full transition-colors focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Left col: Image */}
                <div className="relative aspect-square md:aspect-auto md:h-full min-h-[250px] bg-brand-brown-900">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-950/80 via-transparent to-transparent md:hidden" />
                </div>

                {/* Right col: Sensory Details */}
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div className="space-y-5">
                    <div>
                      {selectedItem.isSignature && (
                        <span className="text-[9px] font-mono tracking-widest font-bold text-brand-brown-500 bg-brand-beige-200 px-2 py-1 rounded-md">
                          SIGNATURE CRAFT
                        </span>
                      )}
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-brown-900 mt-2 mb-0.5">
                        {selectedItem.name}
                      </h3>
                      <p className="font-mono text-[10px] tracking-widest text-brand-brown-400 uppercase">
                        {selectedItem.englishName}
                      </p>
                    </div>

                    <p className="text-xs text-brand-brown-700/90 leading-relaxed font-light">
                      {selectedItem.description}
                    </p>

                    {/* Conditional: Specialty Coffee notes */}
                    {selectedItem.details?.beanInfo && (
                      <div className="space-y-2 border-t border-brand-beige-200/80 pt-4">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-brand-brown-500 font-bold">
                          Bean Details & Cup Notes
                        </div>
                        <div className="bg-brand-beige-100 rounded-xl p-3 border border-brand-beige-200/50">
                          <div className="text-xs font-semibold text-brand-brown-800">{selectedItem.details.beanInfo}</div>
                          <div className="text-[10px] text-brand-brown-600/85 mt-0.5">{selectedItem.details.origin}</div>
                          
                          {/* Flavor Tags */}
                          <div className="flex flex-wrap gap-1 mt-2.5">
                            {selectedItem.details.notes?.map((n) => (
                              <span key={n} className="text-[9px] font-medium bg-white text-brand-brown-700 px-2 py-0.5 rounded border border-brand-beige-300">
                                {n}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Ingredients detail */}
                    {selectedItem.details?.ingredients && (
                      <div className="space-y-1.5 border-t border-brand-beige-200/80 pt-4">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-brand-brown-500 font-bold">
                          Ingredients
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedItem.details.ingredients.map((ing) => (
                            <span key={ing} className="text-xs text-brand-brown-800 bg-brand-beige-200/45 px-2.5 py-1 rounded-lg">
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Pricing and Action */}
                  <div className="flex justify-between items-center border-t border-brand-beige-200/80 pt-6 mt-6">
                    <div>
                      <div className="text-[9px] font-mono text-brand-brown-400 uppercase">Pricing</div>
                      <div className="font-serif text-lg font-bold text-brand-brown-900">
                        ₩ {selectedItem.price.toLocaleString()}
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="px-6 py-2.5 bg-brand-brown-800 hover:bg-brand-brown-900 text-white text-xs font-medium uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                    >
                      닫기
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
