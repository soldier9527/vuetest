<template>
  <div>
     home,首页图片，一个在css，一个直接引入
      <div class="test"></div>
      <img src="../assets/bigImg.png" alt="">
  </div>
</template>
<script>
  export default {
    created: function() {
       console.log("加载home")
    }
  }
</script>
<style>
  .test{
    width: 100px;
    height: 100px;
    background: url('../assets/bigImg2.png')
  }
</style>
