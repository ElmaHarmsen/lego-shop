<template>
  <section
    v-bind:style="{
      backgroundImage: 'url(' + require('@/assets/random-background.jpg') + ')'
    }"
  >
    <div class="content">
      <div class="information">
        <h2>Coming Soon</h2>
        <p>Some nice content</p>
      </div>
    </div>
    <span class="line"></span>
  </section>
</template>

<script>
export default {
  name: "HomeAnouncement"
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;

  .content {
    margin: 15rem 1.5rem 1.5rem 1.5rem;
    background-color: $background;

    .information {
      padding: 0.5rem;
    }
  }
}
</style>
