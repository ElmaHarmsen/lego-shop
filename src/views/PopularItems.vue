<template>
  <section>
    <div class="content">
      <h1>
        Popular <br />
        Items
      </h1>
    </div>
    <span class="line"></span>
  </section>
</template>

<script>
export default {
  name: "PopularItems"
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
