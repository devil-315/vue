export const mixin = {
    methods:{
        showName(){
            alert(this.name)
        }
    },
    //挂载完毕就执行
    mounted() {
        console.log("来啦老弟")
    }
}
export const mixin2 = {
    data(){
        return{
            x:100,
            y:200
        }
    }
}