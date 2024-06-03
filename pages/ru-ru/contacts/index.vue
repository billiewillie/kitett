<script
  setup
  lang="ts">
import ContactsPageLayout from '~/layouts/ContactsPageLayout.vue';
import { useHead, useSeoMeta } from 'unhead';

useSeoMeta({
  ogTitle: 'Купить молокоотсос Kitett',
  ogDescription: 'Купить молокоотсосы и аксессуары для грудного вскармливания Kitett в России',
  ogImage: '/img/ogimage.jpg',
  ogUrl: 'https://kitett.com/',
  twitterTitle: 'Купить молокоотсос Kitett',
  twitterDescription: 'Купить молокоотсосы и аксессуары для грудного вскармливания Kitett в России',
  twitterImage: '/img/ogimage.jpg',
  twitterCard: 'summary',
});

useHead({
  title: 'Купить молокоотсос Kitett',
  meta: [
    {
      name: 'description',
      content: 'Купить молокоотсосы и аксессуары для грудного вскармливания Kitett в России',
    },
    {
      name: 'keywords',
      content: 'Купить молокоотсосы и аксессуары для грудного вскармливания Kitett в России',
    },
  ],
});
</script>

<template>
  <ContactsPageLayout />
</template>
