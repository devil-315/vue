<template>
    <div id="root">
       <button @click="getName"> 获取名字 </button>
       <button @click="getCatName"> 获取名字 </button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  methods: {
    getName(){
      axios.get("http://localhost:8080/api/person").then(
        response => {
          console.log('请求成功了',response.data);
        },
        error => {
          console.log('请求失败了',error.message);
        }
      )
    },
    getCatName() {
        axios.get('http://localhost:8080/devil/animal').then(
            response => {
                   console.log("响应成功了", response.data)
              },
              error => {
                  console.log("请求失败了", error.message)
              }
        )
    }
  },
}
</script>
