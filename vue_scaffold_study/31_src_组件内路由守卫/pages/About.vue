<template>
   <h2>我是About的内容</h2>
</template>

<script>
export default {
   name:'About',
   //进入守卫，通过路由规则，进入该组件时被调用
   beforeRouteEnter(to,from,next){
      console.log('About-beforeRouterEnter',to,from);
    if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
        if(localStorage.getItem('school') == 'qinghua'){
            next()
        }else{
            alert('学校名不对，无法查看')
        }
    }else{
        next()
    }
   },
   //进入守卫，通过路由规则，离开该组件时被调用
   beforeRouteLeave(to,from,next){
      console.log('About-beforeRouteLeave',to,from);
      next()
   }
}
</script>