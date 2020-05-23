<template>
  <section>
    <div class="header">
      <Navigation class="big_not" />
      <div class="header-content">
        <h1>
          Coming <br class="big_break" />
          soon
        </h1>
      </div>
    </div>
    <span class="line"></span>
    <RowNav class="big_rownav" />
    <div v-if="loading" class="loading-wrapper">
      <img v-bind:src="require('@/assets/loader.gif')" alt="" class="loader" />
    </div>
    <div v-else class="content-background">
      <div class="content">
        <div
          class="content-item"
          v-for="comingSoon in comingSoonsJson"
          v-bind:key="comingSoon.id"
        >
          <ComingSoonItem v-bind:soonData="comingSoon" />
        </div>
        <div class="results">
          <em>All results found</em>
        </div>
      </div>
    </div>
    <span class="line"></span>
    <BackToTop />
  </section>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import RowNav from "@/components/RowNav.vue";
import ComingSoonItem from "@/components/ComingSoonItem.vue";
import BackToTop from "@/components/BackToTop.vue";

export default {
  name: "ComingSoon",
  data: function() {
    return {
      loading: true,
      favorite: false,
      comingSoonsJson: []
    };
  },
  components: {
    Navigation,
    RowNav,
    ComingSoonItem,
    BackToTop
  },
  created: async function() {
    await this.fetchData();
    this.loading = false;
  },
  methods: {
    async fetchData() {
      const comingSoons = await fetch(
        "https://lego--api.herokuapp.com/api/comingsoon"
      );
      this.comingSoonsJson = await comingSoons.json();
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 175px 1px 1fr 1px 125px;

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
  .content-background {
    padding: 1rem;
    background: repeating-linear-gradient(
      -45deg,
      #0e9ab0,
      #0e9ab0 15px,
      #fff 15px,
      #fff 30px
    );

    .content {
      background-color: $background;
      padding: 1.5rem;

      .results {
        text-align: center;
      }
    }
  }
}
@media screen and(min-width: 700px) {
  section {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 125px 1px 55px 1fr 1px 100px;

    .header,
    .line,
    .content-background {
      width: 70%;
      margin: 0px auto;
    }
    .content-background {
      width: calc(70% - 3rem);
      padding: 1.5rem;
    }
  }
}
</style>
