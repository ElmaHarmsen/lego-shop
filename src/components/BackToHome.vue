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
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 3;
    cursor: pointer;
    height: calc(42px - 2px);
    width: calc(45px - 2px);
    right: 1.5rem;
    border: 1px solid $black;
    border-radius: 50%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;

    .nav-span {
      width: 25px;
      height: 1px;
      margin: 5px 0px;
      background-color: $black;
    }

    span:first-of-type {
      transform: rotate(-45deg) translate(-4px, 5px);
    }
    span:last-of-type {
      transform: rotate(45deg) translate(-3px, -4px);
    }
  }
}
</style>
