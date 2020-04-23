<template>
  <div>
    <router-link v-bind:to="`/popularitems`" class="link popular">
      <HomePopular />
    </router-link>

    <router-link v-bind:to="`/comingsoon`" class="link soon">
      <HomeComingSoon />
    </router-link>

    <router-link v-bind:to="`/pickabrick`" class="link pick-brick">
      <HomePickABrick />
    </router-link>

    <router-link v-bind:to="`/pickafig`" class="link pick-fig">
      <HomePickAFig />
    </router-link>

    <router-link v-bind:to="`/yourcollection`" class="link collection">
      <HomeYourCollection />
    </router-link>
  </div>
</template>

<script>
import HomePopular from "./HomePopular.vue";
import HomePickABrick from "./HomePickABrick.vue";
import HomeComingSoon from "./HomeComingSoon.vue";
import HomePickAFig from "./HomePickAFig.vue";
import HomeYourCollection from "./HomeYourCollection.vue";

export default {
  name: "Middle",
  components: {
    HomePopular,
    HomePickABrick,
    HomeComingSoon,
    HomePickAFig,
    HomeYourCollection
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media screen and(min-width: 700px) {
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(12, 100px);
    gap: 1.5rem;

    .popular {
      grid-row: 1/10;
      grid-column: 1/2;
    }

    .pick-brick {
      grid-row: 10/13;
      grid-column: 2/2;
    }

    .soon {
      grid-row: 1/7;
      grid-column: 2;
    }

    .pick-fig {
      grid-row: 10/13;
      grid-column: 1/2;
    }

    .collection {
      grid-row: 7/10;
      grid-column: 2/3;
    }
  }
}
</style>
