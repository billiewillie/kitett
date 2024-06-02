<script
  setup
  lang="ts">
import {ADDRESSES, COPYRIGHT, SOCIALS} from "@/data/constants";
import {useLocation} from "~/composables/useLocation";

const location = useLocation();
import setYear from "~/utils/setYear";
import IconLogo from "~/components/icon/Logo.vue";
</script>

<template>
  <footer>
    <div class="bg-primary py-[24px]">
      <div class="container mx-auto flex flex-col md:flex-row gap-[16px] justify-between text-white items-center">
        <IconLogo
          :isInverse="true"
          class="w-[51px] h-[51px]"/>
        <p class="text-background">{{ COPYRIGHT }} {{ setYear() }}</p>
      </div>
    </div>
    <div class="py-[24px]">
      <div class="container gap-[32px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="flex flex-col w-full">
          <p>
            <span>{{ location.branch.index }}</span>,
            <span v-if="location.branch.country">{{ location.branch.country }},</span> <span>г. {{
              location.branch.city
            }}</span></p>
          <p>{{ location.branch.address }}</p>
          <p>телефон: 
            <NuxtLink :href="`tel:${location.branch.phone}`">{{ location.branch.phone }}</NuxtLink>
          </p>
        </div>
        <div class="flex icons w-full justify-center gap-[8px]">
          <NuxtLink
            v-for="link in SOCIALS"
            :key="link.id"
            :href="link.href"
            target="_blank"
            class="flex items-center justify-center bg-primary rounded w-[53px] h-[53px]">
            <Icon
              size="40px"
              :name="link.icon"
              color="white"/>
          </NuxtLink>
        </div>
        <BaseLogo class="flex w-full justify-center xl:justify-end"/>
      </div>
    </div>
  </footer>
</template>
