<script setup lang="ts">
import VyborRoddomaPageLayout from '~/layouts/VyborRoddomaPageLayout.vue';
import { useHead, useSeoMeta } from 'unhead';

useSeoMeta({
  ogTitle: 'Выбор роддома - Kitett',
  ogDescription: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
  ogImage: '../../../img/ogimage.jpg',
  ogUrl: 'https://kitett.com/',
  twitterTitle: 'Выбор роддома - Kitett',
  twitterDescription: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
  twitterImage: '../../../img/ogimage.jpg',
  twitterCard: 'summary',
});

useHead({
  title: 'Выбор роддома - Kitett',
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
  <VyborRoddomaPageLayout />
</template>