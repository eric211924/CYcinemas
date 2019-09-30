import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/frontEnd/Home.vue'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:"/test",
      name: "test",
      component: () => import('./views/test.vue')
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
      path: '/chooseSeat',
      name: 'chooseSeat',
      component: () => import('./views/frontEnd/chooseSeat.vue')
    },
    {
      path: '/bonus',
      name: 'bonus',
      component: () => import('./views/frontEnd/Bonus.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/test.vue')
    },
    {
      path: '/user',
      name: 'user',
      meta: { requiresAuth: true },
      component: () => import('./views/frontEnd/User.vue'),
      children: [
        {
          path: '',
          name: 'userInfo',
          component: () => import('./views/frontEnd/UserInfo.vue')
        },
        {
          path: 'userWallet',
          name: 'userWallet',
          meta: { requiresAuth: true },
          component: () => import('./views/frontEnd/UserWallet.vue')
        },
        {
          path: 'userPoint',
          name: 'userPoint',
          meta: { requiresAuth: true },
          component: () => import('./views/frontEnd/UserPoint.vue')
        }
      ]
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let url = to.path.split('/');
    switch (url[1]) {
      case 'user':
        if (localStorage.getItem('logAccount')) next();
        else next(from.path);
        break;
      case 'backEnd':
        if (localStorage.getItem('logAccount') == 'admin') next();
        else next(from.path);
        break;
      default:
        next();
        break;
    }
  } else {
    next();
  }
})

export default router;