import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Compass, Heart, ArrowRight, Layers } from "lucide-react";
import { ZONES } from "../data";
import roasterImg from "../assets/images/mellow_brew_roaster_1783253821849.jpg";

export default function BrandStory() {
  const [activeZone, setActiveZone] = useState("z1");

  const roastingSteps = [
    {
      num: "01",
      title: "그린 빈 셀렉션",
      desc: "매 시즌 세계 각지의 친환경 소규모 농장에서 직접 공수한 최상급 스페셜티 생두만을 고집합니다."
    },
    {
      num: "02",
      title: "정밀 로스팅",
      desc: "생두 각각의 고유한 꽃향, 과일 산미, 너티한 초콜릿 단맛을 극대화하기 위해 매일 아침 온·습도를 정밀 조절하여 로스팅합니다."
    },
    {
      num: "03",
      title: "커핑 & 품질 관리",
      desc: "엄격한 커핑 테이스팅 테스트를 통과한 최고의 배치 원두만을 선정해 일정한 품질과 완벽한 컵 노트를 고객님께 선보입니다."
    }
  ];

  const currentZone = ZONES.find((z) => z.id === activeZone) || ZONES[0];

  return (
    <section id="story" className="py-24 md:py-32 bg-brand-beige-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs font-mono tracking-[0.25em] text-brand-brown-500 uppercase inline-block mb-3 bg-brand-beige-200/50 px-3.5 py-1.5 rounded-full">
            Our Brand Philosophy
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-brown-900 tracking-tight mb-4">
            멜로우 브루가 전하는 위로
          </h2>
          <div className="w-12 h-[2.5px] bg-brand-brown-500 mx-auto rounded-full" />
        </div>

        {/* Story Part 1: Directly Roasted Specialty Beans */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24 md:mb-36">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 text-brand-brown-600">
              <Sparkles className="w-4 h-4" />
              <span className="font-mono text-xs tracking-wider uppercase font-semibold">Direct Roasting Studio</span>
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-brown-900 leading-snug">
              매일 아침 깨어나는 원두,<br />
              정성으로 볶은 최고의 커피 노트
            </h3>
            
            <p className="text-sm md:text-base text-brand-brown-700/90 leading-relaxed font-light">
              멜로우 브루는 원두 한 알이 가진 고유의 고도, 토양, 햇살을 존중합니다. 대량 생산하는 탄 맛 나는 커피 대신, 저희는 커피벨트 전역에서 세심하게 수확한 스페셜티 생두를 매일 아침 로스팅 룸에서 숙련된 디테일로 직접 볶아냅니다.
            </p>
            <p className="text-sm md:text-base text-brand-brown-700/90 leading-relaxed font-light">
              자스민의 향긋함, 무화과의 묵직한 단맛, 다크 초콜릿의 고소함이 온전히 느껴지는 단 한 잔을 선사하여 커피를 마시는 행위가 단순한 습관을 넘어 황홀한 감각적 여정이 되도록 돕습니다.
            </p>

            {/* Roasting Journey Step list */}
            <div className="pt-6 border-t border-brand-beige-200 space-y-4">
              {roastingSteps.map((step) => (
                <div key={step.num} className="flex items-start space-x-4">
                  <span className="font-serif text-sm font-bold text-brand-brown-500 bg-brand-beige-200/60 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-brown-800">{step.title}</h4>
                    <p className="text-xs text-brand-brown-600/90 mt-0.5 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Roaster image with subtle floating card effect */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={roasterImg}
                alt="MELLOW BREW roasting beans cooling"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-900/60 to-transparent" />
              
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-beige-50/95 backdrop-blur-md p-6 rounded-xl border border-brand-beige-200 shadow-lg hidden sm:block">
                <div className="flex items-center space-x-3 mb-2">
                  <Compass className="w-5 h-5 text-brand-brown-600" />
                  <span className="text-xs font-mono tracking-widest text-brand-brown-800 uppercase font-bold">Roasting Note</span>
                </div>
                <p className="text-xs text-brand-brown-700 leading-relaxed font-light">
                  &ldquo;저희 가마에서 구워진 원두는 고유의 미각 스펙트럼이 완전히 열릴 때까지 최소 3일간 정교하게 에이징(Aging)하여 손님에게 브루잉 바에서 최고의 비율로 서빙됩니다.&rdquo;
                </p>
              </div>
            </div>

            {/* Aesthetic decorative box */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 border border-brand-brown-400/20 rounded-2xl -z-10 hidden lg:block" />
          </div>
        </div>

        {/* Story Part 2: Comfort Space (편안한 공간) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left interactive zone switcher */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="flex flex-col space-y-6">
              
              {/* Zone Tab Bar */}
              <div className="flex flex-wrap gap-2.5 p-1 bg-brand-beige-200/50 rounded-xl">
                {ZONES.map((zone) => (
                  <button
                    key={zone.id}
                    onClick={() => setActiveZone(zone.id)}
                    className={`flex-1 min-w-[120px] px-4 py-3 rounded-lg text-xs font-medium tracking-wide transition-all duration-300 focus:outline-none cursor-pointer ${
                      activeZone === zone.id
                        ? "bg-brand-brown-800 text-brand-beige-50 shadow-md"
                        : "text-brand-brown-700 hover:bg-brand-beige-200 hover:text-brand-brown-900"
                    }`}
                  >
                    {zone.name.split(" ")[0]}
                  </button>
                ))}
              </div>

              {/* Dynamic Zone Image & Details */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-brand-brown-900 aspect-[16/10]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeZone}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={currentZone.image}
                      alt={currentZone.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-950/80 via-brand-brown-950/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Floating Zone Details Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 text-brand-beige-50">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-brand-beige-300 bg-white/10 px-2.5 py-1 rounded-md backdrop-blur-xs">
                    {currentZone.vibe}
                  </span>
                  <h4 className="font-serif text-lg md:text-2xl font-bold mt-3 mb-1.5">
                    {currentZone.name}
                  </h4>
                  <p className="text-xs md:text-sm text-brand-beige-200/90 font-light leading-relaxed">
                    {currentZone.description}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center space-x-2 text-brand-brown-600">
              <Heart className="w-4 h-4" />
              <span className="font-mono text-xs tracking-wider uppercase font-semibold">Architectural Atmosphere</span>
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-brown-900 leading-snug">
              어지러운 도심을 잊는 곳,<br />
              시간이 부드럽게 멈추는 공간
            </h3>
            
            <p className="text-sm md:text-base text-brand-brown-700/90 leading-relaxed font-light">
              바쁘고 빠른 서울 연남동 중심가 한구석, 골목길로 들어서면 거짓말처럼 한적한 온도가 반깁니다. 멜로우 브루는 미니멀하고 내추럴한 오크 원목과 따뜻한 베이지 크림 톤의 텍스처로 완성되어 시각적 자극을 최소화했습니다.
            </p>
            <p className="text-sm md:text-base text-brand-brown-700/90 leading-relaxed font-light">
              은은하게 흐르는 잔잔한 재즈 선율, 골목길에서 쏟아지는 노란 아침 햇빛, 부드럽게 감도는 원두 볶는 향이 어우러져, 커피를 마시는 공간 이상의 깊은 치유와 휴식을 가꿀 수 있는 완벽한 피난처를 자처합니다.
            </p>

            <div className="pt-4">
              <span className="text-xs font-mono tracking-wider text-brand-brown-500 font-bold block mb-2">Space Zones</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {ZONES.map((zone) => (
                  <button
                    key={zone.id}
                    onClick={() => setActiveZone(zone.id)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-left cursor-pointer transition-all duration-300 ${
                      activeZone === zone.id
                        ? "border-brand-brown-600 bg-brand-beige-200/40"
                        : "border-brand-beige-300 hover:border-brand-brown-400"
                    }`}
                  >
                    <span className="text-xs font-semibold text-brand-brown-800">{zone.name.split(" (")[0]}</span>
                    <ArrowRight className={`w-3.5 h-3.5 text-brand-brown-600 transition-transform ${activeZone === zone.id ? "translate-x-0.5" : "text-transparent"}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
