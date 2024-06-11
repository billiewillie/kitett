<script
  lang="ts"
  setup>
import type {HTMLAttributes} from 'vue'
import {cn} from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class'],
  text: string
}>()
</script>

<template>
  <span
    role="link"
    aria-disabled="true"
    aria-current="page"
    :class="cn('font-medium text-foreground', props.class)"
    v-html="text"
  ></span>
</template>
