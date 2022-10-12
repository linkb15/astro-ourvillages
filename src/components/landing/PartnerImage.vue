<template>
  <div>
    <img :src="`/img/partner/${img}`" class="sm:w-1/2 lg:w-72 mx-auto" alt="" />
  </div>
</template>
<script lang="ts">
export default {
  props: {
    img: {
      type: String,
      default: '',
    },
  },
}
</script>
