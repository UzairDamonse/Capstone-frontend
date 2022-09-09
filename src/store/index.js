import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    user: null,
    users: null,
    usersPost: null,
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
    setUsersPost: (state, usersPost) => {
      state.usersPost = usersPost;
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
      (state.user = ""),
        (state.token = ""),
        (state.users = ""),
        (state.post = ""),
        (state.posts = ""),
        (state.usersPost = "");
    },
    noUsers(state) {
      state.users = "";
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
    getAllUsers: async (context) => {
      fetch("https://uzair-capstone.herokuapp.com/users")
        .then((res) => res.json())
        .then((data) => context.commit("setUsers", data))
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
        .then((data) => context.commit("setUsers", data))
        .catch((err) => console.log(err.message));
    },

    getUsersPost: async (context, id) => {
      fetch("https://uzair-capstone.herokuapp.com/posts/" + id + "/post")
        .then((res) => res.json())
        .then((data) => context.commit("setUsersPost", data))
        .catch((err) => console.log(err.message));
    },

    addPost: async (context, post) => {
      fetch("https://uzair-capstone.herokuapp.com/posts/", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.dispatch("getAllPosts", json));
    },

    editPost: async (context, post) => {
      console.log(post);
      await fetch(
        "https://uzair-capstone.herokuapp.com/posts/" + post.post_id,
        {
          method: "PATCH",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          context.state.msg = data.msg;
          context.dispatch("getAllPosts", post.post_id);
        });
    },

    deletePost: async (context, id) => {
      fetch("https://uzair-capstone.herokuapp.com/posts/" + id, {
        method: "DELETE",
      }).then(() => context.dispatch("getAllPosts"));
    },

    deleteUser: async (context, id) => {
      fetch("https://uzair-capstone.herokuapp.com/users/" + id, {
        method: "DELETE",
      }).then(() => context.commit("setUsers"));
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
