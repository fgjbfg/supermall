<template>
  <div class="detail-shop-info" v-if="Object.keys(GoodDetailShop).length !== 0">
    <div class="shop-title">
      <img :src="GoodDetailShop.shopLogo">
      <span>{{GoodDetailShop.name}}</span>
    </div>
    <div class="shop-desc">
      <div class="info">
        <span>{{GoodDetailShop.cSells}}<div>总销量</div></span>
        <span>{{GoodDetailShop.cGoods}}<div>全部宝贝</div></span>
      </div>
      <div class="score">
        <span v-for="item in GoodDetailShop.score">
          {{item.name}}:
          <span v-if="!item.isBetter">{{item.score}}<span class="score-desc">低</span></span>
          <span v-else :style="{color: 'red'}">{{item.score}}<span class="score-desc" :style="{backgroundColor: 'red'}">高</span></span>
        </span>
      </div>
    </div>
    <button class="enter">进店逛逛</button>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  data() {
    return {}
  },
  props: {
    GoodDetailShop: {
      Object,
      default() {
        return null;
      }
    }
  }
}
</script>

<style scoped>
.detail-shop-info {
  width: 100%;
  border-bottom: 3px solid #e0e0e0;
  border-top: 3px solid #e0e0e0;
}
.detail-shop-info:after {
  content: '';
  display: block;
  clear: both;
}
.detail-shop-info .shop-title {
  width: 100%;
  padding-top: 10px;
}
.shop-title img {
  height: 40px;
  width: 40px;
  display: inline-block;
  vertical-align:middle;
  margin: 0 7px 10px 30px;
}
.shop-title span {
  display: inline-block;
  font-size: 16px;
  line-height: 16px;
  color: gray;
}
.detail-shop-info .shop-desc {
  width: 100%;
  padding-top: 10px;
}
.detail-shop-info .shop-desc:after {
  content: '';
  display: block;
  clear: both;
}
.shop-desc .info {
  position: relative;
  float: left;
  padding-left: 50px;
  border-right: 1px solid #e0e0e0;
}
.info span {
  font-size: 14px;
  display: inline-block;
  text-align: center;
  padding-right: 18px;
}
.info span div {
  font-size: 13px;
  padding-top: 5px;
}
.shop-desc .score {
  position: relative;
  float: left;
  padding: 0 10px;
  top: -12px;
  left: 28px;
}
.score span {
  display: block;
  font-size: 12px;
  padding-top: 5px;
}
.score span span {
  display: inline-block;
  color: green;
}
.detail-shop-info .enter {
  display: block;
  border: none;
  background-color: #f2f2f2;
  padding: 5px 40px;
  border-radius: 6px;
  font-size: 13px;
  line-height: 13px;
  position: relative;
  bottom: 10px;
  margin: 10px auto 0;
}
.score .score-desc {
  display: inline-block;
  color: #fff;
  background-color: green;
  padding: 0;
  margin-left: 2px;
}
</style>