<template>
  <section>
    <router-link v-bind:to="`/`">
      <div class="nav">
        <span class="nav-span"></span>
        <span class="nav-span"></span>
        <span class="nav-span"></span>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "BackToHome",
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
section {
  .nav {
    display: flex;
    flex-flow: row wrap;
    position: fixed;
    z-index: 3;
    top: 1.5rem;
    right: 1.5rem;
    width: 55px;
    height: 50px;
    cursor: pointer;

    span:first-of-type {
      width: 25px;
      transform: rotate(-45deg);
      margin-top: 10px;
    }
    span:nth-of-type(2) {
      margin-left: 2px;
    }
    span:last-of-type {
      width: 25px;
      transform: rotate(45deg);
      margin-bottom: 5px;
    }
    .nav-span {
      width: 55px;
      height: 1px;
      background-color: $black;

      em {
        position: relative;
        top: -15px;
        font-size: 13px;
      }
    }
  }
}
</style>
