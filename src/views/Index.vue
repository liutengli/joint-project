<template>
  <div class="home">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(img,i) in images" :key="i">
        <img class="swipe-img" :src="img" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { images} from '../data/data.js'
export default {
  data(){
    return {
      images
    }
  }
};
</script>
<style>
 .swipe-img {
   width: 100%;
 }
</style>
