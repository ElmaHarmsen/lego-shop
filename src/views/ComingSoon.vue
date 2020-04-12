<template>
  <section>
    <div class="header">
      <BackToHome />
      <div class="header-content">
        <h1>
          Coming <br />
          soon
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
        v-for="comingSoon in comingSoonsJson"
        v-bind:key="comingSoon.id"
      >
        <ComingSoonItem v-bind:soonData="comingSoon" />
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
import BackToHome from "@/components/BackToHome.vue";
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
    BackToHome,
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

    .results {
      text-align: center;
    }
  }
}
</style>
