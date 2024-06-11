<script
  setup
  lang="ts">
import {useLocation} from "~/composables/useLocation";

const props = defineProps({
  categoryId: {
    type: Number,
  },
});

const location = useLocation();
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/ui/carousel';
import { Card, CardContent } from '~/components/ui/card';
import products from '~/data/products';

const accessories = products.categories.find(el => el.id === 3)?.productList;
</script>

<template>
  <section class="mb-[75px]">
    <div class="container">
      <BaseTitle
        v-if="props.categoryId === 1"
        title="Расходные материалы"
        tag="h2"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="self-start pl-0 lg:pl-0"/>

      <BaseTitle
        v-else
        title="С этим товаром смотрят"
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
        <CarouselContent class="-ml-1">
          <CarouselItem
            v-for="accessory in accessories"
            :key="accessory.id"
            class="pl-1 md:basis-1/2 xl:basis-1/4">
            <div class="p-1 h-full">
              <Card class="group h-full lg:border-background lg:shadow-none lg:hover:shadow-md lg:hover:border-accent transition-all">
                <CardContent class="flex flex-col gap-y-4 items-center justify-between p-6 h-full aspect-auto">
                  <NuxtPicture
                    :src="accessory.cover"
                    :img-attrs="{class: 'object-scale-down flex w-full h-full'}"
                    class="w-[90%] max-h-[220px] flex xl:min-h-[156px]"/>
                  <h4 class="text-2xl font-bold font-display text-secondary text-center md:min-h-[64px]">
                    {{ accessory.title }}</h4>
                  <Button as-child>
                    <NuxtLink
                      class="text-[18px] uppercase"
                      :to="`/${location.currentLocation}/production/aksessuary/${accessory.slug}`">смотреть
                    </NuxtLink>
                  </Button>
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
</template>
