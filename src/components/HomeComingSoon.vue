<template>
  <section
    v-bind:style="{
      backgroundImage: 'url(' + require('@/assets/lego-fiat.jpg') + ')'
    }"
  >
    <div class="content">
      <div class="information">
        <h2>Coming Soon</h2>
        <p>Some nice content</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeComingSoon"
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
  background-position: center;
  margin: 1.5rem;

  .content {
    margin: 15rem 1.5rem 1.5rem 1.5rem;
    background-color: $background;

    .information {
      padding: 1rem 0.5rem;
    }
  }
}
</style>
