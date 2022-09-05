<template>
  <div id="item-wrapper" v-if="user">
    <div
      id="item-container"
      v-for="user in user"
      :key="user.user_id"
      :user="user"
    >
      <div id="info-div ">
        <router-link class="text-white" to="/">Back to Home</router-link>
        <p class="text-white artist-name">{{ user.user_name }}</p>
        <p id="image-description" class="text-white">" {{ user.bio }} "</p>
      </div>
      <div class="d-flex flex-column align-items-start artist-name">
        <img id="artwork" :src="user.imgURL" alt="" />
        <p class="my-1 mt-3 text-white">{{ user.email }}</p>
        <p class="my-1 text-white">{{ user.phone_number }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    console.log(this.$route.params.id);
    this.$store.dispatch("getSingleUser", this.$route.params.id);
  },
};
</script>

<style>
.title {
  padding-top: 20rem;
}
#item-view {
  background: rgb(35, 37, 38);
  width: 100%;
  height: 100vh;
}
#item-wrapper {
  padding-top: 50px;
  min-height: 100vh;
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
  min-height: 100vh;
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
