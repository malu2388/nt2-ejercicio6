<template>
  <section class="src-components-navigator">
    <div>
      <span class="button onHover" @click="restart()"> New Colors!</span>
      <span class="message">{{ message }}</span>
      <button class="button onHover" @click="startEasy()">easy</button>
      <button class="button onHover" @click="startHard()">hard</button>
      <Container />
    </div>
  </section>
</template>

<script>
import Container from "./Container.vue";

export default {
  name: "src-components-navigator",
  components: {
    Container,
  },
  props: [],
  beforeMount() {
    this.$store.dispatch("generarColores");
  },
  data() {
    return {};
  },
  methods: {
    mouseOver() {
      console.log("Cambiar estilo");
    },

    startEasy() {
      this.$store.dispatch("cambiarDificultad", 3);
      this.restart();
    },

    startHard() {
      this.$store.dispatch("cambiarDificultad", 6);
      this.restart();
    },

    restart() {
      this.$store.dispatch("generarColores");
    },
  },

  computed: {},
};
</script>

<style scoped lang="css">
.src-components-navigator {
  background-color: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}

.button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
  margin: 0 25 0 25;
}

.onHover:hover {
  background-color: steelblue;
  color: white;
}

.message {
  color: steelblue;
  margin: 25px;
}
</style>
