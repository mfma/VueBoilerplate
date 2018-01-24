<template>
  <div class="ma-list-content">
    <div class="ma-list-block">
      <div class="ma-list-title">{{data.title}}</div>
      <img class="ma-list-img" :src='data.thumbnail_pic_s'/>
    </div>
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
  .ma-list-block {
    width: 100%;
    display: flex;
  }

  .ma-list-title {
    height: 70px;
    flex: 2.5;
  }

  .ma-list-img {
    height: 70px;
    box-sizing: border-box;
    padding: 0 2px;
    flex: 1;
  }
</style>
