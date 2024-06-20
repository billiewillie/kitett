<script
  setup
  lang="ts">
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import ProductPageLayout from '~/layouts/ProductPageLayout.vue';
import {clearError} from '#app';
import products from '~/data/products';
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

const product = computed(() => {
  return category.value?.productList.find((product) => product.slug === route.params.productSlug);
});

if (!product.value) {
  clearError({
    redirect: '/404',
  });
}

useSeoMeta({
  ogTitle: product.value?.titleNoTags,
  ogDescription: product.value?.descriptionNoTags,
  ogImage: '/img/ogimage.jpg',
  ogUrl: 'https://kitett.com/',
  twitterTitle: product.value?.titleNoTags,
  twitterDescription: product.value?.descriptionNoTags,
  twitterImage: '/img/ogimage.jpg',
  twitterCard: 'summary_large_image',
});

useHead({
  title: product.value?.titleNoTags,
  meta: [
    {
      name: 'description',
      content: `${product.value?.descriptionNoTags}`,
    },
    {
      name: 'keywords',
      content: `${product.value?.descriptionNoTags}`,
    },
  ],
});
</script>

<template>
  <ProductPageLayout
    :category="category"
    :product="product" />
</template>
