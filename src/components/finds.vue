<template>
    <div class="finds">
     <div class="com-school-seek clearfix" data-sp="0.10">
        <div class="seek-left fl">
            <p class="o">已有
                <i data-item="baoming-count">7649742</i>名学员</p>
            <p>在驾考宝典上找到合适的驾校</p>
        </div>
        <a class="seek-right fr" href="/school/key.html?from=m211"></a>
    </div>
    </div>
</template>

<script>

export default {
  name:"finds",
  data() {
    return {
     
    };
  },
  mounted() {
    
  },
  methods: {
  }
};
</script>

<style scoped>
.com-school-seek {
    height: 1.56rem;
    background: #fff;
    display: block;
    margin-bottom: .2rem;
    position: relative;
}
.com-school-seek .seek-left {
    text-align: center;
    margin: .2rem 0 0 .3rem;
}
.com-school-seek .seek-left p.o {
    text-align: left;
}
.com-school-seek .seek-left p.o i {
    font-size: .56rem;
    color: #FF4C4C;
}
.com-school-seek .seek-left p {
    line-height: .48rem;
    color: #999;
}
.com-school-seek .seek-right {
    display: block;
    height: .8rem;
    margin: .38rem .2rem 0 0;
    width: 2.8rem;
    background: url('../assets/topimg/30.png') center center no-repeat;
    background-size: 2.8rem .8rem;
}
</style>