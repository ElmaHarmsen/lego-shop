<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  //When the app gets loaded, we check if there is already an localstorage, otherwise we create it.
  created: function() {
    if (window.localStorage.getItem("favorites")) {
      //"favorites" is our name from the LS.
      const localStorageFavorites = window.localStorage
        .getItem("favorites")
        .split(","); //Gets the data from the LS, makes an array out of them.
      this.$store.commit("setFavorites", localStorageFavorites); //Puts new valus/data in the LS.
    } else {
      window.localStorage.setItem("favorites", []); //Creates an LS.
    }
  }
};
</script>

<style lang="scss">
body {
  overflow-x: hidden;
  &.overflow {
    overflow: hidden;
  }
}
</style>
