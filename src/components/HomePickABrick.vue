<template>
  <section>
    <span class="line big_not"></span>
    <div v-if="loading" class="loading-wrapper">
      <img v-bind:src="require('@/assets/loader.gif')" alt="" class="loader" />
    </div>
    <div v-else class="content">
      <h2>Pick a Brick</h2>
      <div>
        <!--Switching content-->
        <img v-bind:src="homeBricksJson.img" alt="" />
        <!-- <p>{{ homeBricksJson.shape }}, {{ homeBricksJson.color }}</p> -->
      </div>
    </div>
    <span class="line big_not"></span>
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
    padding: 2rem 1rem;

    img {
      width: 90px;
      height: auto;
      padding: 1.5rem 0px;
    }
  }
}
@media screen and(min-width: 700px) {
  section {
    height: 100%;
    border-top: 1px solid $grey;
    border-left: 1px solid $grey;
    border-right: 1px solid $grey;

    .content {
      height: 100%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      padding: 1.5rem;
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
