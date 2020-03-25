<template>
  <section>
    <div class="header">
      <!--nav-->
      <div class="header-content">
        <h1>
          POPULAR <br />
          Items
        </h1>
      </div>
    </div>
    <span class="line"></span>
    <div class="content">
      <!--Loop over data and create that many items of the content-item div-->
      <div class="content-item">
        <img v-bind:src="require('@/assets/lego-treehouse.jpg')" alt="" />
        <h2>LEGO Ideas Treehouse</h2>
        <p>Some nice descpription</p>
        <p>Set number | pieces | from year</p>
        <span class="line"></span>
      </div>
      <div class="content-item">
        <img v-bind:src="require('@/assets/lego-treehouse.jpg')" alt="" />
        <h2>LEGO Ideas Treehouse</h2>
        <p>Some nice descpription</p>
        <p>Set number | pieces | from year</p>
        <span class="line"></span>
      </div>
      <div class="content-item">
        <img v-bind:src="require('@/assets/lego-treehouse.jpg')" alt="" />
        <h2>LEGO Ideas Treehouse</h2>
        <p>Some nice descpription</p>
        <p>Set number | pieces | from year</p>
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
  name: "PopularItems",
  data: function() {
    return {};
  },
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

      img {
        width: 100%;
        height: auto;
      }
      h2 {
        padding: 1rem 0px;
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
