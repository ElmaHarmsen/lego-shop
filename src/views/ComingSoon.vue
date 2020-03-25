<template>
  <section>
    <div class="content">
      <h1>
        Coming <br />
        SOON
      </h1>
    </div>
    <span class="line"></span>
  </section>
</template>

<script>
export default {
  name: "ComingSoon"
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  text-align: center;
  height: 175px;

  .content {
    margin: auto 0px;
    padding: 1.5rem;
  }
}
</style>
