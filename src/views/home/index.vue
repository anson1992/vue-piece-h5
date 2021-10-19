<template>
  <div class="home-index">
    <div v-if="isLoading">
      <home-skeletor></home-skeletor>
    </div>
    <div v-else>
      <cell-group title="基础功能">
        <cell title="接口请求" is-link to="/api-group"></cell>
      </cell-group>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref, Ref } from 'vue'
  import { CellGroup, Cell } from 'vant'
  import HomeSkeletor from './skeleton.vue'
  const isLoading: Ref<boolean> = ref(true)
  onMounted(() => {
    document.dispatchEvent(new Event('render-event'))
    // setTimeout(() => {
    //   isLoading.value = false
    // }, 4000)
  })
</script>
<style lang="scss" scoped>
  @import './index.scss';
</style>
