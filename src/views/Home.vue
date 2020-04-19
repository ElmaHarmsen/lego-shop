<template>
  <section id="home">
    <Header />
    <Middle />
    <Footer />
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Middle from "@/components/Middle.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  data: function() {
    return {};
  },
  components: {
    Header,
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
}
</style>
