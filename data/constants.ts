import type {
  Branch,
  Advantage,
  HelpMomArticle,
  Product,
  ProductSectionItem,
  SelectOption,
  SocialLink,
  Video,
} from '~/types';
import Advantage1 from '~/components/icon/Advantage1.vue';
import Advantage2 from '~/components/icon/Advantage2.vue';
import Advantage3 from '~/components/icon/Advantage3.vue';
import Advantage4 from '~/components/icon/Advantage4.vue';

export const ADDRESSES: Record<string, Branch> = {
  ru: {
    id: 1,
    country: null,
    index: 197022,
    city: 'Санкт-Петербург',
    address: 'ул. Профессора Попова, д. 23, лит. Е',
    phone: '+7 (812) 320 49 49',
    email: 'main@bioline.ru',
  },
  bl: {
    id: 2,
    country: 'Республика Беларусь',
    index: 220123,
    city: 'Минск',
    address: 'ул. В. Хоружей, 32 а',
    phone: '+375 17 399 43 79',
    email: 'main@bioline.ru',
  },
};

export const COPYRIGHT: string = '© OOO «БиоСистемы», 2018 -';

export const SOCIALS: SocialLink[] = [
  {
    id: 1,
    href: 'https://t.me/biobabynet',
    icon: 'bxl:telegram',
  },
  {
    id: 2,
    href: 'https://vk.com/biobabyru',
    icon: 'bxl:vk',
  },
];

export const ADVANTAGES: Advantage[] = [
  {
    id: 1,
    icon: Advantage1,
    text: 'индивидуальный размер воронки',
  },
  {
    id: 2,
    icon: Advantage2,
    text: 'комфорт',
  },
  {
    id: 3,
    icon: Advantage3,
    text: 'европейское качество',
  },
  {
    id: 4,
    icon: Advantage4,
    text: 'эффективное сцеживание',
  },
];

export const VIDEOS: Video[] = [
  {
    id: 1,
    cover: '/img/video-covers/video-1-cover.jpg',
    title: 'Сборка FISIO<sup>®</sup> PRO',
    video: 'https://www.youtube.com/embed/oUEwG1aBGL4?si=SW6J4-Us5YXi6BPW',
  },
  {
    id: 2,
    cover: '/img/video-covers/video-2-cover.jpg',
    title: 'Как использовать KOLOR PLAY<sup>®</sup>',
    video: 'https://www.youtube.com/embed/Ik8eQ_qh9sY?si=56_jy28kI0rgzoSp',
  },
  {
    id: 3,
    cover: '/img/video-covers/video-3-cover.jpg',
    title: 'Как использовать MINIKIT SOLO<sup>®</sup>',
    video: 'https://www.youtube.com/embed/rrb1NLfUmDI?si=sOLvhYiU-TzM3K0e',
  },
  {
    id: 4,
    cover: '/img/video-covers/video-4-cover.jpg',
    title: 'MINIKIT SOLO<sup>®</sup>',
    video: 'https://www.youtube.com/embed/cFnBdiK8OC8?si=gBPQSHSvC0-7QpOQ',
  },
  {
    id: 5,
    cover: '/img/video-covers/video-fisio-cover.jpg',
    title: 'Инструкция для FISIO<sup>®</sup>',
    video: 'https://www.youtube.com/embed/PmoRGrczn0Y?si=YzbCqhOo1Zoot0wU',
  },
  {
    id: 6,
    cover: '/img/video-covers/video-6-cover.jpg',
    title: 'MINIKIT DUO<sup>®</sup>',
    video: 'https://www.youtube.com/embed/0rYerAG6eYs?si=GNxzCo6CiIcO-Vsu',
  },
  {
    id: 7,
    cover: '/img/video-covers/video-7-cover.jpg',
    title: 'KOLOR PLAY<sup>®</sup> by KITETT',
    video: 'https://www.youtube.com/embed/A6HHM5aWHzs?si=6VMCxv3WAeT5pXCl',
  },
];

