import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'

import SvgIconPlugin from './components/v-svg-icon/index'
// import '@/styles/variables.scss'

createApp(App).use(store).use(router).use(SvgIconPlugin).mount('#app')
