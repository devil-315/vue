<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!--transition 只能包裹一个元素而transition-group可以包含多个元素-->
    <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp"
    >
        <h1 v-show="isShow" key="1">你好啊！</h1>
        <h1 v-show="isShow" key="2">大魔王！</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
    name:'Test',
    data(){
        return{
            isShow:true
        }
    }
}
</script>

<style scoped>
h1{
    background: orange;
}

</style>