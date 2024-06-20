<script
  setup
  lang="ts">
import {useLocation} from '~/composables/useLocation';
import type {Breadcrumb} from '~/types';
import {useHead, useSeoMeta} from "unhead";

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

useSeoMeta({
  ogTitle: 'Товары для грудного вскармливания – Kitett',
  ogDescription: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
  ogImage: '/img/ogimage.jpg',
  ogUrl: 'https://kitett.com/',
  twitterTitle: 'Товары для грудного вскармливания – Kitett',
  twitterDescription: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
  twitterImage: '/img/ogimage.jpg',
  twitterCard: 'summary_large_image',
});

useHead({
  title: 'Товары для грудного вскармливания – Kitett',
  meta: [
    {
      name: 'description',
      content: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
    },
    {
      name: 'keywords',
      content: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
    },
  ],
});
</script>

<template>
  <section class="first-screen mb-[72px] xl:mb-[100px]">
    <div class="container">
      <BaseBreadcrumb :links="breadcrumbs"/>

      <BaseTitle
        title="продукция"
        tag="h1"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="text-center uppercase"/>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:flex-row md:flex-wrap xl:flex-wrap-reverse w-full gap-8 xl:gap-[72px]">
        <NuxtLink
          :to="`/${location.currentLocation}/production/${category.slug}`"
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

          <h3
            class="text-xl 2xl:text-2xl font-bold font-display md:min-h-[70px] text-secondary"
            v-html="category.title"></h3>

          <Separator class="my-4 w-1/2 xl:w-full h-[5px] bg-separator-pattern"/>

          <p class="md:min-h-[90px] xl:min-h-[90px] mb-[32px] text-base">
            {{ category.description }}
          </p>

          <Button class="text-[18px] uppercase">
            открыть
          </Button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
