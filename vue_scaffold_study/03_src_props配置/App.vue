<template>
  <div>
    <!-- v-bind:age 动态绑定 简写 :age -->
    <Student name="李四" sex="女" :age="18"/>
    <Student name="王五" sex="男" :age="19"/>
  </div>
</template>

<script>
//引入Student组件
import Student from './components/Student.vue';

export default {
    name:'App',
    components:{Student},
}
</script>