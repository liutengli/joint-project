import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)
const router = new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }]
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