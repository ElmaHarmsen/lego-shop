<template>
  <section>
    <div class="header">
      <Navigation />
      <div class="header-content">
        <h1>
          Your <br />
          collection
        </h1>
      </div>
    </div>
    <span class="line"></span>
    <div v-if="loading" class="loading-wrapper">
      <img v-bind:src="require('@/assets/loader.gif')" alt="" class="loader" />
    </div>
    <div v-else class="content-background">
      <div class="content">
        <LegoItem
          v-for="legoSet in yourCollectionsJson"
          v-bind:key="legoSet._id"
          v-bind:legoData="legoSet"
        />
        <div class="results">
          <em>All results found</em>
        </div>
      </div>
    </div>
    <span class="line"></span>
    <BackToTop />
  </section>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import LegoItem from "@/components/LegoItem.vue";
import BackToTop from "@/components/BackToTop.vue";

export default {
  name: "YourCollection",
  data: function() {
    return {
      loading: true,
      yourCollectionsJson: []
    };
  },
  components: {
    Navigation,
    LegoItem,
    BackToTop
  },
  created: async function() {
    await this.fetchData();
    this.loading = false;
  },
  methods: {
    async fetchData() {
      const yourCollections = await fetch(
        "https://lego--api.herokuapp.com/api/yourcollection",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            window.localStorage.getItem("favorites").split(",")
          )
        }
      );
      this.yourCollectionsJson = await yourCollections.json();
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 175px 1px 1fr 1px 125px;

  .header {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    text-align: center;

    .header-content {
      margin: auto 0px;
      padding: 1.5rem 1.5rem 0rem 1.5rem;
    }
  }
  .content-background {
    padding: 1.5rem;
    background: repeating-linear-gradient(
      -45deg,
      #eca903,
      #eca903 15px,
      #fff 15px,
      #fff 30px
    );
    .content {
      background-color: $background;
      padding: 1.5rem;

      .content-item {
        display: flex;
        flex-flow: row wrap;
        text-align: left;

        img {
          width: 100%;
          height: auto;
        }
        h2 {
          padding: 1rem 0px;
        }
      }

      .line {
        margin: 1.5rem 0px;
      }
      .results {
        text-align: center;
      }
    }
  }
}
</style>
