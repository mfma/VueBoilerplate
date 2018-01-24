<!--suppress ALL -->
<template>
  <div class="ma-container">
    <div class="ma-navbar-layout">
      <mt-navbar v-model='selected' class="ma-navbar">
        <mt-tab-item v-for="(value, key, index) in navbarData" :id='key' :key=key
                     @click.native="handleTabClick">
          {{value}}
        </mt-tab-item>
      </mt-navbar>
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
    padding: 0 15px 0 0;
    border: none;
  }

  .ma-navbar .is-selected.mint-tab-item {
    color: red;
    margin-bottom: 0;
  }

  .ma-navbar .mint-tab-item-label {
    font-size: 18px;
  }
</style>

<style scoped>
  .ma-container {
    height: 100%;
    padding-top: 34px;
    box-sizing: border-box;
  }

  .ma-navbar-layout {
    height: 34px;
    margin-top: -34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }

  .ma-navbar {
    height: 30px;
    margin-right: 15px;
    align-items: center;
    justify-content: space-between;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    overflow-y: hidden;
  }

  .ma-navbar::-webkit-scrollbar { /*滚动条整体样式*/
    width: 0; /*高宽分别对应横竖滚动条的尺寸*/
    height: 0;
    display: none;
  }

  .ma-add-category {
    color: black;
    font-weight: lighter;
    font-size: 18px;
    flex: 0 0 auto;
  }

</style>
