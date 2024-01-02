<template>
  <div class="detail-info" v-if="Object.keys(GoodsDetailInfo).length !== 0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{GoodsDetailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-img" v-for="item in GoodsDetailInfo.detailImage">
      <div class="key">
        <span>{{item.key}}: {{item.desc}}</span>
      </div>
      <img v-for="(imgItem, index) in item.list" :src="imgItem" :key="index" @load="imgLoad">
    </div>
  </div>
</template>

<script>
import {watch} from 'vue'

export default {
  name: "DetailInfo",
  data() {
    return {
      imgLength: 0,
      counter: 0
    }
  },
  props: {
    GoodsDetailInfo: {
      Object,
      default() {
        return null;
      }
    }
  },
  methods: {
    imgLoad() {
      //使用counter变量进行防抖，图片加载一次counter加一，当counter等于所有图片张数时才发送事件出去
      if(++this.counter === this.imgLength) {
        this.$emit('detailImgLoad')
        // console.log(this.imgLength);
      }
    }
  },
  created() {
    //监听父组件传来的对象是否发生改变，发生改变后对改变的值进行一个处理
    watch(() => this.GoodsDetailInfo, (val) => {
      // if(val.detailImage.length > 1) {
      //   this.imgLength += val.detailImage[0].list.length + val.detailImage[1].list.length;
      // }else {
      //   this.imgLength += val.detailImage[0].list.length;
      // }
      // for(let index in val.detailImage) {
      //   this.imgLength += val.detailImage[index].list.length;
      // }

      for(let item of val.detailImage) {
        if(item.hasOwnProperty('list'))
        this.imgLength += item.list.length;
        // console.log(this.imgLength);
      }
    })
  }
}
</script>

<style scoped>
.detail-info {
  width: 100%;
  background-color: #fff;
}
.detail-info .info-desc {
  position: relative;
  padding: 15px 0 10px;
}
.info-desc .start {
  height: 1px;
  width: 100px;
  background-color: #333;
  position: relative;
  margin-left: 10px;
}
.info-desc .start::before {
  content: '';
  display: block;
  height: 6px;
  width: 6px;
  background-color: #444;
  position: absolute;
  bottom: 1px;
}
.info-desc .desc {
  text-align: left;
  font-size: 15px;
  line-height: 15px;
  padding: 10px 0;
  position: relative;
  left: 10px;
}
.info-desc .end {
  height: 1px;
  width: 100px;
  background-color: #333;
  position: relative;
  left: 71%;
}
.info-desc .end::after {
  content: '';
  display: block;
  height: 6px;
  width: 6px;
  background-color: #444;
  position: absolute;
  left: 94px;
  bottom: 1px;
}
.info-img .key {
  font-size: 16px;
  line-height: 16px;
  padding-left: 10px;
  padding-bottom: 5px;
}
.info-img img {
  width: 100%;
}
</style>