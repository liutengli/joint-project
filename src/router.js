import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index.vue'
import Search from './views/Search.vue'
import Detail from './views/Detail.vue'
import List from './views/List.vue'
import ShopCart from './views/ShopCart.vue'


//使用vue-router
Vue.use(Router)
const router = new Router({
  //路由表
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path: '/detail',
      name: 'Detail',
      component: Detail
    },{
      path: '/shopcart',
      name: 'ShopCart',
      component: ShopCart
    },{
      path: '/list',
      name: 'List',
      component: List,
    }
  ]
})
//每一个路由跳转之前都会执行这个函数
/* router.beforeEach(function (to, from, next) {
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
}) */



export default router;
