<template>
  <section>
    <div class="content">
      <h1>
        Pick <br />
        a Fig
      </h1>
    </div>
    <span class="line"></span>
  </section>
</template>

<script>
export default {
  name: "PickAFig"
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
