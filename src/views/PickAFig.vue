<template>
  <section>
    <div class="header">
      <BackToHome />
      <div class="header-content">
        <h1>
          Pick a <br />
          minifig
        </h1>
      </div>
    </div>
    <span class="line"></span>
    <div v-if="loading" class="loading-wrapper">
      <img v-bind:src="require('@/assets/loader.gif')" alt="" class="loader" />
    </div>
    <div v-else class="content">
      <div
        class="content-item"
        v-for="pickFig in pickFigsJson"
        v-bind:key="pickFig.id"
      >
        <div class="content-img">
          <img
            v-for="image in pickFigsJson"
            v-bind:key="image.id"
            alt=""
            v-bind:src="require(`@/assets/${pickFig.img}`)"
            class="brick-img"
          />
        </div>
        <div>
          <p>{{ pickFig.type }}</p>
          <h1 v-on:click="goForward">>></h1>
        </div>
        <span class="line"></span>
      </div>
      <div class="results">
        <em>All results found</em>
      </div>
      <span class="line"></span>
      <div class="submit" v-on:click="submit()">
        <h1>
          Create <br />
          Minifig
        </h1>
      </div>
    </div>
    <span class="line"></span>
    <BackToTop />
  </section>
</template>

<script>
import BackToHome from "@/components/BackToHome.vue";
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
    BackToHome,
    BackToTop
  },
  created: async function() {
    await this.fetchData();
    this.loading = false;
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
        ".content-img"
      ).style.transform = `translateX(-${imageWidth *
        this.currentImageIndex}px)`;
    },
    submit() {}
  }
};
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 175px 1fr 15%;

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

    .content-item {
      display: flex;
      flex-flow: row wrap;

      .content-img {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        transition: 0.5s ease;
        //transform: translateX(-275px); //increases with the width of the img which is 275px

        img {
          width: 50px;
          height: auto;
          padding: 0px 1.5rem;
        }
      }
      p {
        padding: 0.5rem;
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
</style>
