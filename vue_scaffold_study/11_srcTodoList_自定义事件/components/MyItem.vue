<template>
  <li>
    <label>
      <!--      这里勾选和取消勾选可以使用change和click作为事件处理-->
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
      <!-- 如下代码也能实现功能，但是不推荐，因为有点违法原则，因为修改了props -->
      <!--这里修改了从List修改过来的props,这里的不允许改是浅层次，就是如果props是一个对象则这个修改这个对象的某一个属性vue是放行的-->
      <!-- <input type="checkbox" v-model="todo.done"> -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
    name:'MyItem',
    //声明接收todo对象
    props:['todo','checkTodo','deleteTodo'],
    methods:{
      //勾选or取消勾选
      handleCheck(id){
        //console.log(id);       
        //通知App组件将对应的todo对象的done值取反
        this.checkTodo(id)
      },
      //删除
      handleDelete(id){
        if(confirm("确定删除嘛")) {
          //console.log(id);
          this.deleteTodo(id)
        }
      }
    }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color: #ddd;
}

li:hover button{
  display: block;
}
</style>