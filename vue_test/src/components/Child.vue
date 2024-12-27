<template>
    <div class="child">
      <h3>我是child组件</h3>
      <h4>sum：{{ sum }}</h4>
    </div>
  </template>
  
  <script>
  import {ref} from 'vue'
  export default {
    name:'Child',
    async setup(){
      let sum = ref(0)
      let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve({sum})
        },3000)
      })
      return await p
    }
  }
  </script>
  
  <style>
  .child{
    background-color: rgb(32, 208, 227);
    padding: 10px;
  }
  </style>