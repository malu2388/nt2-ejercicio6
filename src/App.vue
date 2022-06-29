<template>
  <div id="app">
    <Header />
    <!-- <Navigator /> -->
    <!-- <Container /> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
// import Navigator from "./components/Navigator.vue";
// import Container from "./components/Container.vue";

export default {
  name: "App",
  components: {
    Header,
    // Navigator,
    // Container,
  },
};
</script>

<style>
#app {
  margin: 0;
  font-family: "Montserrat", "Avenir";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  background-color: #232323;
}
</style>
