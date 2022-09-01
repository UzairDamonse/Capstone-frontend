<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style>
@font-face {
  font-family: fonty;
  src: url("https://fonts.googleapis.com/css2?family=Crimson+Text:ital@1&family=Orbitron&display=swap");
}

:root {
  --white: #cdd1c8;
  --black: #303030;
  --grey: #bfbfbf;
  --blue: #316e7b;
  --red: #ed254e;
}

#app {
  font-family: fonty;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #9967cc;
}
</style>
