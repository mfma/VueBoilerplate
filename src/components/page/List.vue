<!--suppress CssUnusedSymbol -->
<template>
  <div>
    <mt-cell-swipe class="ma-list-item" v-for="item in data" :key="item.uniquekey">
      <ListItem0 :data='item' v-if="!item.thumbnail_pic_s"/>
      <ListItem1 :data='item' v-if="item.thumbnail_pic_s&&!item.thumbnail_pic_s02"/>
      <ListItem2 :data='item' v-if="item.thumbnail_pic_s02&&!item.thumbnail_pic_s03"/>
      <ListItem3 :data='item' v-if="item.thumbnail_pic_s03"/>
    </mt-cell-swipe>
  </div>
</template>

<script>
  import ListItem0 from './ListItem0';
  import ListItem1 from './ListItem1';
  import ListItem2 from './ListItem2';
  import ListItem3 from './ListItem3';

  export default {
    name: 'list',
    props: [ 'data' ],
    components: {
      ListItem0,
      ListItem1,
      ListItem2,
      ListItem3
    }
  };
</script>

<style>

  .ma-list-item .mint-cell-title {
    flex: 0;
  }

  .ma-list-item .mint-cell-value {
    width: 100%;
  }

  .ma-list-content {
    flex: 1;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .ma-list-title {
    text-align: left;
    box-sizing: border-box;
    color: #0c0d0c;
    font-size: 17px;
    font-weight: 400;
  }

  .ma-list-info {
    box-sizing: border-box;
    padding: 10px 0 0 0;
    display: flex;
    font-size: 12px;
  }

  .ma-list-author {
    margin-right: 10px;
  }
</style>

<style scoped>


</style>
