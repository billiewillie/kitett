<!--<script-->
<!--  setup-->
<!--  lang="ts">-->
<!--import { useLocation } from '~/composables/useLocation';-->
<!--import type { Breadcrumb } from '~/types';-->
<!--import HelpMomNavigation from '~/components/base/HelpMomNavigation.vue';-->

<!--const location = useLocation();-->

<!--const breadcrumbs: Breadcrumb[] = [-->
<!--  {-->
<!--    id: 1,-->
<!--    title: 'главная',-->
<!--    link: `/${location.value.currentLocation}`,-->
<!--  },-->
<!--  {-->
<!--    id: 2,-->
<!--    title: 'полезная информация',-->
<!--    link: `/${location.value.currentLocation}/help-mom`,-->
<!--  },-->
<!--  {-->
<!--    id: 3,-->
<!--    title: 'питание кормящей мамы',-->
<!--  },-->
<!--];-->

<!--const productsGood = [-->
<!--  {-->
<!--    id: 1,-->
<!--    image: './img/food/food-1.jpg',-->
<!--    title: 'Овощи и фрукты',-->
<!--    text: 'первое время в тепловой обработке, постепенно вводить свежее',-->
<!--  },-->
<!--  {-->
<!--    id: 2,-->
<!--    image: './img/food/food-2.jpg',-->
<!--    title: 'Кисломолочные продукты',-->
<!--    text: 'молоко, сыр, блюда из творога, каши на молоке',-->
<!--  },-->
<!--  {-->
<!--    id: 3,-->
<!--    image: './img/food/food-3.jpg',-->
<!--    title: 'Нежирное мясо и рыба',-->
<!--    text: 'говядина, телятина,индейка, кролик, щука, треска, минтай',-->
<!--  },-->
<!--  {-->
<!--    id: 4,-->
<!--    image: './img/food/food-4.jpg',-->
<!--    title: 'Травяной чай и вода',-->
<!--    text: 'компоты, морсы',-->
<!--  },-->
<!--  {-->
<!--    id: 5,-->
<!--    image: './img/food/food-5.jpg',-->
<!--    title: 'Хлеб с отрубями',-->
<!--    text: 'сухой крекер, печенье, мармелад, пастила, зефир, кешью, грецкий орех',-->
<!--  },-->
<!--  {-->
<!--    id: 6,-->
<!--    image: './img/food/food-6.jpg',-->
<!--    title: 'Горячие супы и бульоны ',-->
<!--    text: 'из телятины, курицы, индейки, кролика',-->
<!--  },-->
<!--];-->

<!--const productsWarning = [-->
<!--  {-->
<!--    id: 1,-->
<!--    image: './img/food/food-7.jpg',-->
<!--    title: 'Цитрусовые',-->
<!--    text: 'Цитрусовые, красные фрукты и овощи, киви, манго',-->
<!--  },-->
<!--  {-->
<!--    id: 4,-->
<!--    image: './img/food/food-10.jpg',-->
<!--    title: 'Пакетированные соки',-->
<!--    text: 'мята ромашка, шалфей',-->
<!--  },-->
<!--  {-->
<!--    id: 5,-->
<!--    image: './img/food/food-11.jpg',-->
<!--    title: 'Шоколад',-->
<!--    text: 'торты с масляным кремом, чёрный хлеб',-->
<!--  },-->
<!--  {-->
<!--    id: 6,-->
<!--    image: './img/food/food-12.jpg',-->
<!--    title: 'Консервы',-->
<!--    text: 'продукты, имеющие в составе консерванты и красители',-->
<!--  },-->
<!--  {-->
<!--    id: 2,-->
<!--    image: './img/food/food-8.jpg',-->
<!--    title: 'Яйца',-->
<!--    text: '',-->
<!--  },-->
<!--  {-->
<!--    id: 3,-->
<!--    image: './img/food/food-9.jpg',-->
<!--    title: 'Жареные и жирные блюда',-->
<!--    text: '',-->
<!--  },-->
<!--];-->

