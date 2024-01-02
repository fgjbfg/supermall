<template>
  <div class="detail-bottom-bar">
    <div class="service">
      <div class="kefu">
        <span class="icon-1"></span>
        <span>客服</span>
      </div>
      <div class="shop">
        <span class="icon-2"></span>
        <span>店铺</span>
      </div>
      <div class="follow">
        <span class="icon-uniE900"></span>
        <span>收藏</span>
      </div>
    </div>
    <div class="func">
      <button class="cart" @click="addCart">加入购物车</button>
      <button class="purchase">购买</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBottomBar",
  methods: {
    addCart() {
      this.$emit('addCart');
    }
  }
}
</script>

<style scoped>
.detail-bottom-bar .service {
  position: relative;
  float: left;
  width: 50%;
  height: 100%;
  display: flex;
  text-align: center;
}
.detail-bottom-bar .func {
  position: relative;
  float: left;
  width: 50%;
  height: 100%;
  display: flex;
  text-align: center;
}
.detail-bottom-bar .service div {
  flex: 1;
}
.service span {
  display: block;
  margin-top: 5px;
}
.service div span:nth-child(1) {
  font-size: 20px;
}
.detail-bottom-bar .func button {
  flex: 1;
  border: none;
}
.detail-bottom-bar .func button:nth-child(1) {
  background-color: yellow;
}
.detail-bottom-bar .func button:nth-child(2) {
  background-color: #fe647f;
  color: #fff;
}
</style>