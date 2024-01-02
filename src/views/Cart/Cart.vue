<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <template #center>购物车({{cartLength}})</template>
    </nav-bar>
    <cart-list class="cart-list"></cart-list>
    <cart-bottom-bar class="cart-bottom-bar"></cart-bottom-bar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import NavBar from "@/components/common/NavBar/NavBar";

import CartList from "@/views/Cart/childComps/CartList";
import CartBottomBar from "@/views/Cart/childComps/CartBottomBar";

export default {
  name: "Cart",
  components: {CartBottomBar, CartList, NavBar},
  computed: {
    //使用mapgetter将getter中的值局部映射到计算属性中
    ...mapGetters(['cartLength'])
  }
}
</script>

<style scoped>
.cart .cart-nav {
  background-color: #fe647f;
  color: #f2f2f2;
  z-index: 10;
}
.cart .cart-bottom-bar {
  position: fixed;
  width: 100%;
  height: 35px;
  background-color: #e0e0e0;
  bottom: 44px;
}
</style>