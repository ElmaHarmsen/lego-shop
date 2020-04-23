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
    <span class="line"></span>
  </section>
</template>

<script>
export default {
  name: "RowNav",
  props: ["navItem"],
  data: function() {
    return {
      navopen: false,
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
          content: "Pick a Minifig",
          path: "/pickafig"
        },
        {
          id: 5,
          content: "Your Collection",
          path: "/yourcollection"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@media screen and(min-width: 700px) {
  section {
    width: 70%;
    margin: 0px auto;

    .nav-content {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      margin: auto 0px;

      .nav-item {
        text-decoration: none;

        h2 {
          color: $black;
          padding: 0px 1.5rem;
          font-size: 21px !important;
        }
      }
    }
  }
}
</style>
