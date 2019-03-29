<template>
  <div class="login">
    <van-nav-bar @click-left="onClickLeft" @click-right="onClickRight" right-text="注册" left-arrow></van-nav-bar>
    <van-row type="flex" justify="center" class="lg_title">
      <van-col span="8">手机登录</van-col>
      <van-col span="1">|</van-col>
      <van-col span="8">账号登录</van-col>
    </van-row>
    <van-row type="flex" justify="center" class="lg_input">
      <van-col span="20">
        <van-cell-group>
          <van-field v-model="userName" placeholder="请输入用户名"/>
          <van-field v-model="password" type="password" placeholder="请输入密码"/>
        </van-cell-group>
        <van-button @click="loginHandle" type="default" size="large" class="lg_btn">登录</van-button>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import { loginIn } from "../utils/auth.js";
import {login,getShopCart } from "../servers/user.js";
import { mapState ,mapMutations} from "vuex";

export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
     ...mapMutations(['Initcounter']), // 把vuex中的mutations映射到
    cartList(){
      var count=0;
      getShopCart()
      .then(res=>{
        console.log(res)
        res.data.forEach(p=>{
          count+=p.quantity;
        })
        this.Initcounter(count)
      }).catch(err=>{
        console.log(err)
      })
    },
    loginHandle() {
      login(this.userName,this.password)
        .then(res => {
          if (res.data.code == "success") {
            loginIn(this.userName, res.data.token);
            //获取购物车总数
             this.cartList();
            this.$eventBus.$emit("navToZX", "UC");
            this.$router.push({
              name: "UC"
            });
          } else {
            this.$toast(res.data.message);
            this.userName = "";
            this.password = "";
          }
        })
        .catch(err => {
          this.$toast(err);
        });
    },
    onClickRight() {
      this.$router.push({
        name: "Reg"
      });
    },
    onClickLeft() {
      this.$router.back(-1);
    }
  }
};
</script>
<style scoped>
.lg_title {
  text-align: center;
  margin-top: 0.7rem;
  font-size: 0.24rem;
  color: #666666;
}
.lg_input {
  margin-top: 0.4rem;
  border: none;
  text-indent: 0;
}
.lg_btn {
  background-color: #222222;
  margin-top: 0.2rem;
  color: #ccaa7a;
  height: 0.4rem;
  line-height: 0.4rem;
}
</style>
