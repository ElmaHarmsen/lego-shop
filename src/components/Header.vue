<template>
  <section>
    <div>
      <h1>
        LEGO <br />
        universe
      </h1>
    </div>
    <span class="line"></span>
  </section>
</template>

<script>
export default {
  name: "Header"
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

  .line {
    display: inline-block;
    height: 1px;
    width: calc(100% + 3rem) !important;
    margin-left: -1.5rem;
    background-color: $grey;
  }
}
</style>
