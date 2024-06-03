<script
  setup
  lang="ts">
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import {clearError} from '#app';
import CategoryPageLayout from '~/layouts/CategoryPageLayout.vue';
import products from '~/data/products';
import IndividualnyjPodborVoronkiPageLayout from '~/layouts/IndividualnyjPodborVoronkiPageLayout.vue';
import {useHead, useSeoMeta} from 'unhead';

const route = useRoute();

const category = computed(() => {
  return products.categories.find((category) => category.slug === route.params.categorySlug);
});

if (!category.value) {
  clearError({
    redirect: '/404',
  });
}

useSeoMeta({
  ogTitle: `${category.value?.title} Kitett`,
  ogDescription: `${category.value?.description} Kitett`,
  ogImage: '/img/ogimage.jpg',
  ogUrl: 'https://kitett.com/',
  twitterTitle: `${category.value?.title} Kitett`,
  twitterDescription: `${category.value?.description} Kitett`,
  twitterImage: '/img/ogimage.jpg',
  twitterCard: 'summary_large_image',
});

useHead({
  title: `${category.value?.title} Kitett`,
  meta: [
    {
      name: 'description',
      content: `${category.value?.description} Kitett`,
    },
    {
      name: 'keywords',
      content: `${category.value?.description} Kitett`,
    },
  ],
});
</script>

<template>
  <CategoryPageLayout
    v-if="category?.productList.length>0"
    :category="category"
    :products="category?.productList"/>
  <IndividualnyjPodborVoronkiPageLayout
    :category="category"
    v-else/>
</template>