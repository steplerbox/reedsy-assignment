<template>
  <span class="upvotes-count">Upvoted {{upvotes}} times</span>
</template>

<script>
  export default {
    name: 'UpvotesCount',
    props: {
      upvotes: {
        type: Number,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .upvotes-count {
    font-size: 14px;
    margin: 0 10px;
  }
</style>
