<template>
  <div class="address">
    <header>
      <span @click="backHandle">
        <van-icon name="arrow-left"/>
      </span>
      <h3>收货地址</h3>
    </header>
    <section>
      <article>
        <van-address-list
          v-model="list.id"
          :list="list"
          :disabled-list="disabledList"
          disabled-text="以下地址超出配送范围"
          @edit="onEdit"
        />
      </article>
    </section>
    <footer>
      <router-link :to="{ name: 'AddAddress' }" class="add">添加收货地址</router-link>
    </footer>
  </div>
</template>
<script>
import { addressList } from "../servers/user";
import { constants } from 'fs';
export default {
  data() {
    return {
      addressList: "",
      chosenAddressId: "",
      list: [],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号"
        }
      ]
    };
  },
  created() {
    addressList()
      .then(res => {
        this.addressList = res.data.addresses;
        this.addressList.forEach(item => {
          let addr = {
            id: "",
            name: "",
            tel: "",
            address: "",
          };
          addr.id = item._id;
          addr.name = item.receiver;
          addr.tel = item.mobile;
          addr.address = item.regions + " " + item.address;
          this.list.push(addr);
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onEdit(item, index) {
      //Toast("编辑地址:" + index);
      console.log(item.id)
      this.$router.push({
        name: "EditAddress",
        params: this.list[index]
      });
    },
    backHandle() {
      this.$router.back();
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
  margin-right: 1.5rem;
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
.van-button--danger {
  display: none;
}
footer {
  width: 100%;
  margin-bottom: 0.5rem;
  flex-shrink: 0;
}
footer .add {
  display: block;
  width: 100%;
  height: 0.25rem;
  line-height: 0.25rem;
  font-size: 0.1rem;
  color: #fff;
  text-align: center;
  background: #cda97b;
  border-radius: 3px;
}
</style>
