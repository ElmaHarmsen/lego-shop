<template>
  <section>
    <div class="nav-content">
      <router-link
        class="nav-item"
        v-bind:to="navitem.path"
        v-for="navitem in navContent"
        v-bind:key="navitem.id"
      >
        <h2>
          {{ navitem.content }}
        </h2>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Navigation",
  props: ["navItem"],
  data: function() {
    return {
      navContent: [
        {
          id: 0,
          content: "Home",
          path: "/"
        },
        {
          id: 1,
          content: "Popular Items",
          path: "/popularitems"
        },
        {
          id: 2,
          content: "Coming Soon",
          path: "/comingsoon"
        },
        {
          id: 3,
          content: "Pick a Brick",
          path: "/pickabrick"
        },
        {
          id: 4,
          content: "Pick a Fig",
          path: "/pickafig"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  background-color: $grey;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  z-index: 2;

  .nav-content {
    display: flex;
    flex-flow: column nowrap;
    width: 100vw;
    justify-content: center;
    margin: auto 0rem;

    .nav-item {
      text-decoration: none;

      h2 {
        color: $black;
        padding: 25px 0px;
      }
    }
  }
}
</style>
