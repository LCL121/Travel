<template>
  <div>
    <div class="search">
      <input
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      />
    </div>
    <div class="search-content">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.spell"
        >
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  padding 0 .1rem
  height .72rem
  background $bgColor
  .search-input
    box-sizing border-box
    height .62rem
    line-height .62rem
    width 100%
    text-align center
    border-radius .06rem
    color #666
    padding 0 .1rem
.search-content
  z-index 1
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #eee
  .search-item
    line-height .62rem
    padding-left .2rem
    color #666
    background #fff
</style>
