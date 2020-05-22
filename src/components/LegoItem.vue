<template>
  <section class="lego-item">
    <img v-bind:src="legoData.img" alt="" />
    <div class="lego-item-content">
      <div class="title">
        <h2>{{ legoData.title }}</h2>
        <FavoriteHeart v-bind:legoId="legoData._id" />
      </div>
      <p>
        {{ legoData.description }} <br />
        <br />
        {{ legoData.year }} | #{{ legoData.setnumber }} | Pieces:
        {{ legoData.pieces }}
      </p>
    </div>
    <span class="line"></span>
  </section>
</template>

<script>
import FavoriteHeart from "@/components/FavoriteHeart.vue";

export default {
  name: "LegoItem",
  props: ["legoData"],
  components: {
    FavoriteHeart
  }
};
</script>

<style lang="scss" scoped>
.lego-item {
  display: flex;
  flex-flow: row wrap;
  text-align: left;

  .title {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  img {
    width: 100%;
    height: auto;
  }
  h2 {
    padding: 1rem 0px;
  }
}
.line {
  margin: 1.5rem 0px;
}
@media screen and(min-width: 700px) {
  .lego-item {
    img {
      width: calc(50% - 3rem);
      height: auto;
      margin: 0px auto;
      padding: 1.5rem;
    }

    .lego-item-content {
      width: calc(50% - 3rem);
      margin: 0px auto;
      padding: 1.5rem;
    }
  }
}
</style>
