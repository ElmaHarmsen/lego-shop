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
  padding: 1.5rem 0px;
  display: flex;
  flex-flow: row nowrap;
  transition: 0.5s ease;

  img {
    width: 280px;
    height: auto;
    padding: 0px 1.5rem;
  }
}
</style>
