<template>
  <section>
    <div v-if="loading" class="loading-wrapper">
      <img v-bind:src="require('@/assets/loader.gif')" alt class="loader" />
    </div>
    <div v-else class="content">
      <h2>Popular Items</h2>
      <p>{{ homePopularsJson.description }}</p>
      <img v-bind:src="homePopularsJson.images[0].img" alt />
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
    padding: 2rem 1rem;

    img {
      width: 100%;
      height: auto;
      padding: 2rem 0px;
    }
  }
}
@media screen and(min-width: 700px) {
  section {
    height: 100%;
    border-left: 1px solid $grey;
    border-right: 1px solid $grey;

    .content {
      height: 100%;
      display: flex;
      flex-flow: column;
      padding: 1.5rem;

      img {
        width: 100%;
        height: auto;
        margin: auto 0px;
      }
    }
    .content:hover {
      h2 {
        color: $mango;
        transition: 0.3s ease;
      }
    }
  }
}
</style>
