<template>
  <section>
    <div v-if="loading" class="loading-wrapper">
      <img v-bind:src="require('@/assets/loader.gif')" alt="" class="loader" />
    </div>
    <div v-else class="background-content">
      <div class="content">
        <img v-bind:src="homeComingSoonsJson.images[1].img" alt="" />
        <div class="information">
          <h2>Coming Soon</h2>
          <p>{{ homeComingSoonsJson.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeComingSoon",
  data: function() {
    return {
      loading: true,
      homeComingSoonsJson: []
    };
  },
  created: async function() {
    await this.fetchData();
    this.loading = false;
  },
  methods: {
    async fetchData() {
      const homeSoons = await fetch("http://localhost:8081/api/homecomingsoon");
      console.log("api fetching works!" + homeSoons);
      this.homeComingSoonsJson = await homeSoons.json();
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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 1.5rem;
  background: repeating-linear-gradient(
    -45deg,
    #0e9ab0,
    #0e9ab0 15px,
    #fff 15px,
    #fff 30px
  );
  .background-content {
    background-color: $background;

    .content {
      img {
        width: 100%;
        height: auto;
        padding-bottom: 1.5rem;
      }

      .information {
        padding: 1.5rem 0rem;
        width: 100%;
      }
    }
  }
}
</style>
