<template>
  <div class="page-container">
    <div class="b-main">
      <div class="b-main__bg"></div>
      <div class="b-main__title">Web-development project</div>
      <div  class="b-main__text">Very suitable to support all web development projects</div>
      <div class="b-main__button-container">
        <button class="b-main__button button">OUR SERVICES</button>
        <button class="b-main__button  button--green">HIRE IS NOW</button>
      </div>
    </div>
    <about id="#about"></about>
    <services></services>
    <product></product>
    <plan></plan>
    <team></team>
    <blog></blog>
    <contact></contact>

  </div>
</template>

<script>

import About from '../components/About'
import Services from '../components/Services'
import Product from '../components/Product'
import Plan from '../components/Plan'
import Team from '../components/Team'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

export default {
  name: 'Index',
  components: { About, Services, Product, Plan, Team, Blog, Contact }

}
</script>
<style lang='stylus'>

@import '../styles/variables.styl'

.b-main
  position relative
  height 100%
  padding 174px 0 50px 0
  &__bg
    position absolute
    background url('../assets/main.jpeg') no-repeat
    background-size cover
    top 0
    width 100%
    height 100%
    left 0
    &::after
      content ''
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background-color black
      opacity: 0.6
  &__title
    position relative
    color white
    font  600 30px/30px 'Open-Sans',sans-serif
  &__text
    color white
    position relative
    margin-top 27px
    font  400 20px/28px 'Open-Sans',sans-serif
  &__button-container
    display flex
    justify-content center
    position relative
    margin-top 50px
    margin-left 12px
  &__button
    margin 0 13px
    min-width 100px
    padding 15px 7px
    &--green
      background-color #008a7b
      border 3px solid #008a7b
      transition background-color .3s ease, border .3s ease
      &:hover
        transition background-color .2s ease, border .2s ease
        background-color #205f58!important
        border 3px solid #205f58!important

@media screen and (min-width: 1024px)
  .b-main
    position relative
    height 100%
    min-height 665px
    padding 174px 0 0 0
    &__bg
      position absolute
      background url('../assets/main.jpeg') no-repeat
      background-size cover
      top 0
      width 100%
      height 100%
      left 0
      &::after
        content ''
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        background-color black
        opacity: 0.6
    &__title
      position relative
      color white
      font  600 65px/65px 'Open-Sans',sans-serif
    &__text
      color white
      position relative
      margin-top 27px
      font  400 24px/24px 'Open-Sans',sans-serif
    &__button-container
      display flex
      justify-content center
      position relative
      margin-top 107px
      margin-left 12px
    &__button
      margin 0 13px
      min-width 220px
      padding 24px 0
      &--green
        background-color #008a7b
        border 3px solid #008a7b
        transition background-color .3s ease, border .3s ease
        &:hover
          transition background-color .2s ease, border .2s ease
          background-color #205f58!important
          border 3px solid #205f58!important
      &:hover
        transition background-color .2s ease, border .2s ease
        background-color #ffffff50
        border 3px solid #ffffff50
</style>
