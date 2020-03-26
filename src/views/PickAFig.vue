<template>
  <section>
    <div class="header">
      <!--nav-->
      <div class="header-content">
        <h1>
          Pick a <br />
          MINIFIG
        </h1>
      </div>
    </div>
    <span class="line"></span>
    <div class="content">
      <div class="content-item">
        <div class="content-img">
          <img v-bind:src="require('@/assets/lego-head.png')" alt="" />
        </div>
        <div class="content-information">
          <h2>Minifig Head</h2>
          <div>
            <p>Description</p>
            <h1>>></h1>
          </div>
        </div>
        <span class="line"></span>
      </div>
      <div class="content-item">
        <div class="content-img">
          <img v-bind:src="require('@/assets/lego-torso1.png')" alt="" />
        </div>
        <div class="content-information">
          <h2>Minifig Torso</h2>
          <div>
            <p>Description</p>
            <h1>>></h1>
          </div>
        </div>
        <span class="line"></span>
      </div>
      <div class="content-item">
        <div class="content-img">
          <img v-bind:src="require('@/assets/lego-legs.png')" alt="" />
        </div>
        <div class="content-information">
          <h2>Minifig Legs</h2>
          <div>
            <p>Description</p>
            <h1>>></h1>
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
  name: "PickAFig",
  components: {
    BackToTop
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
