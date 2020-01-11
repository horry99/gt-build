import React from 'react'
import ReactDOM from 'react-dom'
import Vue from 'vue'
ReactDOM.render(<h1>jsx</h1>, document.getElementById('root'))
// import tree shaking
import calc from './util/index'
// require 没有tree shaking
// const aaa = require('./util/index')
import moment from 'moment'
let bbb = require('./b.module')
import './style.css'
import './main.scss'
console.log(bbb);
let fn = () => {
    console.log('111');
}
fn()
console.log(window);
// import
// console.log(calc.cheap(1, 2));
// require
// console.log(aaa.default.cheap(1, 2))
// console.lo('111');

import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const r = moment().endOf('day').fromNow();
console.log(r)
@log
class A {
    a = 1
}
let a = new A()
console.log(a.a);

function log(target) {
    console.log(target, '23');
}


// 处理图片
/****
 * 1）js创建的图片
 * 2）css里的图片
 * 3）html里面的图片
 */
import bg from './image/login_bg.jpg'
var image = new Image()
image.src = bg
document.body.appendChild(image)
// console.log(Vue);