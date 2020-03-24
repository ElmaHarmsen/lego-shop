<template>
  <section>
    <div class="content">
      <h2>Bye</h2>
      <em>Made by Elma Harmsen</em>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
