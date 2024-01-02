import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('@/views/Home/Home')
const Classify = () => import('@/views/Classify/Classify')
const Cart = () => import('@/views/Cart/Cart')
const My = () => import('@/views/My/My')
const Detail = () => import('@/views/Detail/Detail')

const routes = [
  {
    path: '',
    redirect: '/home',
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/classify',
    name: 'classify',
    component: Classify
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/my',
    name: 'my',
    component: My
  },
  {
    path: '/detail/:iid',
    name: 'detail',
    component: Detail
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
