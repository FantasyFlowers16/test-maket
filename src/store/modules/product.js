export default {
  actions: {
    changeFilter (context) {
      context.commit('changeFilters')
    }
  },
  mutations: {
    changeFilters (state, NewState) {
      state.filter = NewState
    }
  },
  state: {
    products: [
      { title: 'Home', type: 'WEB-DESIGN', img: '../assets/product/img1.jpg' },
      { title: 'Home2', type: 'UI/UX DESIGN', img: '../assets/product/img2.jpg' },
      { title: 'Home3', type: 'MUCKUPS', img: '../assets/product/img3.jpg' },
      { title: 'Home4', type: 'WEB-DESIGN', img: '../assets/product/img4.jpg' },
      { title: 'Home5', type: 'MUCKUPS', img: '../assets/product/img5.jpg' },
      { title: 'Home6', type: 'MUCKUPS', img: '../assets/product/img6.jpg' }
    ],
    filter: [
      { name: 'ALL', type: 'ALL', checked: true },
      { name: 'WEB-DESIGN', type: 'WEB-DESIGN', checked: false },
      { name: 'UI/UX DESIGN', type: 'UI/UX DESIGN', checked: false },
      { name: 'MUCKUPS', type: 'MUCKUPS', checked: false }
    ]
  },
  getters: {
    products (state) {
      return state.products
    },
    filter (state) {
      return state.filter
    }
  }
}
