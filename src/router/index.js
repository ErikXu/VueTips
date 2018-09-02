import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  { path: '/', redirect: '/form', hidden: true },

  {
    path: '/form',
    component: Layout,
    alwaysShow: true,
    meta: { title: '表单', icon: 'form' },
    children: [
      {
        path: '',
        name: 'official',
        component: () => import('@/views/form/Official'),
        meta: { title: '官方动态', icon: 'official' }
      },
      {
        path: 'multi',
        name: 'multi',
        component: () => import('@/views/form/Multi'),
        meta: { title: '多元动态', icon: 'multi' }
      },
      {
        path: 'validation',
        name: 'validation',
        component: () => import('@/views/form/Validation'),
        meta: { title: '动态验证', icon: 'validation' }
      },
      {
        path: 'group',
        name: 'group',
        component: () => import('@/views/form/Group'),
        meta: { title: '分组验证', icon: 'group' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
