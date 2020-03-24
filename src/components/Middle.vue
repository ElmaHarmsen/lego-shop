<template>
  <section>
    <router-link v-bind:to="`/popularitems`" class="link">
      <HomePopular />
    </router-link>

    <router-link v-bind:to="`/comingsoon`" class="link">
      <HomeComingSoon />
    </router-link>

    <router-link v-bind:to="`/pickabrick`" class="link">
      <HomePickABrick />
    </router-link>

    <router-link v-bind:to="`/pickafig`" class="link">
      <HomePickAFig />
    </router-link>

    <span class="line"></span>
  </section>
</template>

<script>
import HomePopular from "./HomePopular.vue";
import HomePickABrick from "./HomePickABrick.vue";
import HomeComingSoon from "./HomeComingSoon.vue";
import HomePickAFig from "./HomePickAFig.vue";

export default {
  name: "Middle",
  components: {
    HomePopular,
    HomePickABrick,
    HomeComingSoon,
    HomePickAFig
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
