<template>
 <div class="goods-list">
  <goods-list-item v-for="item in goods" :goods-item="item"></goods-list-item>
 </div>
</template>

<script>
import GoodsListItem from "@/components/content/Goods/GoodsListItem";
export default {
  name: "GoodsList",
  components: {GoodsListItem},
  props: {
    goods: {
      Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>

</style>