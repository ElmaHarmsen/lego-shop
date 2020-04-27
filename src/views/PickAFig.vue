<template>
  <section>
    <div class="header">
      <Navigation class="big_not" />
      <div class="header-content">
        <h1>
          Pick a <br class="big_break" />
          minifig
        </h1>
      </div>
    </div>
    <span class="line"></span>
    <RowNav class="big_rownav" />
    <div v-if="loading" class="loading-wrapper">
      <img v-bind:src="require('@/assets/loader.gif')" alt="" class="loader" />
    </div>
    <div v-else class="content">
      <div class="heads-container">
        <div class="head-type-container">
          <LegoHead
            v-for="pickFig in yellowFaced"
            v-bind:key="pickFig.id"
            v-bind:pickFig="pickFig"
          />
        </div>
        <span class="line"></span>
        <div class="head-type-container">
          <LegoHead
            v-for="pickFig in skinFaced"
            v-bind:key="pickFig.id"
            v-bind:pickFig="pickFig"
          />
        </div>
        <span class="line"></span>
        <div class="head-type-container">
          <LegoHead
            v-for="pickFig in specialFaced"
            v-bind:key="pickFig.id"
            v-bind:pickFig="pickFig"
          />
        </div>
        <span class="line"></span>
      </div>
      <div class="results">
        <em>All results found</em>
      </div>
    </div>
    <span class="line"></span>
    <BackToTop />
  </section>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import RowNav from "@/components/RowNav.vue";
import LegoHead from "@/components/LegoHead.vue";
import BackToTop from "@/components/BackToTop.vue";

export default {
  name: "PickAFig",
  data: function() {
    return {
      loading: true,
      currentImageIndex: 0,
      pickFigsJson: []
    };
  },
  components: {
    Navigation,
    RowNav,
    LegoHead,
    BackToTop
  },
  created: async function() {
    await this.fetchData();
    this.loading = false;
  },
  computed: {
    yellowFaced: function() {
      return this.pickFigsJson.filter(figure => figure.type === "Yellow Faced");
    },
    skinFaced: function() {
      return this.pickFigsJson.filter(figure => figure.type === "Skin Faced");
    },
    specialFaced: function() {
      return this.pickFigsJson.filter(
        figure => figure.type === "Special Faced"
      );
    }
  },
  methods: {
    async fetchData() {
      const pickFigs = await fetch(
        "https://lego--api.herokuapp.com/api/pickafig"
      );
      this.pickFigsJson = await pickFigs.json();
    },
    goForward() {
      const imageWidth = document.querySelector(".brick-img").clientWidth;
      this.currentImageIndex++;
      if (this.pickFigsJson.length <= this.currentImageIndex) {
        this.currentImageIndex = 0;
      } //Sets the index of the last item to 0 so it goes back and start from the beginning
      document.querySelector(
        ".head-type-container"
      ).style.transform = `translateX(-${imageWidth *
        this.currentImageIndex}px)`;
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
  .content {
    padding: 1.5rem;

    .heads-container {
      width: 100%;
      display: flex;
      flex-flow: column wrap;
      justify-content: space-between;

      .head-type-container {
        display: flex;
        flex-flow: row wrap;
      }
    }
    .line {
      margin: 1.5rem 0px;
    }
    .results {
      text-align: center;
    }
    .submit {
      text-align: center;
      cursor: pointer;
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
    .content {
      width: 70%;
      margin: 0px auto;
    }
    .content {
      .heads-container {
        .line {
          width: 100% !important;
        }
      }
    }
  }
}
</style>
