import Vue from 'vue'
import Vuex from  'vuex'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from './router'
import App from './App.vue'


Vue.use(Vuex)//使用vuex

Vue.config.productionTip = false
Vue.use(Vant)


//通过new关键字创建一个store
const store=new Vuex.Store({
  //全局状态树
  state:{
    counter:0,
  },
  mutations:{
    add(state,step){
      state.counter+=step
    },
    Initcounter(state,step){
      state.counter=step
    }
    /* Initcounter(count){
      state
    } */
  }
})




//创建一个空的vue对象
const eventBus=new Vue();
Vue.prototype.$eventBus=eventBus
new Vue({
  store,
  router,//引入router
  render: h => h(App),
}).$mount('#app')
