<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge+1 }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            //如果props和data存在同名的属性，会报错，但已props传递的属性值为主
            msg:'我是大帅哥',
            myAge:this.age //把props传递过来的值当成vc的状态，这样改name是不会出问题的，因为你没有直接去修改props
        }
    },
    methods:{
        // 可以改，但是会报错，不建议
        // updateAge(){
        //     this.age=22
        // }

        //可以这样改
        updateAge(){
            this.myAge = 22
        }
    },
    //注意props属性名不能是vue底层已征用的属性名(比如key, ref等等)
    //顺序无所谓 name,age,sex 也行
    //简答声明接收
    props:['name','sex','age'] 

    //接收的同时对数据进行类型限制
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String
    // }

    //接收的同时对数据：进行类型限制+默认值的限定+必要性的限定
    // props:{
    //     name:{
    //         type:String, //name的类型是字符串
    //         required:true //name是必要的
    //     },
    //     age:{
    //         type:Number,//age的类型是数字
    //         default:99 //默认是99（如果不传，就用默认值）
    //     },
    //     sex:{
    //         type:String, //sex的类型是字符串
    //         required:true //sex是必要的
    //     }
    // }
}
</script>

<style>
    .school{
        background-color: gray;
    }
</style>