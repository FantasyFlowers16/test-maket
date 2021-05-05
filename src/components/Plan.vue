<template>
  <div class="b-plan text">
    <h2 class="b-plan__title">Pricing Plan</h2>
    <p class="b-plan__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
    <div class="b-plan-price__container">
      <div class="b-plan-price__item-container">
        <div class="b-plan-price__item-up">
          <div class="b-plan-price__title">Free Trail</div>
          <div class="b-plan-price__money-container">
            <div class="b-plan-price__money">00</div>
            <div class="b-plan-price__period"> per month</div>
          </div>
        </div>
        <div class="b-plan-price__item-down">
            <div class="b-plan-price__item-point">30 Free Trail</div>
            <div class="b-plan-price__item-point">5 Free Projects</div>
            <div class="b-plan-price__item-point">PHP 5 Enabled</div>
            <div class="b-plan-price__item-point">24/7 Suports</div>
            <button class="button--black b-plan-price__button"> Order Now</button>
        </div>
      </div>
      <div class="b-plan-price__item-container">
        <div class="b-plan-price__item-up">
          <div class="b-plan-price__title">Basic</div>
          <div class="b-plan-price__money-container">
            <div class="b-plan-price__money">50</div>
            <div class="b-plan-price__period"> per month</div>
          </div>
        </div>
        <div class="b-plan-price__item-down">
          <div class="b-plan-price__item-point">30 Free Trail</div>
          <div class="b-plan-price__item-point">5 Free Projects</div>
          <div class="b-plan-price__item-point">PHP 5 Enabled</div>
          <div class="b-plan-price__item-point">24/7 Suports</div>
          <button class="button--black b-plan-price__button"> Order Now</button>
        </div>
      </div>
      <div class="b-plan-price__item-container">
       <div class="b-plan-price__item-up">
        <div class="b-plan-price__title">Ultimates</div>
        <div class="b-plan-price__money-container">
          <div class="b-plan-price__money">99</div>
          <div class="b-plan-price__period"> per month</div>
        </div>
        </div>
        <div class="b-plan-price__item-down">
          <div class="b-plan-price__item-point">30 Free Trail</div>
          <div class="b-plan-price__item-point">5 Free Projects</div>
          <div class="b-plan-price__item-point">PHP 5 Enabled</div>
          <div class="b-plan-price__item-point">24/7 Suports</div>
          <button class="button--black b-plan-price__button"> Order Now</button>
        </div>
      </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Services',
  components: {}
}
</script>
<style lang='stylus'>
.b-plan
  padding 129px 116px 124px 115px
  background-color #f0f1f1
  &__title
    margin-right 10px
  &__text
    margin 0 auto
    margin-top 28px
    margin-bottom 120px
    max-width 600px
    padding 0 46px 0 0px
  &-price
    &__container
      display flex
      flex-wrap wrap
    &__item-container
      display flex
      flex-direction column
      width calc(33.3% - 20px)
      margin-right 20px
      transition box-shadow 1.3s ease
      cursor pointer
      box-shadow 0 0 21px 0px #fff
      &:last-child
        margin-right 0
      &:hover
        transition box-shadow 1.2s ease
        box-shadow: 0 0 21px 0px rgb(0 0 5 / 55%)
        .b-plan-price__button
          color white
          border 3px solid #008a7b!important
          background-color #008a7b!important
          transition background-color .2s ease, border .2s ease, color .2s ease
    &__item-down
      background-color white
      padding 89px 97px 63px 95px
    &__item-up
      box-sizing border-box
      padding 49px 90px 40px 102px
      background-color #3949ab
      position relative
      &::before
        content ''
        position absolute
        width 100%
        height 31px
        bottom -30px
        left 0
        background-color #3949ab
        clip-path: polygon(100% 0, 0 0, 0 100%)
    &__item-point
      font   17px/17px 'Open-Sans',sans-serif
      padding 40px 0 18px 0
      border-bottom 1px solid #bfbfbf
    &__money-container
      display flex
      justify-content center
      align-items center
    &__title
      font   25px/25px 'Open-Sans',sans-serif
      color white
      margin-bottom 28px
    &__money
      margin-right 18px
      font   50px/50px 'Open-Sans',sans-serif
      color white
      position relative
      &:before
        content ''
        background url('../assets/dollar.svg') no-repeat
        position absolute
        width 18px
        height 20px
        background-size: cover
        top 5px
        left -18px
    &__button
      margin-top 69px
      padding  27px 30px 21px 30px
      transition background-color .3s ease, border .3s ease, color .3s ease
      &._active
        color white
        border 3px solid #008a7b!important
        background-color #008a7b!important
        transition background-color .2s ease, border .2s ease, color .2s ease
    &__period
      color white
      font   17px/17px 'Open-Sans',sans-serif
</style>
