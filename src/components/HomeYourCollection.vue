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
        <svg viewBox="0 0 24 24" fill="#ECA903" width="40px" height="40px">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
          />
        </svg>
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
        "https://lego--api.herokuapp.com/api/homeyourcollection"
      );
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
      svg {
        padding: 1.5rem 0px 0px 0px;
      }

      .information {
        padding: 1.5rem 0rem;
        width: 100%;
      }
    }
  }
}
</style>
