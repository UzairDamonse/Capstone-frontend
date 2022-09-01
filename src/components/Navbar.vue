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
        <ul class="navbar-nav mb-2 mb-lg-0" id="links">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Register">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Blogs">Blogs</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/Admin">Admin</router-link>
          </li> -->
          <li class="nav-item">
            <button @click="logout()" id="logout" class="nav-link">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  components: {},
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

#links {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: flex-end;
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
}
</style>
