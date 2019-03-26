import Vue from 'vue'
import Router from 'vue-router';

import ShopCart from './views/ShopCart.vue'


//使用vue-router
Vue.use(Router)

const router =new Router({
  //路由表
  routes:[
    {
      path:'/shopcart',
      name:'ShopCart',
      component:ShopCart
    }
  ]
})

export default router;