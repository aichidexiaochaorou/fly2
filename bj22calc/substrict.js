'use strict'

const subStrictFunc = (x,y)=>{
  return x - y;
}

//如果我们整个substrict.js文件中只需要唯一暴露出去一个成员
//注意:这个只能适用于唯一导出一个
module.exports = subStrictFunc
