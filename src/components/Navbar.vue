<template>
  <nav id="nav" class="navbar navbar-dark navbar-expand-lg bg-black">
    <div class="container-fluid" id="nav-stuff">
      <a class="navbar-brand" id="logo"
        ><img
          id="nav_img"
          src="https://i.postimg.cc/bNqHj1B4/Screenshot-2022-08-22-114930.webp"
        />
      </a>
      <button
        class="navbar-toggler justify-content-end"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#Toggler"
        aria-controls="Toggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="Toggler">
        <ul class="navbar-nav mb-2 mb-lg-0 links">
          <div class="d-flex flex-row" v-if="user">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Blogs">Blogs</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Contact">Contact</router-link>
            </li>
            <li class="nav-item">
              <button @click="logout()" id="logout" class="nav-link">
                Logout
              </button>
            </li>
          </div>
          <div class="d-flex flex-row" v-else>
            <li class="nav-item">
              <router-link class="nav-link" to="/Login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Register"
                >Register</router-link
              >
            </li>
          </div>
        </ul>
        <div class="nav-item" id="profile" v-if="user">
          <img :src="user.user.imgURL" alt="User pfp" id="pfp" />
          <!-- <router-link
            id="art-link"
            class="nav-link"
            :to="{ name: 'Profile', params: { id: user.user.user_id } }"
            >Profile</router-link
          > -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  components: {},
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    toggleNav() {
      document.getElementById("list").classList.toggle("active");
    },
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    },
  },
  mounted() {},
};
</script>

<style>
/*Navbar*/
#nav-stuff {
  height: 6rem;
}
.navbar {
  height: 6rem;
  position: fixed;
  width: 100%;
  z-index: 1000;
  padding: 0;
}
.navbar-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: smooth;
  align-items: center;
}

#logo {
  height: 100%;
  padding: 0;
  margin: 0;
}

#nav_img {
  width: 20rem;
  height: 6rem;
}

#logout {
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid black;
}

.links {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
}

#profile {
  display: flex;
  justify-self: flex-end;
  align-items: center;
}
.navbar-nav li {
  justify-content: center;
}

.nav-item {
  margin-right: 2rem;
  margin-bottom: 0.5rem;
}

.nav-link {
  font-size: 1.3rem;
  color: rgb(198, 198, 198);
}

#pfp {
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  margin-right: 1rem;
}
</style>
