<template>
    <div class="login">
       <div class="com-layout-header">
        <div class="fixed-inner clearfix">
         <a href="/"><i class="backButton fl"></i></a>
        <a class="logo-c car fl" href="https://m.jiakaobaodian.com/zhengzhou/">
         <i class="logo car"></i>
         </a>
         <div class="navigation-c fl x-scroll">
         <span>{{title}}</span>
         </div>
        </div>
       </div>
       <div class="layout-article">
           <div class="member-login-page">
               <div>
                <div class="login-form">
                    <div class="top-tip-div">
                        <p>您好，请登录</p>
                    </div>
                <div class="input-d clearfix">
                 <i class="tel fl"></i>
                 <input type="text" name="tel" id="" placeholder="请填写手机号码">
                </div>
                <div class="input-d reg-d clearfix">
                <i class="captchaCode fl"></i>
                <input type="text" name="captchaCode" class="captchaCode fl" placeholder="请填写验证码" autocomplete="off" ref="captchaCode" maxlength="6">
                <span class="send fr " ref="getCaptcha">发送验证码</span>
                <i class="sp fr"></i>
                </div>
                <button type="submit" class="submit agree" ref="submit" 
                data-event="登录">登 录</button>
                </div>
                 <div class="other-div cl"><div class="other-check fl">
                     <i class="selected a" ref="agree" @click="myclick($event)"></i>
                     </div>
                     <div class="other-login-d fl ">
                         
                         <router-link to="/deall">
                            阅读并同意
                            <span>《用户使用协议》</span>
                        </router-link>
                         </div>
                         </div>
               </div>
           </div>
           
       </div>
        <div class="com-layout-footer" skip="false" data-sp="0.4">
               <div class="navigation-c x-scorll ">
                   <a href="https://m.jiakaobaodian.com/zhengzhou/">首页
                   </a>
                </div>
                   <div class="corporation ">
                       <p>北京木仓科技有限公司版权所有 | 京ICP备11009001号-1</p>
                       <p>
                           商务合作：
                           <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.handsgo.jiakao.android">cooperation@mucang.cn</a>
                           
                       </p>
                   </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "loginw",
  data() {
    return {
      title: "登录",
      flag: false
    };
  },
  methods: {
    a() {
      this.title = "dsds";
    },
    myclick(ev) {
      if (!this.flag) {
        ev.target.classList.remove("selected");
        this.$refs.submit.classList.add("white");
        this.flag = true;
        return;
      }

      if (this.flag) {
        ev.target.classList.add("selected");
        this.$refs.submit.classList.remove("white");
        this.flag = false;
      }
    }
  }
};
</script>


<style scoped>
.login {
  min-width: 100%;
  /* display: -webkit-box; */
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.com-layout-header .fixed-inner .logo-c .car {
  width: 0.82rem;
}
.logo-c .logo {
  height: 0.6rem;
  background: url("../assets/topimg/16.png") center no-repeat;
  background-size: contain;
  display: block;
  width: auto;
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
.com-layout-article {
  width: 100%;
  /* height: 11rem; */
  min-width: 100%;
  max-width: 100%;
  display: flex;
  -webkit-box-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  background: #000;
}
.member-login-page {
  background-color: #fff;
  -webkit-box-flex: 1;
  flex: 1;
}
.top-tip-div {
  height: 2.4rem;
}
.top-tip-div {
  color: #333;
  line-height: 2.4rem;
  font-size: 0.6rem;
  padding-left: 0.5rem;
}
.login-form .input-d {
  display: block;
  position: relative;
  height: 1rem;
  margin: 0 0.5rem;
  background-color: #fff;
  border-bottom: 1px solid #f5f5f5;
}
.member-login-page .login-form .input-d i.tel {
  background: url("../assets/topimg/17.png") center no-repeat;
  background-size: 0.36rem 0.42rem;
}
.member-login-page .login-form .input-d i {
  display: block;
  width: 0.4rem;
  height: 100%;
}
.member-login-page .login-form .input-d input {
  display: block;
  width: 90%;
  padding-left: 0.4rem;
  height: 0.98rem;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  font-size: 0.32rem;
  -webkit-appearance: none;
  outline: none;
}
input::-webkit-input-placeholder {
  color: #ccc;
}
.member-login-page .login-form .input-d input.captchaCode {
  width: 3.6rem;
}
.login-form .input-d i.captchaCode {
  background: url("../assets/topimg/18.png") center no-repeat;
  background-size: 0.36rem 0.42rem;
}
.login-form .input-d .send {
  display: block;
  line-height: 1rem;
  color: #42bafa;
  font-size: 0.28rem;
}
.member-login-page .login-form .input-d .sp {
  display: block;
  height: 0.4rem;
  width: 1px;
  margin: 0.3rem 0.2rem;
  background: #d7d7d7;
}
.member-login-page .login-form .submit.agree {
  background-image: linear-gradient(90deg, #03dde7 0, #028bf9 100%);
  color: #fff;
  border: 0;
  outline: none;
}
.layout-article .member-login-page .login-form .white {
  background-color: #fff;
  background-image: none;
  border: 1px solid #e9e9e9;
  color: #999;
}
.member-login-page .login-form .submit {
  display: block;
  margin: 0.5rem auto 0;
  width: 6.7rem;
  height: 1rem;
  background-color: #fff;
  color: #999;
  border: 1px solid #e9e9e9;
  font-size: 0.4rem;
  line-height: 1.3;
  border-radius: 0.5rem;
  font-weight: 300;
}
.other-div {
  margin: 0.4rem 0.4rem 0;
  height: 0.4rem;
}
.other-check {
  display: block;
  width: 0.4rem;
  height: 0.4rem;
  padding: 0.06rem;
}
.other-check i {
  display: block;
  width: 100%;
  height: 100%;
  background-color: #21a4f4;
  border-radius: 2px;
}
.other-check .selected {
  background: url("../assets/topimg/19.png") center no-repeat #21a4f4;
  background-size: 0.16rem 0.12rem;
}
.other-login-d a {
  display: block;
  margin-left: 0.14rem;
  line-height: 0.4rem;
  font-size: 0.28rem;
  color: #999;
}
.member-login-page .other-div .other-login-d a span {
  color: #21a4f4;
}
.com-layout-footer {
  position: relative;
  top: 4.6rem;
}
.com-layout-footer .navigation-c {
  display: none;
  background-color: transparent;
  white-space: nowrap;
  height: 100%;
  padding-left: 0.2rem;
  overflow: scroll;
  border-bottom: solid 1px #eee;
}
.com-layout-footer .navigation-c a {
  font-size: 0.28rem;
  line-height: 0.6rem;
  padding-right: 0.1rem;
  color: #666;
}
.corporation {
  display: block;
  padding: 0.2rem 0;
}
.corporation p {
  color: #999;
  font-size: 0.24rem;
  text-align: center;
}
.corporation p + p {
  padding-top: 0.1rem;
}
.corporation p {
  color: #999;
  font-size: 0.24rem;
  text-align: center;
}
</style>

