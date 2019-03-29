<template>
  <div class="index">
    <header>
      <a class="logo" href="#">
        <img src="../assets/imgs/head-logo.png" alt>
      </a>
      <van-search placeholder="建行信用卡专享全场8期/12期免息"  :class="{}"  @click="searchHandle"/>
      <a class="customer-service bgImg" href="#"></a>
    </header>
    <section>
      <article>
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(img,i) in imgs" :key="i">
            <a href="javascript:void(0);" @click="jumpHandle()">
              <img class="swipe-img" :src="img">
            </a>
          </van-swipe-item>
        </van-swipe>
      </article>
      <article>
        <figure v-for="(img,i) in imgs2" :key="i">
          <img :src="img" alt>
          <figcaption>男表</figcaption>
        </figure>
      </article>
      <article>
        <a href="#">
          <img src="https://image7.wbiao.co/mall/3f1c9ee2131c4c7ab63ab7d7b4b105e5.jpg" alt>
        </a>
      </article>
      <article>
        <div class="title">
          <p>品牌</p>
          <p></p>
        </div>
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(img,i) in 2" :key="i">
            <a href="#">
              <img src="https://image7.wbiao.co/mall/71815f67408e4e628228505eb0206a08.jpg" alt>
            </a>
          </van-swipe-item>
        </van-swipe>
      </article>
      <article>
        <a href="#" v-for="(img,i) in pinpaiImgs" :key="i">
          <img :src="img" alt>
        </a>
      </article>
      <article>
        <div class="title">
          <p>本月爆款</p>
          <p></p>
        </div>
        <a href="#">
          <img src="https://image7.wbiao.co/mall/c969d728154445128c91de7dec9c288b.jpg" alt>
        </a>
        <a href="#">
          <img src="https://image7.wbiao.co/mall/1968e303112d4a1eab788d9913f458c5.jpg" alt>
        </a>
        <a href="#">
          <img src="https://image7.wbiao.co/mall/b2c1983e0dab40d0bddafc9254f87795.jpg" alt>
        </a>
        <a href="#">
          <img src="https://image7.wbiao.co/mall/9dc7c89926c3456c882af66c43236195.jpg" alt>
        </a>
      </article>
      <article>
        <div class="title">
          <p>闪购</p>
          <p></p>
        </div>
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(img,i) in 2" :key="i">
            <a href="#">
              <img src="https://image7.wbiao.co/mall/eb5980da219342379358703dfe43c640.jpg" alt>
            </a>
          </van-swipe-item>
        </van-swipe>
      </article>

      <article>
        <!-- 8 -->
        <ul class="slide">
          <li v-for="(img,i) in gundongImgs" :key="i">
            <a href="#">
              <img :src="img" alt>
            </a>
          </li>
        </ul>
      </article>

      <article>
        <div class="title">
          <p>男士</p>
          <p></p>
        </div>
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(img,i) in 2" :key="i">
            <a href="#">
              <img src="https://image7.wbiao.co/mall/0ecd1265436640fd9b04c7f568b010d7.jpg" alt>
            </a>
          </van-swipe-item>
        </van-swipe>
      </article>
      <article>
        <!-- 8 -->
        <ul class="slide">
          <li v-for="(img,i) in gundongImgs" :key="i">
            <a href="#">
              <img :src="img" alt>
            </a>
          </li>
        </ul>
      </article>

      <article>
        <div class="title">
          <p>女士</p>
          <p></p>
        </div>
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(img,i) in 2" :key="i">
            <a href="#">
              <img src="https://image7.wbiao.co/mall/f2f681158b514cf1a16bc2b6c356d011.jpg" alt>
            </a>
          </van-swipe-item>
        </van-swipe>
      </article>
      <article>
        <!-- 8 -->
        <ul class="slide">
          <li v-for="(img,i) in gundongImgs" :key="i">
            <a href="#">
              <img :src="img" alt>
            </a>
          </li>
        </ul>
      </article>

      <article>
        <div class="title">
          <p>潮人</p>
          <p></p>
        </div>
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(img,i) in 2" :key="i">
            <a href="#">
              <img src="https://image7.wbiao.co/mall/716e00a92eae4fed87af43d1d07cd0c4.jpg" alt>
            </a>
          </van-swipe-item>
        </van-swipe>
      </article>
      <article>
        <!-- 8 -->
        <ul class="slide">
          <li v-for="(img,i) in gundongImgs" :key="i">
            <a href="#">
              <img :src="img" alt>
            </a>
          </li>
        </ul>
      </article>

      <article>
        <div class="title">
          <p>尊享服务</p>
          <p></p>
        </div>
        <a href="#">
          <img src="https://image7.wbiao.co/mall/c675b18c54224e91a9c6252aef12c405.jpg" alt>
        </a>
        <a href="#">
          <img src="https://image7.wbiao.co/mall/0d8abcfdb42449a89384a7dcd2861d6b.jpg" alt>
        </a>
        <a href="#">
          <img src="https://image7.wbiao.co/mall/02be0783728d459db61616c1ca4bb96c.jpg" alt>
        </a>
      </article>
    </section>
  </div>
</template>

<script>
import { imgs, imgs2, pinpaiImgs, gundongImgs } from "../data/data";
export default {
  data() {
    return {
      imgs,
      imgs2,
      pinpaiImgs,
      gundongImgs
    }
  },
  methods: {
    searchHandle() {
      this.$router.push({
        name: "Search"
      });
    },
    jumpHandle() {
      //console.log("aaa")
      this.$router.push({
        name: "Detail"
      });
    }
  }
};
</script>
<style scoped>
article img {
  width: 100%;
}
header {
  width: 100%;
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
}
header .logo {
  display: block;
  width: 0.38rem;
  height: 0.24rem;
  margin-left: 0.1rem;
}
header a img {
  width: 0.38rem;
}
.van-search {
  padding: 0;
  width: 75%;
  background: 0;
  border-radius:0.25rem;
}
.van-search__content {
  border-radius: 0.2rem;
}
.customer-service {
  display: block;
  width: 0.28rem;
  height: 0.28rem;
  background: url(../assets/imgs/bg.png) no-repeat;
  background-size: 0.28rem 0.28rem;
  margin-right: 0.1rem;
}
.van-swipe {
  padding: 0;
}
section {
  flex: 1;
  overflow: auto;
  margin-bottom: 0.47rem;
}
section article {
  width: 100%;
}
section article:nth-child(2) {
  width: 86%;
  display: flex;
  justify-content: space-between;
  padding: 0.12rem 7%;
  background: #f5f5f5;
}
section figure {
  font-size: 0.08rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
}
section figure img {
  width: 0.32rem;
  margin-bottom: 0.03rem;
}
article .title {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin: 0.1rem 0;
}
article .title p:nth-child(1) {
  font-size: 0.12rem;
  color: #333;
  line-height: 0.12rem;
  text-align: center;
  margin-bottom: 0.12rem;
  font-weight: 700;
}
article .title p:nth-child(2) {
  width: 0.2rem;
  height: 0.02rem;
  background: #ccaa7a;
}
section article:nth-child(5) {
  height: 2.5rem;
}
section article:nth-child(5) a {
  width: 33.33%;
  display: block;
  float: left;
}
section .slide {
  width: 220%;
  display: flex;
}
</style>
