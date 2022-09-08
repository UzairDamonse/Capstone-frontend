<template>
  <nav id="nav" class="navbar navbar-dark navbar-expand-lg bg-black">
    <div class="container-fluid" id="nav-stuff">
      <a v-if="!user" class="navbar-brand" id="logo"
        ><img
          id="nav_img"
          src="https://i.postimg.cc/bNqHj1B4/Screenshot-2022-08-22-114930.webp"
        />
      </a>
      <div class="nav-item" id="profile" v-if="user">
        <img :src="user.user.imgURL" alt="User pfp" id="pfp" />
        <ul class="dropdown">
          <li>
            <router-link
              class="nav-link"
              :to="{ name: 'Profile', params: { id: user.user.user_id } }"
              >Profile</router-link
            >
          </li>
          <li v-if="user">
            <button @click="logout()" id="logout" class="nav-link">
              Logout
            </button>
          </li>
        </ul>
      </div>
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
          <li class="nav-item" v-if="user">
            <router-link class="nav-link" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item" v-if="user">
            <router-link class="nav-link" to="/Blogs">Blogs</router-link>
          </li>
          <li class="nav-item" v-if="user">
            <router-link class="nav-link" to="/Contact">Contact</router-link>
          </li>
          <li class="nav-item" v-if="!user">
            <router-link class="nav-link" to="/Login">Login</router-link>
          </li>
          <li class="nav-item" v-if="!user">
            <router-link class="nav-link" to="/Register">Register</router-link>
          </li>
        </ul>
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
      this.$router.push("/login");
    },
  },
  mounted() {},
};
</script>

<style>
/*Navbar*/
#nav-stuff {
  height: 6rem;
  padding-top: 0.5rem;
}
.navbar {
  height: 7rem;
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
  border: 0;
  background-color: rgb(39, 39, 39);
}

.links {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: flex-end;
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
.nav-link:hover {
  font-size: 1.3rem;
  color: #9967cc;
}

#pfp {
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  margin-right: 1rem;
}

#profile ul.dropdown::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  bottom: 100%;
  left: 1.5em;
  border: 0.75rem solid transparent;
  border-top: none;
  border-bottom-color: rgb(39, 39, 39);
  filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
}

#profile ul.dropdown {
  background: rgb(39, 39, 39);
  display: none;
  position: absolute;
  z-index: 999;
  top: 90px;
  left: 2px;
  width: 6rem;
  padding: 1.125em 1.5em;
  font-size: 1.5rem;
  border-radius: 10px;
  color: black;
}
#profile:hover ul.dropdown {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}
#profile ul.dropdown li {
  display: block;
}
</style>
