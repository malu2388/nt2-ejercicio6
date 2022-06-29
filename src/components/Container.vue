<template>
  <section class="src-components-container">
    <div class="jumbotron">
      <Square
        @winnerSquare="checkWinner($event)"
        :colorStyle="color"
        v-for="(color, i) in colores"
        :key="i"
      />
    </div>
  </section>
</template>

<script>
import Square from "./Square.vue";

export default {
  name: "src-components-container",
  components: {
    Square,
  },
  props: [],
  mounted() {},
  updated() {},
  data() {
    return {};
  },
  methods: {
    checkWinner(colorStyle) {
      if (colorStyle == this.winnerColor) {
        this.$store.dispatch("cambiarMensaje", "You Picked Right!");
        this.$store.dispatch("win");
      } else {
        this.$store.dispatch("cambiarMensaje", "Try Again!");
      }
    },
  },

  computed: {},
};
</script>

<style scoped lang="css">
.src-components-container {
  margin: 20px auto;
  max-width: 600px;
  background-color: #232323;
}
.jumbotron {
  background-color: #232323;
  color: #232323;
}
</style>
