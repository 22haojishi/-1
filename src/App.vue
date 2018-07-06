<template>
  <div id="app">
   <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
    margin: 0;
    font-size: .24rem;
    color: #333;
    background: #f5f5f5;
    font-family: "Helvetica Neue",Helvetica,STHeiTi,Arial,sans-serif;
    line-height: 1.01;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}
html{
    font-size: 50px
}
a {
    font-size: inherit;
    color: inherit;
}
a {
    text-decoration: none;
}
a, button {
    cursor: pointer;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
