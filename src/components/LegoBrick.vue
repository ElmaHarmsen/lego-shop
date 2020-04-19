<template>
  <div class="content-img">
    <img v-bind:src="pickBrick.img" class="brick-img" />
  </div>
</template>

<script>
export default {
  name: "LegoBrick",
  data: function() {
    return {
      pickBricksJson: []
    };
  },
  props: ["pickBrick"]
};
</script>

<style lang="scss" scoped>
.content-img {
  padding: 1.5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  transition: 0.5s ease;

  img {
    width: 100%;
    height: auto;
  }
}
</style>
