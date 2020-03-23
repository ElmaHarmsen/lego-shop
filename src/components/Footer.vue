<template>
  <section>
    <div>
      <h2>Bye</h2>
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
  height: 15vh;
  text-align: center;

  div {
    padding: 1rem;
  }
}
</style>
