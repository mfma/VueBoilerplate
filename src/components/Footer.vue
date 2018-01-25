<!--suppress ALL -->
<template>
  <mt-tabbar class="ma-footer" v-model="selected">
    <mt-tab-item :id='tabbarData.home'>
      <i class="ma-tabbar-icon fa fa-home" slot="icon"></i>
      {{tabbarData.home}}
    </mt-tab-item>
    <mt-tab-item :id='tabbarData.videos'>
      <i class="ma-tabbar-icon fa fa-play" slot="icon"></i>
      {{tabbarData.videos}}
    </mt-tab-item>
    <mt-tab-item class="ma-answer" :id='tabbarData.answer'>
      <span>{{tabbarData.answer}}</span>
    </mt-tab-item>
    <mt-tab-item :id='tabbarData.headline'>
      <i class="ma-tabbar-icon fa fa-comment" slot="icon"></i>
      {{tabbarData.headline}}
    </mt-tab-item>
    <mt-tab-item :id='tabbarData.mine'>
      <i class="ma-tabbar-icon fa fa-user" slot="icon"></i>
      {{tabbarData.mine}}
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  import { tabbarData } from 'constant/constant';

  export default {
    name: 'MaFooter',
    data () {
      return {
        selected: tabbarData.home,
        tabbarData
      };
    }
  };
</script>

<style>
  .ma-footer .mint-tab-item {
    padding: 2px 0;
  }

  .ma-footer .mint-tab-item-icon {
    margin-bottom: 0;
    font-weight: lighter;
  }

  .ma-footer .mint-tab-item:not(.is-selected) > .mint-tab-item-icon {
    color: white;
    text-shadow: #000 1px 0 0, #000 0 1px 0, #000 -1px 0 0, #000 0 -1px 0;
  }

  .ma-footer .mint-tab-item.is-selected {
    color: red;
    background-color: white;
  }

  .ma-answer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ma-answer .mint-tab-item-label{
    width: 38px;
    height: 38px;
    border: 2px solid red;
    background-color: red;
    border-radius: 19px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
</style>

<style scoped>
  .ma-footer {
    background: red;
    height: 44px;
    margin: 0 0 -44px 0;
    position: relative;
    background-color: white;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#d9d9d9), color-stop(50%, #d9d9d9), color-stop(50%, transparent));
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%) border
  }

</style>
