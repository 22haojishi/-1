<template>
    <div class="consult">
    <nav-header></nav-header>
    <div class="com-layout-article">
      <div class="enroll-page">
        <div class="enroll-header">
         <div class="title-c">
         <span>3秒钟智能匹配最适合您的驾校</span>
        </div>
        </div>
        
        <div class="one-key-form">
          <div class="input-wrap clearfix">
             <span class="label fl">姓名</span>
             <div class="key-input-d fr">
               <input type="text" ref="userName" placeholder="请填写您的名字" autocomplete="off">
             </div>
          </div>
          <div class="input-wrap clearfix">
          <span class="label fl">手机</span>
            <div class="key-input-d fr">
              <input type="tel" class="phone" placeholder="请填写您的电话" autocomplete="off" ref="phone" maxlength="11">
            </div>
         </div>
         <div class="input-wrap clearfix">
          <span class="label fl">验证</span>
            <div class="key-input-d fr">
              <input class="captcha-input fl" type="tel" placeholder="请填写短信验证码" autocomplete="off" ref="captchaCode" maxlength="6">
              <div class="captcha  fr" ref="getCaptcha">
                <span class="captchabutton">获取验证码</span>
              </div>
            </div>
         </div>
         <div class="input-wrap clearfix">
          <span class="label fl">驾照</span>
            <div class="key-input-d fr">
              <select class="carType fr" ref="cardType" id="cardType">
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="C1" selected>C1</option>
                <option value="C2">C2</option>
                <option value="C3">C3</option>
              </select>
            </div>
         </div>
         <div class="input-wrap clearfix">
          <span class="label fl">地址</span>
            <div class="key-input-d address fr" >
              <input type="text" readonly="readonly" 
              placeholder="请选择您所在位置" autocomplete="off" 
              ref="currentPosition" v-on:click="sure()" id="addMarker">
            </div>
         </div>
         <div class="submit-c">
              <button class="" type="submit" ref="submit">
                立即匹配
                </button>
                </div>
        </div>
        
      </div>
    </div>
    <transition name="fade">
     <div class="com-mask-map" 
     v-show='isShow'
     >
      <div class="title clearfix">
        <span class="fl">点击地图更换位置</span>
        <span class="ok fr" ref="currentLocation" @click="isShow = false">确定</span>
      </div>
      <div class="mapbackground">
        <div class="currentMap"  id="bmap">
        
        </div>
      </div>
     </div>
     </transition>
    </div>
</template>

<script>
import navHeader from "../components/nav-header.vue";
export default {
  name: "consult",
  components: {
    "nav-header": navHeader
  },
  data() {
    return {
      isShow: false
    };
  },

  mounted() {
    this.bdmap()
  },
  methods: {
    sure() {
      this.isShow = true;
    },
    bdmap() {
      var map = new BMap.Map("bmap");
      var point = new BMap.Point(116.417854, 39.921988);
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      map.centerAndZoom(point, 15);
      var opts = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: "海底捞王府井店", // 信息窗口标题
        enableMessage: true, //设置允许信息窗发送短息
        message: "亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
      };
      var infoWindow = new BMap.InfoWindow(
        "地址：北京市东城区王府井大街88号乐天银泰百货八层",
        opts
      ); // 创建信息窗口对象
      marker.addEventListener("click", function() {
        map.openInfoWindow(infoWindow, point); //开启信息窗口
      });
    }
  }
};
</script>

<style scoped>
.enroll-page {
  position: relative;
  background-color: #fff;
  height: 100%;
  -webkit-box-flex: 1;
  flex: 1;
}
.enroll-page .enroll-header {
  position: relative;
  display: block;
  width: 100%;
  margin-top: 0.3rem;
  text-align: center;
}
.enroll-page .enroll-header .title-c {
  margin: 0.2rem auto;
  display: inline-block;
  height: 1rem;
}
.enroll-page .enroll-header .title-c span {
  display: inline-block;
  padding-top: 0.14rem;
  font-size: 0.48rem;
  line-height: 1.3;
  color: #333;
}
.enroll-page .one-key-form {
  margin: 0.2rem 0 0.46rem;
  width: 100%;
  padding: 0 0.56rem;
  overflow: hidden;
  background-color: #fff;
  border-radius: 0.2rem;
}
.enroll-page .one-key-form .input-wrap {
  margin-top: 0.32rem;
  font-size: 0.32rem;
}
.label {
  display: block;
  width: 14%;
  color: #333;
  line-height: 0.92rem;
}
.enroll-page .one-key-form .input-wrap .key-input-d {
  height: 0.9rem;
  display: block;
  font-size: 0.32rem;
  border-radius: 1px;
  border: 1px solid #e7e7e7;
  line-height: 0.9rem;
  background-color: #f2f2f2;
  width: 86%;
}
.enroll-page .one-key-form .input-wrap .key-input-d input {
  background-color: transparent;
  font-size: 0.32rem;
  width: 100%;
  height: 100%;
  line-height: 1.2;
  color: #333;
  display: block;
  padding: 0 0.2rem;
  border: 0;
}
.enroll-page .one-key-form .input-wrap:nth-of-type(1) {
  margin-top: 0;
}
.enroll-page .one-key-form .input-wrap:nth-of-type(3) input {
  width: 70%;
}
.captcha {
  width: 30%;
  color: #1dacf9;
  height: 100%;
  overflow: hidden;
}
.captchabutton {
  border-left: solid 1px #e1e1e1;
  font-size: 0.28rem;
  text-align: center;
  display: block;
}
.key-input-d .carType {
  background: url("../assets/topimg/21.png") 95% center no-repeat;
  padding-left: 0.2rem;
  background-size: 0.16rem 0.26rem;
  font-size: 0.32rem;
  height: 0.9rem;
  width: 100%;
}
.key-input-d.carType select {
  color: #333;
  display: block;
}
option {
  font-weight: normal;
  display: block;
  white-space: pre;
  min-height: 1.2em;
}
.address {
  background: url("../assets/topimg/22.png") 0.2rem center no-repeat #f2f2f2;
  padding-left: 0.5rem;
  background-size: 0.32rem;
  font-size: 0.01rem;
}
.submit-c {
  position: relative;
  width: 100%;
  padding: 0.7rem 0.1rem;
}
.submit-c button {
  width: 100%;
  height: 0.88rem;
  border-radius: 0.1rem;
  background-color: #1dacf9;
  font-size: 0.32rem;
  border: 0;
  color: #fff;
  line-height: 0.88rem;
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
.com-mask-map {
  position: fixed;
  top: 0.7rem;
  right: 0;
  width: 100%;
  height: 100%;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 101;
  opacity: 1;
  transition: opacity 0.3s;
  /* display: none; */
}

.com-mask-map .title {
  display: block;
  font-size: 0.3rem;
  color: #333;
  padding: 0.3rem;
  background-color: #fff;
}
.com-mask-map .mapbackground {
  position: relative;
  margin: 0.3rem;
  width: 6.9rem;
  height: 83%;
  background-color: #fff;
}
.mapbackground .currentMap {
  overflow: hidden;
  position: relative;
  z-index: 0;
  background-color: rgb(243, 241, 236);
  color: rgb(0, 0, 0);
  text-align: left;
  display: block;
  width: 100%;
  height: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  transform: scale(1, 1);
  opacity: 0;
}
</style>