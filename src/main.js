import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Bootstrap
import 'bootstrap'

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

// UIkit
// import UIkit from 'uikit';
// import Icon from 'uikit/dist/js/uikit-icons';
// UIkit.use(Icon);

// chart.js
import Chart from 'chart.js';

Vue.config.productionTip = false;

Vue.prototype.$api = 'https://cy-cinemas.ml'

Vue.prototype.$url = "http://localhost:80/api"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')