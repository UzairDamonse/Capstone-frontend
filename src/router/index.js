import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/Blogs",
    name: "Blogs",
    component: () => import("../views/Blogs.vue"),
  },
  {
    path: "/Contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/Blogs/:id",
    name: "SingleBlog",
    component: () => import("../views/SingleBlog.vue"),
    props: true,
  },
  {
    path: "/Users/:id",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
