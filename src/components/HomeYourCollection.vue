<template>
  <section>
    <div v-if="homeYourCollectionsJson" class="background-content">
      <div class="content">
        <div class="information">
          <svg viewBox="0 0 24 24" fill="#ECA903" width="35px" height="35px">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          <div class="information">
            <h2>In Your Collection</h2>
            <p>{{ homeYourCollectionsJson.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="background-content">
      <div class="content">
        <svg viewBox="0 0 24 24" fill="#ECA903" width="40px" height="40px">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
          />
        </svg>
        <div class="information">
          <h2>No Collection Yet</h2>
          <p>Like a Lego!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeYourCollection",
  data: function() {
    return {
      loading: true,
      homeYourCollectionsJson: null
    };
  },
  created: async function() {
    await this.fetchData();
    this.loading = false;
  },
  methods: {
    async fetchData() {
      const homeYourCollectionsJson = await fetch(
        "https://lego--api.herokuapp.com/api/homeyourcollection",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            window.localStorage.getItem("favorites").split(",")
          )
        }
      );
      this.homeYourCollectionsJson = await homeYourCollectionsJson.json();
    }
  }
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
  padding: 1rem;
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
      svg {
        padding: 1.5rem 0px 0px 0px;
      }

      .information {
        padding: 1.5rem 0rem;
        width: 100%;
      }
    }
  }
}
@media screen and (min-width: 700px) {
  section {
    height: 100%;
    max-height: calc(100% - 3rem);
    padding: 1.5rem;

    .background-content {
      height: 100%;

      .content {
        height: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;

        svg {
          margin: 0px auto;
        }
      }
      .content:hover {
        h2 {
          color: $mango;
          transition: 0.3s ease;
        }
      }
    }
  }
}
</style>
