<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive exclude="detail">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
    <MainTabBar></MainTabBar>
  </div>
</template>

<style lang="less">
  @import "./assets/css/base.less";
</style>
<script>
import MainTabBar from "@/components/content/MainTabBar/MainTabBar";
export default {
  components: {MainTabBar}
}
</script>