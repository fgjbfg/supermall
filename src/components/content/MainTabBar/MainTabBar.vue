<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home" active-color="red">
        <template #item-icon>
          <img src="@/assets/icons/home.png">
        </template>
        <template #item-icon-active>
          <img src="@/assets/icons/home_active.png">
        </template>
        <template #item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/classify" active-color="red">
        <template #item-icon>
          <img src="@/assets/icons/classify.png">
        </template>
        <template #item-icon-active>
          <img src="@/assets/icons/classify_active.png">
        </template>
        <template #item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/cart" active-color="red">
        <template #item-icon>
          <img src="@/assets/icons/cart.png">
        </template>
        <template #item-icon-active>
          <img src="@/assets/icons/cart_active.png">
        </template>
        <template #item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/my" active-color="red">
        <template #item-icon>
          <img src="@/assets/icons/my.png">
        </template>
        <template #item-icon-active>
          <img src="@/assets/icons/my_active.png">
        </template>
        <template #item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>

    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/TabBar/TabBar";
import TabBarItem from "@/components/common/TabBar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {TabBarItem, TabBar}
}
</script>

<style scoped>


</style>