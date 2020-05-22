<template>
  <section class="soon-item">
    <img v-bind:src="soonData.images[0].img" alt="" />
    <div class="soon-item-content">
      <div class="title">
        <h2>{{ soonData.title }}</h2>
        <FavoriteHeart v-bind:legoId="soonData._id" />
      </div>
      <p>
        {{ soonData.description }} <br />
        <br />
        {{ soonData.releasedate }} | #{{ soonData.setnumber }} | Pieces:
        {{ soonData.pieces }}
      </p>
    </div>
    <span class="line"></span>
  </section>
</template>

<script>
import FavoriteHeart from "@/components/FavoriteHeart.vue";

export default {
  name: "soonDataItem",
  props: ["soonData"],
  components: {
    FavoriteHeart
  }
};
</script>

<style lang="scss" scoped>
.soon-item {
  display: flex;
  flex-flow: row wrap;
  text-align: left;

  .title {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    span {
      padding: 1rem 0px;
    }
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
  .soon-item {
    img {
      width: calc(50% - 3rem);
      height: auto;
      margin: 0px auto;
      padding: 1.5rem;
    }

    .soon-item-content {
      width: calc(50% - 3rem);
      margin: 0px auto;
      padding: 1.5rem;
    }
  }
}
</style>
