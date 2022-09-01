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
