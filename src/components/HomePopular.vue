<template>
  <section>
    <div v-if="loading" class="loading-wrapper">
      <img v-bind:src="require('@/assets/loader.gif')" alt class="loader" />
    </div>
    <div v-else class="content">
      <h2>Popular Items</h2>
      <p>{{ homePopularsJson.description }}</p>
      <img v-bind:src="homePopularsJson.img" alt />
    </div>
    <span class="line"></span>
  </section>
</template>

<script>
export default {
  name: "HomePopular",
  data: function() {
    return {
      loading: true,
      homePopularsJson: []
    };
  },
  created: async function() {
    await this.fetchData();
    this.loading = false;
  },
  methods: {
    async fetchData() {
      const homePopulars = await fetch(
        "https://lego--api.herokuapp.com/api/homepopularitem"
      );
      this.homePopularsJson = await homePopulars.json();
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  text-align: center;

  .content {
    padding: 1.5rem;

    img {
      width: 100%;
      height: auto;
      padding: 1.5rem 0px;
      z-index: -1;
    }
  }
  .content {
    h2:active {
      color: $mango;
      opacity: 1;
      transition: all 0.1s ease;
    }
  }
}
</style>
