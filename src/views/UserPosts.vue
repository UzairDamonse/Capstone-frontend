import {toRaw} from 'vue'
<template>
  <section id="userPosts" v-if="userPosts">
    <div v-for="(userPosts, id) in userPosts" :key="id">
      {{ userPosts.post_title }}
      <img :src="userPosts.post_image" alt="" />
    </div>
    <!-- <div v-for="userPost in userPosts" :key="userPost.id">
    </div>
    <h1>{{ userPost.user_name }}</h1> -->
  </section>
  <div v-if="userPosts === []">
    <h2>No posts yet</h2>
  </div>
</template>
<script>
import { toRaw } from "@vue/reactivity";
export default {
  props: ["id"],
  computed: {
    user() {
      return this.$store.state.user;
    },
    userPosts() {
      let posts = toRaw(this.$store.state.posts);
      let id = this.$store.state.user.user.user_id;
      let i;
      let userPosts = [];
      for (i = 0; i < posts.length; i++) {
        if (posts[i].user_id == id) {
          userPosts.push(posts[i]);
        }
      }
      return userPosts;
    },
  },
  mounted() {
    console.log(this.userPosts);
    // this.$store.dispatch("getPost");
    return this.$store.dispatch(
      "getUsersPost",
      this.$store.state.user.user.user_id
    );
  },
};
</script>
<style scoped>
#userPosts {
  min-height: 100vh;
  background: rgb(27, 27, 27);
  overflow-x: hidden;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
