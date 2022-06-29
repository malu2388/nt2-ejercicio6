<template>
  <section
    @click="winnerSquare()"
    class="src-components-square"
    :style="{ 'background-color': colorStyle}"
  ></section>
</template>

<script>
export default {
  name: "src-components-square",
  props: ["colorStyle"],
  data() {
    return {
    };
  },
  methods: {
    winnerSquare() {
      this.$emit("winnerSquare", this.colorStyle);
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-square {
  width: 30%;
  background: blue;
  color: white;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;
}
</style>
