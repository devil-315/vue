//求和功能相关的配置
export default {
    namespaced: true,
     state:{
        sum:0, //当前的和
        school:'清华',
        subject:'开发',
    },
    actions:{
         //收到上下文对象(包含commit)和dispatch过来的值
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
    },
    mutations:{
         //收到state和要操作数value
        JIA(state,value){
        //    console.log('mutations的jia被调用',state,value);
            state.sum += value
        },
        JIAN(state,value){
            state.sum -= value
        },
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    },
}