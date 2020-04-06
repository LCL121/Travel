<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/1bd78554-1dec-4634-b49a-90bd67f51bdd.jpg_r_480x320x95_d0f4e822.jpg',
        title: '上海当地游 1天跟团游',
        desc: '周庄古镇富安桥、双桥、张厅、全福寺纯玩一日游！游古韵周庄，赏小桥流水人家之景'
      }, {
        id: '0002',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/bb1cab11-0090-4260-8abb-f8febecc668d.jpg_r_480x320x95_3560e74c.jpg',
        title: '常州-无锡 2天跟团游',
        desc: '100%纯玩/无锡三国城+水浒城+扬州瘦西湖+大明寺2日游/高铁往返'
      }, {
        id: '0003',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/cfaab148-02d8-4fa3-a3ca-c8e59163a3eb.jpg_r_480x320x95_ec7e129c.jpg',
        title: '上海-舟山 2天自由行',
        desc: '（春季祈福行）上海-舟山朱家尖码头直通车2日游（含往返车位）'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  padding .1rem 0
  margin-top 0.2rem
  line-height 0.4rem
  background #ccc
  text-indent 0.2rem
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 33.9%
.item-img
  width 100%
.item-info
  padding 0.1rem
  .item-title
    line-height 0.54rem
    font-size 0.32rem
    ellipsis()
  .item-desc
    line-height 0.4rem
    color #ccc
    ellipsis()
</style>
