<template>
  <div class="productlist">
    <header class="w_title">
      <ul class="clearfix">
        <li class="search01">
          <div class="wb_back">
            <van-icon name="arrow-left" class="icon-search01"/>
          </div>
          <div class="wb_search_result">
            <van-icon name="search" class="srh_icon"/>
            <a href="javascript: void(0);" class="search_work">搜索商品</a>
          </div>
          <div class="wb_meor">
            <van-icon name="wap-nav" class="icon-search01"/>
          </div>
        </li>
        <!-- <li class="search02">
          <form action="">
            <van-icon name="search" class="srh_icon"/>
            <input type="search" class="input_search" placeholder="搜索商品" maxlength="30">
            <van-icon name="cross" class="icon-search01 icon-search02" />
          </form>
          <a href="javascript: void(0);" class="right_back">取消</a>
        </li>-->
      </ul>
    </header>
    <nav class="nav01">
      <van-tabs v-model="active" class="nav_content">
        <van-tab title="综合排序">
          <div class="commodity">
            <!-- <lazy-component> -->
              <a href="#" class="item01" v-for="item in products" :key="item._id">
                <p class="p1">
                  <img :src="serverurl+item.coverImg" alt>
                </p>
                <p class="p2 esp1">
                  <em class="em_brand">{{item.coverImg}}{{item.name}}</em>
                  {{item.descriptions}}
                </p>
                <p class="p3">
                  ￥{{item.price}}
                  <del>￥9,300</del>
                </p>
                <p class="p4">
                  <span>自营</span>
                  <span>水蓝版</span>
                </p>
              </a>
            <!-- </lazy-component> -->


            <!-- <a href="#" class="item01">
              <p class="p1">
                <img src="../assets/imgs/1.jpg" alt>
              </p>
              <p class="p2 esp1">
                <em class="em_brand">爱宝时</em>
                Emotion情感系列 机械男表
              </p>
              <p class="p3">
                ￥5,770
                <del>￥9,300</del>
              </p>
              <p class="p4">
                <span>自营</span>
                <span>水蓝版</span>
              </p>
            </a>
            <div class="adSenseImg">
              <a href="#">
                <img src="../assets/imgs/1.jpg" alt>
              </a>
            </div>-->
          </div>
        </van-tab>
        <van-tab title="销量领先">销量领先</van-tab>
        <van-tab title="价格排序">价格排序</van-tab>
        <van-tab title disabled></van-tab>
      </van-tabs>
      <van-button size="normal" class="toFilter" @click="isShow">筛选</van-button>
    </nav>
    <van-popup v-model="show" position="right" :overlay="false" class="mengceng">
      <div class="mengcheng_top">
        <van-icon name="cross" class="mc_close" @click="isShow"/>
        <p class="mc_p">筛选</p>
      </div>
      <div class="mc_main">
        <div class="mc_severse">
          <p class="mc_severse_title">万表服务</p>
          <div class="mc_btns">
            <span class="mc_btn">
              闪电发货
              <van-icon name="cross" class="mc_close_01"/>
            </span>
            <span class="mc_btn">
              闪电发货
              <van-icon name="cross" class="mc_close_01"/>
            </span>
            <span class="mc_btn">
              闪电发货
              <van-icon name="cross" class="mc_close_01"/>
            </span>
            <span class="mc_btn">
              闪电发货
              <van-icon name="cross" class="mc_close_01"/>
            </span>
          </div>
        </div>
        <div class="mc_severse">
          <p class="mc_severse_title">万表服务</p>
          <div class="mc_btns">
            <span class="mc_btn">闪电发货</span>
            <span class="mc_btn">闪电发货</span>
            <span class="mc_btn">闪电发货</span>
            <span class="mc_btn">闪电发货</span>
          </div>
        </div>
        <div class="mc_severse">
          <p class="mc_severse_title">价格区间</p>
          <div class="mc_btns">
            <span class="price_content_input">
              <input
                type="text"
                class="price_min"
                placeholder="最低价"
                maxlength="9"
                onkeyup="value=value.replace(/[^\d]/g,'')"
              >
            </span>
            <span class="price_content_xian"></span>
            <span class="price_content_input">
              <input
                type="text"
                class="price_max"
                placeholder="最高价"
                maxlength="9"
                onkeyup="value=value.replace(/[^\d]/g,'')"
              >
            </span>
          </div>
        </div>
        <div class="mc_severse brand">
          <div class="brand_title">
            <span class="brand_name">品牌</span>
            <span class="brand_kongbai"></span>
            <span class="brand_more">
              全部品牌
              <van-icon name="arrow" class="brand_icon"/>
            </span>
          </div>
          <div class="mc_btns">
            <span class="mc_btn">
              闪电发货
              <van-icon name="cross" class="mc_close_01"/>
            </span>
            <span class="mc_btn">
              闪电发货
              <van-icon name="cross" class="mc_close_01"/>
            </span>
            <span class="mc_btn">
              闪电发货
              <van-icon name="cross" class="mc_close_01"/>
            </span>
            <span class="mc_btn">
              闪电发货
              <van-icon name="cross" class="mc_close_01"/>
            </span>
          </div>
        </div>
      </div>
      <div class="content_footer">
        <div class="clear_btn">清空</div>
        <div class="ensure_btn">
          <span class="btn_sure">确定</span>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import { getProducts } from "../servers/products";
