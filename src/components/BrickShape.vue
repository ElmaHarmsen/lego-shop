<template>
  <div class="content-item">
    <LegoBrick v-bind:pickBrick="currentPickedBrick" />
    <ColorPicker
      v-bind:availableColors="
        bricks.map(brick => {
          return {
            name: brick.color,
            value: brick.value
          };
        })
      "
      v-on:color-change="changeBrick($event)"
    />
  </div>
</template>

<script>
import LegoBrick from "@/components/LegoBrick.vue";
import ColorPicker from "@/components/ColorPicker.vue";

export default {
  name: "BrickShape",
  data: function() {
    return {
      currentPickedBrick: this.bricks[0]
    };
  },
  props: ["bricks"],
  components: {
    LegoBrick,
    ColorPicker
  },
  methods: {
    changeBrick(colorCode) {
      this.currentPickedBrick = this.bricks.find(
        brick => brick.value === colorCode
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.content-item {
  flex: 1 0 100%;
}
</style>
