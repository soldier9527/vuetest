<template>
  <div>
    路由守卫：
    <ul>
        <li>进入</li>
        <li>更新数据时</li>
        <li>离开</li>
    </ul>
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    const answer = window.confirm("路由守卫：进入判断");
    if (answer) {
      next();
    } else {
      next(false);
    }
  },
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm("路由守卫：离开确认");
    if (answer) {
      next();
    } else {
      next(false);
    }
  }
};
</script>
