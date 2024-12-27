<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>工作种类：{{ job.type }}</h3>
  <h3>工作薪水：{{ job.salary }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  setup(){
    //ref实现响应式(基本类型)也是采用Object.definedProperty()来实现的 getter和setter
    //数据
    let name = ref('张三')
    let age = ref(18)
    //ref实现响应式(对象类型)也是采用Proxy来实现
    let job = ref({
      type:'全栈开发',
      salary:'60k'
    })

    //方法
    function changeInfo(){
      name.value = '李四'
      age.value = 48
      // console.log(job.value);
      job.value.type = '云计算架构师'
      job.value.salary = '80k'
    }
    //返回一个对象（常用）
    return{
      name,
      age,
      changeInfo,
      job
    }

  }
}
</script>