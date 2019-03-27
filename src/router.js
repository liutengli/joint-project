import Vue from 'vue'
import Router from 'vue-router';

import ShopCart from './views/ShopCart.vue'
import Index from './views/Index.vue'
import Login from './views/Login.vue'
import Reg from './views/Reg.vue'
import UserCenter from './views/UserCenter.vue'
import setting from './components/setting.vue'
//使用vue-router
Vue.use(Router)

const router =new Router({
  //路由表
  routes:[
    {
      path:'/shopcart',
      name:'ShopCart',
      component:ShopCart
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/reg',
      name:'Reg',
      component:Reg
    },
    {
      path:'/usercenter',
      name:'UC',
      component:UserCenter,
    },
    {
      path:'/setting',
      name:'Setting',
      component:setting,
      meta:{
        needLogin:true
      }
    }
  ]
})
//每一个路由跳转之前都会执行这个函数
import {isLogin} from './utils/auth'
 router.beforeEach(function (to, from, next) {
  if (to.meta.needLogin) {
    if (isLogin()) {
      next()
    } else {
      next({
        name: 'Login'
      });
    }
  } else {
    next();
  }
})





export default router;