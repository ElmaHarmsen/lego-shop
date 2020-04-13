<template>
  <div>
    <div class="check" v-if="opened" v-on:click="open()">
      <svg viewBox="0 0 24 24" fill="#0E9AB0" width="35px" height="35px">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
      </svg>
    </div>
    <img
      v-else
      v-on:click="open()"
      v-bind:src="require(`@/assets/${pickFig.img}`)"
      class="brick-img"
    />
  </div>
</template>

<script>
export default {
  name: "LegoHead",
  data: function() {
    return {
      opened: false
    };
  },
  props: ["pickFig"],
  methods: {
    open() {
      this.opened = !this.opened;
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  .check {
    width: 50px;
    height: auto;
    padding: 1.5rem;
    cursor: pointer;
    text-align: center;
  }

  .content-img {
    flex: 1 1 calc(100% / 3);
    height: 110px;

    img {
      width: 50px;
      height: auto;
      padding: 1.5rem;
      cursor: pointer;
    }
  }
}
</style>
