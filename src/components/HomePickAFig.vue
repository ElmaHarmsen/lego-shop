<template>
  <section>
    <div v-if="loading" class="loading-wrapper">
      <img v-bind:src="require('@/assets/loader.gif')" alt="" class="loader" />
    </div>
    <div v-else class="content">
      <h2>Pick a Minifig</h2>
      <div>
        <!--Switching content-->
        <img v-bind:src="homeFigsJson.img" alt="" />
        <p>{{ homeFigsJson.description }}</p>
        <!--slider with head, torso and legs, save it into database-->
      </div>
    </div>
    <span class="line"></span>
  </section>
</template>

<script>
export default {
  name: "HomePickAFig",
  data: function() {
    return {
      loading: true,
      homeFigsJson: []
    };
  },
  created: async function() {
    await this.fetchData();
    this.loading = false;
  },
  methods: {
    async fetchData() {
      const homeFigs = await fetch("http://localhost:8081/api/homepickafig");
      console.log("api fetching works!" + homeFigs);
      this.homeFigsJson = await homeFigs.json();
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
      width: 50%;
      height: auto;
      padding: 1.5rem 0px;
    }
  }
}
</style>
