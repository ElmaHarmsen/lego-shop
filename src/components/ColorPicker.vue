<template>
  <div>
    <span
      v-for="color in availableColors"
      v-bind:key="color.value"
      v-bind:style="{ backgroundColor: color.value }"
      v-on:click="$emit('color-change', color.value)"
    >
    </span>
  </div>
</template>

<script>
export default {
  name: "ColorPicker",
  props: ["availableColors"]
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-flow: row wrap;
  padding: 0px 1.5rem;
  justify-content: center;

  span {
    border: 1px solid $black;
    display: block;
    width: calc(25px - 2px);
    height: calc(25px - 2px);
    cursor: pointer;
    margin: 1.5rem;
  }
}
</style>
