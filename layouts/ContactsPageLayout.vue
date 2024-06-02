<script
  setup
  lang="ts">
import {ref, shallowRef} from 'vue';
import type {YMap} from '@yandex/ymaps3-types';
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
} from 'vue-yandex-maps';
import {useLocation} from '~/composables/useLocation';
import type {Branch, Breadcrumb} from '~/types';
import branches from '~/data/branches';

const map = shallowRef<null | YMap>(null);

const coordinates = ref(branches.spb.map);

const marker = ref({
  coordinates: coordinates.value,
});

const location = useLocation();

const breadcrumbs: Breadcrumb[] = [
  {
    id: 1,
    title: 'главная',
    link: `/${location.value.currentLocation}`,
  },
  {
    id: 2,
    title: 'контакты',
  },
];

function setCoordinates(value) {
  coordinates.value = value;
}

function scrollToMap() {
  window.scrollTo({
    behavior: 'smooth',
    top: document.getElementById('map').getBoundingClientRect().top - document.body.getBoundingClientRect().top - 100,
  });
}
</script>

<template>
  <section class="first-screen mb-[75px]">
    <div class="container flex flex-col">
      <BaseBreadcrumb :links="breadcrumbs"/>
      <BaseTitle
        title="контакты"
        tag="h1"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="text-center uppercase"/>
      <div class="grid gap-[32px] grid-cols-1 xl:grid-cols-3 xl:min-h-[498px] xl:h-[1px]">
        <div class="xl:order-2">
          <h2 class="text-[30px] font-medium">Центральный офис:</h2>
          <br>
          <p>
            {{ branches.spb.index }}, {{ branches.spb.country }}, {{ branches.spb.city }},<br>{{ branches.spb.address }}
          </p>
          <br>
          <p>
            тел: 
            <NuxtLink :href="`tel:${branches.spb.phone}`">
              {{ branches.spb.phone }}
            </NuxtLink>
          </p>
          <p>e-mail: 
            <NuxtLink :href="`mailto:${branches.spb.email}`">
              {{ branches.spb.email }}
            </NuxtLink>
          </p>
          <br>
          <Button
            class="text-[18px]"
            @click="setCoordinates(branches.spb.map);scrollToMap()">посмотреть на карте
          </Button>
        </div>
        <BaseImage
          image="/img/contacts.jpg"
          img-class="object-cover w-full h-full"
          class="relative overflow-hidden top-0 w-full h-full bg-[#2363B6] col-span-2 rounded"/>
      </div>
    </div>
  </section>

  <section
    id="map"
    class="mb-[75px]">
    <div class="container">
      <yandex-map
        v-model="map"
        :settings="{
          location: {
            center: coordinates,
            zoom: 16,
          },
        }"
        width="100%"
        height="374px"
        class="rounded overflow-hidden shadow-[0_2px_14px_0_rgba(0,0,0,0.15)]"
      >
        <yandex-map-default-scheme-layer/>
        <yandex-map-default-features-layer/>
        <yandex-map-marker
          :settings="{
            coordinates
          }">
          <div class="marker"/>
        </yandex-map-marker>
      </yandex-map>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container">
      <BaseTitle
        title="филиалы"
        tag="h2"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="text-center uppercase"/>
      <ul class="grid grid-cols-1 md:grid-cols-3 gap-8 2xl:gap-[72px]">
        <template
          v-for="(branch, key) in branches"
          :key="key">
          <li
            v-if="key !== 'spb' && (location.currentLocation === 'by-ru' && key === 'minsk')"
            class="card">
            <h3 class="title text-[18px] font-bold">{{ branch.city }}</h3>
            <br>
            <address class="not-italic 2xl:min-h-[48px]">{{ branch.address }}</address>
            <br>
            <p>тел.: {{ branch.phone }}</p>
            <br>
            <Button
              class="text-[18px]"
              @click="setCoordinates(branch.map);scrollToMap()">
              посмотреть на карте
            </Button>
          </li>
          <li
            v-if="key !== 'spb' && location.currentLocation === 'ru-ru'"
            class="card">
            <h3 class="title text-[18px] font-bold">{{ branch.city }}</h3>
            <br>
            <address class="not-italic 2xl:min-h-[48px]">{{ branch.address }}</address>
            <br>
            <p>тел.: {{ branch.phone }}</p>
            <br>
            <Button
              class="text-[18px]"
              @click="setCoordinates(branch.map);scrollToMap()">
              посмотреть на карте
            </Button>
          </li>
        </template>
      </ul>
    </div>
  </section>
</template>

<style>
.marker {
  position: relative;
  width: 20px;
  height: 20px;
  background: #ff0000;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  color: #fff;
  font-weight: bold;
  line-height: 20px;
}
</style>
