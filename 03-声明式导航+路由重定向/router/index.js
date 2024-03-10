import Home from "@/views/Home";
import Search from "@/views/Search";
import NotFind from "@/views/NotFind";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter); // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  routes: [
    // Vue路由的重定向 当网页打开时，url默认是/路径 未匹配到组件时，会出现空白
    // 说明：重定向-》匹配path后，强制跳转path路径
    // 语法 {path:匹配路径，redirect:重定向到的路径}
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    // { path: '/search', component: Search }
    //动态路由传参
    // { path: '/search/:words', component: Search }
    //  加个可选符 "?" 不传参数也可以匹配
    { path: "/search/:words?", component: Search },

    { path: "*", component: NotFind },

    /* Vue路由 -404
    作用：当路径找不到匹配时，给个提示页面
    位置：配在路由最后
    语法:path:"*" (任意路径)-前面不匹配就命中最后这个
    */
  ],
});

export default router;
