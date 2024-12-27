/*
* 整个项目的入口文件
* */

//引入vue
import Vue from 'vue'
//引入App组件， 是所有组件父组件
import App from '../src/App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)
//创建实例
new Vue({
  //完成功能，将APP组件放入容器中
  render: h => h(App),
  router:router
}).$mount('#app')

