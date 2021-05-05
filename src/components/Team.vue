<template>
  <div class="b-team text">
    <h2 class="b-team__title">Our Team Member</h2>
    <p class="b-team__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
    <div class="b-team-photo">
      <div class="b-team-photo__item">
        <div class="b-team-photo__img-container">
          <img src="../assets/workers/img1.jpg" class="b-team-photo__img">
        </div>
        <div class="b-team-photo__name">John Doe</div>
        <div class="b-team-photo__position">General Manager</div>
        <div class="b-team-photo__socials-container">
          <div class="b-team-photo__socials-item b-team-photo__socials-item--fb"></div>
          <div class="b-team-photo__socials-item b-team-photo__socials-item--tw"></div>
           <div class="b-team-photo__socials-item b-team-photo__socials-item--ms"></div>
            <div class="b-team-photo__socials-item b-team-photo__socials-item--round"></div>
        </div>
      </div>
      <div class="b-team-photo__item">
        <div class="b-team-photo__img-container">
          <img src="../assets/workers/img2.jpg" class="b-team-photo__img">
        </div>
        <div class="b-team-photo__name">Alexa Biru</div>
      <div class="b-team-photo__position">Office Director</div>
              <div class="b-team-photo__socials-container">
          <div class="b-team-photo__socials-item b-team-photo__socials-item--fb"></div>
          <div class="b-team-photo__socials-item b-team-photo__socials-item--tw"></div>
           <div class="b-team-photo__socials-item b-team-photo__socials-item--ms"></div>
            <div class="b-team-photo__socials-item b-team-photo__socials-item--round"></div>
        </div>
      </div>
      <div class="b-team-photo__item">
        <div class="b-team-photo__img-container">
          <img src="../assets/workers/img3.jpg" class="b-team-photo__img">
        </div>
          <div class="b-team-photo__name">Ronobir Sing</div>
          <div class="b-team-photo__position">Admin</div>
                  <div class="b-team-photo__socials-container">
          <div class="b-team-photo__socials-item b-team-photo__socials-item--fb"></div>
          <div class="b-team-photo__socials-item b-team-photo__socials-item--tw"></div>
           <div class="b-team-photo__socials-item b-team-photo__socials-item--ms"></div>
            <div class="b-team-photo__socials-item b-team-photo__socials-item--round"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Team',
  components: {}
}
</script>
<style lang='stylus'>
.b-team
  padding 122px 116px 130px 116px
  &__title
    margin-right 10px
  &__text
    margin 0 auto
    margin-top 28px
    margin-bottom 120px
    max-width 600px
    padding 0 46px 0 0px
    letter-spacing 1.4
  &-photo
    display flex
    &__item
      border-radius 8px
      width calc(33.3% - 20px)
      margin-right 30px
      &:last-child
        margin-right 20px
    &__img-container
      margin-bottom 43px
      height 0
      position relative
      padding-top 88.6%
    &__img
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      border-radius 9px
    &__name
      margin-bottom 12px
      font  600 20px/20px 'Open-Sans',sans-serif
    &__positions
      font   15/px 'Open-Sans',sans-serif
    &__socials-container
      display flex
      padding 0 50px
      margin-top 32px
    &__socials-item
      width 48px
      height 48px
      width calc(25% - 19.5px)
      background-color #f0f1f1
      border-radius 4px
      margin-right 26px
      cursor pointer
      transition background-color .3s ease
      position relative
      &--fb
        &:before
          content ''
          position absolute
          height 30px
          width 15px
          background url('../assets/fb.svg');
          background-size: cover
          z-index: 10
          top 8px
          opacity 1
          left calc(50% - 7.5px)
          transition opacity .3s ease
        &:after
          content ''
          position absolute
          width 15px
          height 30px
          background url('../assets/fb-hover.svg');
          background-size: cover
          z-index: 0
          top 8px
          opacity 0
          left calc(50% - 7.5px)
          transition opacity .3s ease
      &--tw
        &:before
          content ''
          position absolute
          width 30px
          height 24px
          background url('../assets/tw.svg');
          background-size: cover
          z-index: 1
          top 10px
          opacity 1
          left calc(50% - 15px)
          transition opacity .3s ease
        &:after
          content ''
          position absolute
          height 24px
          background url('../assets/tw-hover.svg');
          background-size: cover
          z-index: 1
          top 10px
          width: 28px
          opacity 0
          left calc(50% - 15px)
          transition opacity .3s ease
      &--ms
        &:before
          content ''
          position absolute
          width 30px
          height 29px
          background url('../assets/ms.svg');
          background-size: cover
          z-index: 1
          top 10px
          opacity 1
          left calc(50% - 15px)
          transition opacity .3s ease
        &:after
          content ''
          position absolute
          width 30px
          height 29px
          background url('../assets/ms-hover.svg');
          background-size: cover
          z-index: 1
          top 10px
          opacity 0
          transition opacity .3s ease
          left calc(50% - 15px)
      &--round
        &:before
          content ''
          position absolute
          transition opacity .3s ease
          width 29px
          height 29px
          background url('../assets/round.svg');
          background-size: cover
          z-index: 1
          top 10px
          opacity 1
          left calc(50% - 15px)
        &:after
          content ''
          position absolute
          width 29px
          height 29px
          background url('../assets/round-hover.svg');
          background-size: cover
          z-index: 1
          top 10px
          opacity 0
          left calc(50% - 15px)
          transition opacity .3s ease
      &:last-child
        margin-right 0
      &:hover
        background-color #3949ab
        transition background-color .2s ease
        &:before
          transition opacity .2s ease
          opacity 0
        &:after
          opacity 1
          transition opacity .2s ease
</style>
