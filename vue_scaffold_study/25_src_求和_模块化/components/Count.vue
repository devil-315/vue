<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <h3>当前求和放大10倍：{{ bigSum }}</h3>
        <h3>我在{{ school }}，学习{{ subject }}</h3>
        <h3 style="color:red;">Person组件的总人数：{{ personList.length }}</h3>
         <!--让其收集到的数据全是number类型的 number修饰符-->
        <select v-model.number="n">
            <!--让所有的value全部绑定为数字-->
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数相加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:'Count',
    data(){
        return{
            n:1, //用户选择的数字
        }
    },
    computed:{
    //借助mapState生产计算属性，从state中读取数据，（数组写法）
    ...mapState('countOptions',['sum','school','subject']),
    ...mapState('personOptions',['personList']),

    //借助mapGetters生产计算属性，从Getters中读取数据，数组写法
    ...mapGetters('countOptions',['bigSum']),
    },
    methods:{
        //借助mapMutations生产对应的方法，方法中会调用commit去联系mutations，（对象写法）
        ...mapMutations('countOptions',{increment:'JIA',decrement:'JIAN'}),

        //借助mapActions生产对应的方法，方法中会调用dispatch去联系actions，（对象写法）
        ...mapActions('countOptions',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
    }
}
</script>

<style lang="css">
    button{
        margin-left: 5px;
    }
</style>