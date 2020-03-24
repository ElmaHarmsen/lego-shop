<template>
  <section>
    <div class="content">
      <h2>Pick a Fig</h2>
      <div>
        <!--Switching content-->
        <img v-bind:src="require('@/assets/random.jpg')" alt="" />
        <p>Some nice content</p>
        <!--slider with head, torso and legs, save it into database-->
      </div>
    </div>
  </section> </template
>ø

<script>
export default {
  name: "HomePickAFig"
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
