<!--suppress ALL -->
<template>
    <header class="ma-header">
        <div class="ma-header-container">
            <img src="../../assets/toutiao_logo.png"/>
            <div class="ma-search-btn">
                <i class="ma-search-btn-icon fa fa-search"/>
                <input class="ma-search-btn-placeholder" readonly type="search" placeholder="搜索"/>
            </div>
        </div>
    </header>
</template>
s
<script>
  export default {
    name: 'MaHeader'
  };
</script>

<style scoped>
    .ma-header {
        background-color: #ed4040;
        height: 44px;
        position: relative;
        white-space: nowrap;
        width: 100%;
    }

    .ma-header-container {
        padding: 0 10px;
        height: 44px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .ma-header img {
        color: white;
        width: 20%;
        height: 18px;
        margin-right: 15px;
    }

    .ma-search-btn {
        width: calc(100% - 20% - 15px);
        height: 28px;
        border-radius: 4px;
        box-sizing: border-box;
        background-color: white;
        padding: 1px 6px;
        display: flex;
        flex: 1;
        align-items: center;
        ime-mode: disabled;
    }

    .ma-search-btn-icon {
        font-size: 10px;
        color: #d9d9d9;
        font-weight: lighter;
        padding: 0 3px 0 2px;
    }

    .ma-search-btn-placeholder {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        outline: 0;
        -webkit-user-modify: read-write-plaintext-only;
    }

    input::-webkit-input-placeholder { /* WebKit*/
        color: #d9d9d9;
        font-size: 12px;
    }

</style>