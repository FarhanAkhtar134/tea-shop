export interface TeaProduct {
  id: number;
  name: string;
  origin: string;
  notes: string;
  description: string;
  caffeine: string;
  brewTime: string;
  temperature: string;
  price: string;
  image: string;
  rarity: string;
  category: string;
}

export interface SimplifiedTeaProduct {
  id: number;
  name: string;
  origin: string;
  notes: string;
  price: string;
  image: string;
  rarity: string;
}

export interface ThemeColors {
  '--bg-primary': string;
  '--bg-secondary': string;
  '--text-primary': string;
  '--text-secondary': string;
  '--accent': string;
  '--accent-glow': string;
  '--border-color': string;
  '--card-bg': string;
}

export type Theme = 'dark' | 'light';