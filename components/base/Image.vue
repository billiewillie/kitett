<script
  setup
  lang="ts">
import { ref } from 'vue';

defineProps({
  image: {
    type: String,
    required: true,
  },
  imgClass: {
    type: String,
  }
});

const isImageLoaded = ref(false);
</script>

<template>
  <div class="overflow-hidden">
    <NuxtPicture
      class="flex h-full w-full items-center justify-center opacity-0 transition-opacity"
      :class="{'opacity-100': isImageLoaded}"
      :img-attrs="{class:`${imgClass}`}"
      @load="isImageLoaded = true"
      :src="image"/>
  </div>
</template>
