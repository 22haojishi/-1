<template>
    <div class="among ">
       <div class="school-rank-top clearfix">
           <p class="top-word fl">权威排行榜</p>
           <router-link to="" class="top-more fr">更多</router-link>
        </div>
        <ul class="school-rank-ul">
            <li class="lli clearfix" ref="权威排行榜" v-for="(l,index) in lists " :key="index" v-if=" index <3">
               
             <router-link to="">
                 <div class="rank-n fl"></div>
                 <div class="rank-des fl clearfix">
                  <div class="fl">
                      <img :src="l.logo" alt="武汉宏达驾校">
                  </div>
                  <div class="school-desc fl">
                   <p class="school-desc-name">{{l.name}}
                      
                   </p>
                   <p class="school-desc-number">
                       周新增学员:
                       <i>{{l.weeklyStudentCount}}</i>
                       人
                   </p>
                   <p class="school-desc-address">评分:{{l.score}}</p>
                  </div>
                 </div>
             </router-link>
            </li>
        </ul> 
    </div>
</template>

<script>
export default {
  name: "among",
  data() {
    return {
      lists: [

      ],
    };
  },
  created() {
    this.getSummer();
  },
  methods: {
    getSummer() {
      this.axios
        .get(
          "api/web/v3/jiaxiao/list-rank.htm?_appName=jiakaobaodian&_platform=wap&_r=12704809496373464092&cityCode=110000&_=0.07766989303910976"
        )
        .then(v => {
          console.log(v.data.data);
          this.lists = v.data.data.itemList
        });
    }
  }
};
</script>

<style scoped>
.school-rank-top {
  width: 100%;
  height: 0.9rem;
  padding: 0 0.3rem;
  border-bottom: 1px solid #f0f0f0;
}
.top-word {
  font-size: 0.32rem;
  line-height: 0.9rem;
  color: #333;
}
.top-more {
  font-size: 0.28rem;
  line-height: 0.9rem;
  height: 0.9rem;
  color: #999;
  padding-right: 0.3rem;
  background: url("../assets/topimg/31.png") right center no-repeat;
  background-size: 0.1rem 0.18rem;
  display: block;
}
.school-rank-ul {
  padding-bottom: 0.3rem;
  padding-top: 0.3rem;
}
.lli {
  display: block;
  height: 1.52rem;
  margin-bottom: 0.6rem;
}
li:nth-child(1) a div:nth-child(1){
 background: url("../assets/topimg/32.png") center center no-repeat;
  background-size: 0.32rem 0.42rem;
}

li:nth-child(2) a div:nth-child(1) {
  background: url("../assets/topimg/33.png") center center no-repeat;
  background-size: 0.32rem 0.42rem;
}
li:nth-child(3) a div:nth-child(1) {
  background: url("../assets/topimg/34.png") center center no-repeat;
  background-size: 0.32rem 0.42rem;
}
.rank-n {
  width: 1rem;
  height: 1.52rem;
}
.rank-des img {
  display: block;
  width: 2.28rem;
  height: 1.52rem;
  margin-right: 0.3rem;
}
.school-desc {
  overflow: hidden;
  width: 3.2rem;
}
.school-desc-name {
  font-size: 0.28rem;
  line-height: 0.34rem;
  height: 0.34rem;
  margin-bottom: 0.3rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.school-desc-number {
  font-size: 0.28rem;
  color: #666;
  line-height: 0.3rem;
  height: 0.3rem;
  margin-bottom: 0.3rem;
  display: block;
}
.school-desc-number i {
  margin-left: 0.1rem;
}
.school-desc-address {
  font-size: 0.28rem;
  color: #666;
  line-height: 0.34rem;
  height: 0.34rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>