<!--suppress ALL -->
<template>
  <div class="ma-container">
    <div class="ma-navbar-layout">
      <div>
        <mt-navbar v-model='selected' class="ma-navbar">
          <mt-tab-item v-for="(value, key, index) in navbarData" :id='key' :key=key
                       @click.native="handleTabClick">
            {{value}}
          </mt-tab-item>
        </mt-navbar>
      </div>
      <i class="ma-add-category fa fa-plus"/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import { navbarData } from 'constant/constant';

  export default {
    name: 'Container',
    methods: {
      handleTabClick: function (e) {
        this.$router.push({ path: this.selected });
      }
    },
    data () {
      return {
        navbarData: navbarData,
        selected: 'recommend'
      };
    }
  };
</script>

<style>
  .ma-navbar .mint-tab-item,
  .ma-navbar .is-selected.mint-tab-item {
    white-space: nowrap;
    display: inline-block;
    padding: 10px;
    border: none;
  }

  .ma-navbar .is-selected.mint-tab-item {
    color: red
  }

  .ma-navbar .mint-tab-item-label {
    font-size: 18px;
  }
</style>

<style scoped>
  .ma-container {
    height:100%;
    border: 1px solid blue;
  }

  .ma-navbar-layout {
    width: 100%;
    height: 34px;
    display: flex;
  }

  .ma-navbar-layout > div:first-child {
    width: calc(100% - 36px);
  }

  .ma-navbar {
    width: 100%;
    height: 30px;
    margin-bottom: 15px;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    overflow-y: hidden;
    white-space: nowrap;
    margin-right: 30px;
  }

  .ma-navbar::-webkit-scrollbar { /*滚动条整体样式*/
    width: 0; /*高宽分别对应横竖滚动条的尺寸*/
    height: 0;
    display: none;
  }

  .ma-add-category {
    color: black;
    font-weight: lighter;
    width: 34px;
    height: 34px;
    line-height: 34px;
    font-size: 18px;
  }

</style>
