<template>
  <div class="goods">
    <header class="W_title">
      <span @click="backHandle">
        <van-icon name="arrow-left"/>
      </span>
      <ul>
        <li>
          <a href="javascript:void(0);" class="on">商品</a>
        </li>
        <li>
          <a href="javascript:void(0);">详情</a>
        </li>
        <li>
          <a href="javascript:void(0);">评价</a>
        </li>
        <li>
          <a href="javascript:void(0);">门店</a>
        </li>
      </ul>
      <span class="header-right">...</span>
    </header>
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb">
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-price">{{ formatPrice(goods.price) }}</div>
        <div class="goods-title">{{ goods.title }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">顺丰包邮</van-col>
        <van-col span="14">销售：{{ goods.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell @click="sorry">
        <span>...</span>
        <template slot="title">
          <i class="title2">分期</i>
          <span class="van-cell-text">每月194.3 元x12期</span>
          <van-tag class="goods-tag" type="danger">免息免手续费</van-tag>
        </template>
      </van-cell>
      <van-cell @click="sorry">
        <span>...</span>
        <template slot="title">
          <i class="title2">配送</i>
          <span class="van-cell-text">免运费</span>
          <div class="distribution_content_b">下单后预计3-7个工作日内发货</div>
          <article class="brand" id="brand">
            <a class="fl">
              <span class="brand_text brand_textTwo">正品保障</span>
            </a>
            <a class="fl">
              <span class="brand_text brand_textTwo">正规发票</span>
            </a>
            <a class="fl">
              <span class="brand_text brand_textTwo">假一赔三</span>
            </a>
            <a class="fl">
              <span class="brand_text brand_textTwo">7天退换</span>
            </a>
            <a class="fl">
              <span class="brand_text brand_textTwo">全球联保</span>
            </a>
            <a class="fl">
              <span class="brand_text brand_textTwo">免息分期</span>
            </a>
          </article>
        </template>
      </van-cell>

      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">有赞的店</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry"/>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell @click="sorry">
        <template slot="title">
           <h3 >万表服务</h3>
        </template>
      </van-cell>
       <van-cell is-link  @click="sorry">
        <template slot="title">
          <i class="title2 service">
            <img src="https://image7.wbiao.co/shop/60081ea1c0974c2f8b86dd3a27e73cda.png" alt="">
          </i>
          <div>
            <p class="van-cell-text1">名匠保修</p>
            <p class="van-cell-text">手表维修 诚信平台</p>
          </div>
        </template>
      </van-cell>
      <van-cell is-link  @click="sorry">
        <template slot="title">
          <i class="title2 service">
            <img src="https://image7.wbiao.co/shop/109ce9a120f240989c0e5fb05b697f5f.png" alt="">
          </i>
          <div>
            <p class="van-cell-text1">保底回收</p>
            <p class="van-cell-text">多方出价 急速变现</p>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry"/>
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o" @click="sorry">客服</van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">购物车</van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="AddShopCart">加入购物车</van-goods-action-big-btn>
      <van-goods-action-big-btn primary @click="sorry">立即购买</van-goods-action-big-btn>
    </van-goods-action>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from "vant";

export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  },
  data() {
    return {
      goods: {
        title: "阿玛尼ARMANI-时尚女表系列 AR11055 石英女表",
        price: 2332,
        remain: 19,
        thumb: [
          "https://image7.wbiao.co/shop/43fdbb57313a4162880e81931d0c1abd.png?x-oss-process=image/resize,m_pad,w_750,h_750,color_ffffff",
          "https://image7.wbiao.co/shop/2da9cbe4bd794d33b9c865fe57a3a701.jpg?x-oss-process=image/resize,m_pad,w_750,h_750,color_ffffff",
          "https://image7.wbiao.co/shop/60ee7b5813f4494cb02bff3f583d4039.jpg?x-oss-process=image/resize,m_pad,w_750,h_750,color_ffffff",
          "https://image7.wbiao.co/shop/78d58a91a12245a2bf9a2a3dbfc82ae9.jpg?x-oss-process=image/resize,m_pad,w_750,h_750,color_ffffff",
          "https://image7.wbiao.co/shop/65055a890c7d467597c8832091629eec.jpg?x-oss-process=image/resize,m_pad,w_750,h_750,color_ffffff",
          "https://image7.wbiao.co/shop/2cb46b43984146a4865f10af2670a52b.jpg?x-oss-process=image/resize,m_pad,w_750,h_750,color_ffffff"
        ]
      }
    };
  },
  methods: {
      ...mapMutations(['add']), // 把vuex中的mutations映射到methods
    formatPrice() {
      return "¥" + this.goods.price;
    },
    onClickCart() {
      this.$router.push("ShopCart");
    },
    sorry() {
      Toast("暂无后续逻辑~");
    },
    backHandle() {
      this.$router.back();
    },
    AddShopCart(){
      this.add(1)
    },
  },
  computed: {
    ...mapState(['counter']), // 使用...
    cc() {
      return this.c + '....'
    }
  }
};
</script>

<style scoped lang="less">
.W_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  width: 100%;
  height: 0.36rem;
  border-bottom: 0.01rem solid #ddd;
}
.W_title span {
  font-size: 0.06rem;
  color: #999;
}
.W_title ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
}
.W_title ul li {
  width: 0.4rem;
  height: 0.36rem;
  line-height: 0.36rem;
  font-size: 0.1rem;
  font-weight: 600;
}
.W_title ul a {
  color: #666;
  /*  border-bottom: 0.02rem solid #333; */
}
.W_title .header-right {
  font-size: 0.22rem;
  margin: -0.1rem 0.15rem 0;
}
.van-cell {
  margin-top: 0.08rem;
}
.van-button--warning {
  color: #666;
  background: 0;
  border: 1px solid #ccc;
}
.van-button--danger {
  background: #d90000;
  border-top: 0.001rem solid #d90000;
}
.distribution_content_b {
  margin-left: 0.4rem;
  color: #999;
}
.goods-tag {
  background: #d90000 !important;
}
.brand {
  width: 160%;
  padding-left: 19%;
  margin: 0.1rem 0;
}
.brand a {
  color: #ccc;
  padding: 0 0.05rem;
}
.title2 {
  font-size: 0.1rem;
  margin-right: 0.2rem;
  float: left;
}
.service {
  margin-right: 0;
}
.title2 img {
  width: 60%;
}
.goods-cell-group h3 {
  font-size: 0.12rem;
  margin: 0.1rem 0;
}
.van-cell-text1 {
  font-weight: 600; 
  color: #333;
}
.van-cell-text {
  color: #999;
}
.goods {
  padding-bottom: 50px;
  margin-bottom: 0.47rem;
  &-swipe {
    img {
      width: 64%;
      margin: 2% 18% 0;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    font-size: 0.2rem;
    font-weight: 700;
    color: #d90000;
    margin-bottom: 0.08rem;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
.van-goods-action {
  position: static;
}
</style>