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
      <div
        class="content-item"
        v-for="comingSoon in comingSoonsJson"
        v-bind:key="comingSoon.id"
      >
        <img v-bind:src="comingSoon.images[0].img" alt="" />
        <h2>{{ comingSoon.title }}</h2>
        <p>
          {{ comingSoon.description }} <br />
          <br />
          {{ comingSoon.releasedate }} | #{{ comingSoon.setnumber }} | Pieces:
          {{ comingSoon.pieces }}
        </p>
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
  name: "ComingSoon",
  data: function() {
    return {
      comingSoonsJson: []
    };
  },
  components: {
    BackToTop
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const comingSoons = await fetch("http://localhost:8081/api/comingsoon");
      console.log("api fetching works!" + comingSoons);
      this.comingSoonsJson = await comingSoons.json();
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
