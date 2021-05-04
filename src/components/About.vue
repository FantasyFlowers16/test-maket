<template>
  <div class="b-about">
    <div class="b-about__title">About Us</div>
    <div class="b-about__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</div>
    <div class="b-about-icons__container">
      <div class="b-about-icons__item b-about-icons__item">
        <div class="b-about-icons__img b-about-icons__img--earth"></div>
        <div class="b-about-icons__title">Awesome Icons</div>
        <div class="b-about-icons__text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</div>
      </div>
      <div class="b-about-icons__item">
        <div class="b-about-icons__img b-about-icons__img--people"></div>
        <div class="b-about-icons__title">One Page</div>
        <div class="b-about-icons__text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</div>
      </div>
      <div class="b-about-icons__item">
        <div class="b-about-icons__img b-about-icons__img--head"></div>
        <div class="b-about-icons__title">Fully Responsive</div>
        <div class="b-about-icons__text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'About',
  components: {}
}
</script>
<style lang='stylus'>
.b-about
  padding 122px 0 130px 0
  &__title
    margin-right 10px
    font  700 30px/30px 'Open-Sans',sans-serif
  &__text
    margin 0 auto
    margin-top 28px
    margin-bottom 120px
    max-width 600px
    padding 0 46px 0 0px
    font  400 15px/24px 'Open-Sans',sans-serif
    letter-spacing 1.4
  &-icons
    &__container
      padding 0 170px
      display flex
      max-width  1056px
      justify-content center
    &__item
      margin-left: 120px
      flex-direction column
      justify-content center
      align-items center
      display flex
      &:first-child
        margin-left 0
    &__title
      font  600 20px/25px 'Open-Sans',sans-serif
      margin-bottom 15px
    &__text
      font 15px/22px 'Open-Sans',sans-serif
    &__img
      margin-bottom 32px
      &--earth
        width 63px
        height 63px
        background url('../assets/globe.svg') no-repeat
        background-size cover
        margin-right 5px
      &--people
        width 63px
        height 63px
        background url('../assets/referral.svg') no-repeat
        background-size cover
      &--head
        width 63px
        margin-left 22px
        height 63px
        background url('../assets/head.svg') no-repeat
        background-size cover
</style>
