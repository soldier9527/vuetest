<template>
  <div>
      lazyModule
  </div>
</template>
<script>
export default {
  created: function() {
    console.log(this.$route.params);
  }
};
</script>
