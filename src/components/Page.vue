<!--suppress ALL -->

<template>
  <div class="ma-page">
    <mt-cell-swipe class="ma-list-item" v-for="item in data" :key="item.uniquekey">
      <ListItem0 :data='item' v-if="!item.thumbnail_pic_s"/>
      <ListItem1 :data='item' v-if="item.thumbnail_pic_s&&!item.thumbnail_pic_s02"/>
      <ListItem2 :data='item' v-if="item.thumbnail_pic_s02&&!item.thumbnail_pic_s03"/>
      <ListItem3 :data='item' v-if="item.thumbnail_pic_s03"/>
    </mt-cell-swipe>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import ListItem0 from './ListItem0';
  import ListItem1 from './ListItem1';
  import ListItem2 from './ListItem2';
  import ListItem3 from './ListItem3';

  export default {
    name: 'page',
    components: {
      ListItem0,
      ListItem1,
      ListItem2,
      ListItem3
    },
    computed: {
      ...mapState({
        data: state => state.recommend.data
      })
    },
    beforeCreate () {
      this.$store.dispatch('getData').then(() => {
        console.log('=========加载完成===========');
      });
    },
    methods: {}
  };
</script>

<style>
  .ma-page {
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

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
    align-items: flex-start;
  }

  .ma-list-info span {
    align-items: flex-start;
  }

  .ma-list-author,
  .ma-list-date,
  .ma-list-delete {
    flex: 0 0 auto;
  }

  .ma-list-author {
    margin-right: 10px;
  }

  .ma-list-delete {
    flex: 1 0 auto;
    text-align: right;
    border-radius: 10px;
  }
</style>

<style scoped>


</style>
