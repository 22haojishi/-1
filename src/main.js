import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jquery from "jquery"

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.prototype.$ = jquery

//省市
import VDistpicker from 'v-distpicker'
Vue.component('v-distpicker', VDistpicker)

router.beforeEach((to, from, next) => {
  store.state.path = to.name
  next()
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

