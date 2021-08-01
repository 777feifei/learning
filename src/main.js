import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/index.scss'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import '@/assets/fonticon/iconfont.css'

import './permission' // 路由导航
import '@/icons' // 图标

Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
