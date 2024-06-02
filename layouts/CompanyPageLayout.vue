<!--<script-->
<!--  setup-->
<!--  lang="ts">-->
<!--import { useLocation } from '~/composables/useLocation';-->
<!--import type { Breadcrumb } from '~/types';-->

<!--const location = useLocation();-->

<!--const breadcrumbs: Breadcrumb[] = [-->
<!--  {-->
<!--    id: 1,-->
<!--    title: 'главная',-->
<!--    link: `/${location.value.currentLocation}`,-->
<!--  },-->
<!--  {-->
<!--    id: 2,-->
<!--    title: 'о компании',-->
<!--  },-->
<!--];-->
<!--</script>-->

<template>
  <section class="first-screen relative pb-[120px] mb-[75px]">
<!--    <BaseImage-->
<!--      image="./img/about-company.jpg"-->
<!--      class="flex w-full h-full absolute top-0 left-0 -z-10 bg-[#95B9DD]"-->
<!--      img-class="object-cover w-full h-full"-->
<!--    />-->
<!--    <div class="container">-->
<!--      <BaseBreadcrumb-->
<!--        :links="breadcrumbs"-->
<!--        class="mb-[80px]" />-->
<!--      <div class="flex flex-col items-center gap-[40px] bg-background rounded max-w-[500px] font-display text-[26px] p-[40px]">-->
<!--        <p class="uppercase text-secondary text-center font-bold">-->
<!--          Более 60 лет Kitett помогает мамам в грудном вскармливании-->
<!--        </p>-->
<!--        <Button as-child>-->
<!--          <NuxtLink-->
<!--            :to="`/${location.currentLocation}/help-mom`"-->
<!--            class="text-[18px] uppercase">-->
<!--            полезная информация-->
<!--          </NuxtLink>-->
<!--        </Button>-->
<!--      </div>-->
<!--    </div>-->
  </section>

  <section class="mb-[75px] xl:mb-[160px]">
<!--    <div class="container max-w-[1038px] lg:p-4">-->
<!--      <BaseTitle-->
<!--        title="о компании"-->
<!--        tag="h1"-->
<!--        separator-style="top-[calc(50%-2px)] absolute"-->
<!--        text-style="text-center uppercase lg:px-[44px]" />-->
<!--      <p><b>Компания «DTF medical» основана в 1951 году во Франции в городе Сант-Этьен.</b></p>-->
<!--      <br>-->
<!--      <p>-->
<!--        С 1953 года «DTF medical» проектирует, разрабатывает и производит высококачественные электрические клинические-->
<!--        молокоотсосы, помогая мамам и развивая сотрудничество с медицинскими учреждениями и работниками-->
<!--        здравоохранения. 100% французский дизайн, инновации и собственное производство позволили торговой марке-->
<!--        Kitett выйти на 1 место по выпуску молокоотсосов во Франции.-->
<!--      </p>-->
<!--      <br>-->
<!--      <p>-->
<!--        «DTF medical» заботится о здоровье детей, комфорте для мам и поддерживает грудное вскармливание.-->
<!--        Ведь грудное молоко — это естественное и необходимое питание для вашего малыша, лучшее, что дано нам природой.-->
<!--      </p>-->
<!--    </div>-->
  </section>
</template>