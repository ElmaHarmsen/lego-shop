<template>
  <section>
    <div v-on:click="openUser()" class="user">
      <img v-bind:src="require('@/assets/lego-user.png')" alt="" />
    </div>
    <User v-if="useropen" />
    <!-- !smth means that the item is falsey, otherwise it's true -->
    <div class="content">
      <h1>
        LEGO <br class="big_break" />
        universe
      </h1>
    </div>
    <span class="line"></span>
  </section>
</template>

<script>
import User from "./User.vue";

export default {
  name: "Header",
  data: function() {
    return {
      useropen: false
      //By default it's not visible
    };
  },
  components: {
    User
  },
  methods: {
    openUser() {
      this.useropen = !this.useropen;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  text-align: center;

  .user {
    position: fixed;
    right: 1rem;
    top: 1rem;
    z-index: 5;
    cursor: pointer;
    height: auto;
    width: calc(45px - 2px);
    border: 1px solid $black;
    border-radius: 50%;

    img {
      padding: 0.5rem;
      width: 1.5rem;
    }
  }

  .content {
    padding: 1rem 1rem 0rem 1rem;
    margin: auto 0px;
  }
}
@media screen and(min-width: 700px) {
  section {
    width: 70%;
    margin: 0px auto;
    .user {
      display: none;
    }
    .content {
      padding: 1.5rem 1.5rem 0rem 1.5rem;
    }
  }
}
</style>
