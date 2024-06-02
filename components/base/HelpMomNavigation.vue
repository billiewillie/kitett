<!--<script-->
<!--  setup-->
<!--  lang="ts">-->
<!--import { useLocation } from '~/composables/useLocation';-->
<!--import helpMomArticles from '~/data/helpMomArticles';-->
<!--import { ChevronRight } from 'lucide-vue-next';-->
<!--import { isRouteActive } from '~/utils/isRouteActive';-->
<!--import { Button } from '~/components/ui/button';-->
<!--import { useRoute } from 'vue-router';-->

<!--const route = useRoute();-->

<!--const location = useLocation();-->
<!--</script>-->

<template>
  <section class="mb-[75px]">
    <div class="container">
      <h2 class="title text-center text-[24px] lg:text-[30px]">Полезная информация для мам</h2>
      <Separator class="bg-separator-pattern h-[5px] mt-4 mb-6" />
<!--      <ul class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-y-2 md:gap-x-2 md:gap-y-[1px]">-->
<!--        <li-->
<!--          class="bg-background"-->
<!--          v-for="article in helpMomArticles"-->
<!--          :key="article.id">-->
<!--          <Button-->
<!--            as-child-->
<!--            class="w-full justify-between whitespace-normal font-normal"-->
<!--            :variant="isRouteActive(article.slug, route, 3) ? 'default' : 'ghost'">-->
<!--            <NuxtLink :to="`/${location.currentLocation}/help-mom/${article.slug}`">-->
<!--              {{ article.title }}-->
<!--              <ChevronRight />-->
<!--            </NuxtLink>-->
<!--          </Button>-->
<!--        </li>-->
<!--      </ul>-->
    </div>
  </section>
</template>
