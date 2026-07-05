import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Clock, Compass, Train, Navigation, Sparkles, Check } from "lucide-react";

interface Landmark {
  id: string;
  name: string;
  krName: string;
  distance: string;
  walkingTime: string;
  directionDesc: string;
  x: number; // percentage coordinate on map
  y: number; // percentage coordinate on map
}

const LANDMARKS: Landmark[] = [
  {
    id: "subway",
    name: "Hongik Univ. Station Exit 3",
    krName: "홍대입구역 3번 출구",
    distance: "520m",
    walkingTime: "7분",
    directionDesc: "경의선 숲길(연트럴파크)을 따라 약 300m 직진 후, 커피리브레 연남점 골목으로 좌회전하여 아기자기한 연남동 주택가 골목길로 150m 들어오시면 우측 붉은색 벽돌 건물 1층에 MELLOW BREW 입구가 있습니다.",
    x: 15,
    y: 80
  },
  {
    id: "park",
    name: "Gyeongui Line Forest Park",
    krName: "경의선 숲길 공원",
    distance: "120m",
    walkingTime: "2분",
    directionDesc: "공원 중간 잔디밭 광장에서 연남동 골목 상권 방향 브릭 스트리트로 진입해 첫 번째 사거리에서 우회전하시면 초록색 식물 가득한 멜로우 브루 테라스가 바로 보입니다.",
    x: 40,
    y: 65
  },
  {
    id: "market",
    name: "Dongjin Market",
    krName: "동진시장",
    distance: "300m",
    walkingTime: "4분",
    directionDesc: "동진시장 초입에서 연남파출소 사거리 방면으로 올라오셔서 맞은편 세탁소 골목 안쪽으로 진입하시면 도보 4분 거리에 위치하고 있습니다.",
    x: 80,
    y: 40
  },
  {
    id: "police",
    name: "Yeonnam Police Box",
    krName: "연남파출소 사거리",
    distance: "180m",
    walkingTime: "2분",
    directionDesc: "파출소를 등지고 건너편 주택가 골목(할머니 떡집 앞 골목)으로 쭉 직진하여 두 번째 갈림길에서 왼쪽 브라운 벽돌 골목으로 들어오시면 됩니다.",
    x: 65,
    y: 50
  }
];

