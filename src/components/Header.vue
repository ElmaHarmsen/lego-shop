<template>
  <section>
    <div v-on:click="openNav" class="nav">
      <span class="nav-span"
        ><em>{{ navopen ? "close" : "open" }}</em></span
      >
      <span class="nav-span"><em>menu</em></span>
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
import Navigation from "./Navigation.vue";

export default {
  name: "Header",
  data: function() {
    return {
      navopen: false
      //By default it's not visible
    };
  },
  components: {
    Navigation
  },
  methods: {
    openNav() {
      this.navopen = !this.navopen;
      //This flips the value around,
      //meaning if it's already true it becomes false, and if it's false it becomes true
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

  .nav {
    display: flex;
    flex-flow: row wrap;
    position: fixed;
    z-index: 3;
    top: 1.5rem;
    right: 1.5rem;
    width: 55px;
    height: 50px;
    cursor: pointer;

    .nav-span {
      width: 55px;
      height: 1px;
      margin: 5px 0px;
      background-color: $black;

      em {
        font-size: 13px;
      }
    }
  }

  .content {
    padding: 1.5rem 1.5rem 0rem 1.5rem;
    margin: auto 0px;
  }
}
</style>
