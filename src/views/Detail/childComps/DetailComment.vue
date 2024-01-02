<template>
  <div class="detail-comment" v-if="Object.keys(GoodDetailComment).length !== 0">
    <div class="comment-top">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment-content">
      <div class="user">
        <img :src="GoodDetailComment.user.avatar">
        <span>{{GoodDetailComment.user.uname}}</span>
      </div>
      <div class="comment">
        <span>{{GoodDetailComment.content}}</span>
      </div>
      <div class="desc">
        <span class="time" v-if="GoodDetailComment.created != null">{{ this.formatTime }}</span>
        <span class="style">{{GoodDetailComment.style}}</span>
      </div>
      <div class="img">
        <img v-for="(item, index) in GoodDetailComment.images" :key="index" :src="item">
      </div>
    </div>
  </div>
</template>

<script>
import {parseTime} from "@/common/utils";

export default {
  name: "DetailComment",
  props: {
    GoodDetailComment: {
      Object,
      default() {
        return null;
      }
    }
  },
  computed: {
   formatTime() {
     return  parseTime(this.GoodDetailComment.created, "{y}-{m}-{d}")
   }
  }
}
</script>

<style scoped>
.detail-comment {
  width: 100%;
  margin: 20px 0;
  border-top: 2px solid #e0e0e0;
  box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.1);
}
.detail-comment .comment-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.comment-top span {
  flex: 1;
  font-size: 15px;
  margin-left: 7px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.comment-top span:last-child {
  text-align: right;
  font-size: 14px;
  margin-left: 0;
  margin-right: 7px;
}
.detail-comment .comment-content {
  width: 100%;
}
.comment-content .user {
  width: 100%;
  margin: 8px 7px;
}
.comment-content .user img {
  height: 30px;
  width: 30px;
  vertical-align: middle;
}
.comment-content .user span {
  font-size: 16px;
  line-height: 16px;
  padding-left: 7px;
}
.comment-content .comment {
  font-size: 13px;
  line-height: 160%;
  color: #333;
  margin: 8px 7px;
}
.comment-content .desc {
  font-size: 13px;
  color: gray;
  margin: 8px 7px;
}
.comment-content .desc .style {
  padding-left: 5px;
}
.comment-content .img {
  width: 100%;
  margin: 8px 7px 14px;
}
.comment-content .img img {
  height: 100px;
  width: 100px;
  padding-right: 7px;
}
</style>