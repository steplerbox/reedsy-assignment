import {FETCH_BOOK, FETCH_BOOKS} from './actions.type'
import {FETCH_START, FETCH_BOOKS_END, FETCH_BOOK_END} from './mutations.type'
import {BooksService} from '../common/api.service'

const state = {
  book: undefined,
  books: [],
  booksCount: 0,
  isLoading: true
}

const getters = {
  book(state) {
    return state.book
  },
  books(state) {
    return state.books
  },
  booksCount(state) {
    return state.booksCount
  },
  isLoading(state) {
    return state.isLoading
  }
}

const actions = {
  [FETCH_BOOKS]({commit}) {
    commit(FETCH_START)
    return BooksService.query()
      .then(({data}) => {
        commit(FETCH_BOOKS_END, data)
      })
      .catch(error => {
        throw new Error(error)
      })
  },
  [FETCH_BOOK]({commit}, slug) {
    commit(FETCH_START)
    return BooksService.get(slug)
      .then(({data}) => {
        commit(FETCH_BOOK_END, data)
      })
      .catch(error => {
        throw new Error(error)
      })
  }
}

const mutations = {
  [FETCH_START](state) {
    state.isLoading = true
  },
  [FETCH_BOOKS_END](state, payload) {
    state.books = payload.books
    state.booksCount = payload.meta.count
    state.isLoading = false
  },
  [FETCH_BOOK_END](state, payload) {
    state.book = payload
    state.isLoading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
