<!--suppress ALL -->
<template>
    <div class="ma-container">
        <div class="ma-navbar-layout">
            <div>
                <mt-navbar v-model="selected" class="ma-navbar">
                    <mt-tab-item id="1">推荐</mt-tab-item>
                    <mt-tab-item id="2">科技</mt-tab-item>
                    <mt-tab-item id="3">体育</mt-tab-item>
                    <mt-tab-item id="4">财经</mt-tab-item>
                    <mt-tab-item id="5">国内</mt-tab-item>
                    <mt-tab-item id="6">国外</mt-tab-item>
                    <mt-tab-item id="7">社会</mt-tab-item>
                    <mt-tab-item id="8">娱乐</mt-tab-item>
                    <mt-tab-item id="9">时尚</mt-tab-item>
                    <mt-tab-item id="10">军事</mt-tab-item>
                </mt-navbar>
            </div>
            <i class="ma-add-category fa fa-plus"/>
        </div>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell v-for="value in 10" :key=value :title="'内容1 ' + value"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="value in 4" :key=value :title="'内容2 ' + value"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="value in 6" :key=value :title="'内容3 ' + value"></mt-cell>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
  export default {
    name: 'MaContainer',
    data () {
      return {
        selected: '1'
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
        width: 100%;
    }

    .ma-navbar-layout {
        width: 100%;
        height: 34px;
        padding: 2px;
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
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 18px;
    }

</style>