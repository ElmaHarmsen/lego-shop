<template>
  <section>
    <div class="content">
      <h2>Pick a Brick</h2>
      <div>
        <!--Switching content-->
        <img v-bind:src="require('@/assets/random.jpg')" alt="" />
        <p>Some nice content</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePickABrick"
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  text-align: center;

  .content {
    padding: 1.5rem;
  }
}
</style>
