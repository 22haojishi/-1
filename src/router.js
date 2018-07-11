import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import login from './views/login.vue'
import deal from './views/deal.vue'
import foot from './components/foot.vue'
import consult from './views/consult.vue'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
      {
        path: '/foot',
        name: 'foot',
        component: foot,
      },
    {
      path: '/deal',
      name: 'deal',
      component: deal,
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/consult',
      name: 'consult',
      component: consult,
    }
  ],

})
