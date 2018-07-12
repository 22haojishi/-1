<template>
    <div class="navb">
        <ul class="disboxv3 clearfix">
            <li class="flex1 five fl">
                <router-link to="/steer">找驾校</router-link>
            </li>
            <li class="flex1 six fl">
                <router-link to="/coach">找教练</router-link>
            </li>
            <li class="flex1 seven fl">
                <router-link to="/ladde">找陪练</router-link>
            </li>
            <li class="flex1 eight fl">
                <router-link to="/circle">驾考圈</router-link>
            </li>
            <li class="flex1 nine fl">
                <router-link to="/download">软件下载</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "navb"
};
</script>

<style scoped>
.navb {
  padding: 0.4rem 0;
  background: #fff;
  margin-bottom: 0.2rem;
}
.disboxv3 {
  display: block;
}
.navb li {
  text-align: center;
  height: 1.28rem;
  width: 1.5rem;
}
.navb a {
  text-align: center;
  padding-top: 1rem;
  font-size: 0.28rem;
  display: block;
  line-height: 0.3rem;
  height: 0.3rem;
  color: #333;
}
.navb .five {
  background: url("../assets/topimg/23.png") top center no-repeat;
  background-size: 0.8rem;
}
.navb .six {
  background: url("../assets/topimg/24.png") top center no-repeat;
  background-size: 0.8rem;

}
.navb .seven {
  background: url("../assets/topimg/25.png") top center no-repeat;
  background-size: 0.8rem;

}
.navb .eight {
  background: url("../assets/topimg/26.png") top center no-repeat;
  background-size: 0.8rem;

}
.navb .nine {
  background: url("../assets/topimg/27.png") top center no-repeat;
  background-size: 0.8rem;

}
</style>