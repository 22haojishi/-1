<template>
    <div class="header">
        <div class="fixed-inner cl">
          <a href="/">
         <i class="backButton fl"  v-if="flag == 'home'" v-show="isShow"></i>
         <i class="backButton fl"  v-if="flag != 'home'" v-show="!isShow"></i>
         </a>
         <a class="logo-c logo-deal fl" href="/">
          <i class="logo" v-if="flag == 'home'"></i>
          <i class="deall" v-else-if="flag == 'deal'"></i>
          <i class="deall" v-else-if="flag == 'consult'"></i>
         </a>
         <div class="navigation-c fl x-scroll" v-if="flag == 'deal'">
         <span>协议</span>
         </div>
         <div class="navigation-c fl x-scroll" v-else-if="flag == 'consult'">
         <span>报名咨询</span>
         </div>
         <div class="set fr" ref="set" >
             <i v-on:click="show = !show"></i>
         </div>
         <span href="https://m.jiakaobaodian.com/city/" class="sel-city fr" 
         v-on:click="city()">郑州</span>
        </div>

        
        <transition name="slide-fade">
        <div class="com-mask-city show show-city" ref="city" v-show="isShow" v-on:click="city()">
        <div class="vlist_pro vlist" style="touch-action:manipulation">
          <div class="proc" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, -580px) translateZ(0px);">
           <div class="p-item">
            <span class="zimu">A</span>
            <ul>
              <li class="active">
                <v-distpicker type="mobile"></v-distpicker>
              </li>
              </ul>
          </div>
          </div>
        </div>
        </div>
        </transition>


        <transition name="slide-fade">
        <div class="com-mask-set show show-set" ref="domMain" v-if="show" v-on:click="show = !show">
          <div class="mask show" ref="domMask"></div>
          <div class="set-container show" ref="domContent">
            <div class="set-header">
             <div class="header-container show" ref="domHeader">
              <div class="login-c cl">
               <!-- <a class="login fl unlogin" href="login">注册登录</a> -->
               <router-link class="login fl unlogin" to="/login">注册登录</router-link>
              </div>
              <div class="tip">登录后电脑和APP可云同步做题进度</div>
             </div>
          </div>
          <ul class="content">
            <li class="type">
              <div class="title-c">
                <span>驾考类型</span>
              </div>
              <ul class="item-c cl">
                <li 
                :class='l.className' 
                :ref='l.ref' 
                :id='l.id' 
                v-for="(l,index) in carTypes" 
                :key="index"
                
                >
                  {{l.name}}
                  <i ref="select" class="select"></i>
                  </li>
              </ul>
            </li>
            <li class="type">
              <div class="title-c">
                <span>资格证类型</span>
              </div>
              <ul class="item-c cl">
                <li 
                :class='l.className' 
                :ref='l.ref' 
                :id='l.id' 
                v-for="(l,index) in cerTypes" 
                :key="index"
                
                >
                  {{l.name}}
                  <i ref="select" class="select"></i>
                  </li>
              </ul>
            </li>
          </ul>
          </div>
        </div>
        </transition>
    </div>
</template>

<script>
import VDistpicker from "v-distpicker";
export default {
  name: "nav-header",
  components: { VDistpicker },
  data() {
    return {
      id: "",
      show: false,
      isShow: false,
      flag: "/",
      flagto:false,
      carTypes: [
        {
          className: "car fl",
          ref: "course",
          id: "car",
          name: "小车"
        },
        {
          className: "truck fl",
          ref: "course",
          id: "truck",
          name: "货车"
        },
        {
          className: "moto fl",
          ref: "course",
          id: "moto",
          name: "摩托车"
        },
        {
          className: "bus fl",
          ref: "course",
          id: "bus",
          name: "客车"
        }
      ],
      cerTypes: [
        {
          className: "keyun fl",
          ref: "course",
          id: "keyun",
          name: "客运"
        },
        {
          className: "huoyun fl",
          ref: "course",
          id: "huoyun",
          name: "货运"
        },
        {
          className: "weixian fl",
          ref: "course",
          id: "weixian",
          name: "危险品"
        },
        {
          className: "jiaolian fl",
          ref: "course",
          id: "jiaolian",
          name: "教练员"
        },
        {
          className: "chuzu fl",
          ref: "course",
          id: "chuzu",
          name: "出租车"
        }
      ]
    };
  },
  created() {
    this.getFlag();
  },
  methods: {
    getFlag() {
      this.flag = this.$store.state.path;
      // console.log(this.flag);
    },
    city() {
      this.isShow = !this.isShow;
    },
     myclick() {
      if (!this.flagto) {
        this.$refs.select.classList.add("selected");
        this.flagto = true;
      }
      if (this.flagto) {
        this.$refs.select.classList.remove("selected");
        this.flagto = false;
      }
    }
  }
};
</script>

