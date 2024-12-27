//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

//引入主键
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import Message from "@/pages/Message.vue";
import Detail from "@/pages/Detail.vue";
//创建并暴露一个路由器
const router = new VueRouter({
    //默认开启hash模式
    mode: 'history',
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{isAuth:true,title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新闻'},
                    // 独享路由守卫
                    // beforeEnter(to,from,next){
                    //     console.log('独享路由守卫',to,from);
                    //     if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
                    //         if(localStorage.getItem('school') == 'qinghua'){
                    //                 next()
                    //         }else{
                    //                 alert('学校名不对，无法查看')
                    //         }
                    //     }else{
                    //         next()
                    //     }
                    // }
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                            meta:{isAuth:true,title:'详情'},
                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
                            // props:{a:1,b:'hello'},

                            //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数(注意如果是query参数不会奏效的)，
                            //以props的形式传给Detail组件。
                            // props:true

                            //props的第三种写法，值为函数,该函数返回的对象中每一组key-value都会通过props传给Detail组件
                            props($route){
                                return {id:$route.query.id,title:$route.query.title}
                            }
                        }
                    ]
                }
            ]
        },
    ]
}) 

//全局前置路由守卫----初始化的时候被调用，每次路由切换之前被调用
// router.beforeEach((to,from,next) => {
//     console.log('前置路由守卫',to,from);
//     //判断是否需要鉴权
//     if(to.meta.isAuth){
//         if(localStorage.getItem('school') == 'qinghua'){
//             next()
//         }else{
//             alert('学校名不对，无法查看')
//         }
//     }else{
//         next()
//     }
// })

//全局后置路由守卫----初始化的时候被调用，每次路由切换之后被调用
// router.afterEach((to,from,next) => {
//     console.log('后置路由守卫',to,from,next);
//     document.title = to.meta.title || 'test'
// })
export default router