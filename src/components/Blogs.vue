<template>
  <section id="market">
    <div id="box-container" v-if="posts">
      <div class="box row">
        <div class="col-md-4 item">
          <img class="art-image" :src="post.post_image" alt="" />
          <div id="text">
            <h3 class="pt-1 text-white" id="title">{{ post.post_title }}</h3>
            <router-link
              id="art-link"
              :to="{ name: 'SingleBlog', params: { id: post.post_id } }"
              >More info <i class="bi bi-arrow-right"></i
            ></router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Loader />
    </div>
  </section>
</template>

<script>
import Loader from "@/components/Loader.vue";
export default {
  components: {
    Loader,
  },
  props: ["post"],
  computed: {
    posts() {
      console.log(this.$store.state.posts);
      return this.$store.state.posts;
    },
  },
};
</script>

<style>
#market {
  min-height: 100vh;
  background: rgb(27, 27, 27);
  padding-top: 8rem;
  overflow-x: hidden;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.box {
  background: transparent;
  border-radius: 4px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item {
  transition: all 0.7s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item:hover {
  transform: translateY(-5px);
}

.art-image {
  width: 100%;
  transition: all 1s ease-in-out;
}

#title {
  font-weight: 600;
}
#address {
  font-size: 1rem;
}

#category {
  color: rgb(224, 224, 224);
  font-size: 1rem;
  font-weight: 300;
}

#description {
  color: rgb(240, 240, 240);
  font-size: 1rem;
  font-weight: 300;
}

.icons {
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  font-weight: 300;
  font-size: 13px;
  padding-top: 10px;
  padding-bottom: 3px;
}

#text {
  padding-left: 3%;
  width: fit-content;
}

#art-link {
  color: black;
  text-decoration: none;
  border-bottom: 1px solid black;
  background-color: white;
  padding: 3px 10px;
}
</style>
