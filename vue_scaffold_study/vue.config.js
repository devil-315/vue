module.exports = {
  pages:{
    index:{
      //入口
      entry: 'src/main.js',
    },
  },
  lintOnSave:false,//关闭语法检查
  //开启代理服务器（方式一）
  // devServer: {
  //   //告诉代理服务器把请求转发给谁
  //   proxy: 'http://localhost:8000'
  // },
  //开启代理服务器（方式二）
  devServer: {
    proxy: {
       //'/api': 请求前缀， 想走代理就在请求前面加 请求前缀， 不想走就不加
      '/api': {
        target: 'http://localhost:8000',

        //http://localhost:8080/api/person ==>http://localhost:8080/person
        pathRewrite:{'^/api':''}

        // ws: true,  //用于支持 websocket
        // changeOrigin: true  //用于控制请求头中的host值,默认值为true
      },
      '/devil': {
        target: 'http://localhost:8001',

        //http://localhost:8080/devil/animal ==>http://localhost:8080/animal
        pathRewrite:{'^/devil':''}
        
        // ws: true,  //用于支持 websocket
        // changeOrigin: true  //用于控制请求头中的host值,默认值为true
      }
    }
  }
}
