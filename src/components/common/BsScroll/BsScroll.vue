<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "BsScroll",
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      default() {
        return 0;
      }
    },
    pullUpLoad: {
      default() {
        return false;
      }
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    })

    this.scroll.on('scroll', (position) => {
      // console.log(position);
      this.$emit('scroll', position);
    })

    //监听scroll是否滚到底部
    if(this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp');
      })
    }
  },
  methods: {
    refresh() {
      // console.log('123');
      return this.scroll & this.scroll.refresh();

    },
    ScrollTo(x = 0, y = 0, time = 500) {
      return this.scroll & this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      return this.scroll & this.scroll.finishPullUp();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
}
</script>

<style scoped>

</style>