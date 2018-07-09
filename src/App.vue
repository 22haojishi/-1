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
a, button {
    cursor: pointer;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
li, ol, ul {
    list-style: none;
    padding: 0;
    margin: 0;
    color: #333
}
ul li:active{
   color: #EE4653;
}
/* select{
    display: none
}
option{
    display: none;
} */
.com-layout-header{
    width: 100%;
    height: 1rem;
}
.com-layout-header .fixed-inner{
    width: 100%;
    height: 1rem;
    color: #18b4ed;
    padding: .2rem 0 .2rem .2rem;
    background-color: #fff;
    z-index: 100;
}
.fl{
    float: left;
}
.fr{
    float: right
}
.backButton{
    display: block;
    width: .8rem;
    height: .6rem;
    font-size: .5rem;
    line-height: .6rem;
    text-align: center;
    background: url('./assets/topimg/15.png') -.08rem center no-repeat;
    background-size: .8rem;
}
/* .com-layout-header .fixed-inner .logo-c {
    display: block;
    width: 2.8rem;
    height: .6rem;
    overflow: hidden;
} */
.navigation-c span:before {
    padding-right: .1rem;
    content: "•";
}
.x-scorll {
    overflow-x: auto;
    
    position: relative;
}
</style>
