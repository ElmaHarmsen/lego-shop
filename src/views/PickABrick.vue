<template>
  <section>
    <div class="header">
      <!--nav-->
      <div class="header-content">
        <h1>
          Pick a<br />
          BRICK
        </h1>
      </div>
    </div>
    <span class="line"></span>
    <div class="content">
      <!--Loop over data and create that many items of the content-item div-->
      <div class="content-item">
        <div class="content-img">
          <img
            v-for="image in contentImage"
            v-bind:key="image.id"
            alt=""
            v-bind:src="image.src"
            class="brick-img"
          />
        </div>
        <!--Long row with images, with overflow hidden, increase transform translateX + width of img-->
        <div class="content-information">
          <h2>Brick 2 x 2, Square</h2>
          <div>
            <p>{{ contentImage[currentImageIndex].color }}</p>
            <h1 v-on:click="goForward">>></h1>
            <!--Button to go forward to next item-->
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
</template>

<script>
import BackToTop from "@/components/BackToTop.vue";

export default {
  name: "PickABrick",
  props: ["brickColor"],
  data: function() {
    return {
      currentImageIndex: 0,
      contentImage: [
        {
          id: 0,
          type: "square",
          src: require("@/assets/lego-brick.png"),
          color: "Middle Green"
        },
        {
          id: 1,
          type: "square",
          src: require("@/assets/lego-brick2orange.png"),
          color: "Orange"
        },
        {
          id: 2,
          type: "square",
          src: require("@/assets/lego-brick2red.png"),
          color: "Red"
        }
      ]
    };
  },
  components: {
    BackToTop
  },
  methods: {
    goForward() {
      const imageWidth = document.querySelector(".brick-img").clientWidth;
      this.currentImageIndex++;
      if (this.contentImage.length <= this.currentImageIndex) {
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
      padding: 1.5rem;
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
