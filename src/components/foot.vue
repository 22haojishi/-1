<template>
    <div class="footer">
      <div class="com-layout-footer" skip="false" data-sp="0.4">
        <div class="navigation-c x-scorll show">
            <a href="/">首页</a>
            <router-link to="/login">登录</router-link>
            <a href="#">协议</a>
        </div>
        <div class="corporation ">
            <p>北京木仓科技有限公司版权所有 | 京ICP备11009001号-1</p>
            <p>商务合作：
                <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.handsgo.jiakao.android">cooperation@mucang.cn</a>
            </p>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "foot",
  data() {
    return {};
  },
  methods: {
    goBack() {
      window.history.back();
    }
  }
};
</script>

<style scoped>
.com-layout-footer {
  position: relative;
}
.com-layout-footer .navigation-c.show {
  display: block;
}
.com-layout-footer .corporation p + p {
  padding-top: 0.1rem;
}
.com-layout-footer .navigation-c a {
  font-size: 0.28rem;
  line-height: 0.6rem;
  padding-right: 0.1rem;
  color: #666;
}
.com-layout-footer .corporation {
  display: block;
  padding: 0.2rem 0;
}
.com-layout-footer .corporation p {
  color: #999;
  font-size: 0.24rem;
  text-align: center;
}

.com-layout-footer .navigation-c a + a:before {
  padding-right: 0.1rem;
  content: ">";
}
</style>
