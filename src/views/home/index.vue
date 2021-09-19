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
  import { Button, Toast } from 'vant'
  import Notify from '../../utils/notify'
  interface UserInfo {
    id: number
    name: string
  }
  const userInfo: UserInfo = reactive({
    id: 1,
    name: '常竣'
  })
  const handleSubmit = () => {
    Notify.info('我是一个提示消息！')
  }
  Toast.loading({
    forbidClick: true,
    message: '加载中...'
  })
</script>
<style scoped>
  @import url('./index.scss');
</style>
