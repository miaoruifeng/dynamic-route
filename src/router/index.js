import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store/index.js'
import Layout from '@/components/layout/Layout'
import Main from '@/components/layout/Main'
import { getMenu } from '@/api/getMenu'

let getRouter = []
const _import = require('@/router/config/_import_' + process.env.NODE_ENV)

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/Login')
    }
  ]
})

export default router

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path !== '/') {
    getMenu().then(res => {
      // console.log(res)
      // const routeData = res.data.data
      // filterAsyncRouter(routeData)
      // routerGo(to, next)
      getRouter = res.data.data
      routerGo(to, next)
      // next()
    })
  } else {
    next()
  }
  next()
})

function routerGo(to, next) {
  getRouter = filterAsyncRouter(getRouter)
  // console.log(getRouter)
  Store.commit('SET_ROUTER_CHANGE', getRouter)
  router.addRoutes(getRouter)
  router.options.routes.push(...getRouter)
  // console.log(router)
  next()
}

function filterAsyncRouter (asyncRouterMap) {
  const accessedRouters = asyncRouterMap.filter(route => {
    // console.log(route)
    if (route.component) {
      if (route.component === 'Layout') {
        route.component = Layout
      } else if (route.component === 'Main') {
        route.component = Main
      } else {
        route.component = _import(route.component)
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
  return accessedRouters
}
