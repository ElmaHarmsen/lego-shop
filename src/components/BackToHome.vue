<template>
  <div>
    <router-link v-bind:to="`/`">
      <div class="nav">
        <span class="nav-span"></span>
        <span class="nav-span"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BackToHome"
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

    .nav-span {
      width: 55px;
      height: 1px;
      margin: 5px 0px;
      background-color: $black;
    }

    span:first-of-type {
      transform: rotate(-45deg) translate(-10px, 17px);
    }
    span:last-of-type {
      transform: rotate(45deg) translate(0px, -7px);
    }
  }
}
</style>
