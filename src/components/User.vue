<template>
  <section>
    <div class="user-content">
      <router-link
        class="user-item"
        v-bind:to="useritem.path"
        v-for="useritem in userContent"
        v-bind:key="useritem.id"
      >
        <img v-bind:src="useritem.url" alt="" />
        <h2>
          {{ useritem.content }}
        </h2>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "User",
  props: ["userItem"],
  data: function() {
    return {
      userContent: [
        {
          id: 1,
          content: "Avatar Name",
          path: "/youravatar",
          url: require("@/assets/lego-user.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  background-color: $mango;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  z-index: 4;

  .user-content {
    display: flex;
    flex-flow: column nowrap;
    width: 100vw;
    justify-content: center;
    margin: auto 0rem;

    .user-item {
      text-decoration: none;

      img {
        width: 50vw;
        height: auto;
        padding: 1.5rem;
      }

      h2 {
        color: $black;
      }
    }
  }
}
</style>
