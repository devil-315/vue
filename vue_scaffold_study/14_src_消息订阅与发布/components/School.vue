<template>
    <div class="school">
      <h2>学校名称：{{ name }}</h2>
      <h2>学校地址：{{ address }}</h2>
    </div>
  </template>
  
  <script>
  import PubSub from 'pubsub-js';
  export default {
      name:'School',
      data(){
          return{
              name:'清华',
              address:'北京',
          }
      },
      mounted(){
        // console.log('School',this.x);   
        // this.$bus.$on('hello',(data)=>{
        // console.log('我是School组件，收到了数据：',data );   
      //  })   
       //订阅消息 隔空对讲机喊话
      this.pubId = PubSub.subscribe('hello',(msgName,data)=>{
         //注意这里写剪头函数this才不会丢
        //console.log(this);
        console.log('有人发布了hello消息，hello消息执行了',msgName,data);
      })
      },
      beforeDestroy(){
        // this.$bus.$off('hello')
        //取消订阅
        PubSub.unsubscribe(this.pubId)
      }
    }
</script>

<style scoped>
.school{
    background-color: azure;
    padding: 5px;
}
</style>