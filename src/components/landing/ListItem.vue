<template>
  <li class="space-y-2">
    <div class="flex items-center space-x-2">
      <Icon name="mdi:check-circle" size="20" class="text-[#0c66ee]" />
      <span>{{ title }}</span>
    </div>
    <slot></slot>
  </li>
</template>
<script lang="ts">
export default {
  name: 'LandingListItem',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
