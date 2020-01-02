// 创建虚拟dom
export default function createElement(type, props, ...children) {
    // console.log('h创建了')
    // vue会有一个单独的key,如果属性里面有key，把它替换掉并删除这个属性
    let key
    if (props.key) {
        key = props.key
        delete props.key
    }
    // 判断子节点是否不是标签
    children = children.map(child => {
        if (typeof child === 'string') {
            return vNode(undefined, undefined, undefined, child)
        } else {
            return child
        }
    })
    return vNode(type, props, children)
}
function vNode(type, props, children, text) {
    return {
        type,
        props,
        children,
        text
    }
}