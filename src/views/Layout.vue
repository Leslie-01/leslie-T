<template>
  <div class="h5-wrapper">
    <div class="content">
      <!-- 内容 -->
      <!-- 二级路由出口,匹配到的二级路由组件就会展示 -->
      <router-view></router-view>


    </div>
    <nav class="tabbar">
      <!-- 
        导航高亮
        1、将 a 标签 替换成router-link（to）
        2、结合高亮类名实现效果(router-link-active 模糊匹配)
       -->
      <router-link to="/article">面经</router-link>
      <router-link to="/collect">收藏</router-link>
      <router-link to="/like">喜欢</router-link>
      <router-link to="/user">我的</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "LayoutPage",
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>

<style lang="less" scoped>
.h5-wrapper {
  .content {
    margin-bottom: 51px;
  }

  .tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    background: #fff;
    border-top: 1px solid #e4e4e4;

    a {
      flex: 1;
      text-decoration: none;
      font-size: 14px;
      color: #333;
      -webkit-tap-highlight-color: transparent;
    }

    a.router-link-active {
      color: red;
    }
  }
}
</style>