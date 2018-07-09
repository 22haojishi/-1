import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import login from './views/login.vue'
import deal from './views/deal.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/deall',
          name: 'deall',
          component: deal
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ],

})
