<script setup>
import VebinarSekretyCcezhivaniyaPageLayout from '~/layouts/VebinarSekretyCcezhivaniyaPageLayout.vue';
import { useHead, useSeoMeta } from 'unhead';

useSeoMeta({
  ogTitle: 'Вебинар секреты эффективного сцеживания – Kitett',
  ogDescription: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
  ogImage: '/img/ogimage.jpg',
  ogUrl: 'https://kitett.com/',
  twitterTitle: 'Вебинар секреты эффективного сцеживания – Kitett',
  twitterDescription: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
  twitterImage: '/img/ogimage.jpg',
  twitterCard: 'summary_large_image',
});

useHead({
  title: 'Вебинар секреты эффективного сцеживания – Kitett',
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
  <VebinarSekretyCcezhivaniyaPageLayout />
</template>