<template>
  <section>
    <div class="background-content">
      <div class="content">
        <img v-bind:src="require('@/assets/random.jpg')" alt="" />
        <div class="information">
          <h2>Your Collection</h2>
          <p>Name of the creation</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeYourCollection"
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
  padding: 1.5rem;
  margin-bottom: -0.8rem; //for some weird ofset (oops)
  background: repeating-linear-gradient(
    -45deg,
    #eca903,
    #eca903 15px,
    #fff 15px,
    #fff 30px
  );

  .background-content {
    background-color: $background;

    .content {
      margin: 1.5rem 1.5rem 1.5rem 1.5rem;

      img {
        width: 80%;
        height: auto;
      }

      .information {
        padding: 1rem 0.5rem;
        width: 100%;
      }
    }
  }
}
</style>
