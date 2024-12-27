<template>
  <div class="app">
    <h2>我是app组件</h2>
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <!--退路-->
      <template v-slot:fallback>
        <h3>加载中....稍等</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from "./components/Child";  //静态引入
import { defineAsyncComponent } from 'vue';  
const Child = defineAsyncComponent(()=>import('./components/Child.vue')) //异步引入
export default {
  name: 'App',
  components: {Child},
}
</script>

<style>
.app{
  background: grey;
  padding: 10px;
}
</style>