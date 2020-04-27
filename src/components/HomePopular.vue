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
    }
  }
}
@media screen and(min-width: 700px) {
  section {
    height: 100%;

    .content {
      height: 100%;
      display: flex;
      flex-flow: column;

      img {
        width: 100%;
        height: auto;
        margin: auto 0px;
      }
    }
  }
  // section:hover {
  //   &:after {
  //     background-color: #03050581;
  //     content: "Explore";
  //     color: $blue;
  //     font-family: "handlee";
  //     font-size: 35px;
  //     position: absolute;
  //     z-index: 1;
  //     width: calc(70% / 2  - 0.5rem);
  //     height: calc(1100px - 3rem);
  //     padding: 1.5rem 0px;
  //   }
  // }
}
</style>
