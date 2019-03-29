<template>
  <div class="reg">
    <van-nav-bar @click-left="onClickLeft" left-arrow></van-nav-bar>
    <van-row type="flex" justify="center" class="reg_title">
      <van-col span="20">注册万表会员</van-col>
    </van-row>
    <van-row type="flex" justify="center" class="tag">
      <van-col span="10" class="tag1">有账号？</van-col>
      <van-col span="10" class="tag2">
        <a @click="onClickToLogin">
          <u>去登录</u>
        </a>
      </van-col>
    </van-row>
    <van-row type="flex" justify="center">
      <van-col span="20" class="reg_input">
        <van-cell-group class="reg_input">
          <van-field v-model="userName" placeholder="请输入用户名"/>
          <van-field v-model="password" type="password" placeholder="请输入密码"/>
        </van-cell-group>
        <van-button @click="RegHandle" type="default" size="large" class="lg_btn">注册</van-button>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import { reg } from "../servers/user.js";
export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    onClickToLogin() {
      this.$router.push({
        name: "Login"
      });
    },
    onClickLeft() {
      this.$router.back(-1);
    },
    RegHandle() {
      if (this.userName == "" || this.password == "") {
        this.$toast("用户名和密码不能为空");
      } else {
        //调用注册方法
        reg({'userName':this.userName,'password':this.password})
          .then(res => {
            //console.log(res);
            if (res.data.code == "success") {
              this.$toast("注册成功");
              this.$router.push({
                name: "UC"
              });
            } else {
              this.$toast(res.data.message);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>
<style scoped>
.reg_title {
  font-size: 0.2rem;
  margin-top: 0.24rem;
  text-align: center;
  font-weight: bold;
  color: #666666;
}
.tag {
  margin-top: 0.1rem;
}
.tag1 {
  text-align: right;
  font-size: 0.1rem;
  color: #cccccc;
}
.tag2 {
  text-align: left;
  font-size: 0.1rem;
  color: #999999;
}
.reg_input {
  margin-top: 0.1rem;
}
.lg_btn {
  background-color: #222222;
  /* margin-top: 0.2rem; */
  color: #ccaa7a;
  height: 0.4rem;
  line-height: 0.4rem;
}
</style>
