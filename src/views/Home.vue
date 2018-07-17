<template>
  <div class="home">
  <nav-header></nav-header>
  <banner></banner>
  <router-view></router-view>
  <navb></navb>
  <simulator></simulator>
  <finds></finds>
  <among></among>
  <coach></coach>
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
import among from "../components/among.vue";
import coach from "../components/coach.vue";


export default {
  name: "home",
  components: {
    navHeader,
    foot,
    banner,
    navb,
    simulator,
    finds,
    among,
    coach
  }
};
</script>
<style scoped>

</style>
