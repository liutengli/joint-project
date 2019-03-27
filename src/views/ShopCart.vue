<template>
  <div class="app">
    <header class="cart-title">
      <ul>
        <li class="cart-title-center">购物车</li>
        <li class="cart-title-right">
          <a href="javascript:void(0);" class="cart-editAll" :class="{'hidden':!shopdel}" @click="showDel">编辑全部</a>
          <a href="javascript:void(0);" class="cart-editFinish" :class="{'hidden':shopdel}" @click="showDel">完成</a>
        </li>
      </ul>
    </header>
    <section>
      <div class="cart-contnt">
        <div class="shop-blocks" data-shop-code="22">
          <div class="shop-title">
            <span class="h"
              :class="{'h-select':true}"
              @click="SelectedHandle(i)"
             >
              <i class="van-icon van-icon-success">
              </i>
            </span>
            <p>天梭11</p>
          </div>
          <div class="shop-desc">
            <span class="h"
              :class="{'h-select':true}"
              @click="SelectedHandle()"
            ><i class="van-icon van-icon-success"></i></span>
            <div class="shop-detail">
              <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://gaitaobao4.alicdn.com/tfscom/i1/TB14l8vHFXXXXbdXVXXXXXXXXXX_!!0-item_pic.jpg_240x240xz.jpg_.webp"
                origin-price="200"
                thumb-link
              />
            </div>
            <!-- 编辑时显示 -->
            <div class="shop-editor " :class="{'hidden':shopdel}">
              <p><b>-</b><b>1</b><b>+</b></p>
              <van-button type="danger"  :class="{'shop-del':true}" @click="DelShopHandle(id)">删除</van-button>
            </div>
          </div>
        </div>
      </div>
      <div class="TotalPri" >
        <van-submit-bar
          :price="3050"
          button-text="结算"
          @submit="onSubmit"
          >
          <van-checkbox v-model="checked">全选</van-checkbox>
        </van-submit-bar>
      </div>
      <div class="Total" :class="{'TotalEditor':shopdel}">
        <van-submit-bar
          button-text="删除"
          @submit="onSubmit"
          >
          <van-checkbox v-model="checked">全选</van-checkbox>
          <a href="javascript:void(0);"  class="removeCollect">移入收藏</a>
        </van-submit-bar>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked:'',
      shopdel:true,
      List:[],
    };
  },
  methods:{
    showDel(){
      this.shopdel= ! this.shopdel;
    },
    SelectedHandle(){
      
    },
    onSubmit(){

    },
    DelShopHandle(id){

    }
  },
  computed:{

  }
};
</script>

<style scoped>
.app {
  color: #666;
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
}
.cart-title {
  width: 100%;
  height: 0.44rem;
  font-size: 16px;
  color: #444;
  position: relative;
  background: #fff;
  border-bottom: 1px solid #ddd;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1111;
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
section {
  margin-top: 0.6rem;
  margin-bottom: 1.15rem;
}
.shop-blocks {
  width: 100%;
  height: 1.72rem;
  margin-bottom: 12px;
  background-color: #fff;
  position: relative;
}
.shop-title {
  height: 0.4rem;
  font-size: 0.14rem;
  color: #333;
}
.shop-title p {
  width: 87%;
  margin-left: 0.17rem;
  float: left;
  line-height: 0.4rem;
  border-bottom: 1px solid #cecece;
}
.shop-title .h,.shop-desc .h {
  width: 0.18rem;
  height: 0.18rem;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin: 0.13rem 0 0 0.13rem;
  float: left;
  line-height: 0.23rem;
  text-align: center;
}
.h i{
  font-size: 0.14rem;
}
.h-select{
  color: #fff;
  border-color: #1989fa;
  background-color: #1989fa;
}
.shop-desc {
  height: 0.98rem;
  margin-top: 0.18rem;
  width: 100%;
}
.shop-desc .h {
  margin: 0.42rem 0 0 0.13rem;
}
.shop-desc .h i{
  float: left;
  line-height: 21px;
  padding-left: 2px;
}
.shop-desc .shop-detail {
  float: right;
  width: 90%;
}
/* 商品价格 */
.van-card__price {
  color: #333;
  font-size: 0.16rem;
  font-weight: normal;
}
.van-card__title {
  color: #151515;
  font-weight: normal;
}
.van-submit-bar {
  bottom: 0.65rem;
  padding-left: 0.13rem;
  background: #fff;
  width: 97%;
}
.shop-editor{
  width:2.6rem ;
  height:1.30rem ;
  background: #fff;
  position: absolute;
  right: 0;
  top: 0.41rem;
  z-index: 1;
}
.van-button--danger {
    color: #fff;
    background-color: #f00;
    border: 1px solid #f00;
}
.shop-del{
  width: 0.36rem;
  height: 1.30rem;
  padding:0 0.12rem;
  box-sizing: content-box;
  float: right;
}
.shop-editor p{
  display: block;
  height:0.28rem;
  line-height: 0.28rem;
  text-align: center;
  font-size:0.14rem;
  float: left;
  margin-top: 0.13rem;
  margin-right:0.16rem;
  color: #979797;
}
.shop-editor p b:nth-of-type(1),.shop-editor p b:nth-of-type(3){
  font-size: 0.18rem;
  width: 0.4rem;
  border: 1px solid #ddd;
  float: left;
}
.shop-editor p b:nth-of-type(2){
  padding: 0 0.4rem;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  float: left;
}
/* 编辑时的尾部 */
.removeCollect{
  color:#666;
  margin-left:1rem;
}
.Total .van-button--danger {
    color: #fff;
    background-color: #ccc;
    border: 1px solid #ccc;
}
.TotalEditor{
  display:none;
}
</style>


