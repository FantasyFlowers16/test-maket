import { createStore } from 'vuex' //eslint-disable-line
import main from './modules/main'

export default createStore({

  modules: {
    main
  }
})
