<script
  setup
  lang="ts">
import HranenieIRazmorozkaGrudnogoMolokaPageLayout from '~/layouts/HranenieIRazmorozkaGrudnogoMolokaPageLayout.vue';
import { useHead, useSeoMeta } from 'unhead';

useSeoMeta({
  ogTitle: 'Хранение и разморозка грудногой молока - Kitett',
  ogDescription: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
  ogImage: '/img/ogimage.jpg',
  ogUrl: 'https://kitett.com/',
  twitterTitle: 'Хранение и разморозка грудногой молока - Kitett',
  twitterDescription: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
  twitterImage: '/img/ogimage.jpg',
  twitterCard: 'summary_large_image',
});

useHead({
  title: 'Хранение и разморозка грудногой молока - Kitett',
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
  <HranenieIRazmorozkaGrudnogoMolokaPageLayout />
</template>
