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
    title: props.category.title,
  },
];
</script>

<template>
  <section class="first-screen mb-[75px]">
    <div class="container m-auto">
      <BaseBreadcrumb :links="breadcrumbs"/>
      <BaseTitle
        :title="props.category?.title"
        tag="h1"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="text-center uppercase"/>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:flex-row md:flex-wrap xl:flex-wrap-reverse w-full gap-8 xl:gap-[72px]">
        <div
          v-for="product in props.products"
          :key="product.id"
          class="flex flex-col items-center text-center w-full card">

          <BaseImage
            :image="product.cover"
            img-class="object-scale-down h-full w-full"
            class="flex justify-center items-center w-full md:h-[250px] xl:h-[300px] xl:px-4"
          />

          <h3 class="text-2xl 2xl:text-3xl font-bold font-display md:min-h-[70px] xl:min-h-[70px] text-secondary mb-8">
            {{ product.title }}
          </h3>

          <Button as-child>
            <NuxtLink
              :to="`/ru-ru/production/${props.category.slug}/${product.slug}`"
              class="text-[18px] uppercase">
              открыть
            </NuxtLink>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
