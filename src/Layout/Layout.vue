<template>
  <div>
    <header>
      <div class="b-header__menu-mobile-but" v-if="menuOpen===false" @click="openMobileMenu">Menu</div>
      <mob-menu class="b-header__menu-mobile" :class="{_open:menuOpen}" @closeMenu="closeMenu"></mob-menu>
      <div class="b-header"  :class="{_open:menuOpen}">
        <div class="b-header__wrapper">
          <div class="b-header__logo"></div>
          <div class="b-header__item-container" >
            <div class="b-header__menu-close"  @click="openMobileMenu"></div>
            <div class="b-header__item"  v-for="item in menu" :key="item.name" v-scroll-to="item.class">{{item.name}}</div>
          </div>
          <div class="b-header__search"></div>
        </div>
      </div>
    </header>
      <router-view/>
      <footer>
        <div class="b-footer">All rights Reserved © 2021</div>
      </footer>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import MobMenu from '../components/MobMenu.vue'

export default {
  name: 'Layout',
  components: { MobMenu },
  computed: mapGetters(['menu']),
  data () {
    return {
      menuOpen: false
    }
  },
  methods: {
    closeMenu () {
      console.log('nas')
      this.menuOpen = false
    },

    openMobileMenu () {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>
<style lang='stylus'>

</style>
