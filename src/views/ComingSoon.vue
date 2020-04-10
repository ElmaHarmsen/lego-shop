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
        <div class="title">
          <h2>{{ comingSoon.title }}</h2>
          <span v-if="favorite">
            <svg viewBox="0 0 24 24" fill="#ECA903" width="35px" height="35px">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </span>
          <span v-else>
            <svg viewBox="0 0 24 24" fill="#ECA903" width="35px" height="35px">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
              />
            </svg>
          </span>
        </div>
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
      favorite: false,
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

      .title {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;

        span {
          padding: 1rem 0px;
        }
      }

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
