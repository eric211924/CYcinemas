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