<template>
  <div class="student">
    <h2 >学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>当前number的值：{{ number }}</h2>
    <button @click="add">点我number+1</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑test事件</button>
    <button @click="death">销毁当前Student组件的实例(vc)</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            name:'张三',
            sex:'男',
            number:0
        }
    },
    methods: {
      add(){
        console.log('add回调被调用');
        this.number++
      },
      sendStudentName(){
        //触发Student组件实例身上的test事件
        this.$emit('test',this.name)
        // this.$emit('demo')
      },
      unbind(){
        this.$off('test') //这种方式只适用于解绑一个自定义事件
      },
      death(){
        this.$destroy() //销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效了
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