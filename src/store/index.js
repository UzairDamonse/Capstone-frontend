import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    user: null,
    users: null,
    token: null,
    post: null,
    posts: null,
    asc: true,
  },
  getters: {},
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setPosts: (state, posts) => {
      state.posts = posts;
    },
    setSinglePost: (state, post) => {
      state.post = post;
    },
    setToken: (state, token) => {
      state.token = token;
    },
    logout(state) {
      (state.user = ""), (state.token = ""), (state.users = "");
    },
  },
  actions: {
    login: async (context, payload) => {
      let res = await fetch(
        "https://uzair-capstone.herokuapp.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
          }),
        }
      );
      let data = await res.json();
      console.log(data);
      if (data.token) {
        context.commit("setToken", data.token);

        // Verify token

        fetch("https://uzair-capstone.herokuapp.com/users/users/verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token,
          },
        })
          .then((res) => res.json())
          .then((user) => {
            context.commit("setUser", user);
          });
      } else {
        alert("User not found");
      }
    },

    // REGISTER USER

    register: async (context, user) => {
      fetch("https://uzair-capstone.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUsers", json));
    },
    getAllPosts: async (context) => {
      fetch("https://uzair-capstone.herokuapp.com/posts")
        .then((res) => res.json())
        .then((data) => context.commit("setPosts", data))
        .catch((err) => console.log(err.message));
    },
    getSinglePost: async (context, id) => {
      fetch("https://uzair-capstone.herokuapp.com/posts/" + id)
        .then((res) => res.json())
        .then((data) => context.commit("setSinglePost", data))
        .catch((err) => console.log(err.message));
    },
    getSingleUser: async (context, id) => {
      fetch("https://uzair-capstone.herokuapp.com/users/" + id)
        .then((res) => res.json())
        .then((data) => context.commit("setUser", data))
        .catch((err) => console.log(err.message));
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
