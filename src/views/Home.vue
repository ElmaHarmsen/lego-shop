<template>
  <section id="home">
    <Header />
    <RowNav class="big_rownav" />
    <Middle class="big_middle" />
    <Footer />
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import RowNav from "@/components/RowNav.vue";
import Middle from "@/components/Middle.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  data: function() {
    return {};
  },
  components: {
    Header,
    RowNav,
    Middle,
    Footer
  }
};
</script>

<style lang="scss">
#home {
  background-color: $background;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 175px 1fr 125px;

  .big_rownav {
    display: none;
  }
  .big_middle {
    width: 100%;
  }
}
@media screen and(min-width: 700px) {
  #home {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 125px 55px 1fr 100px;

    .big_rownav {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: center;
    }
    .big_middle {
      width: 70%;
      margin: 0px auto;
    }
  }
}
</style>
