<template>
  <section>
    <div class="content">
      <h2>Popular Items</h2>
      <div>
        <!--Switching content-->
        <img v-bind:src="require('@/assets/random.jpg')" alt="" />
        <p>Some nice content</p>
      </div>
    </div>
    <span class="line"></span>
  </section>
</template>

<script>
export default {
  name: "HomePopular"
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
