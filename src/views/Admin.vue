<template>
  <section id="admin">
    <div class="heading">
      <h1>POSTS ADMIN PAGE</h1>
    </div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-outline-light"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add post
    </button>

    <!-- Add Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content p-2">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Create a new post
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addPost" id="modal-form" class="p-2">
              <input
                type="text"
                id="sku-add"
                placeholder="Post Title"
                v-model="post_title"
              />
              <input
                type="text"
                placeholder="Post Content"
                v-model="post_content"
              />
              <input
                type="text"
                placeholder="Post Image"
                v-model="post_image"
              />

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Cancel
              </button>
              <button type="btn" class="btn btn-outline-dark" @click="addPost">
                Create post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <table class="table dark text-secondary">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">TITLE</th>
          <th scope="col">CONTENT</th>
          <th scope="col">IMG</th>
          <th scope="col">DATE</th>
          <th scope="col">USER</th>
          <th scope="col">EDIT</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.post_id">
          <td>{{ post.post_id }}</td>
          <td>{{ post.post_title }}</td>
          <td>{{ post.post_content }}</td>
          <td>
            <img v-bind:src="post.post_image" class="post.img" />
          </td>
          <td>{{ post.date_of_post }}</td>
          <td>{{ post.user_id }}</td>
          <td>
            <button type="btn">
              <i
                title="Edit"
                class="bi bi-pencil-square"
                id="edit"
                @click="toggleModal"
              ></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="heading">
      <h1>USERS ADMIN PAGE</h1>
    </div>
    <table class="table dark text-secondary">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">FULL NAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">BILLING ADDRESS</th>
          <th scope="col">COUNTRY</th>
          <th scope="col">CART</th>
          <th scope="col">PHONE</th>
          <th scope="col">USER ROLE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.user_id">
          <td>{{ user.user_id }}</td>
          <td>{{ user.type }}</td>
          <td>{{ user.user_name }}</td>
          <td>{{ user.imgURL }}</td>
          <td>{{ user.bio }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
          <td>
            <button type="btn">
              <i
                title="Edit"
                class="bi bi-pencil-square"
                id="edit"
                @click="toggleModal"
              ></i>
            </button>
            <button type="btn" @click="deleteuser">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  <!-- <button @click="console">click</button> -->
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
    // const user_id = this.user.user.user_id;

    return {
      user_id: "",
      post_title: "",
      post_content: "",
      post_image: "",
      date_of_post: "",
    };
  },
  methods: {
    console() {
      console.log(this.user.user.user_id);
    },
    addPost() {
      this.$store.dispatch("addPost", {
        user_id: this.user.user.user_id,
        post_title: this.post_title,
        post_content: this.post_content,
        post_image: this.post_image,
        date_of_post: this.date_of_post,
      });
    },

    editpost(id) {
      return this.$store.dispatch("editpost", id);
    },
    deletepost(id) {
      return this.$store.dispatch("deletepost", id);
    },
  },
  mounted() {
    return this.$store.dispatch("getAllUsers");
    // return this.$store.dispatch("getUser");
  },
};
</script>
<style scoped>
#admin {
  min-height: 100vh;
  background: rgb(27, 27, 27);
  padding-top: 8rem;
  overflow-x: hidden;
  padding-bottom: 3rem;
  padding-left: 5rem;
  padding-right: 5rem;
}
.heading {
  padding-top: 4rem;
  padding-bottom: 2rem;
  border: 1px 1px 1px 1px white;
}
img {
  aspect-ratio: 1;
  object-fit: cover;
  width: 13rem;
  height: 10rem;
}
</style>
