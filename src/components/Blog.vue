<template>
  <div class="b-blog">
    <div class="b-blog__title">Blog</div>
    <div class="b-blog__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</div>
    <div class="b-blog__item-container">
      <div class="b-blog-item">
        <div class="b-blog-item__img-container">
          <img src="../assets/blog/img1.jpg" class="b-blog-item__img">
        </div>
        <div class="b-blog-item__info">
          <div class="b-blog-item__title">SEO Quis Vestibulum</div>
          <div class="b-blog-item__data">
            <div class="b-blog-item__calendar">14.07.2017</div>
            <div class="b-blog-item__type">Development</div>
          </div>
          <div class="b-blog-item__text">Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</div>
        </div>
      </div>
      <div class="b-blog-item">
        <div class="b-blog-item__img-container">
          <img src="../assets/blog/img2.jpg" class="b-blog-item__img">
        </div>
        <div class="b-blog-item__info">
          <div class="b-blog-item__title">SEO Quis Vestibulum</div>
          <div class="b-blog-item__data">
            <div class="b-blog-item__calendar">14.07.2017</div>
            <div class="b-blog-item__type">Development</div>
          </div>
          <div class="b-blog-item__text">Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</div>
        </div>
      </div>
    </div>
    <button class="b-blog__button button--green" >MORE VIEW</button>
  </div>
</template>

<script>

export default {
  name: 'Blog',
  components: {}
}
</script>
<style lang='stylus'>
.b-blog
  padding 20px
  background-color #e4fdf9
  &__title
    margin-right 10px
    font  700 30px/30px 'Open-Sans',sans-serif
  &__text
    margin 0 auto
    margin-top 28px
    margin-bottom 30px
    max-width 600px
    padding 0 46px 0 0px
    font  400 15px/24px 'Open-Sans',sans-serif
    letter-spacing 1.4
  &__item-container
    max-width 1415px
    margin 0 auto
  &__button
    margin-right 20px
    margin-top 50px
    padding 22px 23px 22px 23px
  &-item
    display block
    &__info
      display flex
      flex-direction column
      align-items flex-start
      padding 20px 30px
    &__img-container
      width 100%
      overflow: hidden
    &__data
      margin-top 31px
      display flex
      font  400 15px/24px 'Open-Sans',sans-serif
    &__text
      font  400 15px/24px 'Open-Sans',sans-serif
      margin-top 34px
      text-align left
    &__calendar
      margin-right 30px
    &__title
      cursor pointer
      font  600 25px/25px 'Open-Sans',sans-serif
      transition color .3s ease
      &:hover
        color #00897b
        transition color .2s ease
@media screen and (min-width: 1024px)
  .b-blog
    padding 126px 118px 126px 92px
    &__text
      margin-bottom 120px
    &-item
      display flex
      &:nth-child(2n)
        flex-direction row-reverse
      &__info
        display flex
        flex-direction column
        align-items flex-start
        padding 63px 168px 0 32px
</style>
