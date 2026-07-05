export interface MenuItem {
  id: string;
  name: string;
  englishName: string;
  price: number;
  category: "coffee" | "brunch" | "dessert";
  description: string;
  tags: string[];
  image: string;
  isSignature?: boolean;
  details?: {
    beanInfo?: string;
    origin?: string;
    notes?: string[];
    ingredients?: string[];
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "interior" | "coffee" | "brunch" | "roasting";
  image: string;
  description: string;
}

export interface ZoneItem {
  id: string;
  name: string;
  description: string;
  vibe: string;
  image: string;
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  request?: string;
}
