import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import ElementUI from 'element-ui';
import './plugins/element.js'
import router from './router'
import store from './store'

Vue.use(ElementUI);

Vue.config.productionTip = false
// 消息提示的环境配置，设置为开发环境或者生产环境

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
