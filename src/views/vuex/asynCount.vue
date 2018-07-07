<template>
  <div>
      <p>使用action 提交异步操作</p>
      <p>1s延迟，模仿接口请求</p>
    <input type="button" value='+' @click='$store.dispatch("increment")'>
    {{$store.state.count}}
    <input type="button" value='-' @click='$store.commit("substract")'>
    <div>
      <hr>
      context 上下文对象
      context.state,context.getters来获取state和getters,但不是store本身
    </div>
  </div>
</template>
