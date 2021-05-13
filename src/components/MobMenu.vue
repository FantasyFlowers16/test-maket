<template>
  <div class="b-mobile-menu">
    <div class="b-mobile-menu__close" @click="closeMobileMenu"></div>
    <div class="b-mobile-menu__item" v-for="item in menu" :key="item.name" >{{item.name}}</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {

  name: 'MobileMenu',
  components: {},
  computed: mapGetters(['menu']),
  data () {
    return {}
  },
  methods: {
    closeMobileMenu () {
      console.log('child')
      this.$emit('closeMenu')
    }
  }
}
</script>
<style lang='stylus'>
.b-mobile-menu
  padding-top 30px
  position absolute
  width 100%
  height 100%
  z-index 1
  background white
  &__item
    padding 20px 20px
  &__close
    position absolute
    background url('../assets/cancel.svg') no-repeat
    width 20px
    height 20px
    top 10px
    right 20px
    cursor pointer
</style>
