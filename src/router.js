import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/frontEnd/Home.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/frontEnd/News.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/frontEnd/About.vue')
    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import('./views/frontEnd/Movie.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/frontEnd/Order.vue')
    },
    {
      path: '/bonus',
      name: 'bonus',
      component: () => import('./views/frontEnd/Bonus.vue')
    },
    {
      path: '/user',
      name: 'user',
      meta: { requiresAuth: true },
      component: () => import('./views/frontEnd/User.vue')
    },
    {
      path: '/backEnd',
      name: 'backEnd',
      meta: { requiresAuth: true },
      component: () => import('./views/backEnd/BackEnd.vue'),
      children: [
        {
          path: '',
          name: 'newsManage',
          component: () => import('./views/backEnd/NewsManage.vue')
        },
        {
          path: 'movieManage',
          name: 'movieManage',
          meta: { requiresAuth: true },
          component: () => import('./views/backEnd/MovieManage.vue')
        },
        {
          path: 'foodManage',
          name: 'foodManage',
          meta: { requiresAuth: true },
          component: () => import('./views/backEnd/FoodManage.vue')
        },
        {
          path: 'memberManage',
          name: 'memberManage',
          meta: { requiresAuth: true },
          component: () => import('./views/backEnd/MemberManage.vue')
        },
        {
          path: 'report',
          name: 'report',
          meta: { requiresAuth: true },
          component: () => import('./views/backEnd/Report.vue')
        }
      ]
    }
  ]
})
