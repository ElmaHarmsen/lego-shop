<template>
  <section>
    <span class="line"></span>
    <div class="content">
      <h2>Bye</h2>
      <em>Made by Elma Harmsen</em> <em class="big_extra">|</em>
      <br class="big_break" />
      <em> Visit me at </em
      ><a href="https://elmaharmsen.nl/" target="blank">elmaharmsen.nl</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
  text-align: center;

  .content {
    padding: 2rem 1rem;

    a {
      text-decoration: underline;
      color: $black;
      font-size: 12px;
      font-family: "halant";
    }
  }
}
@media screen and(min-width: 700px) {
  section {
    .line {
      width: 70%;
    }
    .content {
      padding: 1.5rem;

      em {
        padding: 0.5rem 0px;
      }
      a {
        font-size: 15px;
      }
      a:hover {
        color: $mango;
        transition: 0.2s ease;
      }
    }
  }
}
</style>
