<template>
  <div class="app">
    <header class="cart-title">
      <ul>
        <li class="cart-title-center">购物车</li>
        <li class="cart-title-right">
          <a
            href="javascript:void(0);"
            class="cart-editAll"
            :class="{'hidden':!shopdel}"
            @click="showDel"
          >编辑全部</a>
          <a
            href="javascript:void(0);"
            class="cart-editFinish"
            :class="{'hidden':shopdel}"
            @click="showDel"
          >完成</a>
        </li>
      </ul>
    </header>
    <section>
      <div class="cart-contnt">
        <van-checkbox-group >
          <div class="shop-blocks" v-for="p in shoplist" :key="p._id">
            <div class="shop-desc">
              <!-- <van-checkbox
                :class="{'h':true}"
                checked-color='red'
                :name="p"
              >
              </van-checkbox>-->
              <label class="h">
                <input type="checkbox" :checked=checked  v-model="List" :value="p">
                <i>✓</i>
              </label>
              <div class="shop-detail">
                <van-card
                  :num="p.quantity"
                  :price="p.product.price"
                  :desc="p.product.descriptions"
                  :title="p.product.name"
                  :thumb="serverurl+p.product.coverImg"
                  :origin-price="200"
                  :thumb-link="`#/detail/${p.product._id}`"
                />
              </div>
              <!-- 编辑时显示 -->
              <div class="shop-editor" :class="{'hidden':shopdel}">
                <p>
                  <b>-</b>
                  <b>{{p.quantity}}</b>
                  <b>+</b>
                </p>
                <van-button
                  type="danger"
                  :class="{'shop-del':true}"
                  @click="DelShopHandle(p._id)"
                >删除</van-button>
              </div>
            </div>
          </div>
        </van-checkbox-group>
      </div>
      <div class="TotalPri">
        <van-submit-bar :price="totalPrice" :button-text="submitBarText" @submit="提交函数">
          <van-checkbox v-model="checked" checked-color="red" @click="onSubmit()">全选</van-checkbox>
        </van-submit-bar>
      </div>
      <div class="Total" :class="{'TotalEditor':shopdel}">
        <van-submit-bar button-text="删除" @submit="AllDelshop"  :disabled="disabled">
          <van-checkbox v-model="checked" checked-color="red" @click="onSubmit()">全选</van-checkbox>
          <a href="javascript:void(0);" class="removeCollect">移入收藏</a>
        </van-submit-bar>
      </div>
    </section>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
import { getShopCart, DelShopCartList } from "../servers/user.js";
import { serverurl } from "../utils/config";
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
      checked:'checked',
      serverurl: serverurl,
      checked: false,
      shopdel: true,
      disabled:true,
      List: [],
      shoplist: ""
    };
  },
  methods: {
     ...mapMutations(['Initcounter']), // 把vuex中的mutations映射到methods
    showDel() {
      this.shopdel = !this.shopdel;
      this.checked = false;
      this.List=[];
    },
    onSubmit() {
      if(this.checked){
        this.List=this.shoplist
      }else{
        this.List=[]
      }
      //console.log(this.checked)
    },
    DelShopHandle(id) {
      DelShopCartList(id)
        .then(res => {
          console.log(res);
          this.getShopCartList();
        })
        .catch(err => {
          console.log(err);
        });
    },
    AllDelshop(){
     this.List.forEach(item=>{
       this.DelShopHandle(item._id)
     })
    },
    getShopCartList() {
      getShopCart()
        .then(res => {
          this.shoplist = res.data;
          //counter=22
          this.Initcounter(this.ShopCartAllcount)
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  watch:{
    'List':function(){
      //判断全选
       if(this.List.length==this.shoplist.length){
        this.checked=true;
      }else{
        this.checked=false
      }
      //有选中就不禁用删除按钮
       if(this.List.length){
        this.disabled=false;
      }else{
        this.disabled=true
      }
    },
  },
  computed: {
    ...mapState(['counter']), // 使用...
    totalPrice() {
      var total = 0;
      this.List.forEach(item => {
        total += (item.product.price* item.quantity) ;
         //console.log(this.List)
      });
      return total;
    },
    submitBarText() {
      if (this.List.length) {
        var count = 0;
        this.List.forEach(item => {
          count += item.quantity;
        });
        return "结算" + (count ? `(${count})` : "");
      } else {
        return "结算";
      }
    },
    ShopCartAllcount(){
      var count=0;
      this.shoplist.forEach(q=>{
        count+=q.quantity
      })
      return count;
    }
  },
  created() {
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
  margin: 0.32rem 0 0 0.13rem;
  float: left;
  z-index: 22;
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
  bottom: 65px;
  padding-left: 0.13rem;
  background: #fff;
  width: 97%;
}
.shop-editor {
  width: 2.6rem;
  height: 1.3rem;
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
.shop-del {
  width: 0.36rem;
  height: 1.3rem;
  padding: 0 0.12rem;
  box-sizing: content-box;
  float: right;
}
.shop-editor p {
  display: block;
  height: 0.28rem;
  line-height: 0.28rem;
  text-align: center;
  font-size: 0.14rem;
  float: left;
  margin-top: 0.13rem;
  margin-left: 0.15rem;
  color: #979797;
}
.shop-editor p b:nth-of-type(1),
.shop-editor p b:nth-of-type(3) {
  font-size: 0.18rem;
  width: 0.4rem;
  border: 1px solid #ddd;
  float: left;
}
.shop-editor p b:nth-of-type(2) {
  padding: 0 0.4rem;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  float: left;
}
/* 编辑时的尾部 */
.removeCollect {
  color: #666;
  margin-left: 1rem;
}

.TotalEditor {
  display: none;
}

/* 复选框 */
label {
  font-size: 0.18rem;
  cursor: pointer;
}

label i {
  font-size: 0.12rem;
  font-style: normal;
  display: inline-block;
  width: 0.18rem;
  height: 0.18rem;
  text-align: center;
  line-height: 0.18rem;
  color: #fff;
  vertical-align: middle;
  margin: -0.02rem 0.02rem 0.01rem 0;
  border: #cecece 1px solid;
  border-radius:50%
}

input[type="checkbox"],
input[type="radio"] {
  display: none;
}
input[type="checkbox"]:checked + i,
input[type="radio"]:checked + i {
  background: red;
}
input[type="checkbox"]:disabled + i,
input[type="radio"]:disabled + i {
  border-color: #ccc;
}

input[type="checkbox"]:checked:disabled + i,
input[type="radio"]:checked:disabled + i {
  background: #ccc;
}
</style>


