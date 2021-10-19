import { createApp } from 'vue'
import SkeletonHome from './views/home/skeleton.vue'
export default createApp({
  components: {
    SkeletonHome
  },
  template: `
    <div>
    <skeleton-home id="skeleton-home" style="display:none;"></skeleton-home>
    </div>
    `
})
