<template>
  <section id="item-view">
    <div id="item-wrapper">
      <div id="item-container" v-if="post">
        <div id="info-div">
          <p class="text-white artist-name">{{ post.user_id }}</p>
          <p id="image-description" class="text-white">
            " {{ post.post_content }} "
          </p>
        </div>
        <div class="d-flex flex-column align-items-start artist-name">
          <img id="artwork" :src="post.post_image" alt="" />
          <p class="my-1 mt-3 text-white">{{ post.post_title }}</p>
          <p class="my-1 text-white">{{ post.date_of_post }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    post() {
      return this.$store.state.post;
    },
  },
  mounted() {
    this.$store.dispatch("getSinglePost", this.id);
  },
};
</script>

<style>
#item-view {
  background: rgb(35, 37, 38);
  width: 100%;
  height: 100vh;
}
#item-wrapper {
  padding-top: 50px;
  /* height: 500px;
  width: 100%;
  background: rgb(35, 37, 38);  */
}
#item-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  background: rgb(39, 41, 42);
}

#artwork {
  width: 500px;
  height: auto;
  padding-left: 13px;
  border: 1px solid rgba(255, 255, 255, 0.068);
}

#image-description {
  font-size: 45px;
  margin-top: 52px;
  min-height: 510px;
  line-height: 155%;
}

#info-div {
  height: 650px;
  width: 500px;
  padding-right: 13px;
}

#collection-link {
  text-decoration: none;
  color: white;
  border-bottom: 1px solid white;
}
</style>
