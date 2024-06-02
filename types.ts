import branches from '~/data/branches';
import type { FLAGS } from '~/data/constants';

export interface Branch {
  id: number;
  country: string | null;
  index: number;
  city: string;
  address: string;
  phone: string;
  email: string;
  map?: number[];
}

export interface Product {
  id: number;
  title: string;
  characteristics: {
    description: string;
    country: 'Франция';
    material: string;
    size: {
      length: number;
      width: number;
      height: number;
      unit: 'мм';
    };
    weight: {
      digit: number;
      unit: 'кг' | 'г';
    };
    included: string;
  };
}

export interface Location {
  currentLocation: 'ru-ru' | 'by-ru';
  newLocationPath: 'by-ru' | 'ru-ru';
  newLocationText: 'Рос' | 'Бел';
  branch: typeof branches.spb | typeof branches.minsk;
  flag: typeof FLAGS.ru.image | typeof FLAGS.by.image;
}

export interface SocialLink {
  id: number;
  href: string;
  icon: string;
}

export interface ProductSectionItem {
  id: number;
  img: string;
  title: string;
  description: string;
  link: string;
}

export interface Advantage {
  id: number;
  icon: string;
  text: string;
}

export interface Video {
  id: number;
  cover: string;
  title: string;
  video: string;
}

export interface SelectOption {
  id: number;
  value: string;
}

export interface Breadcrumb {
  id: number;
  title: string;
  link?: string;
}

export interface HelpMomArticle {
  id: number;
  title: string;
  cover: string,
  slug: string;
  description: string;
}
