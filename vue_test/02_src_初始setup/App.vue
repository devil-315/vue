<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="sayHello">说话(Vue3)</button>
  <hr>
  <button @click="sayWelcome">说话(Vue2)</button>
  <hr>
  <button @click="test1">测试一下在vue2的配置中读取vue3中的数据和方法</button>
  <hr>
  <button @click="test2">测试一下在vue3的配置中读取vue2中的数据和方法</button>
  <hr>
  <h3>a：{{ a }}</h3>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      sex:'男',
      a:10
    }
  },
  methods:{
    sayWelcome(){
      alert('hello world')
    },
    test1(){
      console.log(this.sex);
      console.log(this.name);
      console.log(this.age);
      console.log(this.sayHello);
    }
  },
  //此处只是测试一下Setup，暂时不考虑响应式的问题
  setup(){
    //数据
    let name = '张三'
    let age = 18
    let a = 200

    //方法
    function sayHello(){
      alert(`我叫${name}，我${age}岁了，你好啊！`)
    }

    function test2(){
      console.log(name);
      console.log(age);
      console.log(sayHello);
      console.log(this.sex);
      console.log(this.sayWelcome)
    }

    //返回一个对象（常用）
    return{
      name,
      age,
      sayHello,
      a,
    }
     
    //返回一个渲染函数
    // return () => {return h('h1','大魔王')}
  }
}
</script>
