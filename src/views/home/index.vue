<template>
  <div class="home-index">
    <cell-group title="基础功能">
      <cell title="接口请求" is-link to="/api-group"></cell>
      <cell title="Loading" is-link></cell>
    </cell-group>
  </div>
</template>
<script setup lang="ts">
  import { onMounted } from 'vue'
  import { CellGroup, Cell } from 'vant'
  onMounted(() => {
    document.dispatchEvent(new Event('render-event'))
  })
</script>
<style scoped>
  @import url('./index.scss');
</style>