<style scoped>
.header {
  height:1rem;
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
.fixed-inner .logo-deal{
  display: block;
  width: .8rem;
  height: 0.6rem;
  overflow: hidden;
}
.fixed-inner .logo-c .logo {
  display: block;
  width: auto;
  height: 100%;
  background: url("../assets/topimg/1.png") center no-repeat;
  background-size: contain;
}
.fixed-inner .logo-c .deall {
  display: inline-block;
  width: .82rem;
  height: .6rem;
  background: url("../assets/topimg/16.png") center no-repeat;
  background-size: contain;
}

.navigation-c {
  white-space: nowrap;
  height: 100%;
  margin-left: 0.2rem;
  width: 2.6rem;
  overflow: scroll;
}
.navigation-c span {
  font-size: 0.32rem;
  line-height: 0.6rem;
  padding-right: 0.1rem;
}
.navigation-c span:before {
    padding-right: .1rem;
    content: "•";
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
  background: url("../assets/topimg/2.png") center no-repeat;
  background-size: 0.36rem 0.34rem;
}
.fixed-inner .sel-city {
  padding-right: 0.26rem;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: url("../assets/topimg/3.png") center right no-repeat;
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
.vlist .p-item .zimu {
  background: #f5f5f5;
  display: block;
  height: 0.6rem;
  line-height: 0.6rem;
  padding-left: 0.5rem;
}
.vlist ul {
  padding-top: 540px;
  padding-left: 0.5rem;
}
.vlist ul li {
  height: 0.8rem;
  line-height: 0.8rem;
  color: #333;
}
.com-mask-set.show {
  display: block;
}
.com-mask-set {
  position: fixed;
  z-index: 100;
}
.com-mask-set,
.com-mask-set .mask {
  left: 0;
  width: 100%;
  height: 100%;
  top: 0;
}
.com-mask-set .mask.show {
  opacity: 0.7;
}
.com-mask-set .mask {
  position: absolute;
  background-color: #000;
}
.show,
img {
  display: block;
}
.com-mask-set .set-container.show {
  transform: translate3d(25%, 0, 0);
}
.com-mask-set .set-container {
  position: relative;
  display: block;
  width: 80%;
  height: 100%;
  background-color: #fff;
  transition: transform 0.2s linear, -webkit-transform 0.2s linear;
  z-index: 102;
  overflow-y: scroll;
  overflow-x: hidden;
}
.com-mask-set .set-container .set-header {
  position: relative;
  height: 1.8rem;
  width: 100%;
  background-color: #fff;
  z-index: 1;
}
.com-mask-set .set-container .set-header .header-container {
  position: relative;
  width: 100%;
  height: 1.8rem;
  top: 0;
  padding: 0.38rem 0.28rem;
  text-align: center;
}
.login-c {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.3rem;
}
.com-mask-set
  .set-container
  .set-header
  .header-container
  .login-c
  .login.unlogin {
  background: url("../assets/topimg/4.png") left center no-repeat;
  background-size: 0.36rem;
}
.com-mask-set .set-container .set-header .header-container .login-c .login {
  display: block;
  padding-left: 0.5rem;
  color: #37b5f8;
}
/* .fl {
  float: left;
} */
.com-mask-set .set-container .set-header .header-container .tip {
  font-size: 0.26rem;
  color: #999;
  line-height: 1.3;
  text-align: left;
  margin-top: 0.2rem;
}
.com-mask-set .set-container .content {
  position: relative;
  padding: 0 0.28rem;
}
.com-mask-set .set-container .content .title-c {
  height: 0.8rem;
  border-bottom: solid 1px #f0f0f0;
}
.com-mask-set .set-container .content .title-c span {
  font-size: 0.3rem;
  color: #333;
  line-height: 0.8rem;
}
.com-mask-set .set-container .content .item-c {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
li .car {
  background: url("../assets/topimg/5.png") center no-repeat;
  background-size: 0.94rem;
}
li .truck {
  background: url("../assets/topimg/6.png") center no-repeat;
  background-size: 0.94rem;
}
li .moto {
  background: url("../assets/topimg/7.png") center no-repeat;
  background-size: 0.94rem;
}
li .bus {
  background: url("../assets/topimg/8.png") center no-repeat;
  background-size: 0.94rem;
  /* border: 1px solid red */
}
li .keyun {
  background: url("../assets/topimg/10.png") center no-repeat;
  background-size: 0.94rem;
}
li .huoyun {
  background: url("../assets/topimg/11.png") center no-repeat;
  background-size: 0.94rem;
}
li .weixian {
  background: url("../assets/topimg/12.png") center no-repeat;
  background-size: 0.94rem;
}
li .jiaolian {
  background: url("../assets/topimg/13.png") center no-repeat;
  background-size: 0.94rem;
}
li .chuzu {
  background: url("../assets/topimg/14.png") center no-repeat;
  background-size: 0.94rem;
}
.com-mask-set .set-container .content .item-c li {
  position: relative;
  width: 50%;
  height: 1.6rem;
  font-size: 0.26rem;
  color: #666;
  line-height: 1.2;
  padding-top: 1.1rem;
  text-align: center;
  /* border: 1px solid red; */
}
.com-mask-set .set-container .content .item-c li i {
  position: absolute;
  display: none;
  right: 0.4rem;
  top: 0.4rem;
  width: 0.36rem;
  height: 0.36rem;
  background: url("../assets/topimg/9.png") center no-repeat;
  background-size: 0.36rem;
}
.com-mask-set .set-container .content .item-c li:hover .select {
  display: block;
}

</style>
