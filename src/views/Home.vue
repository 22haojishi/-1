<template>
  <div class="home">
  <nav-header></nav-header>
  <banner></banner>
  <router-view></router-view>
  <div class="home-page">
  <navb></navb>
  <simulator></simulator>
  <finds></finds>
  </div>
   <!-- <foot></foot> -->
  </div>
</template>

<script>
import navHeader from "../components/nav-header.vue";
import foot from "../components/foot.vue";
import banner from "../components/banner.vue";
import navb from "../components/navb.vue";
import simulator from "../components/simulator.vue";
import finds from "../components/finds.vue";


export default {
  name: "home",
  components: {
    navHeader,
    foot,
    banner,
    navb,
    simulator,
    finds
  }
};
</script>
<style scoped>

</style>
