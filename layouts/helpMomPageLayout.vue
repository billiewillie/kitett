<script
  setup
  lang="ts">
import helpMomArticles from '~/data/helpMomArticles';
import { useLocation } from '~/composables/useLocation';
import type { Breadcrumb } from '~/types';

const location = useLocation();

const breadcrumbs: Breadcrumb[] = [
  {
    id: 1,
    title: 'главная',
    link: `/${location.value.currentLocation}`,
  },
  {
    id: 2,
    title: 'полезная информация',
  },
];
</script>

<template>
  <!--  first screen-->
  <section class="relative first-screen">
    <div class="container">
      <BaseBreadcrumb :links="breadcrumbs"/>
      <BaseTitle
        title="Полезные советы и рекомендации для мам"
        tag="h1"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="text-center uppercase"/>
    </div>
  </section>

  <section class="pb-[75px] pt-[75px] -mt-[75px] overflow-hidden">
    <div class="container relative">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
        <div class="relative z-10 col-span-2 w-full xl:min-h-[660px]">
          <BaseImage
            image="/img/help-mom-articles/help-mom-cover.jpg"
            img-class="object-cover w-full h-full"
            class="rounded xl:rounded-tr-[191px] bg-[#9CA1A2]"
          />
          <NuxtImg src="./img/cell-decorator.svg" class="hidden xl:block w-[88px] h-[88px] absolute -top-[12px] -left-[12px] -z-10"/>
        </div>
        <div class="flex flex-col justify-center w-full">
          <p>
            <b>Рождение ребёнка</b> — это начало удивительного периода вашей жизни. Каждый день вместе с малышом
            вы будете совершать новые открытия — первая улыбка, первый зубик, первый маленький шаг.
          </p>
          <br>
          <p>
            <b>Главная задача и желание каждой мамы</b> — вырастить здорового ребенка. От того, как пройдёт его первый
            год с вами, зависит его будущее. Вам еще многое предстоит узнать друг о друге, но одно вы знаете наверняка —
            нежность и забота — это то, что сейчас нужно малышу.
          </p>
          <br>
          <p>
            <b>
              Здесь рекомендации, которые помогут вам быть увереннее в общении с новорожденным и дарить ему пользу
              своего молока как можно дольше.
            </b>
          </p>
        </div>
        <div class="absolute left-[50%] top-[16%] md:top-[50%] md:left-[80%] xl:top-[80%] xl:left-[55.5%] w-[200px] h-[200px]">
          <div class="round-1 absolute w-[28px] h-[28px] rounded-full right-0 bottom-0 bg-notice"></div>
          <NuxtImg
            src="./img/cell-decorator.svg"
            class="w-[88px] h-[88px] absolute bottom-[32px] right-[32px]" />
          <div class="round-3 absolute w-[156px] h-[156px] rounded-full left-0 top-0 bg-[#EE7C00] opacity-20"></div>
        </div>
        <div class="absolute bg-notice hidden xl:block rounded-full w-[472px] h-[472px] -left-[120px] top-[60px]"></div>
        <div class="absolute bg-notice hidden xl:block rounded-full w-[782px] h-[782px] -right-[400px] -top-[60px] -z-10"></div>
      </div>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container">
      <h2 class="text-[18px] lg:text-[30px] text-center uppercase text-secondary font-display font-bold leading-normal">
        Здесь рекомендации, которые помогут вам быть увереннее в общении с новорожденным и дарить ему пользу своего
        молока как можно дольше
      </h2>
      <Separator class="h-[5px] bg-separator-pattern mb-12 mt-8"/>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-[72px]">
        <div
          v-for="article in helpMomArticles"
          :key="article.id"
          class="card flex flex-col w-full card">
          <NuxtPicture
            format="webp"
            fit="cover"
            class="mb-[32px] flex"
            :imgAttrs="{class:'w-full h-full rounded-[6px] overflow-hidden object-cover object-top aspect-video'}"
            :src="`${article.cover}`"/>
          <h3 class="font-display font-bold text-[20px] uppercase text-secondary">{{ article.title }}</h3>
          <Separator class="h-[5px] bg-separator-pattern my-4"/>
          <div
            class="mb-[32px] text-[16px] flex flex-col flex-auto"
            v-html="article.description"></div>
          <Button
            as-child
            class="uppercase self-center">
            <NuxtLink :to="`/${location.currentLocation}/help-mom/${article.slug}`">
              подробнее
            </NuxtLink>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
