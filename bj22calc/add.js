'use strict'
//假设写了很多代码，并且写完了
const addFunc = (x,y)=>{
  return x + y;
}

const name = "我是张三丰";


//把我们add.js中需要暴露出去给被人用的方法，成员暴露出去给别人用
module.exports = {
  addFunc : addFunc,
  name //这里面只写了一个name,这个name既是属性名也是属性值
}
