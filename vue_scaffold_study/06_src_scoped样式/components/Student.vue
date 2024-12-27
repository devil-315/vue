<template>
  <div class="demo">
    <h2 class="test">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
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
}
</script>

<!-- lang的作用：用于指定文档或元素的语言 -->
<style lang="less" scoped>
 .demo{
  background-color: orange;
 }
 .test{
  font-size: 40px;
 }
</style>