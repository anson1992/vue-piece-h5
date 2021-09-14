<template>
  <svg :class="svgClass" v-on="$attrs"><use :xlink:href="iconName" /></svg>
</template>
<script lang="ts">
  import { defineComponent, computed } from 'vue'
  export default defineComponent({
    name: 'SvgIcon',
    props: {
      className: {
        type: String,
        default: ''
      },
      iconClass: {
        type: String,
        required: true
      }
    },
    setup(props) {
      // 图标名称
      const iconName = computed(() => `#icon-${props.iconClass}`)
      // class
      const svgClass = computed(() => {
        if (props.className) {
          return `svg-icon ${props.className}`
        } else {
          return 'svg-icon'
        }
      })
      return {
        iconName,
        svgClass
      }
    }
  })
</script>
<style scoped>
  .name {
    font-size: 20px;
  }
</style>