export const SELECT_OPTIONS: SelectOption[] = [
  {
    id: 1,
    value: 'Консультация по продукции',
  },
  {
    id: 2,
    value: 'Сервисное обслуживание',
  },
];

export const ONLINE_MARKETS = [
  {
    id: 1,
    title: 'yandex market',
    logo: '../../../img/logos/yamarket.svg',
    link: 'https://market.yandex.ru/catalog--molokootsosy-dlia-kormiashchikh-mam/18044712/list?hid=989032&rs=eJw9UL8vxVAYbVmIv0BEUqulvb29t633JI1JWJ63S9pXOhnsBk2ISITJZqkZCYPFj-gbnsH6YhCDxo8YGYjY9JzBcnJyzved893r7g62zJ5pWNl0jWW7UWP01oTyfAnsT9VY7VH5hFudQI_Wwa0udGMbmI9dQWlx6x1KfAqeX4BXk3T3qdyD5_PAcgG91gTzN-GWt-DROXE1rLH4JT8DFl-8Ye0G_BWuJagvMuGIybPIjH942zB4tAEsmnALE9yweecO0uItTJbfvLPPHL6xOGAvfyA_pv7AmUdslS_csqiPX2NmhvMDbBxh-yHnR_k_T2ivcm5F_I0PtFQrjTtzSPtSyiBM5_5Z2xW-UNpXQnlKhbbWy1mn43nJUpJkQaJSJaUrU0crETjacWxhiz9aeppQ&recipeId=320121470565&businessId=50305016&glfilter=7893318%3A50297270',
  },
  {
    id: 2,
    title: 'ozon',
    logo: '../../../img/logos/ozon.svg',
    link: 'https://www.ozon.ru/seller/biobebi-128437/brand/kitett-100125066/?miniapp=seller_128437',
  },
  {
    id: 3,
    title: 'детский мир',
    logo: '../../../img/logos/detmir.svg',
    link: 'https://www.detmir.ru/catalog/index/name/sortforbrand/brand/74737/',
  },
  {
    id: 4,
    title: 'wildberries',
    logo: '../../../img/logos/wildberries.svg',
    link: 'https://www.wildberries.ru/seller/316612?sort=popular&page=1&fbrand=1342131',
  },
];

export const COMMON_STATEMENTS = [
  {
    id: 1,
    text: 'Воронка вашего размера будет герметично прилегать к груди, стимулировать нужные доли молочной железы и обеспечит хороший объём сцеженного молока.',
  },
  {
    id: 2,
    text: 'В целях соблюдения норм гигиены, воронки KOLOR<sup>®</sup> выполнены в формате неразборной конструкции. Это позволяет избежать прикосновений пальцев рук к внутренней части воронки и винтовой резьбе контейнера.',
  },
  {
    id: 3,
    text: 'Внутренний диаметр воронки не должен быть меньше диаметра вашего соска – это может стать причиной сжатия млечных протоков, травмирования кожи и уменьшения количества сцеженного молока.',
  },
  {
    id: 4,
    text: 'Это удобно в условиях прогулки или путешествия, когда нет возможности провести стерилизацию или нет времени ждать, пока она завершится.',
  },
  {
    id: 5,
    text: 'В составе воронок KOLOR<sup>®</sup> нет фталатов и бисфенола, что важно для новорождённого.',
  },
  {
    id: 6,
    text: 'Имея запасную воронку вашего размера, вы можете начать сцеживание в любой момент.',
  },

];

export const VORONKI = [
  {
    id: 1,
    title: '21 мм',
    image: '../../../img/products/voronki/voronki-21.jpg',
  },
  {
    id: 2,
    title: '24 мм',
    image: '../../../img/products/voronki/voronki-24.jpg',
  },
  {
    id: 3,
    title: '26 мм',
    image: '../../../img/products/voronki/voronki-26.jpg',
  },
  {
    id: 4,
    title: '30 мм',
    image: '../../../img/products/voronki/voronki-30.jpg',
  },
];

export const FLAGS = {
  'ru': {
    id: 1,
    image: 'img/flags/russia.svg',
  },
  'by': {
    id: 2,
    image: 'img/flags/belarus.svg',
  },
};

