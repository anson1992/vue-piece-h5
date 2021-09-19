<template>
  <div class="user-info">
    <span> {{ userInfo.id }}1 </span>
    <span>
      {{ userInfo.name }}
    </span>
    <Button type="primary" @click="handleSubmit">submit</Button>
    <svg-icon icon-class="vue"></svg-icon>
  </div>
</template>
<script setup lang="ts">
  import { reactive } from 'vue'
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
</script>
<style scoped>
  @import url('./index.scss');
</style>
