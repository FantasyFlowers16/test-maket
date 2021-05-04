export default {
  actions: {
  },
  mutations: {
    changeMenu (state, newMenu) {
      state.menu = newMenu
    }
  },
  state: {
    menu: [
      { name: 'Home', check: false },
      { name: 'About', check: false },
      { name: 'Servicing', check: false },
      { name: 'Portfolio', check: false },
      { name: 'Blog', check: false },
      { name: 'Contact us', check: false }
    ]
  },
  getters: {
    menu (state) {
      return state.menu
    }
  }
}
