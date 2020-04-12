<template>
  <section>
    <div v-on:click="openUser()" class="user">
      <img v-bind:src="require('@/assets/lego-user.png')" alt="" />
    </div>
    <User v-if="useropen" />
    <div v-on:click="openNav()" class="nav">
      <span class="nav-span"></span>
      <span class="nav-span"></span>
      <span class="nav-span"></span>
    </div>
    <Navigation v-if="navopen" />
    <!-- !smth means that the item is falsey, otherwise it's true -->
    <div class="content">
      <h1>
        LEGO <br />
        universe
      </h1>
    </div>
    <span class="line"></span>
  </section>
</template>

<script>
import User from "./User.vue";
import Navigation from "./Navigation.vue";

export default {
  name: "Header",
  data: function() {
    return {
      navopen: false,
      useropen: false
      //By default it's not visible
    };
  },
  components: {
    User,
    Navigation
  },
  methods: {
    openNav() {
      this.navopen = !this.navopen;
      //This flips the value around,
      //meaning if it's already true it becomes false, and if it's false it becomes true
    },
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
    left: 1.5rem;
    top: 1.5rem;
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

  .nav {
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 3;
    cursor: pointer;
    height: calc(42px - 2px);
    width: calc(45px - 2px);
    right: 1.5rem;
    border: 1px solid $black;
    border-radius: 50%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;

    .nav-span {
      width: 25px;
      height: 1px;
      background-color: $black;
      margin: 3px;
    }
    // span:first-of-type {
    //   margin: 8px auto 2.5px;
    // }
    // span:nth-of-type(2) {
    //   margin: 2.5px auto;
    // }
    // span:last-of-type {
    //   margin: 2.5px auto 8px;
    // }
  }

  .content {
    padding: 1.5rem 1.5rem 0rem 1.5rem;
    margin: auto 0px;
  }
}
</style>
