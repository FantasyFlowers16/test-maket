import { createStore } from 'vuex' //eslint-disable-line
import main from './modules/main'
import products from './modules/product'

export default createStore({

  modules: {
    main,
    products
  }
})
