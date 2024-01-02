<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar" :titles="['商品', '参数', '评论', '推荐']" @detailTitleClick="detailTitleClick" ref="navBar"></detail-nav-bar>
    <bs-scroll class="detail-bs-scroll" ref="scroll" @scroll="detailScroll" :probe-type= "3">
      <detail-swiper class="detail-swiper" :banners="banners"></detail-swiper>
      <detail-base-info :GoodsDetailBase="GoodsDetailBase"></detail-base-info>
      <detail-shop-info :GoodDetailShop="GoodDetailShop"></detail-shop-info>
      <detail-info :GoodsDetailInfo="GoodsDetailInfo" @detailImgLoad="detailImgLoad"></detail-info>
      <detail-goods-param :GoodDetailParam="GoodDetailParam" ref="param"></detail-goods-param>
      <detail-comment :GoodDetailComment="GoodDetailComment" ref="comment"></detail-comment>
      <goods-list :goods="GoodDetailRecommend" class="goods-list" ref="recommend"></goods-list>
    </bs-scroll>
    <detail-bottom-bar class="detail-bottom-bar" @addCart="addCart"></detail-bottom-bar>
    <back-top class="back-top" @click.native="backTopClick" v-show="isShowTopBack"></back-top>
    <toast class="toast" :is-show="show" :message="message"></toast>
  </div>
</template>


<script>
import {getDetailData, GoodsDetailBase, GoodDetailShop, getDetailRecommend} from '@/network/detail';
import {bus, debounce} from '@/common/utils';
import {itemListenerMixin, backTopMixin} from "@/common/mixin";

import BsScroll from "@/components/common/BsScroll/BsScroll";
import Toast from "@/components/common/Toast/Toast";

import GoodsList from "@/components/content/Goods/GoodsList";
import BackTop from "@/components/content/BackTop/BackTop";

import DetailNavBar from "@/views/Detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/Detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/Detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/Detail/childComps/DetailShopInfo";
import DetailInfo from "@/views/Detail/childComps/DetailInfo";
import DetailGoodsParam from "@/views/Detail/childComps/DetailGoodsParam";
import DetailComment from "@/views/Detail/childComps/DetailComment";
import DetailBottomBar from "@/views/Detail/childComps/detailBottomBar";

export default {
  name: "detail",
  components: {
    Toast,
    BackTop,
    DetailBottomBar,
    GoodsList,
    DetailComment,
    DetailGoodsParam, BsScroll, DetailInfo, DetailShopInfo, DetailBaseInfo, DetailSwiper, DetailNavBar},
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      titles: [],
      banners: [],
      GoodsDetailBase: Object,
      GoodDetailShop: Object,
      GoodsDetailInfo: Object,
      GoodDetailParam: Object,
      GoodDetailComment: Object,
      GoodDetailRecommend: [],
      themeOffsetTop: [],
      getThemeOffsetTop: null,
      currentIndex: 0,
      show: false,
      message: null
    }
  },
  created() {
    //获取iid
    this.iid = this.$route.params.iid;
    // console.log(this.iid);
    //根据iid获取详情页数据
    this.getDetail(this.iid);
    //获取详情页推荐信息
    this.getRecommend();
    //获取offsetTop值
    this.getThemeOffsetTop = debounce(() => {
      this.themeOffsetTop = [];
      this.themeOffsetTop.push(0);
      this.themeOffsetTop.push(this.$refs.param.$el.offsetTop);
      this.themeOffsetTop.push(this.$refs.comment.$el.offsetTop);
      this.themeOffsetTop.push(this.$refs.recommend.$el.offsetTop);
      this.themeOffsetTop.push(Number.MAX_VALUE);
      // console.log(this.themeOffsetTop);
    }, 100);
  },
  mounted() {
  },
  unmounted() {
    bus.off('itemImageLoad', this.itemImgListener);
  },
  methods: {
    //获取详情页数据封装方法
    getDetail(iid) {
      getDetailData(iid).then(res => {
        // console.log(res);
        //获取轮播图信息
        this.banners = res.result.itemInfo.topImages

        const data = res.result;

        //获取描述数据
        this.GoodsDetailBase = new GoodsDetailBase(data.itemInfo, data.columns, data.shopInfo);
        // console.log(this.GoodsDetailDesc);

        //获取店铺信息
        this.GoodDetailShop = new GoodDetailShop(data.shopInfo);
        // console.log(this.GoodDetailShop);

        //获取商品信息
        this.GoodsDetailInfo = data.detailInfo;
        // console.log(this.GoodsDetailInfo);

        //获取商品参数信息
        this.GoodDetailParam = data.itemParams;
        // console.log(this.GoodDetailParam);

        //获取商品评论信息
        if(data.rate.cRate !== 0) {
          this.GoodDetailComment = data.rate.list[0];
          // console.log(this.GoodDetailComment);
        }
      })
    },
    //获取详情页推荐信息封装方法
    getRecommend() {
      getDetailRecommend().then(res => {
        this.GoodDetailRecommend = res.data.list;
        // console.log(this.GoodDetailRecommend);
      })
    },
    //商品图片加载监听
    detailImgLoad() {
      this.$refs.scroll.refresh();
      //图片加载完后获取offsetTop
      this.getThemeOffsetTop();
    },
    //点击标题跳转
    detailTitleClick(index) {
      this.$refs.scroll.ScrollTo(0, -this.themeOffsetTop[index], 500);
    },
    //滚动内容标题改变
    detailScroll(position) {
      //获取y值
      const positionY = -position.y;
      //根据y值确定区间与index
      for (let i = 0; i < this.themeOffsetTop.length; i++) {
        if(i != this.currentIndex && positionY < this.themeOffsetTop[i + 1] && positionY >= this.themeOffsetTop[i]) {
          this.currentIndex = i;
          this.$refs.navBar.currentIndex = this.currentIndex;
        }
      }

      //backTop隐藏与显示，方法封装在mixin
      this.listenBackTop(position);
    },

    //添加购物车
    addCart() {
      //获取购物车需要的信息
      const GoodsDetailCart = {};
      GoodsDetailCart.image = this.banners[0];
      GoodsDetailCart.title = this.GoodsDetailBase.title;
      GoodsDetailCart.desc = this.GoodsDetailBase.desc;
      GoodsDetailCart.price = this.GoodsDetailBase.calcPrice;
      GoodsDetailCart.iid = this.iid;
      // console.log(GoodsDetailCart);

      //将商品添加到购物车，信息交给vuex管理
      this.$store.dispatch('addCart', GoodsDetailCart).then(res => {
        // this.show = true;
        // this.message = res;
        //
        // setTimeout(() => {
        //   this.show = false;
        //   this.message = '';
        // }, 1500)
        this.$toast.show(res, 500);
      })
    }
  }
}
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.detail .detail-nav-bar {
  position: relative;
  height: 44px;
  width: 100%;
  z-index: 10;
}
.detail .detail-bs-scroll {
  position: relative;
  height: calc(100% - 44px - 49px);
  width: 100%;
}
.detail .goods-list {
  border-top: 2px solid #e0e0e0;
  box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.1);
  padding-top: 8px;
  margin-top: 22px;
}
.detail .detail-bottom-bar {
  position: relative;
  bottom: 0;
  height: 49px;
  width: 100%;
  background-color: #f2f2f2;
  z-index: 10;
}
</style>