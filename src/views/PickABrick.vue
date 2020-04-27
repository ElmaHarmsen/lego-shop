<template>
  <section>
    <div class="header">
      <Navigation class="big_not" />
      <div class="header-content">
        <h1>
          Pick a <br class="big_break" />
          brick
        </h1>
      </div>
    </div>
    <span class="line"></span>
    <RowNav class="big_rownav" />
    <div v-if="loading" class="loading-wrapper">
      <img v-bind:src="require('@/assets/loader.gif')" alt="" class="loader" />
    </div>
    <div v-else class="content">
      <h1 class="content-header"></h1>
      <span class="line"></span>
      <div class="content-stuff">
        <div class="brick-slider">
          <BrickShape v-bind:bricks="squareBrick" />
          <BrickShape v-bind:bricks="roundBrick" />
          <BrickShape v-bind:bricks="flatBrick" />
        </div>
        <h1 class="forward" v-on:click="goForward()">>></h1>
      </div>
    </div>
    <span class="line"></span>
    <BackToTop />
  </section>
</template>

<script>
import BrickShape from "@/components/BrickShape.vue";
import RowNav from "@/components/RowNav.vue";
import Navigation from "@/components/Navigation.vue";
import BackToTop from "@/components/BackToTop.vue";

export default {
  name: "PickABrick",
  props: ["brickColor"],
  data: function() {
    return {
      loading: true,
      currentImageIndex: 0,
      pickBricksJson: []
    };
  },
  components: {
    BrickShape,
    RowNav,
    Navigation,
    BackToTop
  },
  created: async function() {
    await this.fetchData();
    this.loading = false;
  },
  computed: {
    squareBrick: function() {
      return this.pickBricksJson.filter(brick => brick.shape === "Square");
    },
    roundBrick: function() {
      return this.pickBricksJson.filter(brick => brick.shape === "Round");
    },
    flatBrick: function() {
      return this.pickBricksJson.filter(brick => brick.shape === "Flat");
    }
  },
  methods: {
    async fetchData() {
      const pickBricks = await fetch(
        "https://lego--api.herokuapp.com/api/pickabrick"
      );
      this.pickBricksJson = await pickBricks.json();
    },
    goForward() {
      const imageWidth = document.querySelector(".content-item").clientWidth;
      this.currentImageIndex++;
      if (this.currentImageIndex > 2) {
        this.currentImageIndex = 0;
      } //Sets the index of the last item to 0 so it goes back and start from the beginning
      document.querySelector(
        ".brick-slider"
      ).style.transform = `translateX(-${imageWidth *
        this.currentImageIndex}px)`;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 175px 1px 1fr 1px 125px;

  .header {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    text-align: center;

    .header-content {
      margin: auto 0px;
      padding: 1.5rem 1.5rem 0rem 1.5rem;
    }
  }
  .content {
    padding: 1.5rem;
    overflow-x: hidden;

    .content-header {
      text-align: center;
      &:after {
        animation: changeContent 8s linear 2s infinite;
        display: block;
        content: "#1: Pick a Shape";
        color: $blue;
        font-family: "handlee";
        font-size: 35px;
      }
    }
    .content-stuff {
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;

      .brick-slider {
        display: flex;
        flex-flow: row nowrap;
        transition: 0.5s ease;
      }
      .forward {
        position: absolute;
        z-index: 1;
        right: 0;
        padding: 0px 1.5rem;
        cursor: pointer;
      }
    }
  }
}
@keyframes changeContent {
  0% {
    content: "#1: Pick a Shape";
  }
  50% {
    content: "#2: Pick a Color";
  }
  100% {
    content: "#3: Pick a Brick";
  }
}
@media screen and(min-width: 700px) {
  section {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 125px 1px 55px 1fr 1px 100px;

    .header,
    .line,
    .content {
      width: 70%;
      margin: 0px auto;
    }
    .content {
      .line {
        width: 100% !important;
      }
      .content-stuff {
        .forward {
          right: 15%;
        }
      }
    }
  }
}
</style>
