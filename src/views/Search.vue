<template>
  <div class="search">
    <header>
      <form action="/">
        <van-search
          :class="{'v-search':true}"
          v-model="value"
          placeholder="搜索商品"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </header>
    <section>
      <article>
        <p class="search_tit">热门搜索</p>
      </article>
      <article>
        <a href="#" class="search-hot">天梭力洛克</a>
        <a href="#" class="search-hot">浪琴</a>
        <a href="#" class="search-hot">欧米茄</a>
        <a href="#">人气好物榜</a>
        <a href="#">卡西欧</a>
        <a href="#">手表特卖</a>
        <a href="#">4000元正装表推荐</a>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value:''
    }
  },
  methods:{
    onCancel(){
      /*  this.$router.push({
          name:'Index'
        }) */
      //跳回上一页
      window.history.back()
    },
    onSearch(){

    }
  }
};
</script>
<style scoped>
header {
  height: 0.45rem;
  border-bottom: 0.01rem solid #ccc;
  background:#fff;
}
form {
  width: 100%;
  height:100%
}
.van-search {
  width: 97%;
  margin-left: 2%;
   height:100%
}
.v-search >>> .van-search__content{
  background:#f1f1f1 !important;
  border-radius:0.2rem;
  height:0.34rem;
}
.van-search__action {
  color: #1989fa;
}
section .search_tit {
  font-size: 0.1rem;
  color: #999;
  margin-top: 0.12rem;
  padding: 0 0.1rem;
  margin-bottom: 0.12rem;
}
section article:nth-child(2) {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
}
section article a {
  border: 0.01rem solid #ddd;
  font-size: 0.08rem;
  color: #333;
  height: 0.18rem;
  line-height: 0.18rem;
  border-radius: 0.3rem;
  padding: 0 0.08rem;
  margin-left: 0.1rem;
  margin-bottom: 0.05rem;
}
.search-hot {
  border-color: #cc3d3d;
  color: #cc3d3d;
}
</style>