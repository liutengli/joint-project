import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index.vue'
import Search from './views/Search.vue'
import Detail from './views/Detail.vue'
import List from './views/List.vue'
import ProductsList from './views/ProductsList.vue'
import ShopCart from './views/ShopCart.vue'
import UserCenter from './views/UserCenter.vue'
import Login from './views/Login.vue'
import Reg from './views/Reg.vue'
import Setting from './views/Setting.vue'
import Address from './views/Address.vue'
import AddAddress from './views/AddAddress.vue'
import EditAddress from './views/EditAddress.vue'


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
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },{
      path: '/address',
      name: 'Address',
      component: Address,
      meta:{//元标签
        needLogin:true,//需要登录
      }
    },{
      path: '/add-address',
      name: 'AddAddress',
      component: AddAddress
    },{
      path: '/edit-address/:id',
      name: 'EditAddress',
      component: EditAddress
    },{
      path: '/shopcart',
      name: 'ShopCart',
      component: ShopCart,
      meta:{//元标签
        needLogin:true,//需要登录
      }
    },{
      path: '/list',
      name: 'List',
      component: List,
    },
    {
      path: '/productslist',
      name: 'ProductsList',
      component: ProductsList,
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
    },{
      path:'/usercenter',
      name:'UC',
      component:UserCenter,
    } ,{
      path:'/setting',
      name:'Setting',
      component:Setting,
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
