<!--<script-->
<!--  setup-->
<!--  lang="ts">-->
<!--import { computed } from 'vue';-->
<!--import { useRoute } from 'vue-router';-->
<!--import ProductPageLayout from '~/layouts/ProductPageLayout.vue';-->
<!--import { clearError } from '#app';-->
<!--import products from '~/data/products';-->
<!--import { useHead, useSeoMeta } from 'unhead';-->

<!--const route = useRoute();-->

<!--const category = computed(() => {-->
<!--  return products.categories.find((category) => category.slug === route.params.categorySlug);-->
<!--});-->

<!--if (!category.value) {-->
<!--  clearError({-->
<!--    redirect: '/404',-->
<!--  });-->
<!--}-->

<!--const product = computed(() => {-->
<!--  return category.value?.productList.find((product) => product.slug === route.params.productSlug);-->
<!--});-->

<!--if (!product.value) {-->
<!--  clearError({-->
<!--    redirect: '/404',-->
<!--  });-->
<!--}-->

<!--useSeoMeta({-->
<!--  ogTitle: `${product.value?.fullTitle} Kitett`,-->
<!--  ogDescription: `${product.value?.description} Kitett`,-->
<!--  ogImage: '../../../img/ogimage.jpg',-->
<!--  ogUrl: 'https://kitett.com/',-->
<!--  twitterTitle: `${product.value?.fullTitle} Kitett`,-->
<!--  twitterDescription: `${product.value?.description} Kitett`,-->
<!--  twitterImage: '../../../img/ogimage.jpg',-->
<!--  twitterCard: 'summary',-->
<!--});-->

<!--useHead({-->
<!--  title: `${product.value?.fullTitle}`,-->
<!--  meta: [-->
<!--    {-->
<!--      name: 'description',-->
<!--      content: `${product.value?.description}`,-->
<!--    },-->
<!--    {-->
<!--      name: 'keywords',-->
<!--      content: `${product.value?.description}`,-->
<!--    },-->
<!--  ],-->
<!--});-->
<!--</script>-->

<template>
  <div></div>
<!--  <ProductPageLayout-->
<!--    :category="category"-->
<!--    :product="product" />-->
</template>
