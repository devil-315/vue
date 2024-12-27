//引入vue
import Vue from "vue";
//引入App
import App from "./App.vue";
//全局混入
import { mixin,mixin2 } from "./mixin.js";

Vue.mixin(mixin)
Vue.mixin(mixin2)

//关闭Vue生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
  el:'#app',
  render: h => h(App)
});
