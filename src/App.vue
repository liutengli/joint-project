<template>
  <div id="app">
    <router-view/>
    <div class="nav-bar">
      <van-tabbar v-model="active" @change="changeHande">
        <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
        <van-tabbar-item icon="comment-o">选表</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" :to="{name:'ShopCart'}">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>

export default {
  created() {
    this.$eventBus.$on("navToZX", link => {
      if (link == "Index") {
        this.active = 0;
      } else if (link == "UC") {
        this.active = 3;
      } else if (link == "List") {
        this.active = 1;
      } else if (link == "ShopCart") {
        this.active = 2;
      }
    });
  },
  data() {
    return {
      active: 0
    };
  },
  methods: {
    changeHande() {
      switch (this.active) {
        case 0:
          this.$router.push({
            name: "Index"
          });
          break;
        case 1:
          this.$router.push({
            name: "List"
          });
          break;
        case 2:
          this.$router.push({
            name: "ShopCart"
          });
          break;
        case 3:
          this.$router.push({
            name: "UC"
          });
          break;
      }
    }
  }
};
</script>
<style>
.van-icon {
  font-size: 0.26rem;
}
.van-tabbar-item__text {
   font-size: 0.12rem;
}
.van-tabbar {
  height: 65px;
  border-top: 0.01rem solid #eee;
}
body{
  background-color: #f1f1f1
}
#app{
  padding-bottom: 0.6rem;
}

</style>
