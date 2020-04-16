<template>
  <section>
    <div class="header">
      <Navigation />
      <div class="header-content">
        <h1>
          Popular <br />
          items
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
        v-for="popularItem in popularItemsJson"
        v-bind:key="popularItem.id"
      >
        <LegoItem v-bind:legoData="popularItem" />
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
import Navigation from "@/components/Navigation.vue";
import LegoItem from "@/components/LegoItem.vue";
import BackToTop from "@/components/BackToTop.vue";

export default {
  name: "PopularItems",
  data: function() {
    return {
      loading: true,
      popularItemsJson: []
    };
  },
  components: {
    Navigation,
    LegoItem,
    BackToTop
  },
  created: async function() {
    await this.fetchData();
    this.loading = false;
  },
  methods: {
    async fetchData() {
      const popularItems = await fetch(
        "https://lego--api.herokuapp.com/api/popularitems"
      );
      this.popularItemsJson = await popularItems.json();
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
