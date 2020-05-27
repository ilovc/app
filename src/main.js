import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'// vant组件库
import 'vant/lib/index.css' // vant样式文件
import '@/styles/index.scss'// 全局样式文件
import 'amfe-flexible'// 自动适配插件
Vue.use(Vant)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
