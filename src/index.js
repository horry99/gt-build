require('./a.module')
import { h } from './vDom'
let vNode = h('div', { id: 'aa', class: 'name', key: 1 }, h('span', { style: { color: 'red' } }, 'hello'), 'gt')
console.log(vNode)
console.log(process.env);


// 创建的虚拟dom
// {
//     type: 'div',
//     props: { id: 'aa', class: 'name'},
//     children: [
//         {
//             type: 'span',
//             props: { style: { color: 'red' } },
//             children: [
//                 {
//                     type: '',
//                     props: '',
//                     children: [],
//                     text: 'hello'
//                 }
//             ],
//             text: undefined
//         }, {
//             type: '',
//             props: '',
//             children: [],
//             text: 'gt'
//         }
//     ],
//     text: undefined
// }


// 解析成虚拟dom节点
// < div id = 'aa' class='name' >
//     <span style={color: 'red'}> hello</span >
//         gt
// </div >
