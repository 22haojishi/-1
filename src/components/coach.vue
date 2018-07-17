<template>
    <div class="coach">
        <div class="com-find-coach-rank">
         <div class="coach-scorll swiper-container">
             <div class="coach-wrapper">
                 <div class="coach-slide swiper-slide first swiper-slide-active" style="width: 375px;">
                     <div class="skip-page aa first" v-for="(c,i) in coachs" :key="i">
                         <router-link to="" class="clearfix">
                             <div class="coach-slide-avatar fl">
                               <div class="img-c">
                                   <img :src="c.avatar">
                               </div>
                               <p class="coach-slide-ranking one">
                                   No.
                                   <i>{{c.rankNum}}</i>
                                </p>
                             </div>
                             <div class="coach-slide-desc fl">
                                 <p class="coach-name clearfix">
                                     <span class="fl">
                                         <i class="name">{{c.name}}</i>
                                     </span>
                                     <b class="show fl"></b>
                                 </p>
                                 <p class="coach-score">5.0分</p>
                             </div>
                         </router-link>
                     </div>
                 </div>
             </div>
          <div class="coach-rank-img"></div>
         </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "coach",
  data(){
      return{
          coachs:[
              {
                  "avatar": "http://jiaxiaozhijia.image.mucang.cn/jiaxiaozhijia/2017/08/17/17/9511dea4d72e4310b548974f95105c89.jpeg",
                  "rankNum": 1,
                   "name": "霍勇甫",
              },
              {
                   "avatar": "http://jiaxiaozhijia.image.mucang.cn/jiaxiaozhijia/2017/05/05/18/4f3272e863164475bd579ded5d1ef19d.png",
                   "rankNum": 2,
                   "name": "王腾",
              }
          ]
      }
  }
};
</script>

<style scoped>
.com-find-coach-rank {
  position: relative;
  background: #fff;
}
.coach-scorll {
  height: 1.4rem;
  overflow: hidden;
  width: 100%;
}
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.coach-wrapper {
  height: 1.4rem;
  box-sizing: content-box;
  transform: translate3d(0, 0, 0);
}
.coach-slide.first {
  padding-left: 1.84rem;
}
.aa.first {
  width: 2.32rem;
}
.aa {
  /* width: 2rem; */
  display: block;
  float: left;
  font-size: 0.28rem;
  padding: 0.3rem 0;
  margin-right: 0.44rem;
}
.coach-slide-avatar {
  position: relative;
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.3rem;
}
.coach-slide-avatar .img-c {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
  overflow: hidden;
}
.coach-slide-avatar img {
  border-radius: 0.4rem;
  border: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/homejpg/1.jpg");
  background-size: 100% 100%;
}
.coach-slide-ranking.one {
  background: #fe4648;
}
.coach-slide-ranking {
  position: absolute;
  bottom: 0;
  width: 0.8rem;
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.28rem;
  border-radius: 0.12rem;
  text-align: center;
  color: #fff;
  display: block;
}

.coach-name {
  font-size: 0.28rem;
  line-height: 0.32rem;
  height: 0.32rem;
  margin-bottom: 0.16rem;
  margin-top: 0.04rem;
  color: #333;
  display: block;
  width: 1.22rem;
}
.coach-name i.name {
  position: relative;
  width: 0.84rem;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.coach-name b {
  background: url("../assets/topimg/35.png") center center no-repeat;
  background-size: 100%;
  width: 0.28rem;
  height: 0.28rem;
  margin-left: 0.1rem;
}
.coach-score {
  font-size: 0.28rem;
  line-height: 1.2;
  color: #ff8040;
}
.com-find-coach-rank .coach-rank-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 1.46rem;
  height: 1.4rem;
  background: url("../assets/topimg/36.png") center center no-repeat;
  background-size: 100% 100%;
  z-index: 100;
}
</style>