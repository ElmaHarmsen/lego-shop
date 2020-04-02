<template>
  <section>
    <div v-if="loading" class="loading-wrapper">
      <img v-bind:src="require('@/assets/loader.gif')" alt="" class="loader" />
    </div>
    <div v-else class="content">
      <h2>Popular Items</h2>
      <div>
        <!--Switching content-->
        <img v-bind:src="homePopularsJson.img" alt="" />
        <p>{{ homePopularsJson.description }}</p>
      </div>
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
        "http://localhost:8081/api/homepopularitem"
      );
      console.log("api fetching works!" + homePopulars);
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
    }
  }
}
</style>
