<template>
  <section>
    <!-- <div v-if="collection" class="background-content">
      <div class="content">
        <img v-bind:src="homeYourCollectionsJson.img" alt="" />
        <div class="information">
          <h2>Your Collection</h2>
          <p>{{ homeYourCollectionJson.description }}</p>
        </div>
      </div>
    </div> -->
    <div class="background-content">
      <div class="content">
        <img v-bind:src="require('@/assets/lego-heart.jpg')" alt="" />
        <div class="information">
          <h2>No Collection Yet</h2>
          <p>Like a Lego!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeYourCollection",
  data: function() {
    return {
      loading: true,
      homeYourCollectionsJson: []
    };
  },
  created: async function() {
    await this.fetchData();
    this.loading = false;
  },
  methods: {
    async fetchData() {
      const homeCollections = await fetch(
        "http://localhost:8081/api/homeyourcollection"
      );
      console.log("api fetching works!" + homeCollections);
      this.homeYourCollectionsJson = await homeCollections.json();
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
  margin-bottom: -0.8rem; //for some weird ofset (oops)
  background: repeating-linear-gradient(
    -45deg,
    #eca903,
    #eca903 15px,
    #fff 15px,
    #fff 30px
  );

  .background-content {
    background-color: $background;

    .content {
      img {
        width: 60%;
        height: auto;
        padding: 1.5rem 0px;
      }

      .information {
        padding: 1.5rem 0rem;
        width: 100%;
      }
    }
  }
}
</style>
