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
      <div
        class="content-item"
        v-for="pickBrick in pickBricksJson"
        v-bind:key="pickBrick.id"
      >
        <div class="content-img">
          <img
            v-for="image in pickBricksJson"
            v-bind:key="image.id"
            alt=""
            v-bind:src="pickBrick.img"
            class="brick-img"
          />
        </div>
        <div class="content-information">
          <h2>{{ pickBrick.type }}, {{ pickBrick.shape }}</h2>
          <div>
            <p>{{ pickBrick.color }}</p>
            <h1 v-on:click="goForward">>></h1>
          </div>
        </div>
        <span class="line"></span>
      </div>
      <div class="results">
        <em>All results found</em>
      </div>
    </div>
    <span class="line"></span>
    <BackToTop />
  </section>
  <!--color picker-->
</template>

<script>
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
    Navigation,
    BackToTop
  },
  created: async function() {
    await this.fetchData();
    this.loading = false;
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
      if (this.pickBricksJson.length <= this.currentImageIndex) {
        this.currentImageIndex = 0;
      } //Sets the index of the last item to 0 so it goes back and start from the beginning
      document.querySelector(
        ".content-img"
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

    .content-item {
      display: flex;
      flex-flow: row wrap;
      text-align: left;

      .content-img {
        display: flex;
        flex-flow: row nowrap;
        transition: 0.5s ease;
        //transform: translateX(-275px); //increases with the width of the img which is 275px

        img {
          width: 300px;
          height: auto;
        }
      }
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
    .results {
      text-align: center;
    }
  }
}
</style>
