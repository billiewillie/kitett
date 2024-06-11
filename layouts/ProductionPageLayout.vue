<script
  setup
  lang="ts">
import {useLocation} from '~/composables/useLocation';
import type {Breadcrumb} from '~/types';
import {ref} from 'vue';

const location = useLocation();

const props = defineProps({
  products: {
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
  },
];
</script>

<template>
  <section class="first-screen mb-[72px] xl:mb-[100px]">
    <div class="container">
      <BaseBreadcrumb :links="breadcrumbs" />

      <BaseTitle
        title="продукция"
        tag="h1"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="text-center uppercase" />

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:flex-row md:flex-wrap xl:flex-wrap-reverse w-full gap-8 xl:gap-[72px]">
        <div
          v-for="category in props.products?.categories"
          :key="category.id"
          class="group flex flex-col items-center text-center w-full card">
          <Icon
            name="cil:layers"
            class="absolute top-0 right-0 w-[32px] h-[32px] text-[#cfcfcf] group-hover:text-primary transition"/>
          <div class="overflow-hidden">
            <NuxtPicture
              class="flex h-full w-full md:h-[250px] xl:h-[300px] xl:px-4 items-center justify-center transition-opacity"
              preload
              :img-attrs="{class: 'object-scale-down h-full w-full'}"
              :src="category.img"/>
          </div>

          <h3 class="text-xl 2xl:text-3xl font-bold font-display md:min-h-[70px] xl:min-h-[70px] text-secondary mb-8">
            {{ category.title }}
          </h3>

          <Separator class="my-[24px] w-1/2 xl:w-full h-[5px] bg-separator-pattern"/>

          <p class="md:min-h-[90px] xl:min-h-[90px] mb-[32px] text-base">
            {{ category.description }}
          </p>

          <Button as-child>
            <NuxtLink
              :to="`/${location.currentLocation}/production/${category.slug}`"
              class="text-[18px] uppercase">
              подробнее
            </NuxtLink>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
