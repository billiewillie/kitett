<script
  setup
  lang="ts">
import {useLocation} from "~/composables/useLocation";

const location = useLocation();

export interface Props {
  withText?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  withText: false,
})
</script>

<template>
  <NuxtLink
    :to="`/${location.currentLocation}`"
    class="flex items-center relative"
    :class="{'xl:-ml-[170px]': withText}">
    <div
      class="flex xl:justify-center"
      :class="{'xl:w-[170px]': withText}">
      <NuxtImg
        src="/img/logo.svg"
        width="100"/>
    </div>
    <p
      v-if="withText"
      class="hidden xl:flex uppercase text-[12px] text-gray w-[170px]">Профессиональные<br>молокоотсосы<br>из&#160;Франции
    </p>
  </NuxtLink>
</template>