<!--const productsBad = [-->
<!--  {-->
<!--    id: 1,-->
<!--    image: './img/food/food-13.jpg',-->
<!--    title: 'Свекла, капуста',-->
<!--    text: 'виноград, бобовые',-->
<!--  },-->
<!--  {-->
<!--    id: 3,-->
<!--    image: './img/food/food-14.jpg',-->
<!--    title: 'Мясо неполной готовности',-->
<!--    text: 'тунец, акула, рыба-меч, другие жирные и солёные сорта рыбы',-->
<!--  },-->
<!--  {-->
<!--    id: 4,-->
<!--    image: './img/food/food-15.jpg',-->
<!--    title: 'Фаст-фуд и снеки',-->
<!--    text: '(чипсы, сухарики, попкорн), полуфабрикаты, маринованные и солёные закуски',-->
<!--  },-->
<!--  {-->
<!--    id: 5,-->
<!--    image: './img/food/food-16.jpg',-->
<!--    title: 'Крепкий кофе',-->
<!--    text: 'газированные напитки',-->
<!--  },-->
<!--  {-->
<!--    id: 6,-->
<!--    image: './img/food/food-17.jpg',-->
<!--    title: 'Сдобная выпечка',-->
<!--    text: '',-->
<!--  },-->
<!--  {-->
<!--    id: 2,-->
<!--    image: './img/food/food-18.jpg',-->
<!--    title: 'Йогурты',-->
<!--    text: '',-->
<!--  },-->
<!--];-->
<!--</script>-->

<template>
  <section class="first-screen">
    <div class="container">
<!--      <BaseBreadcrumb :links="breadcrumbs" />-->
      <!--      <BaseTitle-->
      <!--        title="Питание кормящей мамы"-->
      <!--        tag="h1"-->
      <!--        separator-style="top-[calc(50%-2px)] absolute"-->
      <!--        text-style="text-center uppercase" />-->
    </div>
  </section>

<!--  <section class="pb-[75px] pt-[75px] -mt-[75px] overflow-hidden">-->
<!--    <div class="container relative">-->
<!--      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">-->
<!--        <div class="relative z-10 col-span-2 w-full xl:min-h-[660px]">-->
<!--          <BaseImage-->
<!--            image="./img/help-mom-articles/article-5-cover.jpg"-->
<!--            img-class="object-cover w-full h-full"-->
<!--            class="rounded xl:rounded-tr-[191px] bg-[#9CA1A2]"-->
<!--          />-->
<!--          <NuxtImg src="./img/cell-decorator.svg" class="hidden xl:block w-[88px] h-[88px] absolute -top-[12px] -left-[12px] -z-10"/>-->
<!--        </div>-->
<!--        <div class="flex flex-col justify-center w-full">-->
<!--          <p>-->
<!--            <b>-->
<!--              Несмотря на то, что кормление — процесс естественный, к нему надо подготовиться.-->
<!--            </b>-->
<!--          </p>-->
<!--          <br>-->
<!--          <p>-->
<!--            Это не сложно, главное в этом деле — прислушиваться к вашему малышу и своему собственному организму, а также-->
<!--            следовать рекомендациям специалистов.-->
<!--          </p>-->
<!--          <br>-->
<!--          <p>-->
<!--            <b>-->
<!--              Главное, о чём нужно позаботиться уже сейчас, это ваше питание.-->
<!--            </b>-->
<!--          </p>-->
<!--          <br>-->
<!--          <p>-->
<!--            Предлагаем вам познакомиться с основными принципами здорового питания кормящей мамы.-->
<!--          </p>-->
<!--        </div>-->
<!--        <div class="absolute left-[50%] top-[16%] md:top-[50%] md:left-[80%] xl:top-[80%] xl:left-[55.5%] w-[200px] h-[200px]">-->
<!--          <div class="round-1 absolute w-[28px] h-[28px] rounded-full right-0 bottom-0 bg-notice"></div>-->
<!--          <NuxtImg-->
<!--            src="./img/cell-decorator.svg"-->
<!--            class="w-[88px] h-[88px] absolute bottom-[32px] right-[32px]" />-->
<!--          <div class="round-3 absolute w-[156px] h-[156px] rounded-full left-0 top-0 bg-[#EE7C00] opacity-20"></div>-->
<!--        </div>-->
<!--        <div class="absolute bg-notice hidden xl:block rounded-full w-[472px] h-[472px] -left-[120px] top-[60px]"></div>-->
<!--        <div class="absolute bg-notice hidden xl:block rounded-full w-[782px] h-[782px] -right-[400px] -top-[60px] -z-10"></div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->

