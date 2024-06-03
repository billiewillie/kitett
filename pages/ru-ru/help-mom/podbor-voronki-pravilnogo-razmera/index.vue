<script
  setup
  lang="ts">
import PodborVoronkiPravilnogoRazmeraPageLayout from '~/layouts/PodborVoronkiPravilnogoRazmeraPageLayout.vue';
import { useHead, useSeoMeta } from 'unhead';

useSeoMeta({
  ogTitle: 'Подбор воронки правильного размера - Kitett',
  ogDescription: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
  ogImage: '/img/ogimage.jpg',
  ogUrl: 'https://kitett.com/',
  twitterTitle: 'Подбор воронки правильного размера - Kitett',
  twitterDescription: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
  twitterImage: '/img/ogimage.jpg',
  twitterCard: 'summary_large_image',
});

useHead({
  title: 'Подбор воронки правильного размера - Kitett',
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
  <PodborVoronkiPravilnogoRazmeraPageLayout />
</template>