<template>
  <div class="login">
  <loginw></loginw>
  </div>
</template>

<script>
import navHeader from "../components/nav-header.vue";
import loginw from "../components/loginw.vue";

export default {
  name: "login",
  components: {
    "nav-header": navHeader,
    "loginw":loginw
  }
};
</script>