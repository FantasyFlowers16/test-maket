<template>
  <div class="b-contact text">
    <div class="b-contact__bg"></div>
    <h2 class="b-contact__title">Contact Us</h2>
    <p class="b-contact__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
    <div class="b-contact-items">
      <div class="b-contact-items__item">
        <div class="b-contact-items__img b-contact-items__img--place">
          <div class="b-contact-items__img-item"></div>
        </div>
        <div class="b-contact-items__text-container">
          <div class="b-contact-items__text">Nobinagar savar,Dhaka Bangladesh</div>
          <div class="b-contact-items__text"></div>
        </div>
      </div>
      <div class="b-contact-items__item">
        <div class="b-contact-items__img b-contact-items__img--phone">
          <div class="b-contact-items__img-item"></div>
        </div>
        <div class="b-contact-items__text-container">
          <div class="b-contact-items__text">+8801743331996</div>
          <div class="b-contact-items__text">+8801928737807</div>
        </div>
      </div>
      <div class="b-contact-items__item">
        <div class="b-contact-items__img b-contact-items__img--mail"></div>
        <div class="b-contact-items__text-container">
          <div class="b-contact-items__text">quickmasud@gmail.com</div>
          <div class="b-contact-items__text">quickmasud@yahoo.com</div>
        </div>
      </div>
    </div>
    <form class="b-contact-form">
      <div class="b-contact-form__input-container">
        <input v-model="phone" class="b-contact-form__input" placeholder="You Name">
        <input v-model="email" class="b-contact-form__input" placeholder="You Email">
      </div>
      <textarea class="b-contact-form__textarea" name="" id="" cols="30" rows="11" placeholder="Write Message..."></textarea>
      <div class="b-contact-form__send-container">
        <button class="button--form b-contact-form__send">Send</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Services',
  components: {},
  data () {
    return {
      phone: '',
      email: ''
    }
  }
}
</script>
<style lang='stylus'>
.b-contact
  position relative
  padding 20px 30px
  &__title
    position relative
    margin-right 10px
    color white
  &__text
    position relative
    margin 0 auto
    margin-top 28px
    margin-bottom 30px
    max-width 600px
    padding 30px 10px
    color white
  &__bg
    position absolute
    background url('../assets/bg.jpg') no-repeat
    background-size cover
    top 0
    width 100%
    height 100%
    left 0
  &-items
    width 100%
    position relative
    &__item
      align-items center
      width 100%
      display flex
      flex-direction column
      margin-bottom 20px
      &:last-child
        content ''
        margin-right 0
    &__text-container
      margin-top 43px
    &__text
      color white
      font  700 20px/26px 'Open-Sans',sans-serif
    &__img
      width 107px
      height 107px
      background-color #3949ab
      border-radius 50%
      position relative
      &--place
        &:before
          content ''
          z-index 10
          position absolute
          width 40px
          top calc(50% - 31px)
          left calc(50% - 20px)
          height 62px
          background url('../assets/place.svg') no-repeat
          background-size cover
      &--phone
        &:before
          content ''
          z-index 10
          position absolute
          width 52px
          top calc(50% - 26px)
          left calc(50% - 26px)
          height 52px
          background url('../assets/phone.svg') no-repeat
          background-size cover
      &--mail
        &:before
          content ''
          z-index 10
          position absolute
          width 52px
          top calc(50% - 22px)
          left calc(50% - 26px)
          height 44px
          background url('../assets/mail.svg') no-repeat
          background-size cover
  &-form
    position relative
    margin-top 88px
    width 100%
    &__input-container
      display flex
    &__input
      border-radius 10px
      border none
      height 66px
      width calc(50% - 15px)
      font  700 16px/26px 'Open-Sans',sans-serif
      margin-right 30px
      padding-left 12px
      &:last-child
        margin-right 0
    &__textarea
      font  700 16px/26px 'Open-Sans',sans-serif
      width 100%
      border none
      border-radius 10px
      padding-left 12px
      padding-top 32px
      margin-top 32px
      box-sizing border-box
    &__send-container
      width 100%
      display flex
      justify-content flex-end
    &__send
      margin-top 35px
      padding 28px 84px 28px 83px
      width 100%

@media screen and (min-width: 1024px)
  .b-contact
    padding 129px 182px 124px 182px
    &__text
      position relative
      margin 0 auto
      margin-top 28px
      margin-bottom 120px
      max-width 600px
      padding 0 46px 0 0px
    &-items
      display flex
      justify-content center
      &__item
        align-items center
        width calc(33.3% - 100px)
        margin-right 150px
        display flex
        flex-direction column
        margin-bottom 0
        &:last-child
          margin-right 0
      &-form
        &__send
          width auto
        &__input, &__textarea
          font  700 20px/26px 'Open-Sans',sans-serif
          padding-left 24px
</style>
