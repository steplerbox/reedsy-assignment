<template>
  <div class="book-preview">
    <div class="info">
      <h3 class="title">
        <router-link :to="bookLink">{{book.title}}</router-link>
        <span class="rating">({{book.rating}} / 10)</span>
      </h3>

      <span class="author">
        {{book.author}}
      </span>

      <p class="synopsis">
        {{book.synopsis.substring(0, 200)}}...
      </p>

      <div>
        <UpvoteButton :upvoted="book.upvoted"/>
        <UpvotesCount :upvotes="book.upvotes"/>
      </div>
    </div>

    <div class="cover">
      <router-link :to="bookLink">
        <img alt="" :src="book.cover"/>
      </router-link>
    </div>
  </div>
</template>

<script>
  import UpvoteButton from './UpvoteButton'
  import UpvotesCount from './UpvotesCount'

  export default {
    name: 'BookListItem',
    components: {
      UpvotesCount,
      UpvoteButton
    },
    props: {
      book: {
        type: Object,
        required: true
      }
    },
    computed: {
      bookLink() {
        return {
          name: 'book',
          params: {
            slug: this.book.slug
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .book-preview {
    display: flex;
    flex-direction: row;
    padding: 30px;
    min-width: 600px;
    max-width: 1000px;

    &:nth-child(odd) {
      background-color: #faf9f4;
    }

    &:nth-child(even) {
      background-color: #ffffff;
    }

    .title {
      display: flex;
      align-items: center;
      margin: 10px 0;

      a {
        color: #ecc005;
        text-decoration: none;

        &:hover {
          color: darken(#ecc005, 10)
        }
      }

      .rating {
        margin-left: 10px;
        font-size: 14px;
        font-weight: 400;
      }
    }

    .author {
      font-size: 14px;
      font-style: italic;
    }

    .cover {
      margin-left: 10px;

      img {
        width: 120px;
        height: 180px;
        object-fit: cover;
        border-radius: 10px;
      }
    }
  }
</style>
