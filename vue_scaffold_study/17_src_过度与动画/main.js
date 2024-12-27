/*
* 整个项目的入口文件
* */

//引入vue
import Vue from 'vue'
//引入App组件， 是所有组件父组件
import App from './App.vue'

// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false


//创建实例
new Vue({
  //完成功能，将APP组件放入容器中
  render: h => h(App),
  beforeCreate(){
    //事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')

