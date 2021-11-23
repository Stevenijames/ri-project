<template>
  <div :class="$style.app">
    <Greeting />
    <img src="./assets/img/bg_flag.png" alt="USA Flag" class="banner-flag" />
    <Navblock />
  </div>
  <router-view />
</template>

<script>
import Greeting from "./components/Greeting.vue";
import Navblock from "./components/Navblock.vue";

export default {
  name: "App",
  components: {
    Greeting,
    Navblock,
  },
};
</script>

<style module>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

img {
  width: 100%;
  height: 15vh;
  margin-top: -2px;
  margin-bottom: -2px;
}
</style>
