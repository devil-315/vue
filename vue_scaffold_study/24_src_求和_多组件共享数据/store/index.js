//该文件用于创建Vuex中最为核心的store

//引入 vue  核心库
import Vue from 'vue'
//引入 vuex
import Vuex from 'vuex'
//使用vuex来集中管理状态,必要
//new store的前提是必须要使用Vuex插件
//使用 Vuex 插件
Vue.use(Vuex)
//准备一个actions--用于响应组件中的动作
const actions = {
    //收到上下文对象(包含commit)和dispatch过来的值
    // jia(context,value){
    // //    console.log('actions的jia被调用',context,value);
    //     context.commit('JIA',value)
    // },
    // jian(context,value){
    //     context.commit('JIAN',value)
    // },
    jiaOdd(context,value){
        if(context.state.sum % 2){
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        setTimeout(()=>{
            context.commit('JIA',value)
        },500)
    },
}
//准备一个mutations--用于操作数据（state）
const mutations = {
    //收到state和要操作数value
    JIA(state,value){
    //    console.log('mutations的jia被调用',state,value);
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    },
    ADD_PERSON(state,value){
        state.personList.unshift(value)
    }
}
//准备一个state--用于存储数据
const state = {
    sum:0, //当前的和
    school:'清华',
    subject:'开发',
    personList:[
        {id:'001',name:'张三'}
    ]
}
//准备一个getters--用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}
//创建并暴露（导出）store
export default new Vuex.Store({
    // actions:actions,
    // mutations:mutations,
    // state:state,
    //因为重名，触发对象的简写形式
    actions,
    mutations,
    state,
    getters,
})
