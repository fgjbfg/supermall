<template>
  <div class="detail-goods-param" v-if="Object.keys(GoodDetailParam).length !== 0">
    <div class="rule">

        <table class="tb-rule" :style="styleTbRule">
          <tr v-for="(tr, indexTr) in GoodDetailParam.rule.tables[0]" :key="indexTr">
            <td v-for="(td, indexTd) in tr" :key="indexTd">{{td}}</td>
          </tr>
        </table>

        <table class="tb-rule-xxl" v-show="showGoodDetailParamTable" :style="styleTbRuleXxl">
          <tr v-for="(tr, indexTr) in GoodDetailParam.rule.tables[1]" :key="indexTr">
            <td>{{tr[1]}}&nbsp</td>
          </tr>
        </table>

    </div>
    <div class="params">
      <table class="tb-params">
        <tr v-for="(tr, indexTr) in GoodDetailParam.info.set" :key="indexTr">
          <td v-for="(td, indexTd) in tr" :key="indexTd">{{td}}</td>
        </tr>
      </table>
    </div>
<!--    <div class="image" v-if="GoodDetailParam.image.length !== 0">-->
<!--      <img :src="GoodDetailParam.image" alt="">-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "DetailGoodsParam",
  props: {
    GoodDetailParam: {
      Object,
      default() {
        return null;
      }
    }
  },
  computed: {
    showGoodDetailParamTable() {
      return this.GoodDetailParam.rule.tables.length > 1;
    },
    styleTbRule() {
      return this.showGoodDetailParamTable ? {flex : 5} : {};
    },
    styleTbRuleXxl() {
      return this.showGoodDetailParamTable ? {flex : 1} : {};
    }
  }
}
</script>

<style scoped>
.detail-goods-param {
  width: 100%;
  background-color: #fff;
}
.detail-goods-param .rule {
  width: 100%;
  padding: 10px 7px 0;
  margin-top: 15px;
  border-top: 2px solid #e0e0e0;
  box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.1);
  display: flex;
}
.detail-goods-param .rule:after {
  content: '';
  display: block;
  clear: both;
}
.rule table {
  width: 100%;
  box-sizing: border-box;
  border-bottom: 2px solid #e0e0e0;
  border-collapse: collapse;
  margin-top: 5px;
  table-layout:fixed;
}
.rule table tr {
  border-bottom: 1px solid #e0e0e0;
  height: 100%;
}
.rule table tr td {
  text-align: center;
  padding: 8px 0 8px 27px;
  box-sizing: border-box;
  font-size: 13px;
  line-height: 13px;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
/*.rule table tr td:hover {*/
/*  !*width: auto;*!*/
/*}*/
.tb-rule td:first-child {
  text-align: left;
  padding-left: 0;
}
.detail-goods-param .params {
  width: 100%;
  padding: 0 9px;
}
.params table {
  width: 100%;
  border-collapse: collapse;
}
.params table tr {
  border-bottom: 1px solid #e0e0e0;
}
.params table tr td {
  text-align: center;
  font-size: 14px;
  padding: 8px 0;
}
.params table tr td:first-child {
  text-align: left;
}
.params table tr td:last-child {
  color: #fe647f;
}
/*.detail-goods-param .img img{*/
/*  width: 100%;*/
/*}*/
</style>