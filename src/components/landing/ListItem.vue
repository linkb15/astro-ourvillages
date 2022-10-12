<template>
  <li class="space-y-2">
    <div class="flex items-center space-x-2">
      <IconCheckCircle font-size="20" class="text-[#0c66ee]" />
      <span>{{ title }}</span>
    </div>
    <slot></slot>
  </li>
</template>
<script setup lang="ts">
import IconCheckCircle from '~icons/mdi/check-circle'

const { title } = defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>
