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

const branches: Record<string, Branch> = {
  spb: {
    id: 1,
    country: 'Россия',
    index: 197022,
    city: 'Санкт-Петербург',
    address: 'ул. Профессора Попова, д. 23, лит. Е',
    phone: '+7 (812) 320 49 49',
    email: 'main@bioline.ru',
    map: [30.3136, 59.972014],
  },
  minsk: {
    id: 2,
    country: 'Республика Беларусь',
    index: 220123,
    city: 'Минск',
    address: 'ул. В. Хоружей, 32 а',
    phone: '+375 17 399 43 79',
    email: 'main@bioline.ru',
    map: [27.56265, 53.92365],
  },
  msk: {
    id: 3,
    country: 'Россия',
    index: 127055,
    city: 'Москва',
    address: 'Бутырский вал, дом68/70, стр. 1, Бизнес-центр "Baker Plaza", 3 этаж, офис 34',
    phone: '+7 (800) 555 49 40',
    email: 'main@bioline.ru',
    map: [37.589, 55.7888],
  },
  novosibirsk: {
    id: 4,
    country: 'Россия',
    index: 630099,
    city: 'Новосибирск',
    address: 'ул. Вокзальная магистраль, д. 16, Бизнес-центр "На Вокзальной магистрали", офис 902',
    phone: '+7 (800) 555 49 40',
    email: 'main@bioline.ru',
    map: [82.914, 55.0316],
  },
  nn: {
    id: 5,
    country: 'Россия',
    index: 603057,
    city: 'Нижний Новгород',
    address: 'ул. Бекетова д. 13 "В", Бизнес-центр "Портал", офис 201',
    phone: '+7 (831) 278 61 47',
    email: 'main@bioline.ru',
    map: [43.998827, 56.290260],
  },
};

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
