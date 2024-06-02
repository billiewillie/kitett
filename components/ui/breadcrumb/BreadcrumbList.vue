<script
  lang="ts"
  setup>
import type {HTMLAttributes} from 'vue'
import {cn} from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <ol
    :class="cn('inline-flex bg-accent flex-wrap items-center gap-1.5 break-words text-sm leading-none text-muted-foreground sm:gap-2.5 p-[12px] rounded', props.class)"
  >
    <slot/>
  </ol>
</template>
