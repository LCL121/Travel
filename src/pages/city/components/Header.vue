<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  position relative
  height $headerHeight
  line-height $headerHeight
  overflow hidden
  text-align center
  color #fff
  background $bgColor
  font-size .32rem
  .header-back
    position absolute
    left 0
    top 0
    width .64rem
    text-align center
    font-size .4rem
    color #fff
</style>
