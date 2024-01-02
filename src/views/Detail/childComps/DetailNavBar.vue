<template>
  <nav-bar class="nav-bar">
    <template #left>
      <img src="@/assets/images/common/back.png" @click="detailImgClick">
    </template>
    <template #center>
      <div class="center">
        <div class="item" v-for="(item, index) in titles" @click="detailItemClick(index)" :class="{active: currentIndex == index}">{{item}}</div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/NavBar/NavBar";
export default {
  name: "DetailNavBar",
  components: {NavBar},
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    detailImgClick() {
      // this.$router.back();
      this.$router.go(-1);
    },
    detailItemClick(index) {
      this.currentIndex = index;
      this.$emit('detailTitleClick',index);
    }
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: #fff;
}
.nav-bar img {
  height: 30px;
  width: 30px;
  margin-top: 7px;
}
.nav-bar .center {
  display: flex;
}
.nav-bar .center div {
  flex: 1;
  font-size: 14px;
}
.active {
  color: #fe647f;
}
</style>