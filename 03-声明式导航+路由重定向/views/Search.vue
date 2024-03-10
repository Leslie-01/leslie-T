<template>
  <div class="search">
    <!-- <p>搜索关键字: {{ $route.query.key }} </p> -->
    <!-- 动态路由传参 -->
    <p>搜索关键字: {{ $route.params.words }}</p>
    <p>搜索结果: </p>
    <ul>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
      <li>.............</li>
    </ul>
  </div>
</template>

<script>
export default { 
  name: 'MyFriend',
  created () {
    // 在created中，获取路由参数
    // 查询参数传参 （适合传多个参数）   this.$route.query.参数名 获取查询参数
    // console.log(this.$route.query.key);


    // 动态路由传参   this.$route.params.参数名 获取动态路由参数
    console.log(this.$route.params.words);
    
  }
}
</script>

<style>
.search {
  width: 400px;
  height: 240px;
  padding: 0 20px;
  margin: 0 auto;
  border: 2px solid #c4c7ce;
  border-radius: 5px;
}
</style>