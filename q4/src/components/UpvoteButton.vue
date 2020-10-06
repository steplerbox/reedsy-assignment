<template>
  <button :class="{ 'upvote-button': true, upvoted: upvoted }">
    {{upvoted ? 'Upvoted' : 'Upvote'}}
  </button>
</template>

<script>
  export default {
    name: 'UpvoteButton',
    props: {
      upvoted: {
        type: Boolean,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .upvote-button {
    background-color: #ecc005;
    border: 1px solid #ecc005;
    border-radius: 8px;
    color: #ffffff;
    cursor: pointer;
    outline: none;
    padding: 10px 15px;

    &.upvoted {
      color: #ecc005;
      background-color: #ffffff;
    }
  }
</style>
