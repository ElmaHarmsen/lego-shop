<template>
  <div class="footer" v-on:click="backToTop">
    <h2>
      Back to<br />
      TOP
    </h2>
  </div>
</template>

<script>
export default {
  name: "BackToTop",
  methods: {
    backToTop() {
      // window.location.hash = "header";
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
      //Goes to the section with the id "header"
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  padding: 1.5rem;
}
</style>
