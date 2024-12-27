<template>
  <div class="app">
    <h1>{{ msg }}.学生姓名是：{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的 props 实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>
    <!--通过父组件给子组件绑定一个自定义事件实现了子给父传递数据(自定义事件绑在子组件上) 第一种写法，使用@或v-on-->
    <!-- <Student v-on:test="getStudentName" @demo="m1"/> -->
    <!--once代表改事件只执行一次-->
    <!-- <Student @test.once="getStudentName"/> -->
    <!--第二种写法，使用ref绑定事件--->
    <Student ref="student" @click.native="show"/>
  </div>
</template>

<script>
//引入Student组件
import Student from './components/Student.vue';
import School from './components/School.vue';
export default {
    name:'App',
    components:{Student, School},
    data(){
      return{
        msg:'你好啊！',
        studentName:''
      }
    },
    methods: {
      getSchoolName(name){
        console.log('App收到了学校名：',name);   
      },
      //方法一
      getStudentName(name){
        console.log('App收到了学生名：',name); 
        this.studentName = name 
      },
    show(){
      console.log(`123`);
    },
      // m1(){
      //   console.log('demo事件被触发了');
      // }
    },
    mounted(){
      //可以通过ref拿到组件实例对象
      this.$refs.student.$on('test',this.getStudentName)//绑定自定义事件
      //方法二
      // this.$refs.student.$on('test',(name)=>{
      //   console.log('App收到了学生名：',name); 
      //   this.studentName = name 
      // }) 
    },
}
</script>

<style scoped>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>