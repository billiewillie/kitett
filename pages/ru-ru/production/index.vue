<script setup>
import ProductionPageLayout from '~/layouts/ProductionPageLayout.vue';
import products from '~/data/products';
import { useHead, useSeoMeta } from 'unhead';
useSeoMeta({
  ogTitle: 'Молокоотсосы и аксессуары Kitett',
  ogDescription: 'Товары для грудного вскармливания Kitett - все для мамы и малыша',
  ogImage: '../../../img/ogimage.jpg',
  ogUrl: 'https://kitett.com/',
  twitterTitle: 'Страница не найдена - Kitett',
  twitterDescription: 'Товары для грудного вскармливания Kitett - все для мамы и малыша',
  twitterImage: '../../../img/ogimage.jpg',
  twitterCard: 'summary',
});

useHead({
  title: 'Молокоотсосы и аксессуары Kitett',
  meta: [
    {
      name: 'description',
      content: 'Товары для грудного вскармливания Kitett - все для мамы и малыша',
    },
    {
      name: 'keywords',
      content: 'Товары для грудного вскармливания Kitett - все для мамы и малыша',
    },
  ],
});
</script>

<template>
  <ProductionPageLayout :products="products" />
</template>
