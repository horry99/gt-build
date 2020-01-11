// 1)代理
// /2)模拟数据
let xhr = new XMLHttpRequest()
xhr.open("get", '/api/user', true);

xhr.onload = function () {
    console.log(xhr.response);
}
xhr.send()