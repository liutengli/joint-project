<template>
  <div class="list">
    <header class="w_title">
      <ul class="clearfix">
        <li class="wb_search_result">
          <van-icon name="search" class="srh_icon icon-a-search01"/>
          <a href="javascript: void(0);" class="search_work" @click="searchProductsHandle">搜索商品</a>
        </li>
      </ul>
    </header>
    <section class="main">
      <div class="scroll_wrap scroll_wrap_left">
        <ul class="two_stage_title" >
          <li v-for="(item, index) in 4" :key="index" @click="changeBgc(index)" :class="{active: index == isActive}">
            <a href="javascript:void(0)" data-code="index">{{index}}推荐</a>
          </li>
          <!-- <li class="on">
            <a href="javascript:void(0)">推荐 顶级品牌 奢华品牌 高级品牌 轻奢时尚 年轻潮牌 国产智能 表带 维护保养</a>
          </li>
          <li class="not_goods-category">
            <a href="javascript:void(0)">二手商城</a>
          </li> -->

        </ul>
      </div>
      <div class="scroll_wrap scroll_wrap_right">
        <div ></div>
        <div class="gnTabs_block">
          <div class="act_img">
            <a href="#"><img src="../assets/imgs/1.jpg" alt=""></a>
          </div>
          <p class="hot_tit">
            <span class="hot_tit_01"></span>
            猜你喜欢
            <span class="hot_tit_02"></span>
          </p>
          <div class="sort_list sort_list_01">
            <ul class="clearfix">
              <li v-for="(item, index) in productsImg1" :key="index">
                <a href="#/productslist">
                  <p class="p_img">
                    <img :src="item.src" alt="">
                  </p>
                  <p class="p_txt">{{item.name}}</p>
                </a>
              </li>

            </ul>
          </div>
          <p class="hot_tit">
            <span class="hot_tit_01"></span>
            国际馆
            <span class="hot_tit_02"></span>
          </p>
          <div class="sort_list sort_list_01">
            <ul class="clearfix">
              <li v-for="(item, index) in productsImg2" :key="index">
                <a href="#/productslist">
                  <p class="p_img">
                    <img :src="item.src" alt="">
                  </p>
                  <p class="p_txt">{{item.name}}</p>
                </a>
              </li>
            </ul>
          </div>
          <p class="hot_tit">
            <span class="hot_tit_01"></span>
            热门品牌
            <span class="hot_tit_02"></span>
          </p>
          <div class="sort_list sort_list_01">
            <ul class="clearfix">
              <li v-for="(item, index) in productsImg3" :key="index">
                <a href="#/productslist">
                  <p class="p_img">
                    <img :src="item.src" alt="">
                  </p>
                  <p class="p_txt">{{item.name}}</p>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
    <footer>

    </footer>
  </div>
