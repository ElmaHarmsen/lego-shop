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
      <div
        v-on:click="openUser()"
        class="user"
        v-bind:class="{ open: useropen }"
      >
        <img v-bind:src="require('@/assets/lego-user.png')" alt="" />
      </div>
      <User v-bind:isOpen="useropen" />
    </div>
    <span class="line"></span>
  </section>
</template>

<script>
import User from "./User.vue";

export default {
  name: "RowNav",
  props: ["navItem"],
  data: function() {
    return {
      navopen: false,
      useropen: false,
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
  },
  components: {
    User
  },
  methods: {
    openUser() {
      this.useropen = !this.useropen;
      document.body.classList.toggle("overflow");
    }
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
      justify-content: space-between;
      align-items: center;
      margin: auto 0px;
      width: 100%;

      .nav-item {
        text-decoration: none;

        h2 {
          color: $black;
          padding: 0px 1.5rem;
          font-size: 21px !important;
        }
      }
      .nav-item h2:hover {
        color: $mango;
        transition: 0.2s ease;
      }
      .user {
        cursor: pointer;
        height: auto;
        width: 45px;
        padding: 0px 1.5rem;
        text-align: center;

        // width: calc(45px - 2px);
        // border: 1px solid $black;
        // border-radius: 50%;

        img {
          width: 2rem;
        }
      }
      .user:hover {
        transition: 0.2s ease;

        img {
          display: none;
        }
        &:after {
          content: "User";
          font-size: 21px;
          font-family: "handlee";
          color: $mango;
        }
      }
    }
  }
}
</style>
