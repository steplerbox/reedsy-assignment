<template>
  <div class="books-page">
    <div class="books-list">
      <h1 class="header">Top books of all time</h1>
      <BookListItem v-for="(book) in books" :book="book" :key="book.slug"/>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import BookListItem from '../components/BookListItem.vue'
  import {FETCH_BOOKS} from '../store/actions.type'

  export default {
    name: 'Books',
    components: {
      BookListItem
    },
    mounted() {
      this.$store.dispatch(FETCH_BOOKS)
    },
    computed: {
      ...mapGetters(['books', 'booksCount', 'isLoading'])
    }
  }
</script>

<style lang="scss">
  .books-page {
    display: flex;
    justify-content: center;
    padding: 0 100px;
  }

  .books-list {
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

    .header {
      color: #ecc005;
      text-align: center;
    }
  }
</style>
