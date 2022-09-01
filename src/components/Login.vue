<template>
  <div id="login_body" class="d-flex justify-content-center align-items-center">
    <div class="login-box">
      <h2 id="login_title">Login</h2>
      <h3 v-if="user">Welcome {{ user.user.user_name }}</h3>
      <form v-else @submit.prevent="login">
        <div class="user-box my-3">
          <input
            v-model="email"
            class="input"
            type="text"
            name="email"
            required
          />
          <label>Email</label>
        </div>
        <div class="user-box my-3">
          <input
            v-model="password"
            class="input"
            type="password"
            name="password"
            required
          />
          <label>Password</label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      this.$router.push("/");
      console.log(user.user_name);
    },
  },
  mounted() {
    console.log(this.user);
  },
};
</script>

<style scoped>
#login_body {
  background-color: black;
  min-height: 100vh;
}

#login_title {
  color: #9967cc;
}

.login-box {
  width: 90%;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 90%;
  padding: 10px 0;
  padding-left: 1rem;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  padding-left: 4rem;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #9967cc;
  font-size: 1rem;
}
</style>
