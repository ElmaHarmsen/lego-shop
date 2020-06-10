<template>
  <section>
    <div class="header">
      <Navigation class="big_not" />
      <div class="header-content">
        <h1>
          Your <br class="big_break" />
          collection
        </h1>
      </div>
    </div>
    <span class="line"></span>
    <RowNav class="big_rownav" />
    <div v-if="loading" class="no-collection content-background">
      <div class="content">
        <h2>There is nothing in your collection</h2>
        <p>Click this</p>
        <svg viewBox="0 0 24 24" fill="#ECA903" width="35px" height="35px">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
          />
        </svg>
        <p>to like a LEGO!</p>
      </div>
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
import RowNav from "@/components/RowNav.vue";
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
    RowNav,
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
  grid-template-rows: 145px 1px 1fr 1px 125px;

  .header {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    text-align: center;

    .header-content {
      margin: auto 0px;
      padding: 1rem 1rem 0rem 1rem;
    }
  }
  .no-collection {
    text-align: center;
    .content {
      h2 {
        padding-bottom: 1rem;
      }
    }
  }
  .content-background {
    padding: 1rem;
    background: repeating-linear-gradient(
      -45deg,
      #eca903,
      #eca903 15px,
      #fff 15px,
      #fff 30px
    );
    .content {
      background-color: $background;
      padding: 1rem;

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
        margin: 1rem 0px;
      }
      .results {
        text-align: center;
      }
    }
  }
}
@media screen and(min-width: 700px) {
  section {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 125px 1px 55px 1fr 1px 100px;

    .header,
    .line,
    .content-background {
      width: 70%;
      margin: 0px auto;
    }
    .header {
      .header-content {
        padding: 1.5rem 1.5rem 0rem 1.5rem;
      }
    }
    .content-background {
      width: calc(70% - 3rem);
      padding: 1.5rem;

      .content {
        padding: 1.5rem;
      }
    }
  }
}
</style>
