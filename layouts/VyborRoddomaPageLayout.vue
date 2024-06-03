<script
  setup
  lang="ts">
import { useLocation } from '~/composables/useLocation';
import type { Breadcrumb } from '~/types';
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
    title: 'Грудное вскармливание',
  },
];
</script>

<template>

  <section class="first-screen">
    <div class="container">
      <BaseBreadcrumb :links="breadcrumbs"/>
      <BaseTitle
        title="Выбор роддома"
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
            image="/img/help-mom-articles/article-1-cover.jpg"
            img-class="object-cover w-full h-full"
            class="rounded xl:rounded-tr-[191px] bg-[#9CA1A2]"
          />
          <NuxtImg src="/img/cell-decorator.svg" class="hidden xl:block w-[88px] h-[88px] absolute -top-[12px] -left-[12px] -z-10"/>
        </div>
        <div class="flex flex-col justify-center w-full">
          <p>
            <b>Выбор роддома</b> — задача важная, решение которой зависит от многих составляющих: состояния здоровья
            и индивидуальных особенностей организма будущей мамочки, грамотного врача, внимательного персонала,
            рекомендаций знакомых и даже близости к дому.
          </p>
          <br>
          <p>
            В последнее время к значимым факторам, благодаря которым родители отдают предпочтение тому или иному
            роддому, стало наличие в нем клинического молокоотсоса, который в первые дни после рождения малыша может
            стать для мамы настоящим другом в налаживании лактации.
          </p>
          <br>
          <p>
            Некоторые мамочки приобретают молокоотсос заранее. Но, как правило, в роддоме рекомендуют пользоваться
            именно клиническими молокоотсосами.
          </p>
        </div>
        <div class="absolute left-[50%] top-[16%] md:top-[50%] md:left-[80%] xl:top-[80%] xl:left-[55.5%] w-[200px] h-[200px]">
          <div class="round-1 absolute w-[28px] h-[28px] rounded-full right-0 bottom-0 bg-notice"></div>
          <NuxtImg
            src="/img/cell-decorator.svg"
            class="w-[88px] h-[88px] absolute bottom-[32px] right-[32px]" />
          <div class="round-3 absolute w-[156px] h-[156px] rounded-full left-0 top-0 bg-[#EE7C00] opacity-20"></div>
        </div>
        <div class="absolute bg-notice hidden xl:block rounded-full w-[472px] h-[472px] -left-[120px] top-[60px]"></div>
        <div class="absolute bg-notice hidden xl:block rounded-full w-[782px] h-[782px] -right-[400px] -top-[60px] -z-10"></div>
      </div>
    </div>
  </section>

  <section class="mb-[75px] xl:mb-[160px]">
    <div class="container max-w-[1038px] 2xl:p-4">
      <p>
        По сравнению с бытовыми молокоотсосами, клинические модели обладают большей мощностью всасывания и более широким
        диапазоном регулировки, что позволяет эффективно снять боли при нагрубании молочных желез или стимулировать
        лактацию. Если Ваш малыш родился раньше срока и не может сосать сам, без клинического молокоотсоса не обойтись.
      </p>
      <br>
      <p>
        Очень важно, чтобы грудное молоко для таких малышей было правильно сцежено в стерильных условиях и под контролем
        медицинского персонала. Для этого в роддоме маме выдадут стерильный набор для сцеживания с индивидуально
        подобранной воронкой KOLOR.
      </p>
      <br>
      <p>
        <b>
          Мамочка также может приобрести свой индивидуальный набор для сцеживания и после выписки из роддома
          использовать его с ручным и электрическим молокоотсосами Kitett.
        </b>
      </p>
    </div>
  </section>

  <HelpMomNavigation />

</template>