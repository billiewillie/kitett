<script
  setup
  lang="ts">
defineProps<{
  title: string,
  tag: string,
  textStyle: string,
  separatorStyle: string,
}>();
</script>

<template>
  <div class="flex flex-col mb-[40px] items-center relative">
    <component
      :is="tag"
      :class="textStyle"
      class="flex bg-background z-10 px-[16px] leading-normal lg:px-[32px] font-bold text-[24px] lg:text-[46px] text-secondary font-display">
      {{ title }}
    </component>
    <Separator
      class="h-[5px] bg-separator-pattern bg-repeat-space"
      :class="separatorStyle"/>
  </div>
</template>
