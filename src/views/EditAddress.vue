<template>
  <div class="address">
    <header>
      <span @click="backHandle">
        <van-icon name="arrow-left"/>
      </span>
      <h3>修改收货地址</h3>
    </header>
    <section>
      <article>
        <van-address-edit
          :area-list="areaList"
          :address-info="initAddress"
          show-delete
          show-set-default
          show-search-result
          :search-result="searchResult"
          @save="onSave"
          @delete="onDelete"
          @change-detail="onChangeDetail"
        />
      </article>
    </section>
  </div>
</template>
<script>
import areaList from "../utils/area";
import { editAddress, delAddress } from "../servers/user";
export default {
  data() {
    return {
      areaList,
      searchResult: [],
      initAddress: ""
    };
  },
  created() {
    //console.log(this.$route.params)
    this.initAddress = this.$route.params;
  },
  methods: {
    backHandle() {
      this.$router.back();
    },
    onSave(content) {
      //console.log(content);
      //console.log(content.isDefault);
      const regions =
        content.province + "-" + content.city + "-" + content.county;
      //console.log(this.$route.params.id)
      editAddress(this.$route.params.id, {
        receiver: content.name, //姓名
        mobile: content.tel, //手机
        regions: regions, //地区信息
        address: content.addressDetail, //详细地址
        idDefault: content.isDefault //是否默认
      })
        .then(res => {
          if (res.statusText == "OK") {
            this.$toast("保存成功");
            this.$router.push({
              name: "Address"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    onDelete() {
      delAddress(this.$route.params.id)
        .then(res => {
          //console.log(res);
          if (res.statusText == "OK") {
            this.$toast("删除成功");
            this.$router.push({
              name: "Address"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>
<style scoped>
header {
  display: flex;
  align-items: center;
  align-self: center;
  width: 100%;
  height: 0.36rem;
  border-bottom: 0.01rem solid #ddd;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
}
header span {
  font-size: 0.06rem;
  color: #999;
  margin-right: 1.3rem;
}
header h3 {
  font-size: 0.14rem;
  font-weight: 500;
}
section {
  flex: 1;
  overflow: auto;
  margin-top: 0.36rem;
}

.select-city {
  position: relative;
}
.select-city span {
  font-size: 0.06rem;
  color: #999;
  position: absolute;
  right: 0;
  top: 0;
}

.van-button--danger {
  background-color: #cda97b;
}
</style>
