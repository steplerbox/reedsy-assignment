<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else class="book-page">
    <div class="book-info">
      <div class="header">
        <h2 class="title">{{book.title}}</h2>

        <div class="votes">
          <UpvotesCount :upvotes="book.upvotes"/>
          <UpvoteButton :upvoted="book.upvoted"/>
        </div>
      </div>

      <span class="author">{{book.author}}</span>

      <img class="cover" alt="" :src="book.cover"/>

      <h4 class="synopsis-header">Synopsis</h4>
      <p class="synopsis">{{book.synopsis}}</p>

      <span class="rating">Rating: {{book.rating}}/10</span>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import store from '@/store'
  import {FETCH_BOOK} from '../store/actions.type'
  import UpvoteButton from '../components/UpvoteButton'
  import UpvotesCount from '../components/UpvotesCount'

  export default {
    name: 'Book',
    components: {
      UpvoteButton,
      UpvotesCount
    },
    beforeRouteEnter(to, from, next) {
      store.dispatch(FETCH_BOOK, to.params.slug).then(() => next())
    },
    computed: {
      ...mapGetters(['book', 'isLoading'])
    }
  }
</script>

<style lang="scss">
  .book-page {
    display: flex;
    justify-content: center;
    padding: 0 100px;

    .book-info {
      background-color: #ffffff;
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      min-width: 600px;
      max-width: 1000px;
      padding: 30px;

      .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .title {
          margin: 10px 0;
          color: #ecc005;
        }
      }

      .author {
        font-style: italic;
        font-size: 14px;
        margin-bottom: 20px;
      }

      .cover {
        width: 240px;
        height: 360px;
        object-fit: cover;
        border-radius: 10px;
        align-self: center;
      }

      .synopsis-header {
        margin: 10px 0;
      }

      .synopsis {
        margin: 15px 0;
        white-space: pre-line;
      }

      .rating {
        font-weight: 600;
        font-size: 14px;
      }
    }
  }
</style>
