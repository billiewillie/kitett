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
    title: 'Главная',
    link: `/${location.value.currentLocation}`,
  },
  {
    id: 2,
    title: 'Полезная информация',
    link: `/${location.value.currentLocation}/help-mom`,
  },
  {
    id: 3,
    title: 'Подбор воронки правильного размера',
  },
];
</script>

<template>

  <section class="first-screen">
    <div class="container">
      <BaseBreadcrumb :links="breadcrumbs"/>
      <BaseTitle
        title="подбор воронки правильного размера"
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
            image="/img/help-mom-articles/article-7-cover.jpg"
            img-class="object-cover w-full h-full"
            class="rounded xl:rounded-tr-[191px] bg-[#9CA1A2]"
          />
          <NuxtImg
            src="/img/cell-decorator.svg"
            class="hidden xl:block w-[88px] h-[88px] absolute -top-[12px] -left-[12px] -z-10"/>
        </div>
        <div class="flex flex-col justify-center w-full">
          <p>
            <b>
              Почему очень важно грамотно подобрать воронку? Потому что именно от этого зависит, насколько правильным,
              продуктивным и максимально комфортным будет процесс сцеживания для мамочки.
            </b>
          </p>
          <br>
          <p>
            Воронка вашего размера будет герметично прилегать к груди, стимулировать нужные доли молочной железы
            и обеспечит хороший объем сцеженного молока, а верно определенный внутренний диаметр убережет соски
            от травмы.
          </p>
        </div>
        <div class="absolute left-[50%] top-[16%] md:top-[50%] md:left-[80%] xl:top-[80%] xl:left-[55.5%] w-[200px] h-[200px]">
          <div class="round-1 absolute w-[28px] h-[28px] rounded-full right-0 bottom-0 bg-notice"></div>
          <NuxtImg
            src="/img/cell-decorator.svg"
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
      <h2 class="title text-center uppercase text-[24px] lg:text-[30px]">Первое прикладывание к груди</h2>
      <Separator class="h-[5px] bg-separator-pattern mt-4 mb-6"/>
      <div class="bg-notice max-w-[1180px] m-auto rounded p-4 lg:p-8 text-[18px] lg:text-[24px]">
        <p>
          Учитывая особенности женской груди и возможные ее изменения в период кормления, специально для «Kittet»
          компания «DTF medical» разработала линейку воронок KOLOR.
        </p>
        <br>
        <p>
          Она включает в  себя четыре размера, которые отличаются между собой по внутреннему диаметру (21/24/26/30 мм)
          и по полноте груди (S/L).
        </p>
      </div>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container max-w-[1038px] 2xl:p-4">
      <div class="flex flex-col">
        <div class="image">
          <NuxtPicture src="/img/products/voronki/voronki-all.jpg"/>
        </div>
        <p class="italic text-secondary">
          Каждая воронка выполнена в своем ярком цвете (фиолетовый, оранжевый, зеленый и голубой), что позволяет легко
          ориентироваться в представленном размерном ряде.
        </p>
        <br>
        <br>
        <p>
          <b>
            Kitett предлагает мамам несколько вариантов, чтобы решение задачи по подбору воронки было максимально
            простым и удобным, и при этом без сторонней помощи.
          </b>
        </p>
        <br>
        <p>
          Главное, помните, что определение размера необходимо осуществлять сразу после кормления или сцеживания. Если
          вы производите измерение в состоянии покоя, необходимо прибавить к полученному результату 2 мм.
        </p>
      </div>
    </div>
  </section>

  <HelpMomNavigation/>

</template>