<template>
  <div id="app">
   <router-view/>
    <div class="com-to-top" 
    ref="main" 
    data-sp="0.3" 
    @click="tops()"
    :class="{showing: flag, hideing: !flag}"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  created() {},
  mounted() {
    this.getScroll();
  },
  methods: {
    tops() {
      document.documentElement.scrollTop = 0;
    },
    getScroll() {
      var vm = this;
      window.onscroll = function() {
        if (window.scrollY > 1000) {
          vm.flag = true;
        } else {
          vm.flag = false;
        }
        if (vm.flag) {
          setTimeout(function() {
            vm.flag = false;
          }, 3000);
        }
      };
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  font-size: 0.24rem;
  color: #333;
  background: #f5f5f5;
  font-family: "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
  line-height: 1.01;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
html {
  font-size: 50px;
}
#app{
  min-width: 100%;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: #fff;
}
i {
  font-style: normal;
}
a {
  font-size: inherit;
  color: inherit;
}
a {
  text-decoration: none;
}
a,
button {
  cursor: pointer;
  outline: none
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
li,
ol,
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #333;
}
ul li:active {
  color: #ee4653;
}

.com-layout-header {
  width: 100%;
  height: 1rem;
}
.com-layout-header .fixed-inner {
  width: 100%;
  height: 1rem;
  color: #18b4ed;
  padding: 0.2rem 0 0.2rem 0.2rem;
  background-color: #fff;
  z-index: 100;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.backButton {
  display: block;
  width: 0.8rem;
  height: 0.6rem;
  font-size: 0.5rem;
  line-height: 0.6rem;
  text-align: center;
  background: url("./assets/topimg/15.png") -0.08rem center no-repeat;
  background-size: 0.8rem;
}
.x-scorll {
  overflow-x: auto;
  position: relative;
}

.com-to-top {
  position: fixed;
  bottom: 1.2rem;
  right: 0.4rem;
  width: 0.8rem;
  height: 0.8rem;
  border: 1px solid #e9e9e9;
  border-radius: 100%;
  background: url("./assets/topimg/20.png") center no-repeat #fff;
  background-size: 0.43rem;
  z-index: 10;
  transition: transform 0.3s, -webkit-transform 0.3s;
}
.showing {
  transition: all 0.5s;
  transform: scale(1);
}
.hideing {
  transition: all 0.5s;
  transform: scale(0);
}
.com-layout-article {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  display: flex;
  -webkit-box-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}
input,
option,
select {
  outline: none;
}
select {
  border: none;
  appearance: none;
  -webkit-appearance: none; /* Safari 和 Chrome */
}
input::-webkit-input-placeholder {
  color: #ccc;
}
</style>
