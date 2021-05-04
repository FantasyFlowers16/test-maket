<template>
  <div>
    <header>
      <div class="b-header">
        <div class="b-header__wrapper">
          <div class="b-header__logo"></div>
          <div class="b-header__item-container" >
            <div class="b-header__item"  v-for="item in menu" :key="item.name">{{item.name}}</div>
          </div>
          <div class="b-header__search"></div>
        </div>
      </div>
    </header>
      <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Layout',
  components: {},
  computed: mapGetters(['menu'])
}
</script>
<style lang='stylus'>

</style>
