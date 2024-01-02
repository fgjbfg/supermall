<template>
  <div class="cart-list-item">
    <div class="check">
<!--      <div class="check-button" @click="checkClick">-->
<!--        <img src="@/assets/images/cart/chosen.png" v-show="checked">-->
<!--      </div>-->
      <check-button class="check-button" @click="checkClick" :checked="this.cartListItem.checked"></check-button>
    </div>
    <img :src="cartListItem.image" class="goods-img">
    <div class="desc">
      <p class="title">{{cartListItem.title}}</p>
      <p class="introduce">{{cartListItem.desc}}</p>
      <div class="value">
        <span class="price">¥{{cartListItem.price}}</span>
        <span class="count">X{{cartListItem.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/CheckButton/CheckButton";

export default {
  name: "CartListItem",
  components: {CheckButton},
  data() {
    return {
      // checked: true
    }
  },
  props: {
    cartListItem: {
      Object,
      default() {
        return null;
      }
    }
  },
  methods: {
    checkClick() {
      //去修改vuex中的模型，不只是修改checked的值
      this.cartListItem.checked = !this.cartListItem.checked;
    }
  }
}
</script>

<style scoped>
.cart-list-item .check {
  position: relative;
  float: left;
  padding-top: 12%;
  padding-left: 2px;
}
.cart-list-item .goods-img {
  height: 100px;
  width: 80px;
  position: relative;
  float: left;
  border-radius: 5px;
  margin-top: 12px;
  margin-left: 2px;
}
.cart-list-item .desc {
  position: relative;
  float: left;
  height: 105px;
  width: 66%;
  margin-top: 12px;
  margin-left: 12px;
}
.desc p {
  margin-bottom: 10px;
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow:ellipsis;
}
.desc p:nth-child(1) {
  font-size: 16px;
}
.desc p:nth-child(2) {
  font-size: 12px;
  color: #515151;
}
.desc .value {
  margin-top: 35px;
}
.desc .value span:nth-child(1) {
  font-size: 16px;
  color: darkorange;
  text-align: left;
}
.desc .value span:nth-child(2) {
  float: right;
}
</style>