<!--  <section class="mb-[75px]">-->
<!--    <div class="container">-->
<!--      <h2 class="title text-center uppercase text-[24px] lg:text-[30px]">Полезные продукты</h2>-->
<!--      <Separator class="bg-separator-pattern h-[5px] my-4 lg:my-6" />-->
<!--      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">-->
<!--        <div-->
<!--          class="flex flex-col items-center"-->
<!--          v-for="product in productsGood"-->
<!--          :key="product.id">-->
<!--          <div class="image mb-8">-->
<!--            <NuxtImg-->
<!--              :src="product.image"-->
<!--              width="120"-->
<!--              height="120"-->
<!--              class="rounded-full shadow-lg" />-->
<!--          </div>-->
<!--          <h3 class="title text-center text-[20px] lg:text-[22px]">{{ product.title }}</h3>-->
<!--          <Separator class="bg-separator-pattern h-[5px] my-4" />-->
<!--          <p class="text-center">{{ product.text }}</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->

<!--  <section class="mb-[75px]">-->
<!--    <div class="container">-->
<!--      <h2 class="title text-center uppercase text-[24px] lg:text-[30px]">С осторожностью</h2>-->
<!--      <Separator class="bg-separator-pattern h-[5px] my-4 lg:my-6" />-->
<!--      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">-->
<!--        <div-->
<!--          class="flex flex-col items-center"-->
<!--          v-for="product in productsWarning"-->
<!--          :key="product.id">-->
<!--          <div class="image mb-8">-->
<!--            <NuxtImg-->
<!--              :src="product.image"-->
<!--              width="120"-->
<!--              height="120"-->
<!--              class="rounded-full shadow-lg" />-->
<!--          </div>-->
<!--          <h3 class="title text-center text-[20px] lg:text-[22px]">{{ product.title }}</h3>-->
<!--          <Separator-->
<!--            v-if="product.text.length>0"-->
<!--            class="bg-separator-pattern h-[5px] my-4" />-->
<!--          <p class="text-center">{{ product.text }}</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->

<!--  <section class="mb-[75px]">-->
<!--    <div class="container">-->
<!--      <h2 class="title text-center uppercase text-[24px] lg:text-[30px]">Нерекомендованные продукты</h2>-->
<!--      <Separator class="bg-separator-pattern h-[5px] my-4 lg:my-6" />-->
<!--      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">-->
<!--        <div-->
<!--          class="flex flex-col items-center"-->
<!--          v-for="product in productsBad"-->
<!--          :key="product.id">-->
<!--          <div class="image mb-8">-->
<!--            <NuxtImg-->
<!--              :src="product.image"-->
<!--              width="120"-->
<!--              height="120"-->
<!--              class="rounded-full shadow-lg" />-->
<!--          </div>-->
<!--          <h3 class="title text-center text-[20px] lg:text-[22px]">{{ product.title }}</h3>-->
<!--          <Separator-->
<!--            v-if="product.text.length>0"-->
<!--            class="bg-separator-pattern h-[5px] my-4" />-->
<!--          <p class="text-center">{{ product.text }}</p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->

<!--  <section class="mb-[75px]">-->
<!--    <div class="container md:columns-2 gap-8 xl:gap-[72px]">-->
<!--      <p class="mb-6">-->
<!--        Главный принцип питания кормящей мамы — оно должно быть разнообразным и сбалансированным. Продукты, к которым-->
<!--        стоит относиться с осторожностью, нужно вводить в рацион постепенно, наблюдая за реакцией грудного ребенка. Если-->
<!--        у него вдруг случается аллергическая реакция, временно исключите этот продукт из своего меню и попробуйте-->
<!--        вернуться к нему позже. Следите и за собственной реакцией на пищу: если вы чувствуете дискомфорт после еды,-->
<!--        вздутие, повышенное газообразование, лучше временно отказаться от продуктов, вызвавших такие ощущения.-->
<!--      </p>-->
<!--      <p>-->
<!--        Организм кормящей мамы, как и во время беременности, иногда сам подсказывает, какой продукт нужно съесть, чтобы-->
<!--        восполнить запас каких-то веществ.-->
<!--      </p>-->
<!--      <br>-->
<!--      <p>-->
<!--        Специалисты ВОЗ отмечают, что питание мамы хоть и влияет на концентрацию полезных веществ в грудном молоке,-->
<!--        но все таки самые важные для лактации моменты — это выделение гормонов пролактина и окситоцина, а их работа-->
<!--        не зависит от маминого питания.-->
<!--      </p>-->
<!--    </div>-->
<!--  </section>-->

<!--  <HelpMomNavigation />-->

</template>