import "./css/index.css"
import "./css/index.scss"
// class Animal{
//     static info = {
//         name: "yxx"
//     }
// }
// console.log(Animal.info.name,"------------")
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import app from "./App.vue"
import router from "./routers.js"
// 导入自己的组件
/* 这种方式不能拆分代码
var login ={
    template: "<h1>这是login组件</h1>"
}
*/
/* 
import login from "./vue/login.vue"
import account from "./main/Account.vue"
import goodlist from "./main/GoodsList.vue"
*/
import login from "./vue/login.vue"

var vm = new Vue({
    el: "#app",
    data: {
        msg: "这是一个天大的玩笑"
    },
    // render: function(creatElement){
    //     return creatElement(login)
    // }
    render: creatElement =>creatElement(login)
})
var vm = new Vue({
    el: "#app2",
    render: creatElement =>creatElement(app),
    router
})