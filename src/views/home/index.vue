<template>
  <div class="user-info">
    <span> {{ userInfo.id }}1 </span>
    <span>
      {{ userInfo.name }}
    </span>
    <Button type="primary" @click="handleSubmit">submit</Button>
    <svg-icon icon-class="vue"></svg-icon>
    <img alt="" class="logo-image" src="../../assets/images/xiaofa.png" />
  </div>
</template>
<script setup lang="ts">
  import { reactive, onMounted } from 'vue'
  import { Button } from 'vant'
  interface UserInfo {
    id: number
    name: string
  }
  const userInfo: UserInfo = reactive({
    id: 1,
    name: '常竣'
  })
  const handleSubmit = () => {
    console.log(1)
  }
  onMounted(() => {
    document.dispatchEvent(new Event('render-event'))
  })
</script>
<style scoped>
  @import url('./index.scss');
</style>
