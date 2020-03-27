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
          <img v-bind:src="require('@/assets/lego-hat.png')" alt="" />
          <h1>>></h1>
        </div>
        <span class="line"></span>
      </div>
      <div class="content-item">
        <div class="content-img">
          <img v-bind:src="require('@/assets/lego-head.webp')" alt="" />
          <h1>>></h1>
        </div>
        <span class="line"></span>
      </div>
      <div class="content-item">
        <div class="content-img">
          <img v-bind:src="require('@/assets/lego-torso1.png')" alt="" />
          <h1>>></h1>
        </div>
        <span class="line"></span>
      </div>
      <div class="content-item">
        <div class="content-img">
          <img v-bind:src="require('@/assets/lego-legs.png')" alt="" />
          <h1>>></h1>
        </div>
        <span class="line"></span>
      </div>
      <div class="submit" v-on:click="submit()">
        <h1>
          Create <br />
          Minifig
        </h1>
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
  },
  methods: {
    submit() {}
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

      .content-img {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        transition: 0.5s ease;
        //transform: translateX(-275px); //increases with the width of the img which is 275px

        img {
          width: 250px;
          height: auto;
        }
      }
    }
    .line {
      margin: 1.5rem 0px;
    }
    .submit {
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
