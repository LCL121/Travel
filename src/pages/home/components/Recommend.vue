<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: '//img1.qunarzz.com/sight/p0/1704/71/71a3d23c24494bd2a3.water.jpg_256x160_d5bc3624.jpg',
        title: '南浔古镇',
        desc: '水乡古镇九十九，不如南浔走一走'
      }, {
        id: '0002',
        imgUrl: '//img1.qunarzz.com/sight/p0/2003/67/67bbc7459b9ad316a3.water.jpg_256x160_20e226f2.jpg',
        title: '杭州宋城',
        desc: '杭州宋城是中国大陆人气超旺的主题公园'
      }, {
        id: '0003',
        imgUrl: '//img1.qunarzz.com/sight/p0/201405/27/8211cadd5d9fefeaa044c5b7eefc695d.jpg_256x160_5d730aee.jpg',
        title: '千岛湖',
        desc: '亲近大自然，放飞心情'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top 0.2rem
  line-height 0.4rem
  background #ccc
  text-indent 0.2rem
  padding .1rem 0
.item
  display flex
  height 1.9rem
  overflow hidden
  .item-img
    height 1.7rem
    padding 0.1rem
  .item-info
    min-width 0
    flex 1
    padding 0.1rem
    .item-title
      line-height 0.54rem
      font-size 0.32rem
      ellipsis()
    .item-desc
      line-height 0.4rem
      color #ccc
      ellipsis()
    .item-button
      line-height 0.44rem
      margin-top 0.16rem
      background #ff9300
      padding 0 0.2rem
      border-radius 0.06rem
      color #fff
</style>
