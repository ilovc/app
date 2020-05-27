import Vue from 'vue'
import VueRouter from 'vue-router'
const Layout = () => import('@/views/layout')
const Home = () => import('@/views/home')
const Data = () => import('@/views/data')
const User = () => import('@/views/user')
const News = () => import('@/views/news')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [{
      path: '/',
      component: Home
    },
    {
      path: '/data',
      component: Data
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/news',
      component: News
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
