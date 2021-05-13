<template>
  <div class="b-services">
    <div class="b-services__title">Our Services</div>
    <div class="b-services__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</div>
    <div class="b-services__item-container">
      <div class="b-services-item">
        <div class="b-services-item__img"></div>
        <div class="b-services-item__title">Research</div>
        <div class="b-services-item__text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.</div>
        <button class="button--black b-services-item__button"> READ MORE</button>
      </div>
       <div class="b-services-item">
        <div class="b-services-item__img"></div>
        <div class="b-services-item__title">Portfolio</div>
        <div class="b-services-item__text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.</div>
        <button class="button--black b-services-item__button"> READ MORE</button>
      </div>
      <div class="b-services-item">
        <div class="b-services-item__img"></div>
        <div class="b-services-item__title">Support</div>
        <div class="b-services-item__text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.</div>
        <button class="button--black b-services-item__button"> READ MORE</button>
      </div>
      <div class="b-services-item">
        <div class="b-services-item__img"></div>
        <div class="b-services-item__title">Documentation</div>
        <div class="b-services-item__text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.</div>
        <button class="button--black b-services-item__button"> READ MORE</button>
      </div>
      <div class="b-services-item">
        <div class="b-services-item__img"></div>
        <div class="b-services-item__title">Development</div>
        <div class="b-services-item__text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.</div>
        <button class="button--black b-services-item__button"> READ MORE</button>
      </div>
      <div class="b-services-item">
        <div class="b-services-item__img"></div>
        <div class="b-services-item__title">Design</div>
        <div class="b-services-item__text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.</div>
        <button class="button--black b-services-item__button"> READ MORE</button>
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
.b-services
  background-color #dafdf9
  padding 60px 0 0 0
  &__title
    margin-right 10px
    font  700 30px/30px 'Open-Sans',sans-serif
  &__text
    margin 0 auto
    margin-top 28px
    margin-bottom 120px
    max-width 600px
    padding 0 20px
    font  400 15px/24px 'Open-Sans',sans-serif
  &__item-container
    padding 0 25px 88px 25px
  &-item
    cursor pointer
    width 100%
    background-color white
    margin-right 20px
    margin-bottom 20px
    display flex
    padding 30px 20px 35px 20px
    flex-direction column
    box-sizing border-box
    align-items center
    transition background-color .3s ease
    &:nth-child(3n)
      margin-right 0
    &__img
      margin-bottom 40px
      position relative
      width 45px
      height 53px
      margin-left 19px
      &:before
        content ''
        left 0
        position absolute
        background url('../assets/mobile.svg') no-repeat
        background-size contain
        width 45px
        height 53px
        opacity 1
        transition opacity .3s ease
      &:after
        content ''
        left 0
        position absolute
        background url('../assets/mobile-white.svg') no-repeat
        background-size contain
        width 45px
        height 53px
        opacity 0
        transition opacity .3s ease
    &__title
      transition color .3s ease
      margin-bottom 27px
      font  600 20px/24px 'Open-Sans',sans-serif
      transition background-color .3s ease, border .3s ease
    &__text
      transition color .3s ease
      margin-bottom 48px
      font 15px/20px 'Open-Sans',sans-serif
    &__button
      padding 18px 12px 19px 14px
    &:hover
      background-color #00897b
      transition background-color .2s ease
      .b-services-item
        &__title, &__text
          transition color .2s ease
          color white
        &__button
          border 3px solid white
          color white
        &__img
          &:before
            transition opacity .2s ease
            opacity 0
          &:after
            transition opacity .2s ease
            opacity 1

@media screen and (min-width: 1024px)
  .b-services
    background-color #dafdf9
    padding 179px 0 0 0
    &__text
      padding 0 46px 0 0px
    &__item-container
      display flex
      flex-wrap wrap
      padding 0 115px 88px 115px
    &-item
      width calc(33.3% - 22px)
      margin-right 33px
      margin-bottom 33px
      padding 60px 56px 51px 56px
      &:nth-child(3n)
        margin-right 0
</style>
