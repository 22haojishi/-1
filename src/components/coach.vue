<template>
    <div class="coach">
        <div class="com-find-coach-rank">
         <div class="coach-scorll swiper-container">
             <div class="coach-wrapper">
                 <div class="coach-slide">
                     <div class="skip-page">
                         <router-link to="" class="clearfix">
                             <div class="coach-slide-avatar fl">
                               <div class="img-c">
                                   <img src="http://jiaxiaozhijia.image.mucang.cn/jiaxiaozhijia/2017/08/17/17/9511dea4d72e4310b548974f95105c89.jpeg!80.80">
                               </div>
                               <p class="coach-slide-ranking one">
                                   No.
                                   <i>1</i>
                                </p>
                             </div>
                             <div class="coach-slide-desc fl">
                                 <p class="coach-name cl">
                                     <span class="fl">
                                         <i class="name">霍勇甫</i>
                                     </span>
                                     <b class="show fl"></b>
                                 </p>
                                 <p class="coach-score">5.0分</p>
                             </div>
                         </router-link>
                     </div>
                 </div>
             </div>
         </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "coach"
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
</style>