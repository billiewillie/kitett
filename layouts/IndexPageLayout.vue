<script setup>
import products from '~/data/products.ts';
import {ADVANTAGES, VIDEOS} from '~/data/constants';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';
import {Card, CardContent} from '~/components/ui/card';
import {VisuallyHidden} from 'radix-vue';
import {useLocation} from "~/composables/useLocation";

const location = useLocation();
</script>

<template>
  <!--  first screen-->
  <section class="relative flex-col xl:flex-row mb-[75px] xl:pt-[72px] xl:pb-[216px]">
    <div class="relative xl:absolute order-1 mb-[32px] xl:mb-0 top-0 xl:left-1/2 w-full xl:w-1/2 min-h-[299px] md:min-h-[670px] xl:min-h-0 md:h-full">
      <div class="overflow-hidden xl:rounded-tl-[350px] bg-[#9CA1A2] h-full">
        <NuxtPicture
          class="flex w-full h-full items-center justify-center transition-opacity z-10 relative"
          :img-attrs="{class:'object-cover object-top w-full h-full flex'}"
          src="/img/first-screen.jpg"/>
      </div>
      <div class="absolute left-[65%] top-[75%] md:top-[85%] md:left-[75%] xl:top-[32px] xl:-left-[32px] w-[120px] h-[120px] xl:w-[200px] xl:h-[200px]">
        <div class="round-1 absolute w-[28px] h-[28px] rounded-full left-0 top-0 bg-notice"></div>
        <NuxtImg
          src="/img/cell-decorator.svg"
          class="w-[88px] h-[88px] absolute top-[32px] left-[32px]"/>
        <div class="round-3 absolute w-[156px] h-[156px] rounded-full right-0 bottom-0 bg-[#EE7C00] opacity-20"></div>
      </div>
    </div>
    <div class="container">
      <div class="xl:w-1/2 relative text-center flex flex-col items-center">
        <IconLogo class="hidden xl:flex mb-[55px]"/>
        <h1 class="text-[20px] xl:text-[35px] leading-[1.5] text-center title text-secondary text-animation">
          клинические и бытовые молокоотсосы
        </h1>
        <Separator class="w-1/2 bg-separator-pattern h-[5px] my-[28px]"/>
        <p class="text-[18px] xl:text-[24px] xl:w-1/2 text-secondary text-animation-bottom">
          для максимально эффективного и безопасного сцеживания грудного молока
        </p>
      </div>
    </div>
  </section>

  <!--  production-->
  <section class="mb-[72px] xl:mb-[100px]">
    <div class="container">
      <BaseTitle
        title="продукция"
        tag="h2"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="text-center uppercase"/>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:flex-row md:flex-wrap xl:flex-wrap-reverse w-full gap-8 xl:gap-[72px]">
        <NuxtLink
          v-for="category in products.categories"
          :key="category.id"
          :to="`/${location.currentLocation}/production/${category.slug}`"
          class="group flex flex-col items-center text-center w-full md:py-4 xl:px-0 card">
          <Icon
            name="cil:layers"
            class="absolute top-4 xl:top-0 right-4 xl:right-0 w-[32px] h-[32px] text-[#cfcfcf] group-hover:text-primary transition"/>

          <div class="w-full rounded overflow-hidden h-full">
            <NuxtPicture
              loading="lazy"
              class="flex justify-center items-center w-full md:h-[250px] xl:h-[300px] xl:px-4"
              :img-attrs="{class:'object-scale-down object-center w-full h-full flex'}"
              :src="category.img"/>
          </div>

          <h3
            class="text-2xl font-bold font-display md:min-h-[70px] text-secondary xl:px-4"
            v-html="category.title"></h3>
          <Separator class="my-4 w-1/2 xl:w-full h-[5px] bg-separator-pattern"/>
          <p class="md:min-h-[90px] mb-[32px] text-base xl:px-4">
            {{ category.description }}
          </p>
          <Button class="text-[18px] uppercase">
            открыть
          </Button>
        </NuxtLink>
      </div>
    </div>
  </section>

  <!--  advantages-->
  <section class="mb-[72px] xl:mb-[100px]">
    <div class="container">
      <BaseTitle
        title="преимущества"
        tag="h2"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="text-center uppercase"/>
      <div class="grid grid-cols-1 gap-[32px] xl:gap-[72px] md:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="advantage in ADVANTAGES"
          :key="advantage.id"
          class="flex flex-col w-full items-center">
          <component
            :is="advantage.icon"
            class="w-[88px] h-[88px]"/>
          <Separator class="my-[24px] w-1/2 xl:w-full bg-separator-pattern h-[5px]"/>
          <h3 class="uppercase text-center text-xl text-gray leading-[1.4]">
            {{ advantage.text }}
          </h3>
        </div>
      </div>
    </div>
  </section>

  <!--  video-->
  <section class="mb-[72px] xl:mb-[100px]">
    <div class="container">
      <BaseTitle
        title="видео"
        tag="h2"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="text-center uppercase"/>

      <Carousel
        class="relative w-full"
        :opts="{
          align: 'start',
          loop: true,
        }"
      >
        <CarouselContent class="-ml-1 items-stretch">
          <CarouselItem
            v-for="video in VIDEOS"
            :key="video.id"
            class="pl-1 md:basis-1/2 xl:basis-1/3">
            <div class="p-1 h-full">
              <Card class="group h-full py-12 lg:border-background lg:shadow-none lg:hover:shadow-md lg:hover:border-accent transition-all">
                <CardContent class="flex flex-col gap-y-12 items-center justify-center aspect-auto h-full">

                  <div class="w-full rounded overflow-hidden h-full">
                    <NuxtPicture
                      loading="lazy"
                      class="flex w-full items-center justify-center transition-opacity z-10 relative h-full object-cover"
                      :img-attrs="{class:'object-cover object-top w-full h-full flex'}"
                      :src="video.cover"/>
                  </div>

                  <h3
                    class="text-xl font-display text-gray uppercase"
                    v-html="video.title"></h3>

                  <Dialog>
                    <DialogTrigger as-child>
                      <Button class="uppercase text-[18px]">смотреть</Button>
                    </DialogTrigger>
                    <DialogContent class="max-w-[68%] h-[80%]">
                      <VisuallyHidden>
                        <DialogTitle/>
                        <DialogDescription/>
                      </VisuallyHidden>
                      <div>
                        <iframe
                          width="100%"
                          height="100%"
                          :src="`${video.video}`"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen/>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  </section>

  <!--  contact-form-->
  <section class="relative py-[72px]">
    <div class="container flex">
      <div class="flex flex-col xl:w-1/2 xl:pr-[72px]">
        <p class="text-gray font-display text-2xl xl:text-[30px] text-secondary font-bold">
          Заполните форму с контактными данными и наш специалист свяжется с Вами:
        </p>
        <Separator class="my-[40px] h-[5px] bg-separator-pattern"/>
        <BaseForm/>
      </div>
    </div>
    <div class="hidden xl:flex absolute overflow-hidden top-0 left-1/2 w-1/2 h-full rounded-tl-[300px] bg-[#9CA1A2]">
      <NuxtPicture
        loading="lazy"
        class="flex w-full items-center justify-center transition-opacity z-10 relative"
        :img-attrs="{class:'object-cover object-top w-full h-full flex'}"
        src="/img/index-contacts-bg.jpg"/>
    </div>
  </section>
</template>

<style>
.text-animation {
  @apply inline-flex relative translate-x-[-30px];
  animation: fall .5s ease-in forwards .2s;
}

.text-animation-bottom {
  @apply inline-flex relative translate-x-[30px];
  animation: fall-bottom .5s ease-in forwards .2s;
}

.text-animation::before {
  @apply absolute block content-[''] z-10 left-0 top-0 w-full h-full bg-[#FBE7D7] rounded;
  animation: reveal .5s ease-in forwards .2s;
}

.text-animation-bottom::before {
  @apply absolute block content-[''] z-10 right-0 top-0 w-full h-full bg-[#EDF6FC] rounded;
  animation: reveal-bottom .5s ease-in forwards .2s;
}

@keyframes reveal {
  0% {
    width: 100%;
  }
  70% {
    width: 50%;
  }
  100% {
    width: 0;
  }
}

@keyframes reveal-bottom {
  0% {
    width: 100%;
  }
  70% {
    width: 50%;
  }
  100% {
    width: 0;
  }
}

@keyframes fall {
  0% {
    transform: translateX(-30px);
  }
  70% {
    transform: translateX(-15px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes fall-bottom {
  0% {
    transform: translateX(30px);
  }
  70% {
    transform: translateX(15px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>