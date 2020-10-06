import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const API_URL = 'http://localhost:3000'

const ApiService = {
  init() {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },

  query(resource, params) {
    return Vue.axios.get(resource, params)
  },

  get(resource, slug = '') {
    return Vue.axios.get(`${resource}/${slug}`)
  },

  post(resource, params) {
    return Vue.axios.post(resource, params)
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params)
  },

  put(resource, params) {
    return Vue.axios.put(resource, params)
  },

  delete(resource) {
    return Vue.axios.delete(resource)
  }
}

export default ApiService

export const BooksService = {
  query(params) {
    return ApiService.query('books', params)
  },
  get(slug) {
    return ApiService.get('books', slug)
  }
}
