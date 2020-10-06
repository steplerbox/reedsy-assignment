import Vue from 'vue'
import Vuex from 'vuex'

import books from './books.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    books
  }
})
