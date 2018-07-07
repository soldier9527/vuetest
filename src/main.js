import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import element from 'element-ui'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.use(element)

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  //  路由守卫，当token
  if (Math.random() > 0) {
    next();
  } else {
    next(false)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
