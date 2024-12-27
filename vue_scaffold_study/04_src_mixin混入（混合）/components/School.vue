<template>
    <div class="school">
      <h2 @click="showName">学校名称：{{ name }}</h2>
      <h2>学校地址：{{ address }}</h2>
    </div>
  </template>
  
  <script>
  //引入一个混合
  //import {mixin, mixin2} from '../mixin'
  export default {
      name:'School',
      data(){
          return{
              name:'清华',
              address:'北京',
              x:666//如果混合中配置了与data(或者配置了相同的methods)相同的属性值，则以你的配置的属性为主(而不以mixin为主)
          }
      },
    mounted() {
        console.log('你好啊啊！！！！')  //但对于生命周期钩子是都会保存的(混合的钩子比你配置的钩子先跑)
    },
     // mixins:[mixin,mixin2]
  }
  </script>