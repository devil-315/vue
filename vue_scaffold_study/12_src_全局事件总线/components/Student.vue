<template>
  <div class="student">
    <h2 >学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            name:'张三',
            sex:'男'
        }
    },
      mounted(){
        // console.log('Student',this.x);
      },
      methods: {
        sendStudentName(){
          this.$bus.$emit('hello',this.name)
        }
      },
}
</script>

<!-- lang的作用：用于指定文档或元素的语言 -->
<style lang="less" scoped>
 .student{
  background-color: orange;
  padding: 5px;
  margin-top: 30px;
 }
</style>