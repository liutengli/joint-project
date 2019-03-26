<template>
  <div id="app">
    <!-- 用来放各个组件 -->
    <router-view/>

    <!-- 手机底部按钮 -->
    <div class="nav-bar">
      <!-- active表示当前tabbar选中的索引 -->
      <van-tabbar v-model="active" active-color='blue'>
        <van-tabbar-item icon="home-o" :to="{name:'Home'}">首页</van-tabbar-item>
        <van-tabbar-item icon="hot-o" dot :to="{name:'List'}">热卖</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" info="5"  :to="{name:'ShopCart'}">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager-o" :to="{name:'UserCenter'}">我</van-tabbar-item>
      </van-tabbar>
    </div>

  </div>
</template>

<script>

export default {
  data(){
   return{
     active:0
   }
 }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    height:100%;
  }
  body{
    display: flex;
    flex-direction: column;
  }
  section{
    flex: 1;
    overflow: auto;
  }
  header{
     flex-shrink: 0;
  }
</style>
