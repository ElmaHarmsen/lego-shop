<template>
  <section>
    <HomePopular />
    <home-anouncement />
    <HomePickABrick />
    <span class="line"></span>
  </section>
</template>

<script>
import HomePopular from "./HomePopular.vue";
import HomePickABrick from "./HomePickABrick.vue";
import HomeAnouncement from "./HomeAnouncement.vue";

export default {
  name: "Middle",
  components: {
    HomePopular,
    HomePickABrick,
    HomeAnouncement
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
