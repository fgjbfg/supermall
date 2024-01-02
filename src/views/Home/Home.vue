<template>
  <div class="home">
      <nav-bar class="home-nav">
        <template #center>购物街</template>
      </nav-bar>
      <tab-control class="tab-control-fixed" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" v-show="isShowTab"></tab-control>
      <bs-scroll class="bs-content" ref="scroll" :probe-type= "3" :pull-up-load="true" @scroll="contentScroll" @pullingUp="loadMore">
        <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1"></tab-control>
        <goods-list :goods="showGoods"></goods-list>
      </bs-scroll>
      <back-top @click.native="backTopClick" v-show="isShowTopBack"></back-top>
  </div>
</template>

<script>
import {getHomeMultidata, getHomeData} from "@/network/home";
import {bus} from '@/common/utils';
import {backTopMixin, itemListenerMixin} from "@/common/mixin";

import NavBar from "@/components/common/NavBar/NavBar";
import TabControl from "@/components/common/TabControl/TabControl";
import BsScroll from "@/components/common/BsScroll/BsScroll";

import GoodsList from "@/components/content/Goods/GoodsList";
import BackTop from "@/components/content/BackTop/BackTop";

import HomeSwiper from "@/views/Home/childComps/HomeSwiper";
import RecommendView from "@/views/Home/childComps/RecommendView";
import FeatureView from "@/views/Home/childComps/FeatureView";

export default {
  name: "Home",
  components: {BackTop, BsScroll, GoodsList, TabControl, FeatureView, RecommendView, HomeSwiper, NavBar},
  mixins: [backTopMixin, itemListenerMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      titles:[],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      tabControlTop: 0,
      isShowTab: false,
      saveY: 0,
      itemImgListener: null
    }
  },
  created() {
    // console.log('123');
    this.getHomeMultidata()

    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')

  },
  mounted() {
    //监听图片是否加载完成
    //防抖函数
    // 如果下一次执行的太快，首先会取消掉，也就是cleartimeout，然后经过delay时间后才会去执行func函数，
    // 而不是来一次请求就执行一次，让它在delay时间里操作，最后才提交
    // const refresh = debounce(this.$refs.scroll.refresh,200);
    // this.itemImgListener = () => {
    //   refresh();
    // }
    // bus.on('itemImageLoad', this.itemImgListener);
    // 这里使用了混入
  },
  activated() {
    bus.on('itemImageLoad', this.itemImgListener);
    this.$refs.scroll.ScrollTo(0, this.saveY, 0);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    // console.log(this.saveY);

    //离开时移除监听事件
    bus.off('itemImageLoad');
  },
  methods: {
    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res.data);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeData(type) {
      const page = this.goods[type].page + 1;
      getHomeData(type, page).then(res => {
        // console.log(res.data);
        // console.log(res.data.list);
        //push方法用于连接两数组，...表示可变参数
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      })
    },

    /**
     * 事件监听相关方法
     * @param index
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          // console.log(this.currentType);
          break;
        case 1:
          this.currentType = 'new';
          // console.log(this.currentType);
          break;
        case 2:
          this.currentType = 'sell';
          // console.log(this.currentType);
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    //回到顶部
    // backTopClick() {
    //   this.$refs.scroll.ScrollTo();
    // },
    // 监听滚动位置
    contentScroll(position) {
      // console.log(position);
      //显示隐藏top
      // this.isShowTopBack = (-position.y) > 1000;
      this.listenBackTop(position);
      //显示隐藏tab
      this.isShowTab = (-position.y) > this.tabControlTop;
    },
    // 上拉加载更多
    loadMore() {
      // console.log('123');
      return this.getHomeData(this.currentType)
    },
    // 拿到tabControl的offsetTop
    //轮播图加载完毕后再拿，因此需要轮播图加载完后发送事件过来再拿取offsetTop
    swiperImgLoad() {
      this.tabControlTop = this.$refs.tabControl1.$el.offsetTop;
      // console.log(this.tabControlTop);
    }


  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  }
}
</script>

<style scoped>
.home {
  height: 100vh;
  position: relative;
  box-sizing: border-box;
}
/*首页导航栏*/
.home .home-nav {
  background-color: #fe647f;
  color: #f2f2f2;
  /*position: fixed;*/
  /*left: 0;*/
  /*right: 0;*/
  /*top: 0;*/
  z-index: 10;
}
.home .bs-content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: white;
}

.home .tab-control-fixed {
  /*background-color: #fff;*/
  z-index: 10;
}
</style>