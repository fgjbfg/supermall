<template>
  <div class="detail-base-info" v-if="Object.keys(GoodsDetailBase).length !== 0">
    <div class="info">
      <div class="title">{{GoodsDetailBase.title}}</div>
      <div class="price">
        <span class="new-price">{{GoodsDetailBase.newPrice}}</span>
        <span class="old-price"><del>{{GoodsDetailBase.oldPrice}}</del></span>
        <span class="discount">{{GoodsDetailBase.discountDesc}}</span>
      </div>
      <div class="other-info">
        <span v-for="item in GoodsDetailBase.columns">{{item}}</span>
      </div>
    </div>
    <div class="service">
      <div class="service-item" v-for="item in GoodsDetailBase.services">
        <img :src="item.icon">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    GoodsDetailBase: {
      Object,
      default() {
        return null;
      }
    }
  }
}
</script>

<style scoped>
.detail-base-info {
  width: 100%;

}
.info .title {
  width: 100%;
  font-size: 18px;
  padding: 10px 6px 8px;
  text-align: left;
  background-color: #fff;
}
.info .price {
  width: 100%;
}
.info .new-price {
  font-size: 18px;
  text-align: left;
  padding-left: 8px;
  color: #fe647f;
}
.info .old-price {
  font-size: 13px;
  color: #e0e0e0;
  padding-left: 7px;
}
.info .discount {
  display: inline-block;
  text-align: left;
  position: relative;
  bottom: 4px;
  border-radius: 6px;
  background-color: #fe647f;
  color: #fff;
  font-size: 14px;
  line-height: 14px;
  margin-left: 7px;
  padding: 1px 2px;
}
.info .other-info {
  display: flex;
  padding: 15px 0 7px;
  margin: 0 8px;
  border-bottom: 1px solid #e0e0e0;
}
.other-info span {
  flex: 1;
  text-align: center;
  color: gray;
  font-size: 14px;
  line-height: 14px;
}
.other-info span:first-child {
  text-align: left;
}
.other-info span:last-child {
  text-align: right;
}
.detail-base-info .service {
  display: flex;
  padding: 15px 6px 15px;
}
.service .service-item {
  flex: 1;
  text-align: left;
  overflow:hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
}
.service div:first-child {
  text-align: left;
}
.service div:last-child {
  text-align: right;
}
.service img {
  height: 12px;
  width: 12px;
}
.service span {
  font-size: 12px;
}

</style>