export default function ContactSection() {
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark>(LANDMARKS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const address = "서울 마포구 동교로252길 12, 1층 멜로우 브루";
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-24 md:py-32 bg-brand-beige-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-brand-brown-500 uppercase inline-block mb-3 bg-brand-beige-200/50 px-3.5 py-1.5 rounded-full">
            Visit our sanctuary
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-brown-900 tracking-tight mb-4">
            오시는 길 & 안내
          </h2>
          <div className="w-12 h-[2.5px] bg-brand-brown-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Info details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <span className="text-xs font-mono tracking-widest text-brand-brown-500 uppercase font-bold block">
                MELLOW BREW YEONNAM
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-brown-900 leading-snug">
                연남동 고요한 주택가 속,<br />
                오롯이 준비된 당신만의 자리
              </h3>
              <p className="text-xs md:text-sm text-brand-brown-700/90 leading-relaxed font-light">
                골목골목 볼거리 가득한 연남동 주택가 아늑한 빌라 1층에 자리 잡고 있습니다. 찾아오시는 길 자체도 연트럴파크의 풀내음과 골목 속 아기자기한 가게들을 구경하며 여유롭게 거닐 수 있는 산책로입니다.
              </p>
            </div>

            {/* Quick Specs Cards */}
            <div className="space-y-4 border-t border-brand-beige-200/80 pt-6">
              
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-brand-beige-100 rounded-xl border border-brand-beige-200 text-brand-brown-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="text-[10px] font-mono tracking-wider uppercase text-brand-brown-400">Address</div>
                  <div className="text-xs md:text-sm font-semibold text-brand-brown-900">
                    서울 마포구 동교로252길 12, 1층 MELLOW BREW
                  </div>
                  <button
                    onClick={handleCopyAddress}
                    className="text-[10px] text-brand-brown-500 hover:text-brand-brown-800 hover:underline inline-flex items-center space-x-1 focus:outline-none cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600 font-bold">주소 복사 완료</span>
                      </>
                    ) : (
                      <>
                        <span>주소 텍스트 복사하기</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-brand-beige-100 rounded-xl border border-brand-beige-200 text-brand-brown-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono tracking-wider uppercase text-brand-brown-400">Operating Hours</div>
                  <div className="text-xs md:text-sm font-semibold text-brand-brown-900">
                    매일 09:30 - 21:00
                  </div>
                  <div className="text-[10px] text-brand-brown-500 leading-relaxed font-light">
                    브런치 라스트 오더 16:30 / 음료 라스트 오더 20:30<br />
                    *명절 연휴 당일 외 연중무휴 운영
                  </div>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-brand-beige-100 rounded-xl border border-brand-beige-200 text-brand-brown-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono tracking-wider uppercase text-brand-brown-400">Phone / Contact</div>
                  <div className="text-xs md:text-sm font-semibold text-brand-brown-900">
                    02-333-8212
                  </div>
                  <div className="text-[10px] text-brand-brown-500 font-light">
                    예약 단체석 문의 및 케이터링 대관 문의
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Simulated Interactive Map of Yeonnam-dong */}
          <div className="lg:col-span-7 bg-brand-beige-100 rounded-2xl border border-brand-beige-200 p-6 md:p-8 shadow-md">
            
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2 text-brand-brown-700">
                <Compass className="w-4 h-4" />
                <span className="text-xs font-semibold">연남동 동네 산책로 (마커 클릭 시 거리안내)</span>
              </div>
              <span className="text-[10px] font-mono bg-brand-brown-800 text-brand-beige-50 px-2.5 py-1 rounded-md">
                Simulated Interactive Map
              </span>
            </div>

            {/* Custom Interactive Map Graphic */}
            <div className="relative w-full aspect-[16/10] bg-brand-beige-200/60 rounded-xl overflow-hidden border border-brand-beige-300">
              
              {/* Grid backgrounds */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-[0.15] pointer-events-none">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="border-r border-b border-brand-brown-900" />
                ))}
              </div>

              {/* Park representation - Gyeongui Line Forest Park */}
              <div className="absolute top-[45%] left-[-10%] w-[120%] h-[35%] bg-emerald-700/10 rotate-[22deg] blur-[4px] border-y border-emerald-700/15 flex items-center justify-center">
                <span className="text-[10px] text-emerald-800/40 tracking-widest font-mono select-none rotate-[-22deg]">
                  경의선 숲길 공원 (Yeontral Park)
                </span>
              </div>

              {/* Subway tracks indicator */}
              <div className="absolute bottom-[5%] left-[-10%] w-[120%] h-1 border-t-2 border-dashed border-zinc-400 rotate-[22deg] opacity-40" />

              {/* Major streets */}
              <div className="absolute left-[30%] top-[-10%] w-[12%] h-[120%] bg-brand-beige-100/60 rotate-[-15deg] border-x border-brand-beige-300/45" />
              <div className="absolute left-[-10%] top-[40%] w-[120%] h-[12%] bg-brand-beige-100/60 rotate-[10deg] border-y border-brand-beige-300/45" />

              {/* MELLOW BREW Center Target marker */}
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute left-[52%] top-[35%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none"
              >
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-10 h-10 bg-brand-brown-600/20 rounded-full animate-ping" />
                  <div className="p-2.5 bg-brand-brown-800 text-brand-beige-50 rounded-full shadow-lg border border-brand-beige-200">
                    <Navigation className="w-5 h-5 fill-brand-beige-50 text-brand-beige-50" />
                  </div>
                </div>
                <div className="mt-1.5 bg-brand-brown-900 text-white font-serif font-bold text-[10px] py-1 px-2.5 rounded-md shadow-md tracking-wider">
                  MELLOW BREW
                </div>
              </motion.div>

              {/* Landmark interactive pins on map */}
              {LANDMARKS.map((landmark) => (
                <button
                  key={landmark.id}
                  onClick={() => setSelectedLandmark(landmark)}
                  style={{ left: `${landmark.x}%`, top: `${landmark.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 p-2 rounded-xl flex items-center space-x-1 border transition-all duration-300 cursor-pointer ${
                    selectedLandmark.id === landmark.id
                      ? "bg-white border-brand-brown-700 shadow-md scale-105"
                      : "bg-brand-beige-100/90 border-brand-beige-300 hover:border-brand-brown-500 hover:bg-white"
                  }`}
                >
                  {landmark.id === "subway" ? (
                    <Train className={`w-3.5 h-3.5 ${selectedLandmark.id === landmark.id ? "text-brand-brown-800" : "text-brand-brown-500"}`} />
                  ) : (
                    <MapPin className={`w-3.5 h-3.5 ${selectedLandmark.id === landmark.id ? "text-brand-brown-800" : "text-brand-brown-500"}`} />
                  )}
                  <span className="text-[9px] font-semibold text-brand-brown-900 whitespace-nowrap">
                    {landmark.krName.split(" ")[0]}
                  </span>
                </button>
              ))}

              {/* Map Scale indicator */}
              <div className="absolute bottom-3 left-4 bg-white/70 backdrop-blur-md border border-brand-beige-300 px-2 py-0.5 rounded text-[8px] font-mono text-brand-brown-600 select-none">
                100m | ───
              </div>
            </div>

            {/* Landmark details accordion view under map */}
            <div className="mt-6 bg-white rounded-xl border border-brand-beige-200 p-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedLandmark.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between border-b border-brand-beige-100 pb-2.5">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-brand-brown-600 animate-pulse" />
                      <h4 className="text-xs md:text-sm font-bold text-brand-brown-900">
                        {selectedLandmark.krName} 출발 코스
                      </h4>
                    </div>
                    <div className="flex space-x-3 text-[11px]">
                      <span className="text-brand-brown-500">거리: <strong className="font-semibold text-brand-brown-800">{selectedLandmark.distance}</strong></span>
                      <span className="text-brand-brown-500">도보: <strong className="font-semibold text-brand-brown-800">{selectedLandmark.walkingTime}</strong></span>
                    </div>
                  </div>

                  <p className="text-[11px] md:text-xs text-brand-brown-700 leading-relaxed font-light">
                    {selectedLandmark.directionDesc}
                  </p>

                  <div className="flex items-center space-x-1.5 text-[10px] text-brand-brown-500 italic bg-brand-beige-50 p-2.5 rounded-lg border border-brand-beige-100">
                    <Sparkles className="w-3.5 h-3.5 text-brand-brown-400" />
                    <span>경의선 숲길 삼거리 골목길에서 향긋한 멜로우 원두 볶는 냄새를 따라오시면 금방 찾으실 수 있습니다.</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
