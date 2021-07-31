import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/Admin'

Vue.use(VueRouter) 
// 
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) { return originalPush.call(this, location, onResolve, onReject) }
  return originalPush.call(this, location).catch((err) => err)
}

const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: () => import ('@/views/login/index.vue')
  },
  {
    path: '/',
    name: 'Layout',
    redirect:'/dashboard',
    component: Layout, // 出口
    children: [
     {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import ('@/views/dashboard/dashboard.vue'),
     }
    ]
  },
 
]

// const myrouter = new VueRouter({
//   mode: 'history',
//   // base: process.env.BASE_URL,
//   routes
// })

// 路由构造器
const createRouter = () =>
  new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes: [...constantRouterMap]
  })

// 创建路由实例
const router = createRouter()

// 重置路由
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
