<template>
  <div class="setting">
    <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" border="true"/>
    <main>
      <div class="W-member-setting">
        <a class="set-a to-set-psd">密码设置</a>
      </div>
      <div class="W-member-setting">
        <a class="set-a">关于万表</a>
      </div>
      <div class="W-bottom-btn">
        <a @click="OnClickLoginOut">退出登录</a>
      </div>
    </main>
  </div>
</template>
<script>
import { loginOut } from "../utils/auth.js";
export default {
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    },
    OnClickLoginOut() {
      loginOut();
      this.$router.push({
        name: "Login"
      });
    }
  }
};
</script>
<style scoped>
main {
  display: block;
  position: relative;
  overflow: hidden !important;
  width: 100%;
  max-width: 6.4rem;
  font-size: 0.16rem;
}
.W-member-setting {
  background: #fff;
  margin-bottom: 0.09rem;
}
.W-member-setting .set-a {
  display: block;
  margin-left: 0.12rem;
  box-sizing: border-box;
  height: 0.44rem;
  line-height: 0.44rem;
  font-size: 0.14rem;
  color: #333;
}
.W-bottom-btn {
  z-index: 5;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  position: fixed;
  bottom: 0rem;
  height: 50px;
  line-height: 50px;
  background: #bbb;
}
.W-bottom-btn a {
  display: block;
  color: #fff;
  font-size: 16px;
  text-align: center;
}
.van-tabbar {
  display: none;
}
</style>
