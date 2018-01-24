<template>
  <div class="ma-list-content">
    <div class="ma-list-title">{{data.title}}</div>
    <div class="ma-list-imgs">
      <img class="ma-list-img" :src='data.thumbnail_pic_s'/>
      <img class="ma-list-img" :src='data.thumbnail_pic_s02'/>
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
    name: 'list-item2',
    props: [ 'data' ]
  };
</script>

<style scoped>

  .ma-list-title {
    padding: 0 0 10px 0;
  }

  .ma-list-imgs {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ma-list-img {
    height: 100%;
    flex: 1 0 auto;
    box-sizing: border-box;
    padding: 0 2px;
  }

  .ma-list-imgs img:first-child {
    padding-left: 0;
  }
</style>