import { serverurl } from "../utils/config";

export default {
  data() {
    return {
      active: 0,
      show: false,
      page: 1,
      products: [],
      pageCount: 1, //总页数
      serverurl
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    isShow() {
      this.show = !this.show;
    },
    loadData() {
      getProducts({ page: this.page })
        .then(res => {
          console.log(res);
          this.products = res.data.products;
          // this.pageCount = this.data.pages;
          console.log(this.products);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  font-size: 1em;
}
ul li {
  list-style: none;
}
a {
  border: none;
}
img {
  display: block;
  border: none;
}
.w_title {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  max-width: 6.4rem;
  margin: 0 auto;
  background: #fff;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 0;
  left: 0;
}
.w_title ul li {
  display: block;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  color: #444;
}
.clearfix {
  position: relative;
}
.wb_back,
.wb_meor {
  width: 44px;
  text-align: center;
  position: absolute;
  top: -8px;
  z-index: 2;
  padding-top: 4px;
  height: 40px;
}
.wb_back {
  left: 0;
}
.wb_meor {
  right: 0;
}
.icon-search01 {
  font-size: 0.2rem;
}
.wb_search_result,
.search02 form {
  height: 28px;
  line-height: 28px;
  margin-top: 8px;
  background: #f1f1f1;
  width: auto;
  position: relative;
  border-radius: 100px;
}
.wb_search_result {
  margin-right: 45px;
  margin-left: 44px;
}
.srh_icon {
  width: 16px;
  height: 16px;
  font-size: 0.16rem;
  margin: 3px 6px 0 10px;
}
.search_work {
  font-size: 14px;
  color: #999;
}
.search02 form {
  margin-left: 0.12rem;
  margin-right: 0.5rem;
}

.search02 .right_back {
  position: absolute;
  right: 0px;
  top: -8px;
  color: #477db3;
  font-size: 14px;
  width: 44px;
  text-align: center;
  /* background-color: pink; */
}
.input_search {
  width: 82%;
  height: 26px;
  font-size: 12px;
  color: #333;
  background: #f1f1f1;
  border: none;
  box-sizing: border-box;
  padding-left: 6px;
  /* background-color: aqua; */
}
.icon-search02 {
  position: absolute;
  right: 7px;
  top: 3px;
  border: 1px solid #fff;
  border-radius: 50%;
}
.nav01 {
  margin-top: 45px;
  font-size: 14px;
  position: relative;
  /* top: 45px;
    left: 0; */
}
.nav_content {
  padding-top: 44px !important;
  width: 100%;
  z-index: 1;
  padding-bottom: 65px !important;
}
.toFilter {
  width: 24%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 999;
  border: none;
  border-left: 1px solid #eee;
}
.mengceng {
  width: 86%;
  height: 100%;
  background: #fff;
  font-size: 16px;
}
.mengcheng_top {
  width: 100%;
  height: 44px;
  background-color: #f1f1f1;
  position: fixed;
  top: 0;
  right: 0;
}
.mc_close {
  width: 44px;
  height: 44px;
  text-align: center;
  line-height: 44px;
}
.mc_p {
  width: 100%;
  height: 44px;
  line-height: 44px;
  position: absolute;
  left: 44px;
  top: 0;
  text-align: center;
  color: #333;
}
.mc_main {
  /* position: relative; */
  margin-top: 44px;
}
.mc_severse {
  margin: 0 12px;
  border-bottom: 1px solid #f2f2f2;
  padding-top: 15px;
  padding-bottom: 10px;
  position: relative;
}
.mc_severse_title {
  font-size: 12px;
  color: #333;
  width: 100%;
  margin-bottom: 10px;
}
.mc_btns {
  width: 100%;
  display: inline-block;
}
.mc_btn {
  width: 31%;
  margin-right: 2%;
  text-align: center;
  height: 40px;
  float: left;
  line-height: 40px;
  background-color: #f7f7f7;
  border-radius: 4px;
  font-size: 12px;
  color: #333;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 3px;
  position: relative;
  margin-bottom: 5px;
}
.mc_btn .mc_close_01 {
  display: block;
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 12px;
}
.active {
  border: 1px solid #d90000;
  color: #d90000;
  background-color: #fff;
}
.price_content_input {
  width: 30%;
  margin-right: 1%;
  margin-bottom: 5px;
  float: left;
  height: 40px;
  line-height: 40px;
  background-color: #f7f7f7;
  border-radius: 4px;
  font-size: 12px;
}
.price_content_input input {
  width: 100%;
  border: 0;
  background: none;
  outline: none;
  font-size: 12px;
  color: #333;
  text-align: center;
}
.price_content_xian {
  width: 5%;
  height: 1px;
  margin-right: 2%;
  margin-left: 2%;
  margin-top: 6%;
  float: left;
  background: #333;
}
.brand_title {
  position: relative;
  font-size: 12px;
  color: #333333;
  margin-bottom: 10px;
  width: 100%;
  overflow: hidden;
  display: inline-flex;
}
.brand_name {
  display: inline-block;
  font-weight: bold;
  float: left;
  margin-right: 10px;
  text-align: left;
}
.brand_more {
  position: absolute;
  top: 0;
  right: 0;
  color: #999;
}
.brand_more .brand_icon {
  width: 12px;
  height: 12px;
  font-size: 12px;
}
.mengceng .content_footer {
  width: 100%;
  height: 66px;
  border-top: 1px solid #ccc;
  background: #fff;
  color: #333;
  /* position: fixed !important;
    right: 0;
    bottom: 0;
    z-index: 2; */
}
.clear_btn,
.ensure_btn {
  width: 50%;
  line-height: 66px;
  font-size: 16px;
  text-align: center;
  float: left;
}
.ensure_btn {
}
.btn_sure {
  display: inline-block;
  width: 127px;
  height: 42px;
  line-height: 42px;
  margin-top: 12px;
  border-radius: 3px;
  color: #fff;
  background: #d90000;
}
.commodity {
  width: 100%;
  overflow: hidden;
  background: #f1f1f1;
}
.commodity .item01 {
  float: left;
  width: 49.067%;
  height: 320px;
  background: #fff;
  margin-top: 8px;
}
.commodity .item01 p {
  padding: 0 12px;
  margin: 0 auto;
}
.commodity .item01 .p1 {
  position: relative;
  overflow: hidden;
  margin-top: 12px;
  height: 220px;
}
.commodity .item01 .p1 img {
  /* width: auto; */
  height: 100%;
  width: 100%;
}
.esp1 {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.commodity .item01 .p2 {
  padding-top: 14px;
  font-size: 12px;
  color: #666;
}
.commodity .item01 .p3 {
  font-size: 16px;
  color: #333;
  line-height: 12px;
  padding: 8px 12px;
  font-family: DIN-Bold;
}
.commodity .item01 p del {
  color: #ccc;
  font-size: 12px;
  margin-left: 4px;
}
.commodity .item01 .p4 {
  line-height: 10px;
}
.commodity .item01 .p4 span {
  border-radius: 2px;
  border: 1px solid #cc9952;
  font-size: 10px;
  line-height: 10px;
  text-align: center;
  padding: 2px 3px 1px;
  display: inline-block;
}
.commodity .item01 .p4 span:first-child {
  color: #cc9952;
}
.commodity .item01 .p4 span:nth-child(2) {
  border: 1px solid #cc5252;
  color: #cc5252;
  margin-left: 6px;
}
.commodity .adSenseImg {
  margin: 12px 8px 0 8px;
  clear: both;
  display: inline-block;
  overflow: hidden;
}
.commodity .adSenseImg a {
  display: block;
  width: 100%;
  height: auto;
  margin-top: 0;
  float: initial;
}
.commodity .adSenseImg a img {
  width: auto;
  height: 100%;
}
</style>
