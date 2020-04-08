<template>
  <div class="wrapper">
    <swiper
      :options="swiperOption"
      v-if="showSwiper"
    >
      <swiper-slide
        v-for="item of list"
        :key="item.id"
      >
        <img
          class="swiper-img"
          :src="item.imgUrl"
        />
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
      <!-- 左箭头
    <div class="swiper-button-prev" slot="button-prev"></div>
    右箭头
    <div class="swiper-button-next" slot="button-next"></div>
    滚动条
      <div class="swiper-scrollbar" slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        paginationClickable: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper-pagination >>> .swiper-pagination-bullet
  opacity .5
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
  opacity 1
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25%
  background #eee
  .swiper-img
    width 100%
</style>
