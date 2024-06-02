<script
  setup
  lang="ts">
import { useHead, useSeoMeta } from 'unhead';

useSeoMeta({
  ogTitle: 'Страница не найдена - Kitett',
  ogDescription: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
  ogImage: '../../../img/ogimage.jpg',
  ogUrl: 'https://kitett.com/',
  twitterTitle: 'Страница не найдена - Kitett',
  twitterDescription: 'Ручные и электрические молокоотсосы Kitett, а также советы в помощь кормящей маме',
  twitterImage: '../../../img/ogimage.jpg',
  twitterCard: 'summary',
});

useHead({
  title: 'Страница не найдена - Kitett',
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
  <section>
    <div class="container">
      <p>404</p>
    </div>
  </section>
</template>