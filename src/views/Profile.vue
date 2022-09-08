<template>
  <div id="item-wrapper" v-if="user">
    <div id="item-container" class="p-2">
      <div class="row">
        <div class="col-md-3" id="img">
          <img id="artwork" :src="user.user.imgURL" alt="" />
        </div>
        <div class="col-md-9 words">
          <p class="text-white artist-name">{{ user.user.user_name }}</p>
        </div>
      </div>
      <div id="info-div ">
        <router-link class="text-white" to="/">Back to Home</router-link>
        <div v-if="user.user.type === 'admin'">
          <router-link to="/Admin" class="my-1 text-white">
            To Admin</router-link
          >
        </div>
      </div>
      <section id="Specials">
        <div class="container">
          <div class="section-title">
            <h2 class="text-uppercase">congratulations</h2>
            <p>
              You have found an easter egg this is just one of many
              <span><i class="fa-solid fa-thumbs-up"></i></span>
            </p>
          </div>
        </div>
        <div class="d-flex align-items-start">
          <div
            class="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Bio
            </button>
            <button
              class="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Profile
            </button>
            <button
              class="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              Messages
            </button>
            <button
              class="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              Settings
            </button>
          </div>
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <p id="image-description">
                {{ user.user.bio }}
              </p>
              <i class="fa-solid fa-pen"></i>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <p id="image-description">{{ usersPost[0].user_name }}</p>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <p id="image-description">
                {{ user.user.bio }}
              </p>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              <p id="image-description">
                {{ user.user.bio }}
              </p>
            </div>
          </div>
        </div>
      </section>
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
    usersPost() {
      return this.$store.state.usersPost;
    },
  },
  mounted() {
    console.log(this.$route.params.id);
    this.$store.dispatch("getSingleUser", this.$route.params.id);
    this.$store.dispatch("getUsersPost", this.$route.params.id);
  },
};
</script>

<style scoped>
.words {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}
#item-wrapper {
  min-height: 100vh;
  background: rgb(27, 27, 27);
  padding-top: 8rem;
  overflow-x: hidden;
  padding-bottom: 3rem;
  padding-left: 5rem;
  padding-right: 5rem;
}
#item-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: auto;
  width: 100%;
  min-height: 100vh;
  border: 1px solid #9967cc;
  border-radius: 10px;
}

.nav-link {
  color: white;
}
.nav-link:hover {
  color: #9967cc;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: white;
  background-color: #9967cc;
}
#artwork {
  border-radius: 50%;
  width: 200px;
  height: 200px;
}

.section-title {
  color: rgb(27, 27, 27);
}

#img {
  margin-top: 1rem;
}

.artist-name {
  font-size: 3rem;
}

.tab-content {
  min-width: 20rem;
}

.tab-pane {
  margin-top: 10px;
  color: white;
}
</style>
