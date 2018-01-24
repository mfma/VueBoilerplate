<template>
  <div class="ma-list-content">
    <div class="ma-list-title">{{data.title}}</div>
    <div class="ma-list-info">
      <span class="ma-list-author">{{data.author_name}}</span>
      <span class="ma-list-date">{{data.date}}</span>
      <i class="ma-list-delete fa fa-window-close-o"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list-item1',
    props: [ 'data' ]
  };
</script>

<style scoped>

  .ma-list-title {
  }


</style>
