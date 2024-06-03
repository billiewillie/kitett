<script setup>
import CompanyPageLayout from '~/layouts/CompanyPageLayout.vue';
import { useHead, useSeoMeta } from 'unhead';

useSeoMeta({
  ogTitle: 'Kitett – более 60 лет помогает в грудном вскармливании',
  ogDescription: 'Бренд Kitett - №1 по выпуску молокоотсосов во Франции',
  ogImage: '/img/ogimage.jpg',
  ogUrl: 'https://kitett.com/',
  twitterTitle: 'Kitett – более 60 лет помогает в грудном вскармливании',
  twitterDescription: 'Бренд Kitett - №1 по выпуску молокоотсосов во Франции',
  twitterImage: '/img/ogimage.jpg',
  twitterCard: 'summary',
});

useHead({
  title: 'Kitett – более 60 лет помогает в грудном вскармливании',
  meta: [
    {
      name: 'description',
      content: 'Бренд Kitett - №1 по выпуску молокоотсосов во Франции',
    },
    {
      name: 'keywords',
      content: 'Бренд Kitett - №1 по выпуску молокоотсосов во Франции',
    },
  ],
});
</script>

<template>
  <CompanyPageLayout />
</template>