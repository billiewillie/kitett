<script setup lang="ts">
import PitanieKormyashchejMamyPageLayout from '~/layouts/PitanieKormyashchejMamyPageLayout.vue';
import { useHead, useSeoMeta } from 'unhead';

useSeoMeta({
  ogTitle: 'Питание кормящей маме – Kitett',
  ogDescription: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
  ogImage: '../../../img/ogimage.jpg',
  ogUrl: 'https://kitett.com/',
  twitterTitle: 'Питание кормящей маме – Kitett',
  twitterDescription: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
  twitterImage: '../../../img/ogimage.jpg',
  twitterCard: 'summary',
});

useHead({
  title: 'Питание кормящей маме – Kitett',
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
  <PitanieKormyashchejMamyPageLayout />
</template>