<template>
  <div class="usercenter">
    <div class="top">
      <header class="top_title">
        <van-icon
          name="setting-o"
          size="0.32rem"
          style="position:absolute;top:0.06rem;right:0.06rem;"
          @click="ToSet"
        />
      </header>
      <van-row type="flex" style="font-size:0.14rem">
        <van-col span="6" class="head">
          <van-icon name="user-circle-o" size="0.66rem"/>
        </van-col>
        <van-col span="6" class="head_desc">
          <div v-show="!showname">
            <p>
              <a @click="onClickLogin">登录</a>/
              <a @click="onClickReg">注册</a>
            </p>
            <p>登录享优惠</p>
          </div>
          <span v-show="showname" class="admin">{{admin}}</span>
        </van-col>
      </van-row>
      <div class="detail">
        <div>
          <p>
            <van-icon name="edit" size="0.2rem"/>
          </p>
          <p>个人资料</p>
        </div>
        <div @click="addressHandle">
          <p>
            <van-icon name="location-o" size="0.2rem"/>
          </p>
          <p>收货地址</p>
        </div>
        <div>
          <p>
            <van-icon name="star-o" size="0.2rem"/>
          </p>
          <p>我的收藏</p>
        </div>
      </div>
      <div class="profile">
        <p class="no-login" v-show="!showname">
          登录后将显示您的详细资料~
          <a @click="onClickLogin">马上登录</a>
        </p>
        <p class="login" v-show="showname">
          完善信息将获得积分~
          <a>完善信息</a>
        </p>
      </div>
      <div class="modules-floor order-floor">
        <a class="floor-top to-my-order">
          我的订单
          <van-icon
            class="icon-a-whole fr"
            name="arrow"
            size="0.2rem"
            color="#ccc"
            style="margin-top:0.08rem"
          />
        </a>
        <div class="list-line clearfix">
          <a>
            <van-icon name="pending-payment"/>
            <span style="margin-top:0.1rem">待付款</span>
          </a>
          <a>
            <van-icon name="orders-o"/>
            <span style="margin-top:0.1rem">待发货</span>
          </a>
          <a>
            <van-icon name="logistics"/>
            <span style="margin-top:0.1rem">待收货</span>
          </a>
          <a>
            <van-icon name="comment-o"/>
            <span style="margin-top:0.1rem">待评价</span>
          </a>
        </div>
      </div>
      <div class="modules-floor">
        <p class="floor-top my-service">
          我的服务
          <span class="fr">联系万表</span>
          <van-icon
            class="icon-a-whole fr"
            name="service-o"
            size="0.2rem"
            color="#ccc"
            style="margin-top:0.08rem;margin-right:0.05rem;"
          />
        </p>
        <div class="list-line clearfix" style="border-bottom:0.01rem solid #ccc">
          <a>
            <van-icon name="todo-list-o"/>
            <span>我的预售</span>
          </a>
          <a>
            <van-icon name="point-gift-o"/>
            <span>我的礼品单</span>
          </a>
          <a>
            <van-icon name="debit-pay"/>
            <span>售后服务</span>
          </a>
          <a>
            <van-icon name="points"/>
            <span>我的积分</span>
          </a>
        </div>
        <div class="list-line clearfix" style="border-bottom:0.01rem solid #ccc">
          <a>
            <van-icon name="bill-o"/>
            <span>发票管理</span>
          </a>
          <a>
            <van-icon name="coupon-o"/>
            <span>优惠券</span>
          </a>
          <a>
            <van-icon name="gold-coin-o"/>
            <span>余额</span>
          </a>
          <a>
            <van-icon name="more-o"/>
            <span>足迹</span>
          </a>
        </div>
        <div class="list-line clearfix">
          <a>
            <van-icon name="thumb-circle-o"/>
            <span>我的评论</span>
          </a>
          <a>
            <van-icon name="cluster-o"/>
            <span>推荐</span>
          </a>
          <a>
            <van-icon name="comment-circle-o"/>
            <span>手表管家</span>
          </a>
          <a>
            <van-icon name="brush-o"/>
            <span>维修订单</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { isLogin, loginOut } from "../utils/auth.js";
export default {
  data() {
    return {
      admin: sessionStorage.getItem("userName"),
      showname: isLogin()
    };
  },
  methods: {
    onClickLogin() {
      this.$router.push({
        name: "Login"
      });
    },
    onClickReg() {
      this.$router.push({
        name: "Reg"
      });
    },
    ToSet() {
      this.$router.push({
        name: "Setting"
      });
    },
    addressHandle(){
       this.$router.push({
        name: "Address"
      });
    }
  }
};
</script>
<style scoped>
body {
  background-color: rgb(241, 241, 241);
}
.top {
  background-image: url(https://static.wbiao.co/p/m/images/1/member-bg.png);
  z-index: 5;
  height: 1.8rem;
}
.top_title {
  height: 0.44rem;
  text-align: right;
  color: #fff;
  font-size: 0.32rem;
  line-height: 0.32rem;
}
.admin {
  text-indent: 0.1rem;
  line-height: 0.6rem;
  display: block;
}
.head {
  color: #ccc;
  width: 0.64rem;
  height: 0.64rem;
  margin: 0 0.13rem 0 0.14rem;
  border-radius: 50%;
  background: #aaa;
  text-align: center;
  line-height: 0.64rem;
  font-size: 0.64rem;
}
.head_desc {
  color: #fff;
  font-size: 0.12rem;
  line-height: 0.2rem;
}
.head_desc a {
  color: #fff;
  font-size: 0.16rem;
  line-height: 0.4rem;
}
.detail {
  font-size: 0.12rem;
  margin-top: 0.2rem;
  text-align: center;
  color: #fff;
}
.detail div {
  float: left;
  width: 33%;
  height: 0.52rem;
  font-size: 0.1rem;
  border-right: 0.01rem solid #fff;
  background-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.detail div p {
  margin-top: 0.05rem;
}
.profile {
  width: 91.47%;
  margin: 0 auto;
  padding: 18px 0 10px;
  margin-top: 0.65rem;
}
.profile .no-login,
.profile .login {
  background: #cc3d3d;
  color: #fff;
  height: 0.28rem;
  line-height: 0.28rem;
  font-size: 0.1rem;
  text-align: center;
}
.profile .no-login {
  display: block;
}
.profile .login {
  display: block;
}
.profile .no-login a,
.profile .login a {
  text-decoration: underline;
  padding-bottom: 0.02rem;
}
.modules-floor {
  margin-bottom: 0.08rem;
  background: #fff;
}
.modules-floor .floor-top {
  height: 0.35rem;
  line-height: 0.35rem;
  padding-right: 0.12rem;
  margin-left: 0.12rem;
  font-size: 0.14rem;
  color: #333;
  border-bottom: 0.01rem solid #f1f1f1;
  box-sizing: border-box;
}
.order-floor .to-my-order {
  display: block;
}
.fr {
  float: right;
}
.modules-floor .list-line {
  height: 0.8rem;
}
.modules-floor .list-line a {
  width: 25%;
  height: 0.7rem;
  float: left;
  text-align: center;
  padding-top: 0.1rem;
  font-size: 0.12rem;
  color: #333;
  display: flex;
  flex-direction: column;
}
.modules-floor .list-line span {
  margin-top: 0.1rem;
}
</style>
