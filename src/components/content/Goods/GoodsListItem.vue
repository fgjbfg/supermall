<template>
  <div class="goods-list-item" @click="goodsItemClick">
    <img :src="showImage" alt="" @load="imageLoad">
    <div class="info">
      <p>{{goodsItem.title}}</p>
      <div>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">
        <img class="star" src="@/assets/icons/star.png">
        {{goodsItem.cfav}}
      </span>
      </div>
    </div>
  </div>
</template>

<script>
import {bus} from '@/common/utils'
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      goodsItemIid: null
    }
  },
  methods: {
    imageLoad() {
      bus.emit('itemImageLoad')
    },
    goodsItemClick() {
      this.$router.push('/detail/' + this.showIid)
    }
  },
  computed: {
    showImage() {
      return undefined || this.goodsItem.image || this.goodsItem.show.img;
    },
    showIid() {
      return this.goodsItem.iid;

    }
  }
}
</script>

<style scoped>


</style>