<script
  setup
  lang="ts">
import {ONLINE_MARKETS} from '@/data/constants';
import {useLocation} from '~/composables/useLocation';

const location = useLocation();
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '~/components/ui/carousel';
import {Card, CardContent} from '~/components/ui/card';
</script>

<template>
  <section class="mb-[75px]">
    <div class="container">
      <BaseTitle
        title="Где купить"
        tag="h2"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="self-start pl-0 lg:pl-0"/>

      <Carousel
        class="relative w-full"
        :opts="{
          align: 'start',
          loop: true,
        }"
      >
        <CarouselContent class="-ml-1 items-stretch">
          <CarouselItem
            v-for="market in ONLINE_MARKETS"
            :key="market.id"
            class="pl-4 md:basis-1/2 xl:basis-1/4">
            <NuxtLink
              :to="market.link"
              target="_blank">
              <Card class="group h-[99%] py-8 lg:border-background lg:shadow-none lg:hover:shadow-md lg:hover:border-accent transition-all">
                <CardContent class="flex flex-col gap-y-16 items-center justify-center aspect-auto h-full">
                  <NuxtPicture
                    :src="market.logo"
                    class="max-w-[211px] max-h-[50px]"/>
                  <Button class="uppercase text-[18px] leading-none">
                    перейти
                  </Button>
                </CardContent>
              </Card>
            </NuxtLink>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  </section>
</template>
