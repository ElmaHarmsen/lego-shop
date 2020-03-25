<template>
  <section>
    <div class="header" id="header">
      <router-link v-bind:to="`/`">
        <div class="nav">
          <span class="nav-span"></span>
          <span class="nav-span"></span>
          <span class="nav-span"></span>
        </div>
      </router-link>
      <div class="header-content">
        <h1>
          POPULAR <br />
          Items
        </h1>
      </div>
    </div>
    <span class="line"></span>
    <div class="content">
      <!--Loop over data and create that many items of the content div-->
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
    <div class="footer" v-on:click="backToTop">
      <h2>
        Back to<br />
        TOP
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "PopularItems",
  data: function() {
    return {};
  },
  methods: {
    backToTop() {
      window.location.hash = "header";
      //Goes to the section with the id "header"
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

    .nav {
      display: flex;
      flex-flow: row wrap;
      position: fixed;
      z-index: 3;
      top: 1.5rem;
      right: 1.5rem;
      width: 55px;
      height: 50px;
      cursor: pointer;

      span:first-of-type {
        width: 25px;
        transform: rotate(-45deg);
        margin-top: 10px;
      }
      span:nth-of-type(2) {
        margin-left: 2px;
      }
      span:last-of-type {
        width: 25px;
        transform: rotate(45deg);
        margin-bottom: 5px;
      }
      .nav-span {
        width: 55px;
        height: 1px;
        background-color: $black;

        em {
          position: relative;
          top: -15px;
          font-size: 13px;
        }
      }
    }
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
      margin: 1rem 0px;
    }
    .results {
      text-align: center;
    }
  }
  .footer {
    text-align: center;
    padding: 1.5rem;
  }
}
</style>
