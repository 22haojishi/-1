<template>
    <div class="simulator">
      <div class="nav">
        <ul class="disboxv3 clearfix">
        <li class=" flex1 one fl">
            <a href="/mnks/beijing.html" rel="模拟考试" class="v">
                <div class="clearfix">
                    <p class="p-v3">模拟考试</p>
                    <i class="i-v3">练习和模拟考试</i>
                </div>
            </a>
        </li>
        <li class="split fl">
        </li>
        <li class=" flex1 two fl">
            <a href="/tiku/" rel="驾考题库" class="vl">
                <div>
                    <p class="p-v3">驾考题库</p>
                    <i class="i-v3">按章节练习</i>
                </div>
            </a>
        </li>
    </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "simulator"
};
</script>

<style scoped>
.nav {
  padding: 0.16rem 0;
  background: #fff;
  margin-bottom: 0.2rem;
}
.nav ul {
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav .one {
  background: url("../assets/topimg/28.png") center right no-repeat;
  background-size: 0.88rem;
  height: 0.88rem;
  margin: 0.2rem 0.38rem 0.2rem 0;
  width: 3.36rem;
}
.nav .vl {
  height: .88rem;
  padding-top: 0;
  padding-left: .4rem;
  text-align: left;
}
.nav .p-v3 {
  color: #333;
  line-height: 0.3rem;
  height: 0.38rem;
  margin: 0 0 0.2rem;
  padding-top: 0.08rem;
}
.nav .i-v3 {
  line-height: 0.34rem;
  font-size: 0.24rem;
  height: 0.34rem;
  color: #999;
}
.nav .split {
  width: 0.02rem;
  background: #f0f0f0;
}
.nav li {
  text-align: center;
  height: 1.28rem;
  width: 1.5rem;
}
.nav .two {
  background: url("../assets/topimg/29.png") center right no-repeat;
  background-size: 0.88rem;
  height: 0.88rem;
  margin: 0.2rem 0.38rem 0.2rem 0;
  width: 3.36rem;
}
</style>