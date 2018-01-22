<template>
  <div class="ma-footer">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        tab1
      </mt-tab-item>
      <mt-tab-item id="tab2">
        tab2
      </mt-tab-item>
      <mt-tab-item id="tab3">
        tab3
      </mt-tab-item>
      <mt-tab-item id="tab4">
        tab4
      </mt-tab-item>
      <mt-tab-item id="tab5">
        tab5
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'MaFooter',
    data () {
      return {
        selected: '1'
      };
    }
  };
</script>

<style scoped>
  .ma-footer {
    background: red;
    height: 44px;
    margin: 0 0 -44px 0;
  }
</style>
