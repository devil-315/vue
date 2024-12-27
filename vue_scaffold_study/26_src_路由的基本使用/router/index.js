//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

//引入主键
import About from "@/page/About.vue";
import Home from "@/page/Home.vue";
//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        },
    ]
}) 