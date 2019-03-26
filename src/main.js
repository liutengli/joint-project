import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
