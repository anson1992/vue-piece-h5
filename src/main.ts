import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'

// 全局svg-icon组件
import SvgIconPlugin from './components/v-svg-icon/index'
// 加载全局样式
import '../src/styles/_module.scss'

createApp(App).use(store).use(router).use(SvgIconPlugin).mount('#app')
