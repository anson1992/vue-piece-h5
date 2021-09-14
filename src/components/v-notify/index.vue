<template>
  <div v-if="value" :data-type="type" class="v-notice-box">
    <div class="title">{{ title }}</div>
    <div class="message">{{ message }}</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'VFormIndex',
    props: {
      message: {
        type: String,
        default: '你想说什么？'
      },
      title: {
        type: String,
        default: '提示'
      },
      type: {
        type: String,
        default: 'info'
      },
      value: {
        type: Boolean,
        default: false
      }
    },
    setup() {
      return {}
    }
  })
</script>
<style scoped lang="scss">
  .v-notice-box {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 80%;
    width: auto;
    background-color: #fff;
    border: 1px solid #999;
  }
  .v-notice-box[data-type='info'] {
    font-size: 16px;
    .title {
      color: #333;
    }
  }
</style>
