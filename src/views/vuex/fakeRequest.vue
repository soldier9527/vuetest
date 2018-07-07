<template>
  <div>
      fakeRequest
      <div>
          <input type="button" value="请求" @click="handleClick">
      </div>
      <div v-if="this.$store.state.data">
        author: <img wi     dth="30" :src="this.$store.state.data.author.avatar_url" alt="">
        <br>
          name: {{this.$store.state.data.author.loginname}}
      </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick: function() {
      this.$store.dispatch("getData");
    }
  }
};
</script>
