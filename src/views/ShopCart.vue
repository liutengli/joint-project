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
        <van-checkbox-group v-model="List">
        <div class="shop-blocks"  v-for="p in shoplist" :key="p._id">
          <div class="shop-desc">
             <van-checkbox
                :class="{'h':true}"
                checked-color='red'
                :name="p"
              >
              </van-checkbox>
            <div class="shop-detail">
              <van-card
                :num="p.quantity"
                :price="p.product.price"
                :desc="p.product.descriptions"
                :title="p.product.name"
                :thumb="serverurl+p.product.coverImg"
                :origin-price="200"
                :thumb-link="`#/list/${p.product._id}`"

              />
            </div>
            <!-- 编辑时显示 -->
            <div class="shop-editor " :class="{'hidden':shopdel}">
              <p><b>-</b><b>{{p.quantity}}</b><b>+</b></p>
              <van-button type="danger"  :class="{'shop-del':true}" @click="DelShopHandle(p._id)">删除</van-button>
            </div>
          </div>
        </div>
        
        </van-checkbox-group>
      </div>
      <div class="TotalPri" >
        <van-submit-bar
          :price="totalPrice"
          :button-text="submitBarText"
          @submit="提交函数"
          >
          <van-checkbox v-model=checked checked-color='red'	@click="onSubmit">全选</van-checkbox>
        </van-submit-bar>
      </div>
      <div class="Total" :class="{'TotalEditor':shopdel}">
        <van-submit-bar
          button-text="删除"
          @submit="删除函数"
          >
          <van-checkbox v-model=checked checked-color='red' @click="onSubmit">全选</van-checkbox>
          <a href="javascript:void(0);"  class="removeCollect">移入收藏</a>
        </van-submit-bar>
      </div>
    </section>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from 'vant';
import {getShopCart,DelShopCartList} from '../servers/user.js'
import {serverurl} from '../utils/config'

export default {
  data() {
    return {
      serverurl:serverurl,
      checked:false,
      shopdel:true,
      SingleCheck:true,
      List:[],
      shoplist:'',
    };
  },
  methods:{
    showDel(){
      this.shopdel= ! this.shopdel;
      this.checked=false
    },
    onSubmit(){
      this.SingleCheck=this.checked;
     //this.$refs.checkboxes.toggle();
     //this.$refs.checkboxes1.toggle();
    },
    DelShopHandle(id){
      DelShopCartList(id)
      .then(res=>{
        console.log(res)
        this.getShopCartList();
      })
      .catch(err=>{
        console.log(err);
      })
    },
    getShopCartList(){
      getShopCart()
      .then(res=>{
        this.shoplist=res.data;
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  computed:{
    totalPrice() {
      var total=0;
        this.List.forEach(item=>{
          total+=(item.product.price*100);
         // console.log(this.List)
        })
      return total;
    },
    submitBarText() {
      if(this.List.length){
        var count=0;
        this.List.forEach(item=>{
          count+=item.quantity;
        })
        return '结算' + (count ? `(${count})` : '');
      }else{
         return '结算';
      }
      
    },
  },
  created(){
    this.getShopCartList();
  },
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
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
  margin-top: 0.5rem;
  margin-bottom: 1.15rem;
}
.shop-blocks {
  width: 100%;
  height: 1.22rem;
  margin-bottom: 12px;
  background-color: #fff;
  position: relative;
  padding-top: 0.1rem;
}
.shop-desc .h {
  width: 0.2rem;
  height: 0.2rem;
   margin: 0.42rem 0 0 0.13rem;
  float: left;
  display: flex;
}
 .h  .van-icon-success{
   display: flex !important;
}
.h >>> i.van-icon {
   float: left !important;
}
.shop-desc {
  height: 0.98rem;
  margin-top: 0.18rem;
  width: 100%;
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
  top: 0;
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
  margin-left:0.15rem;
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
/* .Total .van-button--danger {
    color: #fff;
    background-color: #ccc;
    border: 1px solid #ccc;
} */
.TotalEditor{
  display:none;
}
</style>


