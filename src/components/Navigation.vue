<template>
  <div>
    <div v-on:click="openNav()" class="nav" v-bind:class="{ close: navopen }">
      <span class="nav-span"></span>
      <span class="nav-span"></span>
      <span class="nav-span"></span>
    </div>
    <div class="nav-background" v-bind:class="{ open: navopen }">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
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

<style lang="scss" scoped>
div {
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

    &.close {
      span:first-of-type {
        transform: rotate(-45deg) translate(-4px, 5px);
        transition: 0.3s ease;
      }
      span:nth-of-type(2) {
        opacity: 0;
      }
      span:last-of-type {
        transform: rotate(45deg) translate(-5px, -6px);
        transition: 0.3s ease;
      }
    }
  }
  .nav-background {
    background-color: $grey;
    height: 100vh;
    position: fixed;
    z-index: 2;
    right: -100vw;
    transition: right 0.5s ease;
    // animation-name: slide;
    // animation-duration: 0.5s;
    // animation-direction: forwards;

    &.open {
      right: 0;
    }

    .nav-content {
      display: flex;
      flex-flow: column nowrap;
      width: 100vw;
      height: 100vh;
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
}
// @keyframes slide {
//   from {
//     left: -100vw;
//   }
//   to {
//     left: 0;
//   }
// }
</style>
