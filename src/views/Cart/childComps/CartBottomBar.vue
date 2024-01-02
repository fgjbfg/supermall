<template>
  <div class="cart-bottom-bar">
    <div class="check" @click="isCheckedAll">
      <check-button :checked="isSelectAll"></check-button>
    </div>
    <p>全选</p>
    <div class="total">
      <span>合计：¥{{totalPrice}}</span>
    </div>
    <div class="calc">
      <p>去计算({{totalLength}})</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

import CheckButton from "@/components/content/CheckButton/CheckButton";

export default {
  name: "CartBottomBar",
  components: {CheckButton},
  methods: {
    isCheckedAll() {

      if(this.isSelectAll) {
        this.cartList.forEach(item => item.checked = false)
      }else {
        this.cartList.forEach(item => item.checked = true)
      }
    }
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return this.cartList.filter(item => {
        return item.checked;
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count;
      }, 0).toFixed(2)
    },
    totalLength() {
      return this.cartList.filter(item => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      return this.cartList.length === this.totalLength;
    }
  }
}
</script>

<style scoped>
.check {
  position: relative;
  float: left;
  margin-top: 5px;
  margin-left: 5px;
  height: 100%;
}
.cart-bottom-bar p {
  display: block;
  position: relative;
  float: left;
  margin-top: 8px;
  margin-left: 3px;
}
.total {
  position: relative;
  float: left;
  margin-top: 8px;
  margin-left: 10px;
  font-size: 16px;
}
.calc {
  position: relative;
  float: right;
  height: 100%;
  padding: 0 15px;
  color: #fff;
  background-color: #ff4500;
}
.calc p {
  text-align: center;
  font-size: 16px;
  padding-top: 3px;
}
</style>