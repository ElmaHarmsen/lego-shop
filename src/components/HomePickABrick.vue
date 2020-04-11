<template>
  <section>
    <span class="line"></span>
    <div v-if="loading" class="loading-wrapper">
      <img v-bind:src="require('@/assets/loader.gif')" alt="" class="loader" />
    </div>
    <div v-else class="content">
      <h2>Pick a Brick</h2>
      <div>
        <!--Switching content-->
        <img v-bind:src="homeBricksJson.img" alt="" />
        <p>{{ homeBricksJson.shape }}, {{ homeBricksJson.color }}</p>
      </div>
    </div>
    <span class="line"></span>
  </section>
</template>

<script>
export default {
  name: "HomePickABrick",
  data: function() {
    return {
      loading: true,
      homeBricksJson: []
    };
  },
  created: async function() {
    await this.fetchData();
    this.loading = false;
  },
  methods: {
    async fetchData() {
      const homeBricks = await fetch(
        "https://lego--api.herokuapp.com/api/homepickabrick"
      );
      this.homeBricksJson = await homeBricks.json();
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
      width: 60%;
      height: auto;
      padding: 1.5rem 0px;
    }
  }
}
</style>
