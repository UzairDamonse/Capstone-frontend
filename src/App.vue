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

[type="submit"] {
  width: 7rem;
  font-size: 1.2rem;
  background: #ffffff;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  color: rgb(0, 0, 0);
  transition: all 0.3s;
  margin-top: -4px;
  font-weight: 500;
}
[type="submit"]:hover {
  background: #9967cc;
  color: white;
}
</style>