</template>
<script>
import { productsImg1, productsImg2, productsImg3 } from "../data/data";
export default {
  data() {
    return {
      productsImg1,
      productsImg2,
      productsImg3,
      twoList: [],
      isActive: '',
    }
  },
  created() {

  },
  methods: {
    changeBgc(index){
      this.isActive = index;
    },
    searchProductsHandle() {
      this.$router.push({
        name:'Search'
      })
    },
  }
}
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
  .scroll_wrap_left {
    position: fixed;
    top: 0.45rem;
    left: 0;
  }
  .scroll_wrap_left .active a {
    background: #999;
    color: #fff;
    border-radius: 100px;
    border-bottom: 0;
  }
  .list {
    display: flex;
    flex-direction: column;
  }
  .w_title {
    width: 100%;
    height: 0.44rem;
    line-height: 0.44rem;
    max-width: 6.40rem;
    margin: 0 auto;
    background: #fff;
    border-bottom: 1px solid #ddd;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background: #fff;
  }
  .clearfix {
    position: relative;
  }
  .wb_search_result {
    height: 0.28rem;
    line-height: 0.28rem;
    margin-top: 0.08rem;
    margin-right: 0.06rem;
    background: #f1f1f1;
    border-radius: 1rem;
    font-size: 0.14rem;
    color: #333;
    margin-left: 0.10rem;
  }
  .srh_icon {
    position: absolute;
    top: 0.08rem;
    left: 0.11rem;
  }
  .icon-a-search01 {
    display: block;
    width: 0.12rem;
    height: 0.12rem;
    margin-left: 0.10rem;
    font-size: 0.14rem;
  }
  .search_work {
    position: relative;
    display: block;
    height: 100%;
    padding: 0 0.32rem;
    font-size: 0.12rem;
    color: #999;
  }
  .wb_search {
    height: 0.28rem;
    line-height: 0.28rem;
    margin-top: 0.08rem;
    margin-right: 0.44rem;
    border-radius: 1rem;
    background: #f1f1f1;
    font-size: 0.12rem;
    color: #999;
    display: none;
  }
  .wb_title_middle {
    margin-left: 0.12rem;
    margin-right: 0.56rem;
  }
  .input_search {
    width: 90%;
    height: 0.28rem;
    font-size: 0.12rem;
    color: #333;
    background: #f1f1f1;
    padding-left: 0.32rem;
    border: none;
    box-sizing: border-box;
    border-radius: 1rem;
  }
  .rewrite_right {
    margin-right: 0.08rem;
    text-align: center;
    position: absolute;
    right: 0.08rem;
    top: -0.43rem;
    display: none;
  }
  .right_back {
    color: #477db3;
    font-size: 0.14rem;
  }
  .icon-a-close02 {
    width: 0.16rem;
    height: 0.16rem;
    font-size: 0.14rem;
  }
  .main {
    padding-top: 0.44rem;
    padding-bottom: 0.65rem;
    background: #fff;
  }
  .scroll_wrap {
    display: inline-block;
    float: left;
    border-right: 1px solid #ddd;
    height: 100%;
  }
  .scroll_wrap_left li {
    height: auto;
    float: none;
    border-bottom: 1px solid #ddd;
    text-align: center;
  }
  .scroll_wrap_left li a {
    width: 0.61rem;
    display: block;
    line-height: 0.22rem;
    font-size: 0.12rem;
    margin: 0.13rem 0.11rem;
    padding: 0;
    color: #666;
  }
  .scroll_wrap_left li.on a {
    background: #515151;
    color: #fff;
    border-radius: 100px;
    border-bottom: 0;
  }
  .scroll_wrap_right {
    width: 3.15rem;
    transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
    transition-duration: 0ms;
    transform: translate(0px, 0px) translateZ(0px);
    float: right;
  }
  .act_img a {
    display: block;
    margin: 0.09rem 0.12rem;
    height: 1.1rem;
  }
  .act_img a img {
    width: 100%;
  }
  .hot_tit {
    font-size: 0.12rem;
    line-height: 0.36rem;
    color: #999;
    text-align: center;
    margin-bottom: 0.08rem;
  }
  .hot_tit_01, .hot_tit_02 {
    width: 0.2rem;
    height: 0.01rem;
    display: inline-block;
    background-color: #ededed;
    margin-bottom: 3.7px;
  }
  .sort_list_01, .sort_list {
    overflow: hidden;
  }
  /* .sort_list_01 ul {
    overflow: hidden;
  } */
  .sort_list_01 ul li {
    display: block;
    float: left;
    width: 33.33%;
    text-align: center;
    height: 81px;
    margin-bottom: 26px;
    position: relative;
  }
  .sort_list_01 li a {
    width: 100%;
    height: auto;
    display: inline-block;
    position: absolute;
    top: 5px;
    left: 0;
  }
  .sort_list_01 a .p_img {
    border-radius: 50%;
  }
  .sort_list a .p_img {
    /* width: 60px; */
    width: 60%;
    height: 60px;
    margin: 0 auto 3px;
    overflow: hidden;
    position: relative;
  }
  .sort_list_01 a .p_img img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    left: -0%;
  }
  .sort_list li a .p_txt {
    font-size: 0.14rem;
    color: #666;
  }
</style>
