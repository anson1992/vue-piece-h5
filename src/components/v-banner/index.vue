<template>
  <div class="user-info">
    <span>{{ $attrs.msg }}</span>
    <span class="name">{{ name }}</span>
  </div>
</template>
<script lang="ts">
  import { defineComponent, Ref, ref } from 'vue'
  export default defineComponent({
    name: 'VBanner',
    setup() {
      const name: Ref<string> = ref('')
      return {
        name
      }
    }
  })
</script>
<style scoped>
  .name {
    font-size: 20px;
  }
</style>
