import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import EventBus from './plugins/event-bus'
import msToMm from './filters/ms-to-mm'
import blur from './directives/blur'

Vue.use(EventBus)
Vue.use(blur)
Vue.use(msToMm)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
