<template>
  <blogs v-for="post in posts" :key="post.post_id" :post="post" />
</template>

<script>
// @ is an alias to /src
import Blogs from "@/components/Blogs.vue";

export default {
  components: {
    Blogs,
  },
  //   mounted() {
  //     this.$store.dispatch("getAllPosts");
  //   },
  computed: {
    user() {
      return this.$store.state.user;
    },
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>
