<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  // props: {
  //   message: {
  //     String,
  //     default() {
  //       return '请输入信息';
  //     }
  //   },
  //   isShow: {
  //     Boolean,
  //     default() {
  //       return false;
  //     }
  //   }
  // },
  data() {
    return {
      isShow: false,
      message: ''
    }
  },
  methods: {
    show(message, duration) {
      this.isShow = true;
      this.message = message;

      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      }, duration)
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  /*width: 170px!important;*/
  width:fit-content!important;
  height: 40px;
  padding: 10px 10px;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  border-radius: 10px;
  z-index: 10;
}
.toast div {
  font-size: 20px;
  line-height: 20px;
  text-align: center;
}
</style>