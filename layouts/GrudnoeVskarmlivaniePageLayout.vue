<script
  setup
  lang="ts">
import {useLocation} from '~/composables/useLocation';
import type {Breadcrumb} from '~/types';
import HelpMomNavigation from '~/components/base/HelpMomNavigation.vue';

const location = useLocation();

const breadcrumbs: Breadcrumb[] = [
  {
    id: 1,
    title: 'главная',
    link: `/${location.value.currentLocation}`,
  },
  {
    id: 2,
    title: 'полезная информация',
    link: `/${location.value.currentLocation}/help-mom`,
  },
  {
    id: 3,
    title: 'грудное вскармливание',
  },
];
</script>

<template>
  <section class="first-screen">
    <div class="container">
      <BaseBreadcrumb :links="breadcrumbs"/>
      <BaseTitle
        title="Грудное вскармливание"
        tag="h1"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="text-center uppercase"/>
    </div>
  </section>

  <section class="pb-[75px] pt-[75px] -mt-[75px] overflow-hidden">
    <div class="container relative">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
        <div class="relative z-10 col-span-2 w-full xl:min-h-[660px]">
          <BaseImage
            image="/img/help-mom-articles/article-3-cover.jpg"
            img-class="object-cover w-full h-full"
            class="rounded xl:rounded-tr-[191px] bg-[#9CA1A2]"
          />
          <NuxtImg
            src="./img/cell-decorator.svg"
            class="hidden xl:block w-[88px] h-[88px] absolute -top-[12px] -left-[12px] -z-10"/>
        </div>
        <div class="flex flex-col justify-center w-full">
          <p>
            <b>Кормление ребёнка грудным молоком</b> — это залог крепкого здоровья малыша. Раньше грудное молоко было
            единственным
            возможным питанием для новорожденного. И сегодня, если маме не удается с первой попытки наладить кормление
            грудью, или кажется, что её малышу не хватает грудного молока, которое есть у нее, не стоит спешить
            пользоваться
            смесями.
          </p>
          <br>
          <p>
            Обязательно обратитесь к специалисту по грудному вскармливанию или попробуйте самостоятельно разобраться в
            проблеме, ведь ни одна даже самая лучшая современная смесь не сможет заменить для новорожденного пользу
            грудного
            молока мамы.
          </p>
        </div>
        <div class="absolute left-[50%] top-[16%] md:top-[50%] md:left-[80%] xl:top-[80%] xl:left-[55.5%] w-[200px] h-[200px]">
          <div class="round-1 absolute w-[28px] h-[28px] rounded-full right-0 bottom-0 bg-notice"></div>
          <NuxtImg
            src="./img/cell-decorator.svg"
            class="w-[88px] h-[88px] absolute bottom-[32px] right-[32px]"/>
          <div class="round-3 absolute w-[156px] h-[156px] rounded-full left-0 top-0 bg-[#EE7C00] opacity-20"></div>
        </div>
        <div class="absolute bg-notice hidden xl:block rounded-full w-[472px] h-[472px] -left-[120px] top-[60px]"></div>
        <div class="absolute bg-notice hidden xl:block rounded-full w-[782px] h-[782px] -right-[400px] -top-[60px] -z-10"></div>
      </div>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container">
      <ol class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-12 lg:gap-x-[72px]">
        <li class="flex flex-col items-center">
          <span class="flex bg-notice rounded-full justify-center items-center w-[85px] h-[85px] font-display font-bold text-[38px] leading-[38px] text-secondary">1</span>
          <Separator class="h-[5px] bg-separator-pattern mb-4 mt-4"/>
          <p>
            Грудное молоко хорошо усваивается и эффективно используется организмом малыша для активного роста
            и развития.
          </p>
        </li>
        <li class="flex flex-col items-center">
          <span class="flex bg-notice rounded-full justify-center items-center w-[85px] h-[85px] font-display font-bold text-[38px] leading-[38px] text-secondary">2</span>
          <Separator class="h-[5px] bg-separator-pattern mb-4 mt-4"/>
          <p>
            Грудное молоко содержит микроэлементы и полезные вещества, которые защищают ребенка от болезней, а также
            антитела против возбудителей инфекций, перенесенных матерью в прошлом.
          </p>
        </li>
        <li class="flex flex-col items-center">
          <span class="flex bg-notice rounded-full justify-center items-center w-[85px] h-[85px] font-display font-bold text-[38px] leading-[38px] text-secondary">3</span>
          <Separator class="h-[5px] bg-separator-pattern mb-4 mt-4"/>
          <p>
            Мама быстрее возвращается к прежнему весу, так как всё накопленное за время беременности перерабатывается
            в энергию для производства молока.
          </p>
        </li>
        <li class="flex flex-col items-center">
          <span class="flex bg-notice rounded-full justify-center items-center w-[85px] h-[85px] font-display font-bold text-[38px] leading-[38px] text-secondary">4</span>
          <Separator class="h-[5px] bg-separator-pattern mb-4 mt-4"/>
          <p>
            Кормление грудью, во время которого мама вступает с малышом в сложное гормональное взаимодействие,
            способствует формированию крепкой эмоциональной связи между ними.
          </p>
        </li>
      </ol>
    </div>
  </section>

  <HelpMomNavigation/>

</template>