<template>
  <div class="detail-swiper">
    <swiper class="swiper-wrapper">
      <swiper-item class="swiper-item" v-for="item in banners">
        <a href="">
          <img :src="item" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from "@/components/common/Swiper/Swiper";
import SwiperItem from "@/components/common/Swiper/SwiperItem";

export default {
  name: "DetailSwiper",
  components: {SwiperItem, Swiper},
  data() {
    return {

    }
  },
  props: {
    banners: {
      String,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.swiper-wrapper {
  height: 300px;
  overflow: hidden;
}
.swiper-wrapper a img {
  display: block;
  height: 300px;
  width: 100%;
  margin: 0 auto;
}
</style>