import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      redirect: '/books'
    },
    {
      name: 'books',
      path: '/books',
      component: () => import('@/views/Books'),
      props: true
    },
    {
      name: 'book',
      path: '/books/:slug',
      component: () => import('@/views/Book'),
      props: true
    }
  ]
})
