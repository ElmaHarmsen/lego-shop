<template>
  <section>
    <div class="header">
      <BackToHome />
      <div class="header-content">
        <h1>
          Popular <br />
          items
        </h1>
      </div>
    </div>
    <span class="line"></span>
    <div class="content">
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
import BackToHome from "@/components/BackToHome.vue";
import LegoItem from "@/components/LegoItem.vue";
import BackToTop from "@/components/BackToTop.vue";

export default {
  name: "PopularItems",
  data: function() {
    return {
      popularItemsJson: []
    };
  },
  components: {
    BackToHome,
    LegoItem,
    BackToTop
  },
  created: function() {
    this.fetchData();
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
