<template>
    <div class="header">
        <div class="fixed-inner cl">
         <a class="logo-c  fl" href="https://m.jiakaobaodian.com/zhengzhou/">
         <i class="logo"></i>
         </a>
         <div class="set fr" ref="set" >
             <i v-on:click="city()"></i>
         </div>
         <span href="https://m.jiakaobaodian.com/city/" class="sel-city fr" 
         v-on:click="city()">郑州</span>
        </div>

        
        <transition name="slide-fade">
        <div class="com-mask-city show show-city" v-show="isShow" v-on:click="city()">
        <div class="vlist_pro vlist" style="touch-action:none">
          <div class="proc" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, -580px) translateZ(0px);">

          </div>
        </div>
        </div>
        </transition>


        <transition name="slide-fade">
        <div class="com-mask-set show show-sert" v-show="isShow" v-on:click="city()">
        <div class="vlist_pro vlist" style="touch-action:none">
        </div>
        </div>
        </transition>
    </div>
    
</template>

<script>
export default {
  name: "nav-header",
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    city: function() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style scoped>
.header {
  height: 3.125rem;
  width: 100%;
}
.fixed-inner {
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  height: 1rem;
  color: #18b4ed;
  padding: 0.2rem 0 0.2rem 0.2rem;
  background-color: #fff;
  z-index: 100;
}

.cl:after,
.cl:before {
  display: table;
  content: " ";
  clear: both;
}
.fixed-inner .logo-c {
  display: block;
  width: 2.8rem;
  height: 0.6rem;
  overflow: hidden;
}
.fl {
  float: left;
}
.fixed-inner .logo-c .logo {
  display: block;
  width: auto;
  height: 100%;
  background: url("../assets/1.png") center no-repeat;
  background-size: contain;
}
i {
  font-style: normal;
}
.fixed-inner .set {
  width: 1rem;
  height: 0.6rem;
  overflow: hidden;
}
.fr {
  float: right;
}
.fixed-inner .set i {
  display: block;
  width: 100%;
  height: 100%;
  background: url("../assets/2.png") center no-repeat;
  background-size: 0.36rem 0.34rem;
}
.fixed-inner .sel-city {
  padding-right: 0.26rem;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: url("../assets/3.png") center right no-repeat;
  background-size: 0.21rem 0.12rem;
  color: #1dacf9;
  font-size: 0.28rem;
  line-height: 0.6rem;
  max-width: 1.1rem;
}

.com-mask-city {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
  font-size: 0.28rem;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  
  opacity: 0;
}
.com-mask-city.show-city .vlist_pro {
  transform: translate3d(0, 0, 0);
}
.com-mask-city .vlist_pro {
  width: 70%;
}
.com-mask-city .vlist {
  background: #fff;
  z-index: 1;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
}
</style>
