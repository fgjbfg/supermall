<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperImgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from "@/components/common/Swiper/Swiper";
import SwiperItem from "@/components/common/Swiper/SwiperItem";
export default {
  name: "HomeSwiper",
  components: {SwiperItem, Swiper},
  data() {
    return {
      //使用变量保证就发生一次事件
      isLoad: false
    }
  },
  props: {
    banners: {
      String,
      default() {
        return [];
      }
    }
  },
  methods: {
      swiperImgLoad() {
        if(!this.isLoad) {
          this.$emit('swiperImgLoad');
          this.isLoad = true;
        }
      }
  }
}
</script>

<style scoped>
  .home-swiper a img{
    width: 100%;
  }
</style>