<script
  setup
  lang="ts">
import HelpMomPageLayout from '~/layouts/helpMomPageLayout.vue';
import { useHead, useSeoMeta } from 'unhead';

useSeoMeta({
  ogTitle: 'Советы специалиста по грудному вскармливанию',
  ogDescription: 'Рекомендации для мам по поддержанию грудного вскармливания',
  ogImage: '../../../img/ogimage.jpg',
  ogUrl: 'https://kitett.com/',
  twitterTitle: 'Советы специалиста по грудному вскармливанию',
  twitterDescription: 'Рекомендации для мам по поддержанию грудного вскармливания',
  twitterImage: '../../../img/ogimage.jpg',
  twitterCard: 'summary',
});

useHead({
  title: 'Советы специалиста по грудному вскармливанию',
  meta: [
    {
      name: 'description',
      content: 'Рекомендации для мам по поддержанию грудного вскармливания',
    },
    {
      name: 'keywords',
      content: 'Рекомендации для мам по поддержанию грудного вскармливания',
    },
  ],
});
</script>

<template>
  <helpMomPageLayout />
</template>
