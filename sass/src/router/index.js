import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OperatorView  from '../views/OperatorView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sass',
    name: 'sass',
    beforeEnter() {
      window.open('https://sass-lang.com/')
    },
  },
  {
    path: '/github',
    name: 'github',
    beforeEnter() {
      window.open('https://github.com/erossing99/sass-presentation')
    },
  },
  {
    path: '/operators',
    name: 'operators',
    component: OperatorView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
