import Vue from 'vue'
import Router from 'vue-router'
import List from './components/List.vue'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/list',
    name: 'List',
    component: List,
  }]
})

export default router;
