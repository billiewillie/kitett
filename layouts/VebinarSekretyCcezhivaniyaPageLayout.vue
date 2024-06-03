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
    title: 'Вебинар «Секреты эффективного сцеживания»',
  },
];
</script>

<template>
  <section class="first-screen">
    <div class="container">
      <BaseBreadcrumb :links="breadcrumbs" />
      <BaseTitle
        title="Вебинар «Секреты эффективного сцеживания»"
        tag="h1"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="text-center uppercase" />
    </div>
  </section>

  <section class="pb-[75px] pt-[75px] -mt-[75px] overflow-hidden">
    <div class="container relative">
      <div class="relative z-10 col-span-2 w-full xl:min-h-[660px]">
        <video
          controls
          src="/video/vebinar.mp4"
          poster="/img/webinar.jpg"
          class="m-auto mb-16"></video>
        <NuxtImg
          src="/img/cell-decorator.svg"
          class="hidden xl:block w-[88px] h-[88px] absolute -top-[12px] -left-[12px] -z-10"/>
      </div>
      <div class="absolute bg-notice hidden xl:block rounded-full w-[472px] h-[472px] -left-[120px] top-[60px] -z-10"></div>
      <div class="absolute bg-notice hidden xl:block rounded-full w-[782px] h-[782px] -right-[400px] -top-[60px] -z-10"></div>
      <h2 class="title text-center text-[20px] lg:text-[30px]">План вебинара:</h2>
      <Separator class="h-[5px] bg-separator-pattern my-4"/>
      <div class="max-w-[736px] m-auto">
        <ol class="list-decimal px-8 mb-4 leading-8">
          <li>Техника ручного сцеживания</li>
          <li>Техника сцеживания молокоотсосом</li>
          <li>Классификация молокоотсосов</li>
          <li>Однофазные и двухфазные молокоотсосы</li>
          <li>Ручные молокоотсосы: помповый, грушевый, шприцевый, плюсы и минусы каждого вида</li>
          <li>Электронные молокоотсосы: разновидности, преимущества и недостатки</li>
          <li>Молокоотсос не сцеживает, что делать</li>
          <li>Методы стимуляции рефлекса окситоцина</li>
          <li>Секреты эффективного сцеживания</li>
          <li>Деловая мама: как сохранить кормление грудью при выходе на работу или учебу</li>
          <li>Как сохранить форму груди при грудном вскармливании</li>
        </ol>
        <p class="font-bold">Вебинар прошел при поддержке Академии Материнства от МамЭксперт mamexpert.by</p>
      </div>
    </div>
  </section>

  <HelpMomNavigation/>

</template>