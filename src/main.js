import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'font-awesome/css/font-awesome.css'

// vue toast
import Toasted from 'vue-toasted'
Vue.use(Toasted);
Vue.use(Toasted, Option);

// axios
import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, Axios);

// font-awesome
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  // console.log(to);
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