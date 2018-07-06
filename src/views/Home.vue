<template>
  <div class="home">
  <nav-header></nav-header>
  </div>
</template>

<script>
import navHeader from "../components/nav-header.vue";

export default {
  name: "home",
  components: {
    "nav-header": navHeader
  }
};
</script>
