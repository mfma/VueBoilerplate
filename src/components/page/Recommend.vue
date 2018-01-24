<!--suppress CssUnusedSymbol, JSUnusedGlobalSymbols -->
<template>
  <div class="ma-recommend-page">
    <MaList :data="data"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import MaList from './List';

  export default {
    components: {
      MaList
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


</style>

<style scoped>

</style>
