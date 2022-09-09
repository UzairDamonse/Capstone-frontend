<template>
  <i
    title="Edit"
    class="bi bi-pencil-square"
    id="edit"
    @click="toggleModal"
  ></i>
  <div v-if="active" class="mod">
    <form @submit.prevent="updatePost(post.post_id)">
      <div>TITLE OF POST</div>
      <input type="text" v-model="post.post_title" />
      <div>POST CONTENT</div>
      <input type="text" v-model="post.post_content" />
      <div>IMAGE URL</div>
      <input type="text" v-model="post.post_image" />

      <br />
      <button type="submit">Save</button>
      <button type="button" @click="toggleModal">Close</button>
    </form>
  </div>
</template>
<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    users() {
      return this.$store.state.users;
    },
    post() {
      return this.$store.state.post;
    },
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      user_id: "",
      post_title: "",
      post_content: "",
      post_image: "",
      date_of_post: "",
      active: false,
    };
  },
  methods: {
    toggleModal() {
      this.active = !this.active;
    },
    console() {
      console.log(this.user.user.user_id);
    },
    updatePost() {
      this.$store.dispatch("updatePost", {
        user_id: this.user.user.user_id,
        post_title: this.post_title,
        post_content: this.post_content,
        post_image: this.post_image,
        date_of_post: this.date_of_post,
      });
    },
  },
};
</script>
<style scoped>
.mod {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 30px;
  border: 5px solid black;
  z-index: 100;
}
#edit {
  font-size: 20px;
  font-weight: 900;
  color: cornflowerblue;
}
</style>
