/*
  该文件是整个项目的入口文件
 */
//引入Vue
import Vue from 'vue' //这里引入的是残缺版的vue,是没有模版解析器是不能写template的 vue.runtime.esm.js
//引入App组件，它是所有组件的父组件
 import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

//创建Vue实例对象 ---vm
new Vue({
  //$mount('#app')相当于el: "app",
  
  //将App组件放入容器中
  render: h => h(App),
  // render(h) {
  //   console.log('render');
  //   console.log(h);    
  //   return h('h1','hello');
  // },
  
  //vue 传递帮你调render函数并传递了一个名为createElement的函数,这里的第一个参数代表h1元素，第二个参数是h1的内容
  // render:(createElement) => createElement('h1',"迟缓") //简写

  //template:`<h1>hello<h1>`,
  // components:{App}
}).$mount('#app')
