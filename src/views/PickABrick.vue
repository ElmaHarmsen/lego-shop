<template>
  <section>
    <div class="header">
      <Navigation />
      <div class="header-content">
        <h1>
          Pick a<br />
          brick
        </h1>
      </div>
    </div>
    <span class="line"></span>
    <div v-if="loading" class="loading-wrapper">
      <img v-bind:src="require('@/assets/loader.gif')" alt="" class="loader" />
    </div>
    <div v-else class="content">
      <h1 class="content-header"></h1>
      <span class="line"></span>
      <div class="brick-slider">
        <BrickShape v-bind:bricks="squareBrick" />
        <BrickShape v-bind:bricks="roundBrick" />
        <BrickShape v-bind:bricks="flatBrick" />
      </div>
      <span class="line"></span>
      <div class="forward">
        <h1 v-on:click="goForward()">>></h1>
      </div>
      <!-- <div class="content-information">
        <h2>Shape: {{ currentBrick.shape }}</h2>
        <div>
          <p>Color: {{ currentBrick.color }}</p>
          <h1 v-on:click="goForward()">>></h1>
        </div>
      </div> -->
    </div>
    <span class="line"></span>
    <BackToTop />
  </section>
</template>

<script>
import BrickShape from "@/components/BrickShape.vue";
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
      const imageWidth = document.querySelector(".brick-img").clientWidth;
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
  grid-template-rows: 175px 1fr 15%;

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
    overflow: hidden;

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
    .brick-slider {
      display: flex;
      flex-flow: row nowrap;
      text-align: left;
      transition: 0.5s ease;
    }
    .forward {
      text-align: right;
    }
    .content-information {
      width: 100%;

      h2 {
        padding: 1rem 0px;
      }
      div {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        h1 {
          cursor: pointer;
        }
      }
    }
    .line {
      margin: 1.5rem 0px;
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
</style>
