<template>
  <div>
    <span v-if="heartChecked" v-on:click="removeFavorite">
      <svg viewBox="0 0 24 24" fill="#ECA903" width="35px" height="35px">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
    </span>
    <span v-else v-on:click="addFavorite">
      <svg viewBox="0 0 24 24" fill="#ECA903" width="35px" height="35px">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
        />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: "FavoriteHeart",
  props: ["legoId"],
  methods: {
    addFavorite() {
      this.$store.commit("addToFavorites", this.legoId);
      // this.favorite = !this.favorite;
      //when you click the heart, an event gets triggerd which
      //adds the item to the collection, sets the data "favorite" to
      //true, and changes the svg of the heart to the filled one.
    },
    removeFavorite() {
      this.$store.commit("removeFromFavorites", this.legoId);
    }
  },
  computed: {
    heartChecked: function() {
      return this.$store.getters.isAlreadyInFavorites(this.legoId);
      //this function calls the getter and passes in the id of this particular lego thing.
      //returns true or false
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  span {
    svg {
      margin: 1rem 0px;
    }
  }
}
</style>
