/*
* 整个项目的入口文件
* */

//引入vue
import Vue from 'vue'
//引入App组件， 是所有组件父组件
import App from '../src/App.vue'
//完整引入
//引入ElementUI组件库
// import ElementUI from 'element-ui';
//引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入
import { Button,Row,DatePicker } from 'element-ui'
// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

Vue.use(Button);
Vue.use(Row);
Vue.use(DatePicker);

//应用element ui插件库
// Vue.use(ElementUI);
//创建实例
new Vue({
  //完成功能，将APP组件放入容器中
  render: h => h(App),

}).$mount('#app')