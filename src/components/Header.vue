<template>
  <header class="ma-header">
    <div class="ma-header-search">
      <i class="ma-header-search-icon fa fa-search"></i>
      <input class="ma-header-search-placeholder" readonly type="search" placeholder="搜索"/>
    </div>
    <i class="ma-camera-icon fa fa-camera"></i>
  </header>
</template>

<script>
  export default {
    name: 'MaHeader'
  };
</script>

<style scoped>
  .ma-header {
    height: 44px;
    margin: -44px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ed4040;
    padding: 0 10px;
  }

  .ma-header-search {
    height: 28px;
    padding: 1px 6px;
    background-color: white;
    flex: 1 0 auto;
    margin-right: 15px;
    border-radius: 4px;
    box-sizing: border-box;
    ime-mode: disabled;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ma-header-search-icon {
    font-size: 10px;
    color: #d9d9d9;
    font-weight: lighter;
    flex: 0 0 auto;
    padding-right: 6px;
  }

  .ma-header-search-placeholder {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    box-sizing: border-box;
    height: 100%;
    outline: 0;
    -webkit-user-modify: read-write-plaintext-only;
    flex:1 0 auto;
  }

  input::-webkit-input-placeholder { /* WebKit*/
    color: #d9d9d9;
    font-size: 12px;
  }

  .ma-camera-icon {
    color: white;
    flex: 0 0 auto;
  }

</style>
