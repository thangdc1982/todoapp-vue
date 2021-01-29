import Vue from 'vue'
import App from './App.vue'
// Import store
import store from './store/store'
// Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import bootstrap and BootstrapVue css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
