import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    redirect: '/home'
  },
  {
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/home/index.vue'),
    name: 'Home',
    path: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
