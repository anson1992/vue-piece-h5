<template>
  <div class="api-group-page">
    <cell-group title="Api请求">
      <cell title="Get请求" is-link @click="handleSendGet"></cell>
      <cell title="Post请求" is-link @click="handleSendPost"></cell>
      <cell title="Del请求" is-link @click="handleSendDel"></cell>
      <cell title="Put请求" is-link @click="handleSendPut"></cell>
    </cell-group>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { CellGroup, Cell, Toast } from 'vant'
  import {
    getApi,
    sendCodeApi,
    sendDelUserApi,
    sendLogoutApi
  } from '../../api/api-methods'
  export default defineComponent({
    name: 'ApiGroupPage',
    components: {
      Cell,
      CellGroup
    },
    setup() {
      const handleSendDel = () => {
        sendDelUserApi().then((res: any) => {
          Toast('歌单删除成功！')
          console.log('res：', res)
        })
      }
      const handleSendGet = () => {
        getApi().then((res: any) => {
          Toast('请求成功！')
          console.log('response：', res)
        })
      }
      const handleSendPost = () => {
        sendCodeApi().then((res: any) => {
          Toast('二维码key请求成功！')
          console.log('res：', res)
        })
      }
      const handleSendPut = () => {
        sendLogoutApi().then(() => {
          Toast('退出登录成功！')
        })
      }
      return {
        handleSendDel,
        handleSendGet,
        handleSendPost,
        handleSendPut
      }
    }
  })
</script>
