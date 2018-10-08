<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods" tag="div">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings" tag="div">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller" tag="div">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import Header from 'components/header/header'
import NetWorkUtils from 'common/js/networks'
import {urlParse} from 'common/js/util'
const ERR_OK = 0
export default {
  data () {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse()
          return queryParam.id
        })()
      }
    }
  },
  created () {
    NetWorkUtils.get('api/seller?id=' + this.seller.id).then((response) => {
      let res = response
      if (res.errno === ERR_OK) {
        this.seller = Object.assign({}, this.seller, res.data)
      }
    })
  },
  components: {
    'v-header': Header
  }
}
</script>
<style  scoped lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  #app
    .tab
      display flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgba(7,17,27,.1))
      .tab-item
        flex: 1
        text-align center
        & > a
          display: block
          font-size: 14px
          color:rgba(77,85,93,1)
        & .router-link-active
          color:rgba(240,20,20,.8)
</style>
