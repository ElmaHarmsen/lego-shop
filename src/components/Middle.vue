<template>
  <section>
    <div>
      <h2>Greet this</h2>
    </div>
    <div>
      <!--here it's going to be random generated content-->
      <h3>some content</h3>
    </div>
    <span class="line"></span>
  </section>
</template>

<script>
export default {
  name: "Middle"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  min-height: 70vh;
  text-align: center;

  div {
    padding: 1rem;
  }

  .line {
    display: inline-block;
    height: 1px;
    width: calc(100% + 3rem) !important;
    margin-left: -1.5rem;
    background-color: $grey;
  }
}
</style>
