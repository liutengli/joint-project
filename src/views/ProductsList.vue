<template>
  <header class="w_title">
      <ul class="clearfix">
        <li class="search01">
          <div class="wb_back">
            <van-icon name="arrow-left" class="icon-search01"/>
          </div>
          <div  class="wb_search_result">
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
        </li> -->
      </ul>
    </header>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    searchHandle() {

    }
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
  .wb_back,.wb_meor {
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
  .wb_search_result, .search02 form {
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
</style>
