import Vue from 'vue'
import Router from 'vue-router'
import List from './components/List.vue'
import ShopCart from './views/ShopCart.vue'
import Index from './views/Index.vue'
import Search from './views/Search.vue'

//使用vue-router
Vue.use(Router)
<<<<<<< HEAD
const router = new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
  },{
    path: '/search',
    name: 'Search',
    component: Search
  }]
})
=======
>>>>>>> ec427b750e41985edef7ece7a266bcd558cfeab9

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
