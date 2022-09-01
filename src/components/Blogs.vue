<template>
  <section id="market">
    <div class="container" id="box-container" v-if="posts">
      <div class="box">
        <img class="art-image" :src="post.post_image" alt="" />
        <div id="text">
          <h3 class="pt-1 text-white" id="title">{{ post.post_title }}</h3>
          <p id="category">{{ post.user_id }}</p>
          <p id="description" class="py-4">
            {{ post.post_content }}
          </p>
          <p id="description" class="py-4">
            {{ post.date_of_post }}
          </p>
          <router-link
            id="art-link"
            :to="{ name: 'SingleBlog', params: { id: post.post_id } }"
            >More info <i class="bi bi-arrow-right"></i
          ></router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Loading...</h1>
    </div>
  </section>
</template>

<script>
export default {
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
  background: rgb(35, 37, 38);
  height: max-content;
  width: 100%;
}
#box-container {
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
}

.box {
  height: max-content;
  width: fit-content;
  background: transparent;
  flex-basis: 50%;
  border-radius: 4px 4px;
  transition: all 0.7s ease-in-out;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 30px;
}

.box:hover {
  transform: translateY(-5px);
}

.art-image {
  height: auto;
  width: 400px;
  filter: brightness(100%);
  transition: all 1s ease-in-out;
}

#title {
  margin-top: 2%;
  font-size: xx-large;
  margin: 0 auto;
  font-weight: 600;
}
#address {
  padding-top: 2px;
  margin: 0 auto;
  font-size: 14px;
}

#category {
  color: rgb(224, 224, 224);
  font-size: 13px;
  font-weight: 300;
}

#description {
  color: rgb(240, 240, 240);
  font-size: 13px;
  font-weight: 300;
  width: fit-content;
}

.icons {
  margin: 0 auto;
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
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  border-bottom: 1px solid black;
  background-color: white;
  padding: 3px 10px;
}
</style>
