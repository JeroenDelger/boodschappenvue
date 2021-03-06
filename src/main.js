import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './components/store'


Vue.config.productionTip = false

const GroceryApp = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

export {GroceryApp}
