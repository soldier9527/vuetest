<template>
  <div id="app">

    <div id="nav">
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    :router="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/router">嵌套路由</el-menu-item>
    <el-menu-item index="/nameRouter">命名路由</el-menu-item>
    <el-menu-item index="/nameView">命名视图</el-menu-item>
    <el-menu-item index="/redirect">重定向</el-menu-item>
    <el-menu-item index="/guard">导航守卫</el-menu-item>
    <el-menu-item index="/scroll">滚动相关</el-menu-item>
    <el-menu-item index="/lazyLoading">懒加载</el-menu-item>
    <el-menu-item index="/Vuex">Vuex</el-menu-item>

  </el-menu>
    </div>
    <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
    export default {
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    };
</script>

<style lang="scss">

</style>
