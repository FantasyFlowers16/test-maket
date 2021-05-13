export default {
  actions: {
  },
  mutations: {
    changeMenu (state, newMenu) {
      state.menu = newMenu
    },
    changeOpenMenu (state, boolean) {
      state.openMobileMenu = boolean
    }
  },
  state: {
    menu: [
      { name: 'Home', check: false, class: '.b-main' },
      { name: 'About', check: false, class: '.b-about' },
      { name: 'Servicing', check: false, class: '.b-services' },
      { name: 'Portfolio', check: false, class: '.b-pruduct' },
      { name: 'Blog', check: false, class: '.b-blog' },
      { name: 'Contact us', check: false, class: '.b-contact' }
    ],
    openMobileMenu: false
  },
  getters: {
    menu (state) {
      return state.menu
    },
    openMenu (state) {
      return state.openMobileMenu
    }
  }
}
