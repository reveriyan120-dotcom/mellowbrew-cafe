import { MenuItem, GalleryItem, ZoneItem } from "./types";
import coffeeImg from "./assets/images/mellow_brew_coffee_1783253795200.jpg";
import brunchImg from "./assets/images/mellow_brew_brunch_1783253808165.jpg";
import heroImg from "./assets/images/mellow_brew_hero_1783253780413.jpg";
import roasterImg from "./assets/images/mellow_brew_roaster_1783253821849.jpg";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "m1",
    name: "멜로우 시그니처 슈페너",
    englishName: "Mellow Signature Spanner",
    price: 7500,
    category: "coffee",
    description: "직접 개발한 고소한 피넛 아몬드 밀크 베이스 위에 쫀득한 수제 카라멜 크림과 발로나 카카오 파우더가 조화를 이루는 아인슈페너.",
    tags: ["Signature", "Creamy", "Sweet"],
    image: coffeeImg,
    isSignature: true,
    details: {
      beanInfo: "House Blend (Mellow Sun)",
      origin: "Colombia 50% + Brazil 30% + Ethiopia 20%",
      notes: ["Roasted Almond", "Milk Chocolate", "Caramel Cream"],
      ingredients: ["에스프레소", "수제 피넛아몬드 밀크", "카라멜 크림", "발로나 카카오"]
    }
  },
  {
    id: "m2",
    name: "에티오피아 예가체프 아리차 (싱글오리진 필터)",
    englishName: "Ethiopia Yirgacheffe Aricha (Filter)",
    price: 8000,
    category: "coffee",
    description: "직접 로스팅하여 산뜻한 베리 향과 자스민의 화사한 꽃 향기, 은은한 복숭아의 단맛이 긴 여운을 남기는 프리미엄 필터 커피.",
    tags: ["Single Origin", "Floral", "Acidic"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800",
    details: {
      beanInfo: "Ethiopia Yirgacheffe G1 Aricha Natural",
      origin: "Ethiopia Gedeo Zone",
      notes: ["Jasmine", "Blueberry", "Peach", "Bergamot"],
      ingredients: ["핸드드립 필터 커피 (Ice/Hot 선택)"]
    }
  },
  {
    id: "m3",
    name: "멜로우 플랫 화이트",
    englishName: "Mellow Flat White",
    price: 6000,
    category: "coffee",
    description: "다크 초콜릿 같은 리치한 단맛의 에스프레소 샷과 벨벳처럼 부드러운 우유가 이상적인 조화를 이루는 고소한 라떼.",
    tags: ["Bold", "Smooth", "Milky"],
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800",
    details: {
      beanInfo: "House Blend (Deep Earth)",
      origin: "Brazil 60% + India 40%",
      notes: ["Dark Cocoa", "Brown Sugar", "Toasted Walnut"],
      ingredients: ["리스트레토 더블 샷", "미세 마이크로폼 밀크"]
    }
  },
  {
    id: "m4",
    name: "아보카도 수란 토스트 & 가든 샐러드",
    englishName: "Avocado Poached Egg Toast",
    price: 16500,
    category: "brunch",
    description: "천연 발효 샤워도우 위에 부드러운 유기농 아보카도 과카몰리와 신선한 아보카도 슬라이스, 촉촉하게 익힌 수란을 올린 브런치 시그니처.",
    tags: ["Best Seller", "Healthy", "Fresh"],
    image: brunchImg,
    isSignature: true,
    details: {
      ingredients: ["유기농 샤워도우 브레드", "생 아보카도", "유정란 수란", "방울토마토", "와일드 루꼴라", "수제 레몬 비네그레트"]
    }
  },
  {
    id: "m5",
    name: "연남 바질 페스토 파스타",
    englishName: "Yeonnam Basil Pesto Pasta",
    price: 17500,
    category: "brunch",
    description: "매일 아침 직접 갈아 만든 신선한 바질 페스토에 엑스트라 버진 올리브유, 구운 캐슈넛, 선드라이 토마토를 더한 리치한 맛의 오일 파스타.",
    tags: ["Vegan Option", "Nutty", "Herbaceous"],
    image: "https://images.unsplash.com/photo-1496042401124-e82b1a1eb3d2?auto=format&fit=crop&q=80&w=800",
    details: {
      ingredients: ["스파게티니 면", "수제 프레시 바질페스토", "캐슈넛", "파르미지아노 레지아노 치즈", "선드라이 토마토"]
    }
  },
  {
    id: "m6",
    name: "계절 과일 수플레 팬케이크",
    englishName: "Seasonal Fruit Souffle Pancake",
    price: 15000,
    category: "dessert",
    description: "구름처럼 폭신하고 입안에서 사르르 녹는 수플레 생반죽 팬케이크 위에 계절 과일과 수제 메이플 마스카포네 크림을 가득 얹은 디저트.",
    tags: ["Sweet", "Fluffy", "Fresh Fruit"],
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=800",
    isSignature: true,
    details: {
      ingredients: ["계란 수플레 시트", "계절 생과일 (딸기/무화과/샤인머스캣)", "마스카포네 생크림", "메이플 시럽"]
    }
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Mellow Brew 메인 홀 공간",
    category: "interior",
    image: heroImg,
    description: "따뜻하고 미니멀한 우드 톤의 인테리어와 자연 채광이 조화를 이루는 아늑한 공간."
  },
  {
    id: "g2",
    title: "신선한 스페셜티 에스프레소 추출",
    category: "coffee",
    image: coffeeImg,
    description: "직접 로스팅한 원두로 추출해 풍부한 크레마와 깊은 향을 품은 에스프레소."
  },
  {
    id: "g3",
    title: "시그니처 아보카도 수란 토스트",
    category: "brunch",
    image: brunchImg,
    description: "바삭한 사워도우 위에 아보카도와 수란이 어우러진 비주얼과 맛 모두 완벽한 브런치."
  },
  {
    id: "g4",
    title: "원두 로스팅 프로세스",
    category: "roasting",
    image: roasterImg,
    description: "독일제 명품 로스터기를 통해 매일 아침 최고의 맛과 밸런스를 잡는 원두 로스팅."
  },
  {
    id: "g5",
    title: "핸드드립 추출용 필터 바",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800",
    description: "바리스타가 세심하게 커피 온도를 맞추어 원두 고유의 섬세한 플레이버를 끌어내는 브루잉 코너."
  },
  {
    id: "g6",
    title: "연남동 골목길 속 MELLOW BREW 외관",
    category: "interior",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
    description: "도심 속 바쁜 일상에서 벗어나 편안한 휴식을 누릴 수 있는 미니멀한 외관."
  }
];

export const ZONES: ZoneItem[] = [
  {
    id: "z1",
    name: "The Living Room (라운지 홀)",
    description: "포근한 미드센추리 모던 가구들과 따뜻한 패브릭 소파가 준비되어 있어 오랜 대화와 휴식에 최적인 메인 라운지.",
    vibe: "Cozy, Sunny, Warm Wooden Elements",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "z2",
    name: "Roasting Studio (로스팅 전용룸)",
    description: "유리 통창으로 설계되어 실시간으로 생두가 명품 로스팅 기계에서 볶아지는 광경을 보며 신선한 향을 오감으로 느낄 수 있는 공간.",
    vibe: "Professional, Rich Aroma, Modern Industrial",
    image: roasterImg
  },
  {
    id: "z3",
    name: "The Terrace (가든 햇살 테라스)",
    description: "푸릇푸릇한 화초들과 연남동의 조용한 주택가 골목길이 내려다보이는 평화로운 실외 가든 테라스.",
    vibe: "Open-air, Plant-rich, Bright Morning Sun",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=800"
  }
];
