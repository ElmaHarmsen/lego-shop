<template>
  <section>
    <div class="header">
      <!--nav-->
      <div class="header-content">
        <h1>
          Coming <br />
          SOON
        </h1>
      </div>
    </div>
    <span class="line"></span>
    <div class="content">
      <!--Loop over data and create that many items of the content div-->
      <div
        class="content-item"
        v-bind:style="{
          backgroundImage: 'url(' + require('@/assets/lego-fiat.jpg') + ')'
        }"
      >
        <div class="information">
          <h2>LEGO Fiat 500</h2>
          <p>Some nice description</p>
        </div>
      </div>
      <div class="sub-information">
        <p>Expected releasedate | setnumber | pieces</p>
        <span class="line"></span>
      </div>
    </div>
    <div class="content">
      <div
        class="content-item"
        v-bind:style="{
          backgroundImage: 'url(' + require('@/assets/lego-fiat.jpg') + ')'
        }"
      >
        <div class="information">
          <h2>LEGO Fiat 500</h2>
          <p>Some nice description</p>
        </div>
      </div>
      <div class="sub-information">
        <p>Expected releasedate | setnumber | pieces</p>
        <span class="line"></span>
      </div>
    </div>
    <div class="content">
      <div
        class="content-item"
        v-bind:style="{
          backgroundImage: 'url(' + require('@/assets/lego-fiat.jpg') + ')'
        }"
      >
        <div class="information">
          <h2>LEGO Fiat 500</h2>
          <p>Some nice description</p>
        </div>
      </div>
      <div class="sub-information">
        <p>Expected releasedate | setnumber | pieces</p>
        <span class="line"></span>
      </div>
    </div>
    <div class="results">
      <em>All results found</em>
    </div>
    <span class="line"></span>
    <BackToTop />
  </section>
</template>

<script>
import BackToTop from "@/components/BackToTop.vue";

export default {
  name: "ComingSoon",
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
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      .information {
        margin: 15rem 1.5rem 1.5rem 1.5rem;
        background-color: $background;
        padding: 1rem 0.5rem;
        width: 100%;
        text-align: center;
      }
    }
    .sub-information {
      padding: 1rem 0px 0px 0px;
    }
  }
  .results {
    padding: 0px 0px 1.5rem 0px;
    text-align: center;
  }
}
</style>
