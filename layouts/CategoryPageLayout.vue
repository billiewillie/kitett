<script
  setup
  lang="ts">
import {useLocation} from '~/composables/useLocation';

const location = useLocation();
import type {Breadcrumb} from '~/types';

const props = defineProps({
  products: {
    type: Array,
  },
  category: {
    type: Object,
  },
});

const breadcrumbs: Breadcrumb[] = [
  {
    id: 1,
    title: 'Главная',
    link: `/${location.value.currentLocation}`,
  },
  {
    id: 2,
    title: 'Продукция',
    link: `/${location.value.currentLocation}/production`,
  },
  {
    id: 3,
    title: props.category?.title,
  },
];
</script>

<template>
  <section class="first-screen mb-[75px]">
    <div class="container m-auto">
      <BaseBreadcrumb :links="breadcrumbs"/>

      <div class="flex flex-col mb-[40px] items-center relative">
        <h1
          class="text-center uppercase flex bg-background z-10 px-[16px] leading-normal lg:px-[32px] font-bold text-[24px] lg:text-[46px] text-secondary font-display"
          v-html="props.category?.title">
        </h1>
        <Separator class="top-[calc(50%-2px)] absolute h-[5px] bg-separator-pattern bg-repeat-space"/>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:flex-row md:flex-wrap xl:flex-wrap-reverse w-full gap-8 xl:gap-[72px]">
        <NuxtLink
          :to="`/ru-ru/production/${props.category?.slug}/${product.slug}`"
          v-for="product in props.products"
          :key="product.id"
          class="flex flex-col items-center text-center w-full card">

          <BaseImage
            :image="product.cover"
            img-class="object-scale-down h-full w-full"
            class="flex justify-center items-center w-full md:h-[250px] xl:h-[300px] xl:px-4"
          />

          <h3
            class="text-xl font-bold font-display md:min-h-[70px] text-secondary mb-4"
            v-html="product.title"></h3>

          <Button class="text-[18px] uppercase">
              открыть
          </Button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
