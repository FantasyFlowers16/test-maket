<template>
  <div class="b-pruduct text">
    <h2 class="b-pruduct__title">Latest Works</h2>
    <p class="b-pruduct__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
    <div class="b-pruduct__btn-container">
      <button v-for="item in filter" :key="item.name" class="button button--green-border b-pruduct__button " :class="{_active:item.checked}" @click="checkPoint(item.type)">{{item.name}} </button>
      <!-- <button class="button button--green-border b-pruduct__button"> WEB-DESIGN</button>
      <button class="button button--green-border b-pruduct__button"> UI/UX DESIGN</button>
      <button class="button button--green-border b-pruduct__button"> MUCKUPS </button> -->
    </div>
    <transition name="animationFilter"  mode="out-in">
      <div class="b-pruduct-photos" v-if="anim">
          <div class="b-pruduct-photos__container"  v-for="item in filteredProduct" :key="item.name">
            <img class="b-pruduct-photos__photo" src="../assets/product/img3.jpg" alt="">
            <div class="b-pruduct-photos__title">{{item.title}}</div>
            <div class="b-pruduct-photos__type">{{item.type}}</div>
          </div>
      </div>
    </transition>

    <button class="b-pruduct__button-only  button--green" >VIEW ALL</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Product',
  components: {},
  data () {
    return {
      type: 'ALL',
      nawFilter: [],
      actualFilter: [],
      anim: true
    }
  },
  computed: {
    ...mapGetters(['products', 'filter', 'changeFilters']),
    filteredProduct () {
      let filtered = this.products
      console.log(this.type)
      if (this.type === 'ALL') {
        console.log('1312312321')
        filtered = this.products
      } else {
        console.log('else')
        filtered = this.products.filter((elem) => {
          if (elem.type === this.type) {
            return elem
          }
        })
      }
      return filtered
    }
  },
  methods: {
    ...mapMutations(['changeFilters']),
    checkPoint (type) {
      this.nawFilter = this.filter.map((elem) => {
        elem.checked = false
        if (elem.type === type) {
          elem.checked = true
          this.type = type
        }
        this.anim = false
        setTimeout(() => { this.anim = true }, 200)
        return elem
      })
      this.$store.commit('changeFilters', this.nawFilter)
    }
  }
}
</script>
<style lang='stylus'>
.b-pruduct
  padding 30px 20px
  &__title
    margin-right 10px
  &__text
    margin 0 auto
    margin-top 28px
    margin-bottom 60px
    max-width 600px
    padding 0 10px 0 10px
  &__btn-container
    justify-content space-between
    display flex
    flex-wrap wrap
    margin-bottom 50px
  &__button-only
    margin-right 20px
    margin-top 40px
    padding 22px 23px 22px 23px
  &__button
    width calc(50% - 10px)
    margin-right 20px
    padding 12px 18px 12px 18px
    margin-bottom 10px
    &:nth-child(2n)
      margin-right 0
    &:last-child
      margin-right 0
  &-photos
    display flex
    flex-wrap wrap
    &__photo
      position absolute
      top 0
      left 0
      width 100%
      min-height 0
    &__title
      opacity 0
      z-index 1
      position absolute
      top 148px
      width 100%
      display flex
      justify-content center
      font  600 20px/24px 'Open-Sans',sans-serif
      color white
      transition opacity .3s ease
    &__type
      opacity 0
      z-index 1
      top 177px
      position absolute
      font  600 15px/24px 'Open-Sans',sans-serif
      width 100%
      display flex
      justify-content center
      color white
      transition opacity .3s ease
    &__container
      overflow hidden
      position relative
      padding-top: 29.9%
      width calc(50% - 10px)
      margin-right 20px
      margin-bottom 30px
      cursor pointer
      &:nth-child(2n)
        margin-right 0
      &:before
        content ''
        position absolute
        background-color black
        opacity 0.3
        width 100%
        top 0
        left 0
        height 100%
        z-index 1
        opacity 0
        transition opacity .3s ease
      &:hover
        &:before
          transition opacity .2s ease
          opacity 0.3
        .b-pruduct-photos
          &__title, &__type
            opacity 1
            transition opacity .2s ease
@media screen and (min-width: 1024px)
  .b-pruduct
    padding 100px 80px
    &__text
      margin 0 auto
      margin-top 28px
      margin-bottom 120px
    &__btn-container
      justify-content center
      margin-bottom 119px
      flex-wrap nowrap
    &__button
      padding 18px 23px 19px 23px
      margin-bottom 0
      &:nth-child(2n)
        margin-right 20px
      &:last-child
        margin-right 0
    &__button-only
      margin-top 100px
    &-photos
      &__container
        width calc(33% - 19.5px)
        margin-right 29px
        &:nth-child(2n)
          margin-right 32px
        &:nth-child(3n)
          margin-right 0
.animationFilter-enter-active, .animationFilter-leave-active
  transition: opacity .5s

.animationFilter-enter, .animationFilter-leave-to
  opacity: 0
.animationFilter-move
  transition: transform .3s;
</style>
