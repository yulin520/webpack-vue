import VueRouter from "vue-router"
//1.导入组件
import account from "./main/Account.vue"
import goodlist from "./main/GoodsList.vue"
import login from "./subcom/login.vue"
import register from "./subcom/register.vue"

//2.创建路由对象
var router = new VueRouter({
    routes: [
        {
            path: "/account",
            component: account,
            children: [
                { path: "login", component: login},
                { path: "register", component: register}
            ]
        },
        {
            path: "/goodslist", component: goodlist
        }
    ]
})
export default router