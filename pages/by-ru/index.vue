<script
  setup
  lang="ts">
import IndexPageLayout from '~/layouts/IndexPageLayout.vue';
import { useHead, useSeoMeta } from 'unhead';

useSeoMeta({
  ogTitle: 'Товары для грудного вскармливания – Kitett',
  ogDescription: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
  ogImage: '../../../img/ogimage.jpg',
  ogUrl: 'https://kitett.com/',
  twitterTitle: 'Товары для грудного вскармливания – Kitett',
  twitterDescription: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
  twitterImage: '../../../img/ogimage.jpg',
  twitterCard: 'summary',
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
  <IndexPageLayout />
</template>
