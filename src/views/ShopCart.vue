<template>
  <div class="app">
    <header class="cart-title">
      <ul>
        <li class="cart-title-center">购物车</li>
        <li class="cart-title-right">
          <a href="javascript:void(0);" class="cart-editAll">编辑全部</a>
          <a href="javascript:void(0);" class="cart-editFinish hidden">完成</a>
        </li>
      </ul>
    </header>
    <section>
      <div class="login-tips">
        <p>登陆后购物车的商品将全部保存到您的账号中，</p>
        <router-link :to="{name:'Login'}" class="cart-login">现在登录</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.app{
  width:100%;
  overflow: hidden;
  color: #666
}
.cart-title {
  width: 100%;
  height: 0.44rem;
  font-size: 16px;
  color: #444;
  position: relative;
  background: #fff;
  border-bottom: 1px solid #ddd;
}
.cart-title ul {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.cart-title-right {
  position: absolute;
  right: 0.12rem;
}
.cart-title-right a {
  color: #666;
  font-size: 12px;
}
.hidden {
  display: none !important;
}
.login-tips{
  height: 0.28rem;
  font-size: 0.12rem;
  background-color: #fff9ce;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cart-login{
  color:#5781b4;
}
</style>


