<template>
  <div id="login_body" class="d-flex justify-content-center align-items-center">
    <div class="login-box">
      <h2 id="login_title">Register</h2>
      <form @submit.prevent="register">
        <div class="user-box my-3">
          <input
            v-model="user_name"
            class="input"
            type="text"
            name="user_name"
            required
          />
          <label>User Name</label>
        </div>
        <div class="user-box my-3">
          <input
            v-model="email"
            class="input"
            type="email"
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
        <div class="user-box my-3">
          <input
            v-model="phone_number"
            class="input"
            type="text"
            name="phone_number"
          />
          <label
            >Phone Number <span class="text-muted"> * Optional</span></label
          >
        </div>
        <div class="user-box my-3">
          <input v-model="imgURL" class="input" type="text" name="imgURL" />
          <label
            >Image (in URL form)
            <span class="text-muted"> * Optional</span></label
          >
          <span
            ><a target="_blank" href="https://postimages.org/"
              ><i class="fa-regular fa-circle-question"></i></a
          ></span>
        </div>
        <div class="user-box my-3">
          <input v-model="bio" class="input" type="text" name="bio" />
          <label>Bio <span class="text-muted"> * Optional</span></label>
        </div>
        <button type="submit">Sign up</button>
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
    users() {
      return this.$store.state.users;
    },
  },
  data() {
    const user_type = "user";
    return {
      user_name: "",
      email: "",
      password: "",
      user_type: "",
      phone_number: "",
      imgURL: "",
      bio: "",
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
        user_name: this.user_name,
        email: this.email,
        password: this.password,
        user_type: this.user_type,
        phone_number: this.phone_number,
        imgURL: this.imgURL,
        bio: this.bio,
      });
      alert("Thank you for registering please login to continue");
    },
  },
};
</script>

<style scoped>
#login_body {
  background-color: black;
  min-height: 100vh;
  padding-top: 6rem;
  padding-bottom: 3rem;
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
