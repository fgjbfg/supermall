<template>
  <div class="cart-list">
    <cart-list-item class="cart-list-item" v-for="(item, index) in cartList" :cartListItem="item" :key="index"></cart-list-item>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartListItem from "@/views/Cart/childComps/CartListItem";

export default {
  name: "CartList",
  components: {CartListItem},
  computed: {
    ...mapGetters(['cartList'])
  }
}
</script>

<style scoped>
.cart-list-item {
  width: 100%;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 5px;
}
.cart-list-item:after {
  content: '';
  display: block;
  clear: both;
}
</style>