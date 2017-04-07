/**
 *calc.js的目的
 *    导入比较分散的模块中的成员，在这里统一暴露出去给别人用
 *
 *步骤:
 *  1、导入比较分散的那个模块中的需要的成员
 *
 *  2、再统一暴露出去给别人用
 * 
 */
const path = require('path')

//1、导入我需要的东西
//导入add.js中的成员
const addObj = require(path.join(__dirname,'add.js'))

//导入substrict中的成员(成员可以是js对象，函数，常量...)
const subStrictFunc = require(path.join(__dirname,'substrict.js'))

//2、导出给别人用
module.exports  = {
    addFunc : addObj.addFunc,
    subStrictFunc : subStrictFunc
}
