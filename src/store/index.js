import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const updateLocalStorage = store => {
  store.subscribe((mutation, state) => {
    window.localStorage.setItem("favorites", state.favorites); //State is the state after the local storage has been updated.
  });
};

export default new Vuex.Store({
  state: {
    favorites: []
  },
  mutations: {
    setFavorites(state, newFavorites) {
      state.favorites = newFavorites; //This runs when the app gets loaded, and places al the favorites a user has in the vuex.
    },
    addToFavorites(state, newFavoriteId) {
      const currentState = state.favorites;
      if (currentState.includes(newFavoriteId)) return; //We check if the newFavoriteId is already in the state, otherwise we add it.
      state.favorites = [...state.favorites, newFavoriteId];
    },
    removeFromFavorites(state, unlikeFavoriteId) {
      state.favorites = state.favorites.filter(
        favorite => favorite !== unlikeFavoriteId
      );
      //We make a copy of the array without the one that we have unliked.
    }
  },
  getters: {
    //Returns things from the state
    isAlreadyInFavorites: state => legoId => {
      return state.favorites.includes(legoId); //We check if the id of the lego that has been clicked is already in favorites (true or false)
    }
  },
  plugins: [updateLocalStorage]
});
