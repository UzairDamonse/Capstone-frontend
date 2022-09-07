<template>
  <div class="home">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";

export default {
  components: {
    Login,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style>
.home {
  min-height: 100vh;
  background: rgb(27, 27, 27);
  overflow-x: hidden;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
