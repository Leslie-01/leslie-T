//路由的使用步骤  5+2
// 1、下载 v3.6.5
// 2、引入
// 3、安装注册 Vue.use
// 4、创建路由对象
// 5、注入到 new Vue 中，建立关联


//2.两个核心步骤
//1.建组件,配规则
//2.准备导航链接,配置路由出口

import Find from '@/views/Find'
import My from '@/views/My'
import Friend from '../views/Friend'


import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)//  VueRouter 插件初始化


//创建了一个路由对象
const router = new VueRouter({
  //routes 路由规则们
  //route  一条路由规则{path:路径, components:组件}
  routes: [
    { path: '/find', component: Find },
    { path: '/friend', component: Friend },
    { path: '/my', component: My }
  ]
})

export default router
