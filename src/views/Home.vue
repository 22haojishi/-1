<template>
  <div class="home">
  <nav-header></nav-header>
  <banner></banner>
    <router-view></router-view>
  </div>
</template>

<script>
import navHeader from "../components/nav-header.vue";
import banner from "../components/banner.vue";


export default {
  name: "home",
  components: {
    navHeader,
    banner,
  }
};
</script>
