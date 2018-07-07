<template>
  <div>
      <p>commit 提交mutation只能进行同步操作</p>
    <input type="button" value='+' @click='$store.commit("increment")'>
    {{$store.state.count}}
    <input type="button" value='-' @click='$store.commit("substract")'>
  </div>
</template>
